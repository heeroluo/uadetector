/**
 * @file 浏览器核心特征库。
 */

const osDetector = require('../os');


// 搜索引擎爬虫特征库
exports.spiderBotRules = [
  { name: 'Baidu Spider', rule: /\bBaiduspider\b/ },
  { name: 'Googlebot', rule: /\b(?:Googlebot|AdsBot-Google-Mobile)\b/ },
  { name: 'Bingbot', rule: /\bbingbot\b/ },
  { name: 'SogouSpider', rule: /\bSogou\s.*Spider\b/ },
  { name: 'YisouSpider', rule: /\bYisouSpider\b/ },
  { name: 'Sosospider', rule: /\bSoso(?:image)?spider\b/ },
  { name: '360Spider', rule: /\b(?:360Spider|HaosouSpider)/i }
];

// PC 端浏览器核心特征库
exports.pcRules = [
  { name: 'Edge', rule: /\bEdge\/([\d.]+)/ },
  { name: 'Chrome', rule: /\bChrome\/([\d.]+)/ },
  { name: 'Safari', rule: /\b(?:Version\/([\d.]+)\s)?Safari\b/ },
  {
    name: 'Webkit (PC)',
    rule: /\bAppleWebKit(?:[/\s]?([\d.]+))?/i
  },
  { name: 'IE', rule: /\bMSIE\s(\d+)/i },
  { name: 'IE', rule: /\bTrident\/.*;\srv:(\d+)/ },
  { name: 'Firefox', rule: /\bFirefox\/([\d.]+)/ },
  { name: 'Opera (Presto)', rule: /\bOpera\/([\d.]+)/ }
];

// 移动端浏览器核心特征库
exports.mobileRules = [
  { name: 'Chrome Mobile', rule: /\b(?:Chrome|CrMo|CriOS)\/([\d.]+)/ },
  {
    name: 'Mobile Safari',
    rule: /\b(?:Version\/([\d.]+).*\s?)?Safari\b/,
    preCheck(ua) {
      return osDetector.exec(ua).name === 'iOS';
    }
  },
  {
    name: 'Webkit (Mobile)',
    rule: /\bAppleWebKit(?:[/\s]?([\d.]+))?/i
  },
  {
    name: 'Webkit (Mobile)',
    rule: /Web[Kk]it(?:\/?([\d.]+))?/
  },
  { name: 'Opera Mini', rule: /\bOpera\sMini\b/ },
  { name: 'Opera Mobile (Presto)', rule: /\bOpera\/([\d.]+)/ },
  { name: 'IE Mobile', rule: /\b(?:IEMobile|MSIE)[/\s]([\d.]+)/ },
  { name: 'IE Mobile', rule: /\bBrowser\/IE([\d.]+)/ },
  { name: 'Mobile Firefox', rule: /\bFirefox\/([\d.]+)/ },
];
