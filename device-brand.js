/**
 * @file 设备品牌检测模块。
 */

const core = require('./lib/core');
const os = require('./os');
const {
  appleRules,
  otherRules
} = require('./feature-data/device-brand');


exports.exec = (ua) => {
  const osResult = os.exec(ua);

  let result;
  if (osResult.isPC) {
    result = {
      name: 'PC',
      version: 'Others'
    };
  } else if (osResult.name === 'iOS') {
    result = core.execRules(ua, appleRules);
  } else {
    result = core.execRules(ua, otherRules);
  }
  result.type = 'devicebrand';

  return result;
};
