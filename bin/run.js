#!/usr/bin/env node

/**
 * 命令行界面入口。
 */

// @ts-check

/** @typedef { import('../lib/core').MatchingResult } MatchingResult */


// 命令行参数 -> Map
const commandArgs = (function() {
  /**
   * @type {string|null}
   */
  let lastParamName;

  let autoId = 0;

  /**
   * @type {{[key: string]: any}} 
   */
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

/**
 * 各命令参数对应执行的逻辑
 * @type {{[key: string]: (((ua: string) => MatchingResult) | (() => string))}}
 */
const commands = {
  /**
   * 返回当前版本号。
   * @returns {string} 版本号。
   */
  v() {
    return 'Version: ' + require('../package.json').version;
  },

  /**
   * 执行设备品牌匹配。
   * @param {string} ua 用户代理字符串。
   * @returns {MatchingResult} 匹配结果。
   */
  devicebrand(ua) {
    const device = require('../device-brand');
    return device.exec(ua);
  },

  /**
   * 执行操作系统匹配。
   * @param {string} ua 用户代理字符串。
   * @returns {MatchingResult} 匹配结果。
   */
  os(ua) {
    const os = require('../os');
    return os.exec(ua);
  },

  /**
   * 执行浏览器匹配。
   * @param {string} ua 用户代理字符串。
   * @returns {MatchingResult} 匹配结果。
   */
  browser(ua) {
    const browserCore = require('../browser');
    return browserCore.exec(ua);
  },

  /**
   * 执行客户端匹配。
   * @param {string} ua 用户代理字符串。
   * @returns {MatchingResult} 匹配结果。
   */
  client(ua) {
    const browser = require('../client');
    return browser.exec(ua);
  }
};

const inputString = commandArgs[0];
const outputFormat = commandArgs['output-format'];

Object.keys(commands).forEach((cmd) => {
  if (!(cmd in commandArgs)) { return; }

  const result = commands[cmd](inputString);
  if (typeof result === 'string') {
    console.info(result);
  } else {
    /**
     * 
     * @param {string} match 
     * @param {keyof MatchingResult} $1 
     * @returns {string}
     */
    const replaceFn = (match, $1) => {
      return String(result[$1]) || '';
    };

    // 默认输出为 JSON，可指定格式
    console.info(
      outputFormat
      ? outputFormat.replace(/%(\w+)/g, replaceFn)
      : JSON.stringify(result)
    );
  }
});
