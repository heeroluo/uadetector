/**
 * @file 浏览器核心检测模块。
 */

const core = require('./lib/core');
const os = require('./os');
const browserRules = require('./feature-data/browser');

// 先排除搜索引擎爬虫，再匹配后续规则
const pcRules = browserRules.spiderBotRules.concat(browserRules.pcRules);
const mobileRules = browserRules.spiderBotRules.concat(browserRules.mobileRules);

exports.exec = (ua) => {
  const result = core.execRules(
    ua,
    os.exec(ua).isPC ? pcRules : mobileRules, 2
  );
  result.type = 'browser';
  return result;
};
