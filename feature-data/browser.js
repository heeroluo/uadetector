/**
 * @file 浏览器特征库。
 */

// PC 端浏览器特征库
exports.pcRules = [
  { name: '微信 (PC)', rule: /\bMicroMessenger\/([\d.]+)/ },
  { name: 'QQ 浏览器 (PC)', rule: /\bQQBrowser(?:\/([\d.]+))?/i },
  { name: 'Edge (PC)', rule: /\bEdge?\/([\d.]+)/ },
  { name: 'Electron', rule: /\bElectron\/([\d.]+)/ },
  { name: '猎豹浏览器', rule: /\bLBBROWSER\b/i },
  { name: 'UC 浏览器 (PC)', rule: /\bUC?Browser\/([\d.]+)/ },
  { name: '联想浏览器', rule: /\bSLBrowser\/([\d.]+)/ },
  { name: '傲游 (PC)', rule: /\bMaxthon(?:[/\s]([\d.]+))?/i },
  { name: '世界之窗', rule: /\bTheWorld(?:\s([\d.]+))?/i },
  { name: '小白浏览器', rule: /\bXiaoBai\/([\d.]+)/ },
  { name: '百度浏览器', rule: /\b(?:baidubrowser|BIDUBrowser)(?:[/\s]([\d.]+))?\b/i },
  { name: '2345 浏览器', rule: /\b2345Explorer(?:\s([\d.]+))?/ },
  { name: 'GreenBrowser', rule: /\bGreenBrowser\b/i },
  { name: 'Opera (Blink)', rule: /\bOPR\/([\d.]+)/ },
  { name: '搜狗浏览器 (PC)', rule: /\bSE\b/ }
];

// 移动端浏览器特征库
exports.mobileRules = [
  { name: '微信 (APP)', rule: /\bMicroMessenger\/([\d.]+)/ },
  { name: 'QQ 浏览器 (Mobile)', rule: /\bMQQBrowser\/([\d.]+)?/ },
  { name: 'QQ (APP)', rule: /\bQQ\/([\d.]+)/ },
  { name: 'QQ (APP)', rule: /\bIPadQQ\b/ },
  { name: 'UC 浏览器 (Mobile)', rule: /\b(?:UCBrowser|UCWEB)(?:-CMCC)?\/?\s?([\d.]+)/ },
  { name: 'UC 浏览器 (Mobile)', rule: /\bUC\b/ },
  { name: 'uni-app', keywords: ['uni-app'] },
  { name: '钉钉 (APP)', rule: /\bDingTalk\/([\d.]+)/ },
  { name: '华为浏览器', rule: /\bHuaweiBrowser\/([\d.]+)/ },
  { name: 'MIUI 浏览器', rule: /\bMiuiBrowser\/([\d.]+)/ },
  { name: 'Vivo 浏览器', rule: /\bVivoBrowser\/([\d.]+)/ },
  { name: 'Oppo 浏览器', rule: /\bOppoBrowser\/([\d.]+)/ },
  { name: '三星浏览器', rule: /\bSamsungBrowser\/([\d.]+)/ },
  { name: '夸克浏览器', rule: /\bQuark\/([\d.]+)/ },
  { name: 'HeyTap浏览器', rule: /\bHeyTapBrowser\/([\d.]+)/ },
  { name: '百度 (APP)', rule: /\bbaiduboxapp\b\/([\d.]+)?/i },
  { name: '百度 (APP)', rule: /\bbaiduboxpad\b/i },
  { name: '百度浏览器 (Mobile)', rule: /\b(?:baidubrowser|bdbrowser_i18n)\/([\d.]+)?/ },
  { name: '百度浏览器 (Mobile)', rule: /\bbaidubrowserpad\b/ },
  { name: '新浪微博 (APP)', rule: /(?:\b|_)Weibo(?:\b|_)/i },
  { name: '搜狗浏览器 (Mobile)', rule: /\bSogouMobileBrowser\/([\d.]+)/ },
  { name: '猎豹浏览器 (Mobile)', rule: /\bLieBaoFast\/([\d.]+)/ },
  { name: 'Qzone (APP)', rule: /\bQzone\b/ },
  { name: '傲游 (Mobile)', rule: /\b(?:Maxthon|MxBrowser)\/([\d.]+)/ },
  { name: '360 浏览器 (Mobile)', rule: /\b360browser\b/ },
  { name: '360 浏览器 (Mobile)', rule: /\b360\sAphone\sBrowser\s(?:\(([\d.]+)(?:beta)?\))?/ },
  { name: '2345 手机浏览器（Mobile）', rule: /\bMb2345Browser\/([\d.]+)/ },
  { name: 'Opera Mobile (Blink)', rule: /\bOPR\/([\d.]+)/ },
  { name: '欧朋 (Mobile)', rule: /\bOupeng\/([\d.]+)?/ },
  { name: 'Edge (Mobile)', rule: /\bEdge?\/([\d.]+)/ }
];
