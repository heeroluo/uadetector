/**
 * @file 浏览器特征库。
 */

// @ts-check

/** @typedef { import('./types').Rule } Rule */


/**
 * PC 客户端匹配规则。
 * @type {Rule[]}
 */
exports.pcRules = [
  { name: '企业微信 (PC)', regExp: /\bwxwork\/([\d.]+)/ },
  { name: '微信 (PC)', regExp: /\bMicroMessenger\/([\d.]+)/ },
  { name: 'QQ 浏览器 (PC)', regExp: /\bQQBrowser(?:\/([\d.]+))?/i },
  { name: 'Edge (PC)', regExp: /\bEdge?\/([\d.]+)/ },
  { name: 'Electron', regExp: /\bElectron\/([\d.]+)/ },
  { name: '猎豹浏览器 (PC)', regExp: /\bLBBROWSER\b/i },
  { name: 'UC 浏览器 (PC)', regExp: /\bUC?Browser\/([\d.]+)/ },
  { name: '联想浏览器', regExp: /\bSLBrowser\/([\d.]+)/ },
  { name: '傲游 (PC)', regExp: /\bMaxthon(?:[/\s]([\d.]+))?/i },
  { name: '世界之窗', regExp: /\bTheWorld(?:\s([\d.]+))?/i },
  { name: '小白浏览器', regExp: /\bXiaoBai\/([\d.]+)/ },
  { name: '百度浏览器 (PC)', regExp: /\b(?:baidubrowser|BIDUBrowser)(?:[/\s]([\d.]+))?\b/i },
  { name: '2345 浏览器 (PC)', regExp: /\b2345Explorer(?:\s([\d.]+))?/ },
  { name: 'GreenBrowser', regExp: /\bGreenBrowser\b/i },
  { name: 'Opera (Blink)', regExp: /\bOPR\/([\d.]+)/ },
  { name: '搜狗浏览器 (PC)', regExp: /\bSE\b/ }
];

/**
 * 移动客户端匹配规则。
 * @type {Rule[]}
 */
exports.mobileRules = [
  { name: '企业微信 (Mobile)', regExp: /\bwxwork\/([\d.]+)/ },
  { name: '微信 (Mobile)', regExp: /\bMicroMessenger\/([\d.]+)/ },
  { name: 'QQ 浏览器 (Mobile)', regExp: /\bMQQBrowser\/([\d.]+)?/ },
  { name: 'QQ (Mobile)', regExp: /\bQQ\/([\d.]+)/ },
  { name: 'QQ (Mobile)', regExp: /\bIPadQQ\b/ },
  { name: 'UC 浏览器 (Mobile)', regExp: /\b(?:UCBrowser|UCWEB)(?:-CMCC)?\/?\s?([\d.]+)/ },
  { name: 'UC 浏览器 (Mobile)', regExp: /\bUC\b/ },
  { name: 'uni-app', keywords: ['uni-app'] },
  { name: '钉钉 (Mobile)', regExp: /\bDingTalk\/([\d.]+)/ },
  { name: '华为浏览器', regExp: /\bHuaweiBrowser\/([\d.]+)/ },
  { name: 'MIUI 浏览器', regExp: /\bMiuiBrowser\/([\d.]+)/ },
  { name: 'Vivo 浏览器', regExp: /\bVivoBrowser\/([\d.]+)/ },
  { name: 'Oppo 浏览器', regExp: /\bOppoBrowser\/([\d.]+)/ },
  { name: '三星浏览器', regExp: /\bSamsungBrowser\/([\d.]+)/ },
  { name: '夸克浏览器', regExp: /\bQuark\/([\d.]+)/ },
  { name: 'HeyTap 浏览器', regExp: /\bHeyTapBrowser\/([\d.]+)/ },
  { name: '百度 (Mobile)', regExp: /\bbaiduboxapp\b\/([\d.]+)?/i },
  { name: '百度 (Mobile)', regExp: /\bbaiduboxpad\b/i },
  { name: '百度浏览器 (Mobile)', regExp: /\b(?:baidubrowser|bdbrowser_i18n)\/([\d.]+)?/ },
  { name: '百度浏览器 (Mobile)', regExp: /\bbaidubrowserpad\b/ },
  { name: '新浪微博 (Mobile)', regExp: /(?:\b|_)Weibo(?:\b|_)/i },
  { name: '搜狗浏览器 (Mobile)', regExp: /\bSogouMobileBrowser\/([\d.]+)/ },
  { name: '猎豹浏览器 (Mobile)', regExp: /\bLieBaoFast\/([\d.]+)/ },
  { name: 'Qzone (Mobile)', regExp: /\bQzone\b/ },
  { name: '傲游 (Mobile)', regExp: /\b(?:Maxthon|MxBrowser)\/([\d.]+)/ },
  { name: '360 浏览器 (Mobile)', regExp: /\b360browser\b/ },
  { name: '360 浏览器 (Mobile)', regExp: /\b360\sAphone\sBrowser\s(?:\(([\d.]+)(?:beta)?\))?/ },
  { name: '2345 手机浏览器（Mobile）', regExp: /\bMb2345Browser\/([\d.]+)/ },
  { name: 'Opera Mobile (Blink)', regExp: /\bOPR\/([\d.]+)/ },
  { name: '欧朋 (Mobile)', regExp: /\bOupeng\/([\d.]+)?/ },
  { name: 'Edge (Mobile)', regExp: /\bEdge?\/([\d.]+)/ }
];
