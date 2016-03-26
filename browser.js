/*!
 * UA Detector
 * Browser detect - v0.1.1 (2016-03-26T17:21:34+0800)
 * Released under LGPL license
 */

var util = require('./util'),
	os = require('./os'),
	browserCore = require('./browsercore');


var pcRules = [
	{ name: 'QQ浏览器', rule: /\bQQBrowser(?:\/(\d+\.\d+))?/i },
	{ name: '傲游浏览器', rule: /\bMaxthon(?:[\/\s](\d+\.\d+))?/i },
	{ name: '世界之窗', rule: /\bTheWorld(?:\s([\d.]+))?/i },
	{ name: '搜狗浏览器', rule: /\bSE\b/ },
	{ name: '2345王牌浏览器', rule: /\b2345Explorer(?:\s(\d+\.\d+))?/ },
	{ name: '猎豹浏览器', rule: /\bLBBROWSER\b/i },
	{ name: '百度浏览器', rule: /\b(?:baidubrowser|BIDUBrowser)(?:[\/\s]([\d.]+))?\b/i },
	{ name: 'UC浏览器', rule: /\bUBrowser\/([\d.]+)/ },
	{ name: 'GreenBrowser', rule: /\bGreenBrowser\b/i },
].concat(browserCore.pcRules);

var mobileRules = [
	{ name: '微信 (APP)', rule: /\bMicroMessenger\/([\d.]+)/ },
	{ name: 'UC浏览器 (Mobile)', rule: /\b(?:UCBrowser|UCWEB)(?:-CMCC)?\/?\s?([\d.]+)/ },
	{ name: 'UC浏览器 (Mobile)', rule: /\bUC\b/ },
	{ name: 'QQ浏览器 (Mobile)', rule: /\bMQQBrowser\/(\d+\.\d+)?/ },
	{ name: 'QQ (APP)', rule: /\bQQ\/([\d.]+)/ },
	{ name: 'QQ (APP)', rule: /\bIPadQQ\b/ },
	{ name: '百度 (APP)', rule: /\bbaiduboxapp\b\/(\d+\.\d+)?/i },
	{ name: '百度 (APP)', rule: /\bbaiduboxpad\b/i },
	{ name: '新浪微博 (APP)', rule: /(?:\b|_)Weibo(?:\b|_)/i },
	{ name: 'MIUI浏览器', rule: /\bMiuiBrowser\/([\d.]+)/ },
	{ name: '百度浏览器 (Mobile)', rule: /\b(?:baidubrowser|bdbrowser_i18n)\/(\d+\.\d+)?/ },
	{ name: '百度浏览器 (Mobile)', rule: /\bbaidubrowserpad\b/ },
	{ name: '人人 (APP)', rule: /\bRenRen(?:iPhone|Android)\d*\b/ },
	{ name: 'Qzone (APP)', rule: /\bQzone\b/ },
	{ name: '腾讯微博 (APP)', rule: /(?:\b|_)TXMicroBlog\d*/ },
	{ name: '腾讯微博 (APP)', rule: /TencentMicroBlog/ },
	{ name: '傲游 (Mobile)', rule: /\b(?:Maxthon|MxBrowser)\/([\d.]+)/ },
	{ name: '360浏览器 (Mobile)', rule: /\b360browser\b/ },
	{ name: '360浏览器 (Mobile)', rule: /\b360\sAphone\sBrowser\s(?:\(([\d.]+)(?:beta)?\))?/ },
	{ name: 'Hao123 (APP)', rule: /\bhao123\b/ },
	{ name: '虎扑看球 (APP)', rule: /\bkanqiu\b/ },
	{ name: '搜狗浏览器 (Mobile)', rule: /\bSogouMobileBrowser\/([\d.]+)/ },
	{ name: '猎豹浏览器 (Mobile)', rule: /\bLieBaoFast\/([\d.]+)/ },
	{ name: '美拍 (APP)', rule: /\bmeipai\b\/([\d.]+)/i  }
].concat(browserCore.mobileRules);

exports.exec = function(ua) {
	var result = util.execRules(ua, os.isPC(ua) ? pcRules : mobileRules, 2);
	result.type = 'browser';
	return result;
};