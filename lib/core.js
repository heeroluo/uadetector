/**
 * @file 核心检测流程。
 */

// @ts-check

/** @typedef { import('../feature-data/types').Rule } Rule */


// 匹配版本号
const reNumber = /^\d+(?:\.\d+)*$/;

/**
 * 固定版本号位数。
 * @param {string} ver 待处理版本号。
 * @param {number} verLength 版本号位数限制。
 * @return {string} 处理后的版本号。
 */
function fixVerLength(ver, verLength) {
  if (!verLength || !reNumber.test(ver)) { return ver; }

  const verArr = String(ver).split('.');
  if (verArr.length > verLength) {
    verArr.splice(verLength);
  } else {
    // 位数不足，补 0
    while (verArr.length < verLength) {
      verArr.push('0');
    }
  }

  return verArr.join('.');
}

/**
 * 加工版本号。
 * @param {string} ver 原始版本号。
 * @param {number} [verLength] 版本号长度限制。
 * @param {string|((ver: string) => (string|undefined))} [handler] 版本号处理函数或固定版本号。
 * @return {string} 加工后的版本号。
 */
function handleVersion(ver, verLength, handler) {
  ver = (ver || '')
    // 有些版本号分隔符是下划线，统一为点号
    .replace(/_/g, '.')
    // 移除结尾多余的点号
    .replace(/\.+$/, '');

  // 检查是否非法版本号
  const verNum = parseFloat(ver);
  if (isNaN(verNum) || verNum <= 0) { return ''; }

  /**
   * @type {string|undefined}
   */
  let result;
  switch (typeof handler) {
    case 'function':
      // 返回 false 表示版本号非法
      result = handler(ver);
      break;

    case 'string':
      result = handler;
      break;
  }

  if (result && verLength) {
    result = fixVerLength(ver, verLength);
  }

  return result || '';
}


// 关键词前的分隔符
const reSepBefore = /[/\s;_-]/;
// 关键词后的分隔符
const reSepAfter = /[)/\s;_-]/;

/**
 * 使用指定关键词列表匹配 User-agent。
 * @param {string} ua User-agent 字符串。
 * @param {string[]} keywords 关键词列表。
 * @return {boolean} 是否有其中一个关键词与 user-agent 匹配。
 */
function canMatchKeywords(ua, keywords) {
  ua = ua.toLowerCase();
  return keywords.some((keyword) => {
    const pos = ua.indexOf(keyword.toLowerCase());
    if (pos !== -1 &&
      (reSepBefore.test(ua[pos - 1]) || pos === 0) &&
      (reSepAfter.test(ua[pos + keyword.length]) || pos + keyword.length >= ua.length)
    ) {
      return true;
    }
  });
}


// 用于匹配出 user-agent 中的型号
const reModelRule = /;\s*([^;)]*?)(?:\s+Build\/[^;)]+)?(?:;\s*wv)?\)/;

/**
 * 使用指定机型规则匹配 User-agent。
 * @param {string} ua User-agent 字符串。
 * @param {RegExp|string} modelRule 机型匹配规则。
 * @return {boolean} 机型规则是否与 user-agent 匹配。
 */
function canMatchModelRule(ua, modelRule) {
  if (reModelRule.test(ua)) {
    const model = RegExp.$1.trim();
    return typeof modelRule === 'string' ?
      modelRule === model :
      modelRule.test(model);
  } else {
    return false;
  }
}


/**
 * @typedef MatchingResult
 * @property {string} name 名称。
 * @property {string} version 版本号。
 * @property {'os'|'browser'|'client'|'devicebrand'} type 匹配类型。
 * @property {boolean} [isPC] 是否 PC 端。
 */

/**
 * 执行匹配。
 * @param {String} ua User-agent 字符串。
 * @param {'os'|'browser'|'client'|'devicebrand'} type 匹配类型。
 * @param {Rule[]} rules 匹配规则。
 * @param {Number} [verLength] 版本号位数。
 * @return {MatchingResult} 匹配结果。
 */
exports.execRules = function(ua, type, rules, verLength) {
  /**
   * @type {MatchingResult}
   */
  const result = {
    name: 'Others',
    version: 'Others',
    type
  };

  rules.some((r) => {
    if (r.preCheck && r.preCheck(ua) === false) { return; }

    let canMatch;

    if (r.rule) {
      canMatch = r.rule.test(ua);
      if (canMatch) {
        result.version = handleVersion(RegExp.$1, r.verLength || verLength, r.version);
        if (r.extended) {
          Object.assign(result, r.extended);
        }
      }
    } else if (r.keywords) {
      canMatch = canMatchKeywords(ua, r.keywords);
    } else if (r.modelRule) {
      canMatch = canMatchModelRule(ua, r.modelRule);
    }

    if (canMatch) { result.name = r.name; }

    return canMatch;
  });

  return result;
};
