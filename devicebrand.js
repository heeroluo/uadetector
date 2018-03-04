/*!
 * UA Detector
 * Device brand detector
 */

const util = require('./util');
const os = require('./os');


const appleRules =[
	{ name: 'iPad', rule: /iPad/ },
	{ name: 'iPod', rule: /iPod/ },
	{ name: 'iPhone', rule: /iPhone/ }
];


const otherRules = [
	// 品牌关键词
	{ name: 'vivo', keywords: ['vivo'] },
	{ name: 'OPPO', keywords: ['oppo'] },
	{ name: '华为', rule: /\b(?:huawei|honor|ascend)/i },
	{ name: '小米', keywords: ['redmi', 'hongmi', 'mi', 'hm', 'mix'] },
	{ name: '三星', keywords: ['samsung', 'galaxy'] },
	{ name: '魅族', keywords: ['meizu', 'mx'] },
	{ name: '一加', keywords: ['oneplus'] },
	{ name: '联想', keywords: ['lenovo', 'zuk', 'ideapad', 'ideatab'] },
	{ name: '中兴', keywords: ['zte'] },
	{ name: '美图', keywords: ['meitu'] },
	{ name: 'HTC', keywords: ['htc'] },
	{ name: '酷派', keywords: ['coolpad'] },
	{ name: '华硕', keywords: ['asus', 'padfone'] },
	{ name: '索尼', keywords: ['sony', 'sonyericsson'] },
	{ name: '诺基亚/Lumia', keywords: ['nokia', 'lumia'] },
	{ name: '酷比', keywords: ['koobee'] },
	{ name: '金立', keywords: ['gionee'] },
	{ name: '摩托罗拉', keywords: ['motorola'] },
	{ name: '朵唯', keywords: ['doov'] },
	{ name: '波导', keywords: ['bird', 'doeasy'] },
	{ name: '海信', keywords: ['hisense', 'hlte'] },
	{ name: '锤子', keywords: ['smartisan'] },
	{ name: '优购', keywords: ['uoogou'] },
	{ name: '乐丰', keywords: ['lephone'] },
	{ name: '海尔', keywords: ['haier'] },
	{ name: '糖果', keywords: ['sugar'] },
	{ name: 'TCL', keywords: ['tcl'] },
	{ name: '亿通', keywords: ['eton'] },
	{ name: '欧沃', keywords: ['owwo'] },
	{ name: '宇飞来', keywords: ['yu fly'] },
	{ name: '康佳', keywords: ['konka'] },
	{ name: 'Google', keywords: ['nexus'] },
	{ name: 'LG', keywords: ['lg', 'optimus'] },
	{ name: '乐视', keywords: ['letv', 'le'] },

	// 品牌型号规则
	{ name: '三星', rule: /;\sbSM-[A-Z0-9]+\b/ },
	{ name: '三星', rule: /;\sS(?:M|[CGP]H)-[A-Za-z0-9]+\b/ },
	{ name: '三星', rule: /;\sSC-\d{2}[A-Z]\b/ },
	{ name: '三星', rule: /;\sSHV-/ },
	{ name: '三星', rule: /;\sSHW-/ },
	{ name: '三星', rule: /;\sGT[-_][A-Z][A-Z0-9]{3,}\b/i },
	{ name: '华为', rule: /;\s(?:CHE|CHM|Che1)-/ },
	{ name: '华为', rule: /;\sH\d{2}-[A-Z]\d{2}\b/ },
	{ name: '乐视', rule: /;\sLEX\d+\b/ },
	{ name: '索尼', rule: /;\sL[1-9]\d[a-zA-Z]\b/ },
	{ name: '索尼', rule: /;\sX[ML]\d+[a-z]?\b/ },
	{ name: 'OPPO', rule: /;\sR8\d{2}[A-Za-z]?\b/ },
	{ name: 'OPPO', rule: /;\sR\d{4}\b/ },
	{ name: 'OPPO', rule: /;\sN5\d{3}\b/ },
	{ name: '魅族', rule: /;\sm\d+ metal\b/i },
	{ name: '魅族', rule: /;\sm\d+ note\b/i },
	{ name: '魅族', rule: /;\sM\d{2,3}[A-Z]+/ },
	{ name: '魅族', rule: /;\sPRO \d+/ },
	{ name: '中兴', rule: /;\sNX\d{2,}[A-Z]?(\b|_)/ },
	{ name: '美图', rule: /;\sMP\d+\b/ },
	{ name: '锤子', rule: /;\s(SM|YQ|OS|OD)\d{3}\b/ },
	{ name: '摩托罗拉', rule: /;\sXT(?:\d{4}|\d{3}[A-Z]?)\b/ },
	{ name: '小辣椒', rule: /;\sLA\d?-[A-Z0-9]+\b/ },
	{ name: '小辣椒', rule: /;\sLA\d[A-Z]\b/ },
	{ name: '金立', rule: /;\sGN\d{3,}[A-Z]?\b/ },
	{ name: '金立', rule: /;\sV18\d[A-Z]\b/ },
	{ name: '诺基亚 (Android)', rule: /;\sTA-\d+\b/ },

	// 特定型号
	{ name: '魅族', rule: /;\s(?:Y685C|A680Q)\b/ },
	{ name: 'OPPO', rule: /;\sR7(?:Plust|s?Plus|Plusm|sf|t|c)\b/ },
	{ name: 'OPPO', rule: /;\sX90[07]7\b/ },
	{ name: 'OPPO', rule: /;\sA(?:31|51)[a-z]?\b/ }
];


exports.exec = (ua) => {
	const osResult = os.exec(ua);

	let result;
	if (osResult.isPC) {
		result = {
			name: 'PC',
			version: 'Others'
		};
	} else if (osResult.name === 'iOS') {
		result = util.execRules(ua, appleRules);
	} else {
		result = util.execRules(ua, otherRules);
	}
	result.type = 'devicebrand';

	return result;
};