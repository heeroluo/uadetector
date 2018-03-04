#!/usr/bin/env node

/*!
 * UA Detector
 * Command entry
 */

// 命令行参数 -> Map
const commandArgs = (function() {
	let lastParamName;
	let autoId = 0;

	const args = {};
	process.argv.slice(2).forEach(function(arg) {
		if (/^-(.+)$/.test(arg)) {
			lastParamName = RegExp.$1;
			args[lastParamName] = true;
		} else {
			if (lastParamName) {
				args[lastParamName] = arg;
				lastParamName = null;
			} else {
				args[autoId++] = arg;
			}
		}
	});

	return args;
})();


const commands = {
	v() {
		const path = require('path');
		const fs = require('fs');

		let pkgData = fs.readFileSync(path.resolve(__dirname, '../package.json'));
		if (pkgData) {
			pkgData = JSON.parse(pkgData);
			return 'Version: ' + pkgData.version;
		}
	},

	devicebrand(ua) {
		const device = require('../devicebrand');
		return device.exec(ua);
	},

	os(ua) {
		const os = require('../os');
		return os.exec(ua);
	},

	browsercore(ua) {
		const browserCore = require('../browsercore');
		return browserCore.exec(ua);
	},

	browser(ua) {
		const browser = require('../browser');
		return browser.exec(ua);
	}
};


const inputString = commandArgs[0];
const outputFormat = commandArgs['format'];
let inputFormat = commandArgs['input-format'];
let inputParams, uaString, result;

if (inputFormat) {
	inputParams = {};
	const inputParamNames = [];
	// 根据输入格式解析参数
	inputFormat = '^' + inputFormat
		.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1')
		.replace(/%(\w+)/g, function(match, $1) {
			inputParamNames.push($1);
			return '(.*?)';
		})
	+ '$';
	// 临时使用result变量
	result = inputString.match(inputFormat);
	if (result) {
		for (let i = 1; i < result.length; i++) {
			inputParams[inputParamNames[i - 1]] = result[i];
		}
	}
	// ua参数为useragent
	uaString = inputParams.ua;
} else {
	uaString = inputString;
}

for (let cmd in commands) {
	if (commandArgs[cmd]) {
		result = commands[cmd](uaString, outputFormat);
		if (typeof result === 'string') {
			console.info(result);
		} else {
			if (inputParams) {
				for (let i in inputParams) { result[i] = inputParams[i]; }
			}
			console.info(
				outputFormat ? outputFormat.replace(/%(\w+)/g, function(match, $1) {
					return result[$1];
				}) : JSON.stringify(result)
			);
		}
	}
}