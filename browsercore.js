/*!
 * UA Detector
 * Browser core detector
 */

const util = require('./util');
const os = require('./os');


const pcRules = exports.pcRules = [
	{ name: 'Opera (Blink)', rule: /\bOPR\/([\d.]+)/ },
	{ name: 'Edge', rule: /\bEdge\/([\d.]+)/ },
	{ name: 'Chrome', rule: /\bChrome\/(\d+)/ },
	{ name: 'Safari', rule: /\b(?:Version\/([\d.]+)\s)?Safari\b/ },
	{ name: 'IE', rule: /\bMSIE\s(\d+)/i },
	{ name: 'IE', rule: /\bTrident\/.*;\srv:(\d+)/ },
	{ name: 'Firefox', rule: /\bFirefox\/(\d+)/ },
	{ name: 'Opera (Presto)', rule: /\bOpera\/([\d.]+)/ }
];


const mobileRules = exports.mobileRules = [
	{ name: 'Opera Mobile (Blink)', rule: /\bOPR\/([\d.]+)/ },
	{ name: '欧朋 (Mobile)', rule: /\bOupeng\/([\d.]+)?/ },
	{ name: 'Chrome Mobile', rule: /\b(?:Chrome|CrMo|CriOS)\/([\d.]+)/ },
	{
		name: 'Mobile Safari',
		rule: /\b(?:Version\/([\d.]+).*\s?)?Safari\b/,
		preCheck(ua) {
			return os.exec(ua).name === 'iOS';
		}
	},
	{
		name: 'Webkit (Mobile)',
		rule: /\bAppleWebKit(?:[\/\s]?(\d{3}\.\d+))?/i,
		verLength: 1
	},
	{
		name: 'Webkit (Mobile)',
		rule: /Web[Kk]it(?:\/?(\d{3}\.\d+))?/,
		verLength: 1
	},
	{ name: 'Opera Mini', rule: /\bOpera\sMini\b/ },
	{ name: 'Opera Mobile (Presto)', rule: /\bOpera\/([\d.]+)/ },
	{ name: 'IE Mobile', rule: /\b(?:IEMobile|MSIE)[\s\/]([\d.]+)/ },
	{ name: 'IE Mobile', rule: /\bBrowser\/IE([\d.]+)/ },
	{ name: 'Mobile Firefox', rule: /\bFirefox\/([\d.]+)/ },
	{ name: 'Baidu Spider', rule: /\bBaiduspider\b/ }
];


exports.exec = (ua) => {
	const result = util.execRules(ua, os.exec(ua).isPC ? pcRules : mobileRules, 2);
	result.type = 'browsercore';
	return result;
};