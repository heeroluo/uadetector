/**
 * @file 浏览器检测模块。
 */

const core = require('./lib/core');
const os = require('./os');
const browserRules = require('./feature-data/browser');
const clientRules = require('./feature-data/client');

const pcClientRules = browserRules.spiderBotRules
  .concat(clientRules.pcRules)
  .concat(browserRules.pcRules);

const mobClientRules = browserRules.spiderBotRules
  .concat(clientRules.mobileRules)
  .concat(browserRules.mobileRules);

exports.exec = (ua) => {
  const result = core.execRules(
    ua,
    os.exec(ua).isPC ? pcClientRules : mobClientRules, 2
  );
  result.type = 'client';
  return result;
};
