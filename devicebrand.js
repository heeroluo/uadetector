/*!
 * UA Detector
 * Device brand detect - v0.1.1 (2016-03-26T17:23:23+0800)
 * Released under LGPL license
 */

var util = require('./util'), os = require('./os');


var appleRules =[
	{ name: 'iPad', rule: /iPad/ },
	{ name: 'iPod', rule: /iPod/ },
	{ name: 'iPhone', rule: /iPhone/ }
];


var otherRules = [
	{ name: '三星', rule: /\bSAMSUNG\b/i },
	{ name: '三星', rule: /\bGalaxy/i },
	{ name: '小米', rule: /\bXiaoMi(?:\b|_|\d)/i },
	{ name: '小米', rule: /\bRedmi\b/i },
	{ name: '小米', rule: /\bMI(?:-ONE|\sPad)/ },
	{ name: '小米', rule: /\b(?:MI|Mi|HM)[\s_-][A-Za-z0-9]+\b/ },
	{ name: '小米', rule: /\b(?:MI|Mi|HM)\d[A-Z]?\b/ },
	{ name: '小米', rule: /\bBuild\/HM\d{7}\b/ },
	{ name: '小米', rule: /\bMi\s?\d\b/ },
	{ name: '小米', rule: /\bHONGMI/i },
	{ name: '华为', rule: /\bHUAWEI/i },
	{ name: '华为', rule: /\b(?:HONOR|Ascend|IDEOS)/i },
	{ name: 'OPPO', rule: /\boppo(?:\b|_|[A-Z])/i },
	{ name: 'OPPO', rule: /\bOPPO[A-Z0-9]{2,5}\b/ },
	{ name: 'OPPO', rule: /\bFind\s?\d+\b/i },
	{ name: '魅族', rule: /\bMEIZU(?:\b|_)/i },
	{ name: '魅族', rule: /\bMX\d\b/ },
	{ name: '中兴', rule: /\bZTE/ },
	{ name: '酷派', rule: /\bCoolpad/i },
	{ name: 'HTC', rule: /\bHTC/ },
	{ name: 'HTC', rule: /\b(?:Desire|Sensation|Incredible)(?:\b|_)/ },
	{ name: '步步高', rule: /\bvivo(?:\b|_)/i },
	{ name: '步步高', rule: /\bBBK\b/ },
	{ name: '联想', rule: /\bLenovo/i },
	{ name: '联想', rule: /\bIdea(?:pad|Tab)/ },
	{ name: '乐视', rule: /\bLetv\b/ },
	{ name: '索尼', rule: /\b(?:Sony|Xperia)(?:\b|_)/i },
	{ name: '索尼', rule: /\bSony[A-Z]/ },
	{ name: '索尼', rule: /\bSonyEricsson/i },
	{ name: '美图', rule: /\bMeitu/ },
	{ name: '金立', rule: /\b(?:GiONEE|EENOiG)/i },
	{ name: '摩托罗拉', rule: /\bMotorola(?:\b|_)/i },
	{ name: '摩托罗拉', rule: /\b(?:Milestone|Xoom|DROID[A-Z0-9]?|Droid\d?|Defy)\b/ },
	{ name: 'LG', rule: /\b(?:LG|Optimus)(?:\b|_)/i },
	{ name: '诺基亚/Lumia', rule: /\bNokia/ },
	{ name: '诺基亚/Lumia', rule: /\b(?:NOKIA|Lumia)(?:\b|_)/i },
	{ name: '华硕', rule: /\b(?:ASUS|PadFone)(?:\b|_)/i },
	{ name: '朵唯', rule: /\bDOOV(?:\b|_)/ },
	{ name: '海尔', rule: /\bHaier(?:\b|_)/i },
	{ name: 'TCL', rule: /\bTCL(?:[A-Z]\d{3})?(?:\b|_)/ },
	{ name: '亿通', rule: /\bETON(?:\b|_)/ },
	{ name: '波导', rule: /\bBird(?:\b|_)/i },
	{ name: '波导', rule: /\bDoeasy(?:\b|_)/i },
	{ name: 'Google', rule: /\bNexus(?:\b|_|\d)/i },
	{ name: '一加', rule: /\bONE(?:PLUS)?\b/ },
	{ name: '锤子', rule: /smartisan/i },
	{ name: '海信', rule: /\bHisense\b/ },

	{ name: '三星', rule: /\bSM-[A-Z0-9]+\b/ },
	{ name: '三星', rule: /\bS(?:M|[CGP]H)-[A-Za-z0-9]+\b/ },
	{ name: '三星', rule: /\bSC-\d{2}[A-Z]\b/ },
	{ name: '三星', rule: /\bSHV-/ },
	{ name: '三星', rule: /\bSHW-/ },
	{ name: '三星', rule: /\bGT[-_][A-Z][A-Z0-9]{3,}\b/i },

	{ name: '华为', rule: /\bChe1-/ },
	{ name: '华为', rule: /;\sH\d{2}-[A-Z]\d{2}\b/ },

	{ name: '索尼', rule: /;\sL[1-9]\d[a-zA-Z]\b/ },
	{ name: '索尼', rule: /;\sLT\d{2}[a-z]{0,2}\b/ },
	{ name: '索尼', rule: /;\sST\d{2}[a-z]\b/ },
	{ name: '索尼', rule: /;\sS55[tu]\b/ },
	{ name: '索尼', rule: /;\s[MW]T\d+i\b/ },
	{ name: '索尼', rule: /;\sSK\d{2}i\b/ },
	{ name: '索尼', rule: /;\sM\d{2}[cw]\b/ },
	{ name: '索尼', rule: /;\sX[ML]\d+[a-z]?\b/ },
	{ name: '索尼', rule: /;\sX\d{2}[a-z]\b/ },
	{ name: '索尼', rule: /;\sS\d{2}h\b/ },
	{ name: '索尼', rule: /;\sM\d{2}[th]\b/ },
	{ name: '索尼', rule: /;\sC6[689]\d{2}\b/ },
	{ name: '索尼', rule: /;\sC1[569]0[45]\b/ },
	{ name: '索尼', rule: /;\sC2[013]0[45]\b/ },

	{ name: 'OPPO', rule: /\bR7(?:Plust|s?Plus|Plusm|sf|t|c)\b/ },
	{ name: 'OPPO', rule: /;\sX90\dT?\b/ },
	{ name: 'OPPO', rule: /;\sU7\d{2}[WT]\b/ },
	{ name: 'OPPO', rule: /;\sR8\d{2}[A-Za-z]?\b/ },
	{ name: 'OPPO', rule: /;\sR\d{4}\b/ },
	{ name: 'OPPO', rule: /;\sX90[07]7\b/ },
	{ name: 'OPPO', rule: /\bN5\d{3}\b/ },

	{ name: '魅族', rule: /\bm\d+ metal\b/i },
	{ name: '魅族', rule: /\bm\d+ note\b/i },
	{ name: '魅族', rule: /;\sM(?:03[0-2]|04[05]|35[1356]|46[01235]|M57[1568A])(?:[ACMU]|CA|MA|CE)?\b/ },

	{ name: '中兴', rule: /;\sNX\d{2,}[A-Z]?\b/ },
	{ name: '中兴', rule: /;\sV9\d{3}\b/ },
	{ name: '中兴', rule: /;\s[NU]9180\b/ },

	{ name: '美图', rule: /\bMK260\b/ },
	
	{ name: '摩托罗拉', rule: /\bMOT-/ },
	{ name: '摩托罗拉', rule: /;\sM[BTE][5-9]\d{2}\b/ },
	{ name: '摩托罗拉', rule: /;\sMZ6\d{2}\b/ },
	{ name: '摩托罗拉', rule: /;\sXT(?:\d{4}|\d{3}[A-Z]?)\b/ },

	{ name: 'LG', rule: /\bLG[A-Z]+\d+\b/ },

	{ name: '小辣椒', rule: /\bLA\d?-[A-Z0-9]+\b/ },
	{ name: '小辣椒', rule: /\bLA\d[A-Z]\b/ },
	{ name: 'HTC', rule: /\bHTL\d{2}\b/ },

	{ name: '海信', rule: /\bHS(?:\b|_)/ },

	{ name: '海尔', rule: /\bHT-[A-Z0-9]+\b/ },

	{ name: '金立', rule: /;\s(?:GN\d{3,}[A-Z]?)\b/ },
	{ name: '金立', rule: /;\sX8(?:05|17)\b/ },
	{ name: '金立', rule: /;\sV18[25]\b/ },
	{ name: '金立', rule: /;\sE[2-9](?:mini|[A-Z])?\b/ },

	{ name: '锤子', rule: /\bYQ601\b/ },  

	{ name: 'TCL', rule: /;\sJ\d{3}[DT]\b/ }
];

exports.exec = function(ua) {
	var result, osResult = os.exec(ua);
	if ( os.isPC(osResult) ) {
		result = {
			name: 'PC',
			version: 'Others'
		};
	} else if ( osResult.name === 'iOS' ) {
		result = util.execRules(ua, appleRules);
	} else {
		result = util.execRules(ua, otherRules);
	}
	result.type = 'devicebrand';
	return result;
};