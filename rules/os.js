/**
 * @file 操作系统特征库。
 */

// @ts-check

/** @typedef { import('./types').Rule } Rule */


/**
 * 判断是否为桌面设备（针对 ChromeOS、Linux、FreeBSD）。
 * @param {string} ua User-Agent 字符串。
 * @returns 是否为桌面端。
 */
function isPC(ua) {
  return /\(X11[;)]/i.test(ua) || /(?:x86|i[356]86|amd64)(?:\b|_)/i.test(ua);
}

/**
 * 操作系统匹配规则。
 * @type {Rule[]}
 */
const rules = [
  // Windows 移动版
  {
    name: 'Windows Phone',
    regExp: /\bWindows\sPhone(?:\sOS)?(?:\s([\d.]+))?\b/,
    verLength: 2
  },
  { name: 'Windows Mobile', regExp: /\bWindows\s?Mobile\b/ },
  { name: 'Windows CE', regExp: /\bWindows\sCE\b/ },

  // NT 核心的 Windows 系统
  {
    name: 'Windows',
    regExp: /\bWindows\s?NT\s?(([\d.]+))\b/,
    version(ver) {
      return {
        '5.0': '2000',
        '5.1': 'XP',
        '5.2': '2003',
        '6.0': 'Vista',
        '6.1': '7',
        '6.2': '8',
        '6.3': '8.1',
        '10.0': '10'
      }[ver];
    },
    extended: { isPC: true }
  },

  // Windows 95/98/ME
  {
    name: 'Windows',
    regExp: /\bWindows(?:\s([\d.]+))?\b/,
    extended: { isPC: true }
  },

  {
    name: 'iOS',
    regExp: /\bOS(?:\s([\d_.]+))?\slike\sMac\sOS\sX\b/,
    verLength: 3
  },

  {
    name: 'macOS(Mac OS X)',
    regExp: /\bMac\sOS\sX(?:\s([\d_.]+))?/,
    verLength: 3,
    extended: { isPC: true }
  },

  {
    name: 'OpenHarmony',
    regExp: /\bOpenHarmony\s([\d.]+)\b/
  },

  { name: 'YunOS', regExp: /\bYunOs\b/ },
  {
    name: 'Android',
    regExp: /\bAndroid;?(?:[-/\s]([\d.]+))?(?:\b|_)/,
    verLength: 3
  },
  {
    name: 'Android',
    regExp: /\bAdr\s([\d.]+)(?:\b|_)/,
    verLength: 3
  },

  { name: 'Symbian', regExp: /\b(?:Symbian|SymbOS)/ },
  { name: 'BlackBerry', regExp: /\b(?:BlackBerry|BB10)\b/ },

  {
    name: 'ChromeOS',
    regExp: /\bCrOS\b/,
    extended: { isPC }
  },

  {
    name: 'FreeBSD',
    keywords: ['FreeBSD'],
    extended: { isPC }
  },

  {
    name: 'Linux',
    keywords: ['Linux'],
    extended: { isPC }
  }
];

module.exports = rules;
