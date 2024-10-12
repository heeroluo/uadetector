/**
 * @file 浏览器核心检测模块。
 */

// @ts-check

const core = require('./lib/core');
const os = require('./os');
const browserRules = require('./rules/browser');

/** @typedef { import('./lib/core').MatchingResult } MatchingResult */


// 先排除搜索引擎爬虫，再匹配后续规则
const pcRules = browserRules.spiderBotRules.concat(browserRules.pcRules);
const mobileRules = browserRules.spiderBotRules.concat(browserRules.mobileRules);

/**
 * 执行浏览器类型匹配。
 * @param {string} ua 用户代理字符串。
 * @returns {MatchingResult} 匹配结果。
 */
exports.exec = (ua) => {
  return core.execRules(
    ua,
    'browser',
    os.exec(ua).isPC ? pcRules : mobileRules,
    2
  );
};
