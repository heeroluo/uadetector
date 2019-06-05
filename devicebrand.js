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
	{ name: '小米', keywords: ['redmi', 'hongmi', 'mi', 'hm', 'mix', 'xiaomi'] },
	{ name: '三星', keywords: ['samsung', 'galaxy'] },
	{ name: '魅族', keywords: ['meizu', 'mx'] },
	{ name: '一加', keywords: ['oneplus'] },
	{ name: '联想', keywords: ['lenovo', 'zuk', 'ideapad', 'ideatab'] },
	{ name: '中兴', keywords: ['zte'] },
	{ name: '美图', keywords: ['meitu'] },
	{ name: 'HTC', keywords: ['htc'] },
	{ name: '酷派', keywords: ['coolpad'] },
	{ name: '华硕', keywords: ['asus', 'padfone'] },
	{ name: '索尼', rule: /\bsony/i },
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
	{ name: '康佳', keywords: ['konka'] },
	{ name: 'Google', keywords: ['nexus', 'pixel'] },
	{ name: 'LG', keywords: ['lg', 'optimus'] },
	{ name: '乐视', keywords: ['letv', 'le'] },

	// 品牌型号规则
	{ name: '三星', rule: /;\sbSM-[A-Z0-9]+\b/ },
	{ name: '三星', rule: /;\sS(?:M|[CGP]H)-[A-Za-z0-9]+\b/ },
	{ name: '三星', rule: /;\sSC-\d{2}[A-Z]\b/ },
	{ name: '三星', rule: /;\sSH[WV]-/ },
	{ name: '三星', rule: /;\sGT[-_][A-Z][A-Z0-9]{3,}\b/i },
	{ name: 'LG', rule: /;\sLM-/ },
	{ name: '华为', rule: /;\s(?:CHE|CHM|Che1|VIE|BND|PAR)-/ },
	{ name: '华为', rule: /;\sH\d{2}-[A-Z]\d{2}\b/ },
	{ name: '小米', rule: /;\s(?:AWM|SKR)-/ },
	{ name: '乐视', rule: /;\sLEX\d+\b/ },
	{ name: '索尼', rule: /;\sL[1-9]\d[a-zA-Z]\b/ },
	{ name: '索尼', rule: /;\sX[ML]\d+[a-z]?\b/ },
	{ name: 'OPPO', rule: /;\sR8\d{2}[A-Za-z]?\b/ },
	{ name: '魅族', rule: /;\sm\d+ metal\b/i },
	{ name: '魅族', rule: /;\sm\d+ note\b/i },
	{ name: '魅族', rule: /;\sM\d{2,3}[A-Z]+/ },
	{ name: '魅族', rule: /;\sM18\d{2}\b/ },
	{ name: '魅族', rule: /;\sPRO \d+/ },
	{ name: '魅族', rule: /;\sMZ-[A-Z\d]+\b/ },
	{ name: '中兴', rule: /;\sNX\d{2,}[A-Z]?(\b|_)/ },
	{ name: '酷派', rule: /;\sVCR-/ },
	{ name: '美图', rule: /;\sMP\d+\b/ },
	{ name: '锤子', rule: /;\s(SM|YQ|OS|OD|OE|OC|DE)\d{3}\b/ },
	{ name: '摩托罗拉', rule: /;\sXT(?:\d{4}|\d{3}[A-Z]?)\b/ },
	{ name: '小辣椒', rule: /;\sLA\d?-[A-Z0-9]+\b/ },
	{ name: '小辣椒', rule: /;\sLA\d[A-Z]\b/ },
	{ name: '金立', rule: /;\sGN\d{3,}[A-Z]?\b/ },
	{ name: '金立', rule: /;\sV18\d[A-Z]\b/ },
	{ name: '诺基亚 (Android)', rule: /;\sTA-\d+\b/ },
	{ name: '360', rule: /;\s\d{4}-[AM]\d{2}\b/ },

	// 特定型号
	{ name: '索尼', keywords: ['SOV33', 'G8232', 'H8166'] },
	{ name: '魅族', keywords: ['Y685C', 'A680Q', '16th', '16 X', '15 Plus', 'M15', 'M5s', 'M3 Max'] },
	{ name: '一加', keywords: ['A0001'] },
	{ name: 'OPPO', rule: /;\sR7(?:Plust|s?Plus|Plusm|sf|t|c)\b/ },
	{ name: 'OPPO', rule: /;\sX90[07]7\b/ },
	{ name: 'OPPO', keywords: ['N1T'] },

	// 模糊规则（型号规则较为简单，避免误判放到最后）
	{ name: '一加', rule: /;\sGM\d{4}\b/ },
	{ name: 'OPPO', rule: /;\sA(?:31|51)[a-z]?\b/ },
	{ name: 'OPPO', rule: /;\s(?:R|CPH)\d{4}\b/ },
	{ name: 'OPPO', rule: /;\sN5\d{3}\b/ },
	{ name: 'OPPO', rule: /;\sP[A-Z]+\d+\b/ },
	{ name: 'vivo', rule: /;\sV\d+[A-Z]+\d*\b/ },
	{ name: '金立', rule: /;\sF\d{3}[A-Z]?\b/ },
	{ name: '魅族', rule: /;\sM\d\sE\b/ },
	{ name: '魅族', rule: /;\s15\s/ }
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