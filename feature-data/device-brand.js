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
  { name: '华为', keywords: ['IdeaHub', 'FIGI'] },
  { name: 'vivo', keywords: ['vivo', 'VivoBrowser'] },
  { name: 'OPPO', keywords: ['oppo'] },
  { name: '小米', keywords: ['redmi', 'hongmi', 'shark', 'Mi', 'MIX', 'POCO'] },
  { name: '小米', rule: /\bxiaomi/i },
  { name: '三星', keywords: ['samsung', 'galaxy'] },
  { name: '魅族', keywords: ['meizu'] },
  { name: '一加', keywords: ['oneplus', 'one'] },
  { name: '锤子', keywords: ['smartisan'] },
  { name: '联想', keywords: ['lenovo', 'ZUK'] },
  { name: '美图', keywords: ['meitu'] },
  { name: '酷派', keywords: ['coolpad'] },
  { name: '华硕', keywords: ['asus', 'padfone'] },
  { name: 'realme', keywords: ['realme'] },
  { name: 'Google', keywords: ['nexus', 'pixel'] },
  { name: '诺基亚/Lumia', keywords: ['nokia', 'lumia'] },
  { name: '摩托罗拉', keywords: ['motorola', 'moto'] },
  { name: '索尼', rule: /\bsony/i },
  { name: '飞利浦', keywords: ['Xenium'] },
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
  { name: '宇飞来', keywords: ['yu fly', 'KULIAO'] },
  { name: 'HTC', keywords: ['htc'] },
  { name: '中兴', keywords: ['zte'] },
  { name: '传音', keywords: ['Infinix', 'TECNO'] },

  // 特定型号
  { name: '魅族', keywords: ['M3 Max'] },
  { name: '步步高', keywords: ['S3 Prow'] },
  { name: 'OPPO', modelRule: /^R7(?:Plust|s?Plus|Plusm|sf|t|c)/ },
  { name: '联想', keywords: ['Tab2A7-10F', 'TB128FU'] },
  { name: '优学派', keywords: ['U17PLUS'] },
  { name: '360', keywords: ['N7 Lite'] },

  // 品牌型号规则
  { name: '华为', modelRule: /^Mate\s\d{2}/ },
  { name: '华为', modelRule: /^Nova\s\d$/ },
  // { name: '华为', modelRule: /^(?:CHE|CHM|Che1|VIE|BND|PAR|JKM|EML|OXF|VOG|JSN|VCE|STK|STF|BZT|YAL|INE|COR|SPN|AGS2|MAR|LYA|BKL|CLT|SEA|MHA|EVR|VKY|ANE|ALP|TIT|MRX|ELE|DVC|SCM|JLH|JDN2|JEF|Hera|Hebe|FIO|ELZ|MNT|LRA|OCE|AGM3|NAT|LIO|HMA|NOH|MRR|TAS|PCT|TAS|TNY|MXW)-/ },
  { name: '华为', modelRule: /^[A-Z]{3}\d?-[AT][LN]\d[019][A-Za-z]*$/ },
  { name: '华为', modelRule: /^[A-Z]{3}\d?-W[0-3]9[A-Z]*$/ },
  { name: '华为', modelRule: /^[A-Z][A-Za-z]{2,3}-BD00$/ },
  { name: '华为', modelRule: /^[A-Z]{3}-(?:[LN]29|NX9)$/ },
  { name: '华为', modelRule: /^TYH\d+[A-Z]?$/ },
  { name: '华为', rule: /\b(?:Liantong|UNICOMVSENS)VP\d{3}\b/ },
  { name: '华为', rule: /\bCMDCSP\d{3}\b/ },
  { name: '小米', modelRule: /^MI\s?(?:\d|CC|Note|MAX|PLAY|PAD)/i },
  { name: '小米', modelRule: /^(?:AWM|SKR|SKW|DLT)-/ },
  { name: '小米', modelRule: /^M\d{4}[CKJ]\d+[A-Z]+$/ },
  { name: '小米', modelRule: /^2\d{5}[0-9A-Z]{2}[A-Z]$/ },
  { name: '小米', modelRule: /^2\d{6}[A-Z]$/ },
  { name: '小米', modelRule: /^2\d{7}[A-Z]{2}$/ },
  { name: 'OPPO', modelRule: /^(?:CPH|OPD)\d{4}$/ },
  { name: '三星', modelRule: /^S(?:M|[CGP]H)-[A-Za-z0-9]+$/ },
  { name: '三星', modelRule: /^SC-\d{2}[A-Z]$/ },
  { name: '三星', modelRule: /^SH[WV]-/ },
  { name: '三星', modelRule: /^GT[-_][A-Z][A-Z0-9]{3,}$/i },
  { name: 'Realme', modelRule: /^RMX\d{4}$/ },
  { name: '酷比', modelRule: /^iplay_?\d+$/i },
  { name: '索尼', modelRule: /^(?:XQ|SO)-/ },
  { name: '一加', modelRule: /^(?:KB|HD|IN|GM|NE|LE|MT)\d{4}$/ },
  { name: '乐视', modelRule: /^LEX\d+$/ },
  { name: '魅族', modelRule: /^m\d+ note$/i },
  { name: '魅族', modelRule: /^PRO\s\d/ },
  { name: '魅族', modelRule: /^MZ-[A-Z\d]+/ },
  { name: '魅族', modelRule: /^1\d(?:th|[sT])?(?:\s(?:Pro|X|Plus))?$/ },
  { name: '海信', modelRule: /^(?:HITV|HLTE|HNR)\d+/ },
  { name: '小度', modelRule: /^(?:XD|XDH)-/ },
  { name: '中兴', modelRule: /^NX\d{2,}[A-Z]?(\b|_)/ },
  { name: '美图', modelRule: /^MP\d+$/ },
  { name: '锤子', modelRule: /^(SM|YQ|OS|OD|OE|OC|DE)\d{3}$/ },
  { name: '锤子', modelRule: /^DT\d{4}[A-Z]$/ },
  { name: '摩托罗拉', modelRule: /^XT(?:\d{4}|\{d{3}[A-Z]?)\b/ },
  { name: '清华同方', modelRule: /^KT\d{2,3}(?:-\d+)?$/ },
  { name: '诺基亚 (Android)', modelRule: /^TA-\d+$/ },
  { name: '360', modelRule: /^\d{4}-[AM]\d{2}$/ },
  { name: '金立', modelRule: /^GN\d{3,}[A-Z]?$/ },
  { name: 'LG', modelRule: /^(?:LG|LGM|LM)-/ },

  // 模糊规则（型号规则较为简单，避免误判放到最后）
  { name: 'OPPO', modelRule: /^P[A-Z]+\d+$/ },
  { name: 'vivo', modelRule: /^V\d+[A-Z]+\d*$/ },
  { name: '魅族', modelRule: /^M\d{2,3}[A-Z]+$/ },
  { name: '魅族', modelRule: /^M18\d{2}$/ },
  { name: '魅族', modelRule: /^M\d\sE$/ },
  { name: '魅族', modelRule: /^MX\d\s*/ },
  { name: '酷派', modelRule: /^CP\d{2}$/ },
  { name: '乐视', modelRule: /^Le\b/ }
];
