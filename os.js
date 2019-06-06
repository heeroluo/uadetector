/*!
 * UA Detector
 * Operating system detector
 */

const util = require('./util');


const rules = [
	{ name: 'Windows Phone', rule: /\bWindows\sPhone(?:\sOS)?(?:\s([\d.]+))?\b/, verLength: 2 },
	{ name: 'Windows Mobile', rule: /\bWindows\s?Mobile\b/ },
	{ name: 'Windows CE', rule: /\bWindows\sCE\b/ },

	// Windows NT
	{
		name: 'Windows',
		rule: /\bWindows\s?NT\s?(([\d.]+))\b/,
		version(ver) {
			return {
				'5.0': '2000',
				'5.1': 'XP',
				'5.2': '2003',
				'6.0': 'Vista',
				'6.1': '7',
				'6.2': '8',
				'6.3': '8.1',
				'10.0': '10'
			}[ver];
		},
		extended: { isPC: true }
	},
	// Windows 95/98/ME
	{
		name: 'Windows',
		rule: /\bWindows(?:\s([\d.]+))\b/,
		extended: { isPC: true }
	},

	{ name: 'iOS', rule: /\bOS(?:\s([\d_.]+))?\slike\sMac\sOS\sX\b/, verLength: 2 },

	{
		name: 'macOS(Mac OS X)',
		rule: /\bMac\sOS\sX(?:\s([\d_.]+))?/,
		verLength: 2,
		extended: { isPC: true }
	},

	// Universal links spider
	{
		name: 'Darwin',
		rule: /\bDarwin\b/,
		extended: { isPC: true }
	},

	{ name: 'YunOS', rule: /\bYunOs\b/ },
	{ name: 'Android', rule: /\bAndroid;?(?:[-\/\s]([\d.]+))?(?:\b|_)/, verLength: 2 },
	{ name: 'Android', rule: /\bAdr\s([\d.]+)(?:\b|_)/, verLength: 2 },

	{ name: 'Symbian', rule: /\b(?:Symbian|SymbOS)/ },
	{ name: 'BlackBerry', rule: /\b(?:BlackBerry|BB10)\b/ },

	{
		name: 'Linux',
		rule: /\bLinux;?\s(?:x86|i[356]86)(?:\b|_)/,
		extended: { isPC: true }
	}
];


exports.exec = function(ua) {
	const result = util.execRules(ua, rules);
	result.type = 'os';
	return result;
};