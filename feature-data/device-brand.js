/**
 * @file 设备品牌特征库。
 */

// 苹果设备特征库
exports.appleRules = [
  { name: 'iPad', rule: /iPad/ },
  { name: 'iPod', rule: /iPod/ },
  { name: 'iPhone', rule: /iPhone/ }
];

// 其他（绝大部分是安卓）设备特征库
exports.otherRules = [
  // 品牌关键词
  { name: '华为', rule: /\b(?:huawei|honor)/i },
  { name: '华为', keywords: ['ideahub', 'figi'] },
  { name: 'vivo', keywords: ['vivo', 'vivoBrowser'] },
  { name: 'OPPO', keywords: ['oppo'] },
  { name: '小米', keywords: ['redmi', 'hongmi', 'shark', 'Mi', 'MIX', 'POCO'] },
  { name: '小米', rule: /\bxiaomi/i },
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
  { name: '索尼', rule: /\bsony/i },
  { name: '飞利浦', keywords: ['xenium', 'philips'] },
  { name: '酷比', keywords: ['koobee'] },
  { name: '金立', rule: /\bgionee/i },
  { name: '朵唯', keywords: ['doov'] },
  { name: '波导', keywords: ['bird', 'doeasy'] },
  { name: '海信', keywords: ['hisense'] },
  { name: '优学派', rule: /\bUmix/ },
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
  { name: '华为', modelRule: /^H60-L0[12]$/ },
  { name: '魅族', keywords: ['M3 Max', 'm1 metal'] },
  { name: '魅族', modelRule: 'M040' },
  { name: 'OPPO', modelRule: /^R7(?:Plust|s?Plus|Plusm|sf|t|c)/ },

  // 品牌型号规则
  { name: '华为', modelRule: /^Mate\s*\d{2}/i },
  { name: '华为', modelRule: /^MatePad/i },
  { name: '华为', modelRule: /^Nova\s\d$/ },
  { name: '华为', rule: /\b(?:Liantong|UNICOMVSENS)VP\d{3}\b/ },
  { name: '华为', rule: /\bCMDCSP\d{3}\b/ },
  { name: '华为', rule: /\bTDTECH/i },
  { name: '华为', modelRule: /^[A-Z]{3}\d?-W[0-3]9[A-Z]*$/ },
  { name: '华为', modelRule: /^[A-Z][A-Za-z]{2,3}-(?:AN|BD|BX|AL|TL)\d{2}[A-Za-z]*$/ },
  { name: '华为', modelRule: /^TYH\d+[A-Z]?$/ },
  { name: '小米', modelRule: /^MI\s?(?:\d|CC|Note|MAX|PLAY|PAD)/i },
  { name: '小米', modelRule: /^(?:AWM|SKR|SKW|DLT)-/ },
  { name: '小米', modelRule: /^XIG\d{2}$/ },
  { name: '小米', modelRule: /^M\d{4}[A-Z]\d{1,2}[A-Z]{1,2}$/ },
  { name: '小米', modelRule: /^2\d{3}[A-Z0-9]{6}$/ },
  { name: '小米', modelRule: /^2\d{5}[0-9A-Z]{2}[A-Z]$/ },
  { name: '小米', modelRule: /^2\d{6}[A-Z]$/ },
  { name: '小米', modelRule: /^2\d{7}[A-Z]{2,3}$/ },
  { name: 'OPPO', modelRule: /^(?:CPH|OPD|iPA)\d{4}$/ },
  { name: 'OPPO', modelRule: /^OPG\d{2}$/ },
  { name: 'OPPO', modelRule: /^A10[1-9]OP$/ },
  { name: '三星', modelRule: /^S(?:M|[CGP]H)-[A-Za-z0-9]+$/ },
  { name: '三星', modelRule: /^SCV3\d$/ },
  { name: '三星', modelRule: /^SC-\d{2}[A-Z]$/ },
  { name: '三星', modelRule: /^SH[WV]-/ },
  { name: '三星', modelRule: /^GT[-_][A-Z][A-Z0-9]{3,}$/i },
  { name: 'Realme', modelRule: /^RMX\d{4}$/ },
  { name: '酷派', modelRule: /^(?:ORL|CHA|BOS|VCR)-[A-Z]0$/i },
  { name: '酷比', modelRule: /^iplay_?\d+/i },
  { name: '索尼', modelRule: /^(?:XQ|SO)-/ },
  { name: '索尼', modelRule: /^[A-Z]?\d{3}SO$/ },
  { name: '索尼', modelRule: /^SOV\d{2}$/ },
  { name: '一加', modelRule: /^(?:KB|HD|IN|GM|NE|LE|MT)\d{4}$/ },
  { name: '乐视', modelRule: /^LEX\d+$/ },
  { name: '联想', modelRule: /^TB\d{3}F[A-Z]$/ },
  { name: '联想', modelRule: /^Tab2A\d-\d{2}[A-Z]?$/ },
  { name: '魅族', modelRule: /^m[1-6] note$/i },
  { name: '魅族', modelRule: /^PRO\s\d/ },
  { name: '魅族', modelRule: /^MZ-[A-Z\d]+/ },
  { name: '魅族', modelRule: /^mblu\d{2}$/ },
  { name: '魅族', modelRule: /^1\d(?:th|[sT])?(?:\s(?:Pro|X|Plus))?$/ },
  { name: '海信', modelRule: /^H(?:ITV|LTEM?|NR|)\d+/ },
  { name: '小度', modelRule: /^(?:XD|XDH)-/ },
  { name: '中兴', modelRule: /^NX\d{2,}[A-Z]?(\b|_)/ },
  { name: '美图', modelRule: /^MP\d+$/ },
  { name: '锤子', modelRule: /^(SM|YQ|OS|OD|OE|OC|DE)\d{3}$/ },
  { name: '锤子', modelRule: /^DT\d{4}[A-Z]$/ },
  { name: '摩托罗拉', modelRule: /^XT(?:\d{4}|\{d{3}[A-Z]?)\b/ },
  { name: '诺基亚 (Android)', modelRule: /^TA-\d+$/ },
  { name: '360', modelRule: /^\d{4}-[AM]\d{2}$/ },
  { name: '360', modelRule: /^QSN\d{4}$/},
  { name: '金立', modelRule: /^G(?:LY|N[SV]?)\d{3,}[A-Z]?$/ },
  { name: '金立', modelRule: /^GN\d{2}[A-Z]\d{2}$/ },
  { name: 'LG', modelRule: /^(?:LG|LGM|LM)-/ },
  { name: '坚果', modelRule: /^NB\d{4}-\d{2}[A-Z]$/ },
  { name: '小辣椒', modelRule: /^L\d{4}(?:MH|DE)$/ },
  { name: '小辣椒', modelRule: /^DE[13]0$/ },
  { name: '优学派', modelRule: /^YXP\b/ },
  { name: '快易典', modelRule: /^KYD-/ },
  { name: '夏新', modelRule: /^AMOI\d{4}$/ },
  { name: '天语', modelRule: /^LDOX-\d{4}$/ },
  { name: '天语', modelRule: /^KT\d{8}$/ },
  { name: '纽曼', modelRule: /^N[MW]20\d{5}$/ },

  // 模糊规则（型号规则较为简单，避免误判放到最后）
  { name: 'OPPO', modelRule: /^P[A-Z]+\d+$/ },
  { name: 'vivo', modelRule: /^V\d+[A-Z]+\d*$/ },
  { name: 'vivo', modelRule: /^V2\d{3}$/ },
  { name: '魅族', modelRule: /^M\d{2,3}[A-Z]+$/ },
  { name: '魅族', modelRule: /^M18\d{2}$/ },
  { name: '魅族', modelRule: /^M\d\sE$/ },
  { name: '魅族', modelRule: /^MX\d\s*/ },
  { name: '酷派', modelRule: /^CP\d{2}[a-z]?$/ },
  { name: '索尼', modelRule: /^H8\d{2}6$/ },
  { name: '索尼', modelRule: /^G8\d{3}$/ },
  { name: '索尼', modelRule: /^J[89]\d{3}$/ },
  { name: '乐视', modelRule: /^Le\b/ }
];
