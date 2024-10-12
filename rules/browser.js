/**
 * @file 浏览器特征库。
 */

// @ts-check

const osDetector = require('../os');

/** @typedef { import('./types').Rule } Rule */


/**
 * 搜索引擎爬虫匹配规则。
 * @type {Rule[]}
 */
exports.spiderBotRules = [
  { name: 'Baidu Spider', regExp: /\bBaiduspider\b/ },
  { name: 'Googlebot', regExp: /\b(?:Googlebot|AdsBot-Google-Mobile)\b/ },
  { name: 'Bingbot', regExp: /\bbingbot\b/ },
  { name: 'SogouSpider', regExp: /\bSogou\s.*Spider\b/ },
  { name: 'YisouSpider', regExp: /\bYisouSpider\b/ },
  { name: 'Sosospider', regExp: /\bSoso(?:image)?spider\b/ },
  { name: '360Spider', regExp: /\b(?:360Spider|HaosouSpider)/i }
];

/**
 * PC 端浏览器匹配规则。
 * @type {Rule[]}
 */
exports.pcRules = [
  { name: 'Edge', regExp: /\bEdge\/([\d.]+)/ },
  { name: 'Chrome', regExp: /\bChrome\/([\d.]+)/ },
  { name: 'Safari', regExp: /\b(?:Version\/([\d.]+)\s)?Safari\b/ },
  {
    name: 'Webkit (PC)',
    regExp: /\bAppleWebKit(?:[/\s]?([\d.]+))?/i
  },
  { name: 'IE', regExp: /\bMSIE\s(\d+)/i },
  { name: 'IE', regExp: /\bTrident\/.*;\srv:(\d+)/ },
  { name: 'Firefox', regExp: /\bFirefox\/([\d.]+)/ },
  { name: 'Opera (Presto)', regExp: /\bOpera\/([\d.]+)/ }
];

/**
 * 移动端浏览器匹配规则。
 * @type {Rule[]}
 */
exports.mobileRules = [
  { name: 'Chrome Mobile', regExp: /\b(?:Chrome|CrMo|CriOS)\/([\d.]+)/ },
  {
    name: 'Mobile Safari',
    regExp: /\b(?:Version\/([\d.]+).*\s?)?Safari\b/,
    preCheck(ua) { return osDetector.exec(ua).name === 'iOS'; }
  },
  {
    name: 'Webkit (Mobile)',
    regExp: /\bAppleWebKit(?:[/\s]?([\d.]+))?/i
  },
  {
    name: 'Webkit (Mobile)',
    regExp: /Web[Kk]it(?:\/?([\d.]+))?/
  },
  { name: 'Opera Mini', regExp: /\bOpera\sMini\b/ },
  { name: 'Opera Mobile (Presto)', regExp: /\bOpera\/([\d.]+)/ },
  { name: 'IE Mobile', regExp: /\b(?:IEMobile|MSIE)[/\s]([\d.]+)/ },
  { name: 'IE Mobile', regExp: /\bBrowser\/IE([\d.]+)/ },
  { name: 'Mobile Firefox', regExp: /\bFirefox\/([\d.]+)/ },
];
