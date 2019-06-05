/*!
 * UA Detector
 * Utility functions
 */

 
// 固定版本号位数
function fixVerLength(ver, verLength) {
	if (!verLength || !/^\d+(?:\.\d+)*$/.test(ver)) {
		return ver;
	}

	ver = String(ver).split('.');
	if (ver.length > verLength) {
		ver.length = verLength;
	} else {
		while (ver.length < verLength) {
			ver.push(0);
		}
	}

	return ver.join('.');
}


/**
 * 执行匹配规则
 * @method execRules
 * @param {String} ua useragent字符串
 * @param {Array} rules 规则
 * @param {Number} verLength 版本号位数
 */
exports.execRules = function(ua, rules, verLength) {
	const result = { };

	rules.some((r) => {
		if (r.preCheck && r.preCheck(ua) === false) { return; }

		if (r.rule) {
			const match = ua.match(r.rule);
			if (match) {
				let ver = (match[1] || '')
					// 有些版本号分隔符是下划线，统一为点号
					.replace(/_/g, '.')
					// 移除结尾多余的点号
					.replace(/\.+$/, '');

				// 检查是否非法版本号
				let verNum = parseFloat(ver);
				if (isNaN(verNum) || verNum <= 0) {
					ver = verNum = undefined;
				}

				// 当前规则的版本长度
				myVerLength = r.verLength || verLength;

				if (r.ranges && verNum) {
					// 把特定区间的版本号合并为一个版本号
					r.ranges.some((range) => {
						if (verNum >= range[0] && verNum < range[1]) {
							if (range[0]) {
								ver = fixVerLength(range[0], myVerLength) + ' ~ ';
							} else {
								ver = '< ';
							}
							ver += fixVerLength(range[1], myVerLength);
							return true;
						}
					});
				}

				switch (typeof r.version) {
					case 'function':
						// 返回false表示版本号非法
						ver = r.version(ver, ua);
						break;

					case 'string':
						ver = r.version;
						break;
				}

				if (ver === false) {
					return;
				} else {
					ver = fixVerLength(ver, myVerLength);
				}

				result.name = r.name;

				if (ver != null) {
					result.version = ver.toString();
				}

				if (r.extended) {
					Object.assign(result, r.extended);
				}

				return true;
			}

		} else if (r.keywords) {
			const reBefore = /[\/\s;_-]/;
			const reAfter = /[\s\d;_-]/;
			const tempUA = ua.toLowerCase();
			const canMatchKeyword = r.keywords.some((keyword) => {
				const pos = tempUA.indexOf(keyword.toLowerCase());
				if (pos !== -1 &&
					reBefore.test(tempUA[pos - 1]) &&
					reAfter.test(tempUA[pos + keyword.length])
				) {
					return true;
				}
			});

			if (canMatchKeyword) {
				result.name = r.name;
			}

			return canMatchKeyword;
		}
	});

	result.name = result.name || 'Others';
	result.version = result.version || 'Others';

	return result;
};