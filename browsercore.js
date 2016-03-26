/*!
 * UA Detector
 * Browser core detect - v0.1.1 (2016-03-26T17:21:38+0800)
 * Released under LGPL license
 */

var util = require('./util'), os = require('./os');


var pcRules = exports.pcRules = [
	{ name: 'Opera (Blink)', rule: /\bOPR\/([\d.]+)/ },
	{ name: 'Edge', rule: /\bEdge\/([\d.]+)/ },
	{ name: 'Chrome', rule: /\bChrome\/(\d+)/ },
	{ name: 'Safari', rule: /\b(?:Version\/([\d.]+)\s)?Safari\b/ },
	{ name: 'IE', rule: /\bMSIE\s(\d+)/i },
	{ name: 'IE', rule: /\bTrident\/.*;\srv:(\d+)/ },
	{ name: 'Firefox', rule: /\bFirefox\/(\d+)/ },
	{ name: 'Opera (Presto)', rule: /\bOpera\/([\d.]+)/ }
];

var mobileRules = exports.mobileRules = [
	{ name: 'Opera Mobile (Blink)', rule: /\bOPR\/([\d.]+)/ },
	{ name: '欧朋 (Mobile)', rule: /\bOupeng\/([\d.]+)?/ },
	{ name: 'Chrome Mobile', rule: /\b(?:Chrome|CrMo|CriOS)\/([\d.]+)/ },
	{ name: 'Mobile Safari', rule: /\b(?:Version\/([\d.]+).*\s?)?Safari\b/ },
	{
		name: 'Webkit (Mobile)',
		rule: /\bAppleWebKit(?:[\/\s]?(\d{3}\.\d+))?/i,
		versionSegments: 1
	},
	{
		name: 'Webkit (Mobile)',
		rule: /Web[Kk]it(?:\/?(\d{3}\.\d+))?/,
		versionSegments: 1
	},
	{ name: 'Opera Mini', rule: /\bOpera\sMini\b/ },
	{ name: 'Opera Mobile (Presto)', rule: /\bOpera\/([\d.]+)/ },
	{ name: 'IE Mobile', rule: /\b(?:IEMobile|MSIE)[\s\/]([\d.]+)/ },
	{ name: 'IE Mobile', rule: /\bBrowser\/IE([\d.]+)/ },
	{ name: 'Mobile Firefox', rule: /\bFirefox\/([\d.]+)/ }
];

exports.exec = function(ua) {
	var result = util.execRules(ua, os.isPC(ua) ? pcRules : mobileRules, 2);
	result.type = 'browsercore';
	return result;
};