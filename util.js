/*!
 * UA Detector
 * Utility functions - v0.1.0 (2014-09-23T14:37:17+0800)
 * Released under LGPL license
 */

function fixVersion(ver, segments) {
	if ( !segments || !/^\d+(?:\.\d+)*\.*$/.test(ver) ) { return ver; }

	ver = ver.toString().split('.');
	if (ver.length > segments) {
		ver.length = segments;
	} else {
		while (ver.length < segments) { ver.push(0); }
	}

	return ver.join('.');
}

exports.execRules = function(ua, rules, versionSegments) {
	var result = { };

	rules.some(function(r) {
		if (!r.name || !r.rule) { return; }

		var match = ua.match(r.rule);
		if (match) {
			var ver = match[1], myVerSegments = r.versionSegments || versionSegments;
			if (ver) {
				if ( ver.toLowerCase() === 'build' ) {
					ver = undefined;
				} else if ( /^\d+(?:_\d+)+$/.test(ver) ) {
					// 把版本号分隔符统一为点号
					ver = ver.replace(/_/g, '.');
				}
			}

			var verNum = parseFloat(ver);
			// 版本号不能为0或负数
			if (verNum <= 0) { ver = verNum = undefined; }

			if ( r.ranges && !isNaN(verNum) ) {
				// 把特定区间的版本号合并为一个版本号
				r.ranges.some(function(range) {
					if (verNum >= range[0] && verNum < range[1]) {
						if (range[0]) {
							ver = fixVersion(range[0], myVerSegments) + ' ~ ';
						} else {
							ver = '< ';
						}
						ver += fixVersion(range[1], myVerSegments);
						return true;
					}
				});
			}

			switch (typeof r.version) {
				case 'function':
					ver = r.version(ver, ua);
					break;

				case 'string':
					ver = r.version;
					break;
			}
			if (ver === false) {
				// 返回false表示版本号不符，当前规则匹配不通过
				return;
			} else {
				ver = fixVersion(ver, myVerSegments);
			}

			result.name = r.name;

			if (ver != null) { result.version = ver.toString(); }

			return true;
		}
	});

	result.name = result.name || 'Others';
	result.version = result.version || 'Others';

	return result;
};