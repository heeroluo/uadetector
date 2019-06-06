# UA Detector

UA Detector 是一个用于分析 **User-Agent** 字符串的程序包，能识别出**操作系统**、**设备品牌**（主要针对移动设备）、**浏览器核心**以及**浏览器**。


## 在命令行界面中使用

通过 npm 全局安装程序包：

```
npm install uadetector -g
```

安装成功后，可以运行此命令查看版本号：

```
uadetect -v
```

### 分析 User-Agent

分析设备品牌：
```
uadetect "an useragent string" -devicebrand
```
分析操作系统：
```
uadetect "an useragent string" -os
```
分析浏览器核心：
```
uadetect "an useragent string" -browsercore
```
分析浏览器： 
```
uadetect "an useragent string" -browser
```
分析全部： 
```
uadetect "an useragent string" -devicebrand -os -browsercore -browser
```

结果默认以 JSON 字符串输出，但也可以通过 format 参数指定输出格式：

```
uadetect "an useragent string" -os -format "%name|%version"
```


## 作为依赖包使用

在项目目录下运行命令安装程序包：

```
npm install uadetector
```

调用接口进行分析：

``` javascript
const detector = {
	os: require('uadetector/os'),
	devicebrand: require('uadetector/devicebrand'),
	browsercore: require('uadetector/browsercore'),
	browser: require('uadetector/browser')
};

const USER_AGENT = 'an useragent string';

console.dir(detector.os.exec(USER_AGENT));
console.dir(detector.devicebrand.exec(USER_AGENT));
console.dir(detector.browsercore.exec(USER_AGENT));
console.dir(detector.browser.exec(USER_AGENT));
```