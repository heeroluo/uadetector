/**
 * @file 浏览器核心检测模块。
 */

const core = require('./lib/core');
const os = require('./os');
const browserCoreData = require('./feature-data/browser-core');

// 先排除搜索引擎爬虫，再匹配后续规则
const pcRules = browserCoreData.spiderBotRules.concat(browserCoreData.pcRules);
const mobileRules = browserCoreData.spiderBotRules.concat(browserCoreData.mobileRules);

exports.exec = (ua) => {
  const result = core.execRules(
    ua,
    os.exec(ua).isPC ? pcRules : mobileRules, 2
  );
  result.type = 'browsercore';
  return result;
};
