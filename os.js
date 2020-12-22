/**
 * @file 操作系统检测模块。
 */

const core = require('./lib/core');
const rules = require('./feature-data/os');


exports.exec = function(ua) {
  const result = core.execRules(ua, rules);
  result.type = 'os';
  return result;
};
