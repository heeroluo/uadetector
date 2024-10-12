/**
 * @file 设备品牌特征库。
 */

// @ts-check

/** @typedef { import('./types').Rule } Rule */


/**
 * 苹果设备匹配规则。
 * @type {Rule[]}
 */
exports.appleRules = [
  { name: 'iPad', regExp: /iPad/ },
  { name: 'iPod', regExp: /iPod/ },
  { name: 'iPhone', regExp: /iPhone/ }
];

/**
 * 其他（绝大部分是安卓）设备匹配规则。
 * @type {Rule[]}
 */
exports.otherRules = [
  // 品牌关键词
  { name: '华为', regExp: /\b(?:huawei|honor)/i },
  { name: '华为', keywords: ['ideahub', 'figi'] },
  { name: 'vivo', keywords: ['vivo'] },
  { name: 'OPPO', keywords: ['oppo'] },
  { name: '小米', keywords: ['redmi', 'hongmi', 'shark', 'Mi', 'MIX', 'POCO'] },
  { name: '小米', regExp: /\bxiaomi/i },
  { name: '三星', keywords: ['samsung', 'galaxy'] },
  { name: '魅族', keywords: ['meizu'] },
  { name: '一加', keywords: ['oneplus', 'one'] },
  { name: '锤子', keywords: ['smartisan'] },
  { name: '联想', keywords: ['lenovo', 'zuk'] },
  { name: '美图', keywords: ['meitu'] },
  { name: '酷派', keywords: ['coolpad'] },
  { name: '华硕', keywords: ['asus', 'padfone'] },
  { name: 'realme', keywords: ['realme'] },
  { name: 'Google', keywords: ['nexus', 'pixel'] },
  { name: '诺基亚/Lumia', keywords: ['nokia', 'lumia'] },
  { name: '摩托罗拉', keywords: ['motorola', 'moto'] },
  { name: '索尼', regExp: /\bsony/i },
  { name: '飞利浦', keywords: ['xenium', 'philips'] },
  { name: '酷比', keywords: ['koobee'] },
  { name: '金立', regExp: /\bgionee/i },
  { name: '朵唯', keywords: ['doov'] },
  { name: '波导', keywords: ['bird', 'doeasy'] },
  { name: '海信', keywords: ['hisense'] },
  { name: '优学派', regExp: /\bUmix/ },
  { name: '优购', keywords: ['uoogou'] },
  { name: '乐丰', keywords: ['lephone'] },
  { name: '海尔', keywords: ['haier'] },
  { name: '糖果', keywords: ['sugar'] },
  { name: '亿通', keywords: ['eton'] },
  { name: '欧沃', keywords: ['owwo'] },
  { name: '康佳', keywords: ['konka'] },
  { name: '读书郎', keywords: ['readboy'] },
  { name: '乐视', keywords: ['letv'] },
  { name: '宇飞来', keywords: ['yu fly', 'kuliao'] },
  { name: '天语', keywords: ['k-touch'] },
  { name: 'HTC', keywords: ['htc'] },
  { name: 'TCL', keywords: ['tcl'] },
  { name: '中兴', keywords: ['zte'] },
  { name: '传音', keywords: ['infinix', 'tecno'] },

  // 特定型号
  { name: '华为', modelRegExp: /^H60-L0[12]$/ },
  { name: '魅族', keywords: ['M3 Max', 'm1 metal'] },
  { name: '魅族', modelRegExp: 'M040' },
  { name: 'OPPO', modelRegExp: /^R7(?:Plust|s?Plus|Plusm|sf|t|c)/ },

  // 品牌型号规则
  { name: '华为', modelRegExp: /^Mate\s*\d{2}/i },
  { name: '华为', modelRegExp: /^MatePad/i },
  { name: '华为', modelRegExp: /^Nova\s\d$/ },
  { name: '华为', regExp: /\b(?:Liantong|UNICOMVSENS)VP\d{3}\b/ },
  { name: '华为', regExp: /\bCMDCSP\d{3}\b/ },
  { name: '华为', regExp: /\bTDTECH/i },
  { name: '华为', modelRegExp: /^[A-Z]{3}\d?-W[0-3]9[A-Z]*$/ },
  { name: '华为', modelRegExp: /^[A-Z][A-Za-z]{2,3}-(?:AN|BD|BX|AL|TL)\d{2}[A-Za-z]*$/ },
  { name: '华为', modelRegExp: /^TYH\d+[A-Z]?$/ },
  { name: '小米', modelRegExp: /^MI\s?(?:\d|CC|Note|MAX|PLAY|PAD)/i },
  { name: '小米', modelRegExp: /^(?:AWM|SKR|SKW|DLT)-/ },
  { name: '小米', modelRegExp: /^XIG\d{2}$/ },
  { name: '小米', modelRegExp: /^M\d{4}[A-Z]\d{1,2}[A-Z]{1,2}$/ },
  { name: '小米', modelRegExp: /^2\d{3}[A-Z0-9]{6}$/ },
  { name: '小米', modelRegExp: /^2\d{5}[0-9A-Z]{2}[A-Z]$/ },
  { name: '小米', modelRegExp: /^2\d{6}[A-Z]$/ },
  { name: '小米', modelRegExp: /^2\d{7}[A-Z]{2,3}$/ },
  { name: 'OPPO', modelRegExp: /^(?:CPH|OPD|iPA)\d{4}$/ },
  { name: 'OPPO', modelRegExp: /^OPG\d{2}$/ },
  { name: 'OPPO', modelRegExp: /^A10[1-9]OP$/ },
  { name: '三星', modelRegExp: /^S(?:M|[CGP]H)-[A-Za-z0-9]+$/ },
  { name: '三星', modelRegExp: /^SCV3\d$/ },
  { name: '三星', modelRegExp: /^SC-\d{2}[A-Z]$/ },
  { name: '三星', modelRegExp: /^SH[WV]-/ },
  { name: '三星', modelRegExp: /^GT[-_][A-Z][A-Z0-9]{3,}$/i },
  { name: 'Realme', modelRegExp: /^RMX\d{4}$/ },
  { name: '酷派', modelRegExp: /^(?:ORL|CHA|BOS|VCR)-[A-Z]0$/i },
  { name: '酷比', modelRegExp: /^iplay_?\d+/i },
  { name: '索尼', modelRegExp: /^(?:XQ|SO)-/ },
  { name: '索尼', modelRegExp: /^[A-Z]?\d{3}SO$/ },
  { name: '索尼', modelRegExp: /^SOV\d{2}$/ },
  { name: '一加', modelRegExp: /^(?:KB|HD|IN|GM|NE|LE|MT)\d{4}$/ },
  { name: '乐视', modelRegExp: /^LEX\d+$/ },
  { name: '联想', modelRegExp: /^TB\d{3}F[A-Z]$/ },
  { name: '联想', modelRegExp: /^Tab2A\d-\d{2}[A-Z]?$/ },
  { name: '魅族', modelRegExp: /^m[1-6] note$/i },
  { name: '魅族', modelRegExp: /^PRO\s\d/ },
  { name: '魅族', modelRegExp: /^MZ-[A-Z\d]+/ },
  { name: '魅族', modelRegExp: /^mblu\d{2}$/ },
  { name: '魅族', modelRegExp: /^1\d(?:th|[sT])?(?:\s(?:Pro|X|Plus))?$/ },
  { name: '海信', modelRegExp: /^H(?:ITV|LTEM?|NR|)\d+/ },
  { name: '小度', modelRegExp: /^(?:XD|XDH)-/ },
  { name: '中兴', modelRegExp: /^NX\d{2,}[A-Z]?(\b|_)/ },
  { name: '美图', modelRegExp: /^MP\d+$/ },
  { name: '锤子', modelRegExp: /^(SM|YQ|OS|OD|OE|OC|DE)\d{3}$/ },
  { name: '锤子', modelRegExp: /^DT\d{4}[A-Z]$/ },
  { name: '摩托罗拉', modelRegExp: /^XT(?:\d{4}|\{d{3}[A-Z]?)\b/ },
  { name: '诺基亚 (Android)', modelRegExp: /^TA-\d+$/ },
  { name: '360', modelRegExp: /^\d{4}-[AM]\d{2}$/ },
  { name: '360', modelRegExp: /^QSN\d{4}$/},
  { name: '金立', modelRegExp: /^G(?:LY|N[SV]?)\d{3,}[A-Z]?$/ },
  { name: '金立', modelRegExp: /^GN\d{2}[A-Z]\d{2}$/ },
  { name: 'LG', modelRegExp: /^(?:LG|LGM|LM)-/ },
  { name: '坚果', modelRegExp: /^NB\d{4}-\d{2}[A-Z]$/ },
  { name: '小辣椒', modelRegExp: /^L\d{4}(?:MH|DE)$/ },
  { name: '小辣椒', modelRegExp: /^DE[13]0$/ },
  { name: '优学派', modelRegExp: /^YXP\b/ },
  { name: '快易典', modelRegExp: /^KYD-/ },
  { name: '夏新', modelRegExp: /^AMOI\d{4}$/ },
  { name: '天语', modelRegExp: /^LDOX-\d{4}$/ },
  { name: '天语', modelRegExp: /^KT\d{8}$/ },
  { name: '纽曼', modelRegExp: /^N[MW]20\d{5}$/ },

  // 模糊规则（型号规则较为简单，避免误判放到最后）
  { name: 'OPPO', modelRegExp: /^P[A-Z]+\d+$/ },
  { name: 'vivo', modelRegExp: /^V[12]\d{3}[A-Z]{0,2}$/ },
  { name: '魅族', modelRegExp: /^M\d{2,3}[A-Z]+$/ },
  { name: '魅族', modelRegExp: /^M18\d{2}$/ },
  { name: '魅族', modelRegExp: /^M\d\sE$/ },
  { name: '魅族', modelRegExp: /^MX\d\s*/ },
  { name: '酷派', modelRegExp: /^CP\d{2}[a-z]?$/ },
  { name: '索尼', modelRegExp: /^H8\d{2}6$/ },
  { name: '索尼', modelRegExp: /^G8\d{3}$/ },
  { name: '索尼', modelRegExp: /^J[89]\d{3}$/ },
  { name: '乐视', modelRegExp: /^Le\b/ }
];
