/**
 * @file 浏览器检测模块。
 */

// @ts-check

const core = require('./lib/core');
const os = require('./os');
const browserRules = require('./feature-data/browser');
const clientRules = require('./feature-data/client');

/** @typedef { import('./lib/core').MatchingResult } MatchingResult */


const pcRules = browserRules.spiderBotRules
  .concat(clientRules.pcRules)
  .concat(browserRules.pcRules);

const mobileRules = browserRules.spiderBotRules
  .concat(clientRules.mobileRules)
  .concat(browserRules.mobileRules);

/**
 * 执行客户端类型匹配。
 * @param {string} ua 用户代理字符串。
 * @returns {MatchingResult} 匹配结果。
 */
exports.exec = (ua) => {
  return core.execRules(
    ua,
    'client',
    os.exec(ua).isPC ? pcRules : mobileRules,
    2
  );
};
