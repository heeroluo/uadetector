/**
 * @file 设备品牌检测模块。
 */

// @ts-check

const core = require('./lib/core');
const os = require('./os');
const {
  appleRules,
  otherRules
} = require('./rules/device-brand');

/** @typedef { import('./lib/core').MatchingResult } MatchingResult */


/**
 * 设备品牌匹配。
 * @param {string} ua 用户代理字符串。
 * @returns {MatchingResult} 匹配结果。
 */
exports.exec = (ua) => {
  const osResult = os.exec(ua);

  /**
   * @type {MatchingResult}
   */
  let result;
  if (osResult.isPC) {
    result = {
      name: 'PC',
      version: 'Others',
      type: 'devicebrand'
    };
  } else if (osResult.name === 'iOS') {
    result = core.execRules(ua, 'devicebrand', appleRules);
  } else {
    result = core.execRules(ua, 'devicebrand', otherRules);
  }

  return result;
};
