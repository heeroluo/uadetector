/**
 * @file 操作系统检测模块。
 */

// @ts-check

const core = require('./lib/core');
const rules = require('./feature-data/os');

/** @typedef { import('./lib/core').MatchingResult } MatchingResult */


/**
 * 执行操作系统类型匹配。
 * @param {string} ua 用户代理字符串。
 * @returns {MatchingResult} 匹配结果。
 */
exports.exec = function(ua) {
  return core.execRules(ua, 'os', rules);
};
