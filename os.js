/*!
 * UA Detector
 * OS detect - v0.1.1 (2016-06-19T16:50:24+0800)
 * Released under LGPL license
 */

var util = require('./util');

exports.exec = function(ua) {
	var result = util.execRules(ua, [
		{ name: 'Windows Phone', rule: /\bWindows\sPhone(?:\sOS)?(?:\s([\d.]+))?\b/, versionSegments: 2 },
		{ name: 'Windows Mobile', rule: /\bWindows\s?Mobile\b/ },
		{ name: 'Windows CE', rule: /\bWindows\sCE\b/ },
		{
			name: 'Windows',
			rule: /\bWindows\sNT\s(\d+\.\d)\b/,
			version: function(ver) {
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
			}
		},
		{ name: 'Windows', rule: /\bWindows(?:\s([\d.]+))\b/ },
		{
			name: 'iOS',
			rule: /\bOS(?:\s([\d_.]+))?\slike\sMac\sOS\sX\b/,
			versionSegments: 2
		},
		{ name: 'iOS', rule: /\b(?:iPad|iPod|iPhone)\b/ },
		{ name: 'iOS', rule: /\biOS\b/ },
		{ name: 'Mac OS X', rule: /\bMac\sOS\sX(?:\s([\d_.]+))?/, versionSegments: 2 },
		{ name: 'YunOS', rule: /\bYunOs\b/ },
		{
			name: 'Android',
			rule: /\bAndroid;?(?:[-\/\s]([\d.]+))?(?:\b|_)/,
			versionSegments: 2,
			version: function(ver) {
				if (ver) {
					ver = ver.split('.');
					if (parseInt(ver[0]) >= 5) { return null; }
					if (ver[1] && ver[1].length > 1) { ver[1] = ver[1][0]; }
					return ver.join('.');
				}
			}
		},
		{ name: 'Android', rule: /\bAdr\s([\d.]+)(?:\b|_)/, versionSegments: 2 },
		{ name: 'Symbian', rule: /\b(?:Symbian|SymbOS)/ },
		{ name: 'BlackBerry', rule: /\b(?:BlackBerry|BB10)\b/ },
		{ name: 'Linux', rule: /\bLinux;?\s(?:x86|i[356]86)(?:\b|_)/ }
	]);

	result.type = 'os';

	return result;
};

exports.isPC = function(ua) {
	var result = typeof ua === 'string' ? this.exec(ua) : ua;
	return result.name === 'Windows' || result.name === 'Linux' || result.name === 'Mac OS X';
};