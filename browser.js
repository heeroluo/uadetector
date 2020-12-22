/**
 * @file 浏览器检测模块。
 */

const core = require('./lib/core');
const os = require('./os');
const browserCoreData = require('./feature-data/browser-core');
const browserData = require('./feature-data/browser');

const pcRules = browserCoreData.spiderBotRules
  .concat(browserData.pcRules)
  .concat(browserCoreData.pcRules);

const mobileRules = browserCoreData.spiderBotRules
  .concat(browserData.mobileRules)
  .concat(browserCoreData.mobileRules);

exports.exec = (ua) => {
  const result = core.execRules(ua, os.exec(ua).isPC ? pcRules : mobileRules, 2);
  result.type = 'browser';
  return result;
};
