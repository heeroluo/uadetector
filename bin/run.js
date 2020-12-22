#!/usr/bin/env node

/**
 * 命令行界面入口。
 */

// 命令行参数 -> Map
const commandArgs = (function() {
  let lastParamName;
  let autoId = 0;

  const args = {};
  process.argv.slice(2).forEach(function(arg) {
    if (/^-(.+)$/.test(arg)) {
      lastParamName = RegExp.$1;
      args[lastParamName] = true;
    } else {
      if (lastParamName) {
        args[lastParamName] = arg;
        lastParamName = null;
      } else {
        args[autoId++] = arg;
      }
    }
  });

  return args;
})();

// 各命令参数对应执行的逻辑
const commands = {
  v() {
    const path = require('path');
    const fs = require('fs');

    let pkgData = fs.readFileSync(path.resolve(__dirname, '../package.json'));
    if (pkgData) {
      pkgData = JSON.parse(pkgData);
      return 'Version: ' + pkgData.version;
    }
  },

  devicebrand(ua) {
    const device = require('../device-brand');
    return device.exec(ua);
  },

  os(ua) {
    const os = require('../os');
    return os.exec(ua);
  },

  browsercore(ua) {
    const browserCore = require('../browser-core');
    return browserCore.exec(ua);
  },

  browser(ua) {
    const browser = require('../browser');
    return browser.exec(ua);
  }
};

const inputString = commandArgs[0];
const outputFormat = commandArgs['output-format'];

Object.keys(commands).forEach((cmd) => {
  if (!commandArgs[cmd]) { return; }

  const result = commands[cmd](inputString, outputFormat);
  if (typeof result === 'string') {
    console.info(result);
  } else {
    // 默认输出为 JSON，可指定格式
    console.info(
      outputFormat ? outputFormat.replace(/%(\w+)/g, (match, $1) => {
        return result[$1];
      }) : JSON.stringify(result)
    );
  }
});
