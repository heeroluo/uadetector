# UA Detector

UA Detector 是一个用于分析 **User-Agent** 字符串的程序包，能从中识别出**操作系统**、**浏览器**、**客户端**，以及**设备品牌**（仅移动设备）。

## 在命令行界面中使用

通过 npm 全局安装：

```bash
npm install uadetector -g
```

安装成功后，可以通过此命令查看版本号：

```bash
uadetect -v
```

### 分析 User-Agent

分析设备品牌：

```bash
uadetect "an useragent string" -devicebrand
```

分析操作系统：

```bash
uadetect "an useragent string" -os
```

分析浏览器：

```bash
uadetect "an useragent string" -browser
```

分析客户端：

```bash
uadetect "an useragent string" -client
```

分析全部：

```bash
uadetect "an useragent string" -devicebrand -os -browser -client
```

结果默认以 JSON 字符串输出，但也可以通过 `output-format` 参数指定输出格式：

```bash
uadetect "an useragent string" -os -output-format "%name|%version"
```

## 作为依赖包使用

在需要使用本程序包的项目中安装为依赖：

```bash
npm install uadetector
```

调用接口进行分析：

``` javascript
const detector = {
  os: require('uadetector/os'),
  deviceBrand: require('uadetector/device-brand'),
  browser: require('uadetector/browser'),
  client: require('uadetector/client')
};

const USER_AGENT = 'an useragent string';

console.dir(detector.os.exec(USER_AGENT));
console.dir(detector.deviceBrand.exec(USER_AGENT));
console.dir(detector.browser.exec(USER_AGENT));
console.dir(detector.client.exec(USER_AGENT));
```

## 识别能力

### 操作系统

支持以下操作系统的识别：

> Android、BlackBerry、ChromeOS、Darwin、FreeBSD、Linux、OpenHarmony、Symbian、Windows、Windows CE、Windows Mobile、Windows Phone、YunOS、iOS、macOS(Mac OS X)

### 浏览器（内核）

支持以下浏览器（内核）的识别：

> Chrome、Chrome Mobile、Edge、Firefox、IE、IE Mobile、Mobile Firefox、Mobile Safari、Opera (Presto)、Opera Mini、Opera Mobile (Presto)、Safari、Webkit (Mobile)、Webkit (PC)

同时也支持对以下爬虫的识别：

> Baidu Spider、Googlebot、Bingbot、DingTalkBot、SogouSpider、YisouSpider、Sosospider、360Spider

### 客户端

支持以下客户端的识别：

> 2345 手机浏览器（Mobile）、2345 浏览器 (PC)、360 浏览器 (Mobile)、Edge (Mobile)、Edge (PC)、Electron、GreenBrowser、HeyTap浏览器、MIUI 浏览器、Opera (Blink)、Opera Mobile (Blink)、Oppo 浏览器、QQ (Mobile)、QQ 浏览器 (Mobile)、QQ 浏览器 (PC)、Qzone (Mobile)、UC 浏览器 (Mobile)、UC 浏览器 (PC)、Vivo 浏览器、uni-app、三星浏览器、世界之窗、企业微信 (Mobile)、企业微信 (PC)、傲游 (Mobile)、傲游 (PC)、华为浏览器、夸克浏览器、小白浏览器、微信 (Mobile)、微信 (PC)、搜狗浏览器 (Mobile)、搜狗浏览器 (PC)、新浪微博 (Mobile)、欧朋 (Mobile)、猎豹浏览器 (Mobile)、猎豹浏览器 (PC)、百度 (Mobile)、百度浏览器 (Mobile)、百度浏览器 (PC)、联想浏览器、钉钉 (Mobile)

当无法命中以上客户端的识别规则时，将回退至浏览器识别。

注意：

- 由于大量浏览器使用的都是 Chrome 内核，无法一一枚举排除，部分甚至没有在用户代理字符串上增加独立的标识（例如 PC 端的 360 浏览器）。因此，识别结果为 Chrome 或 Chrome Mobile 时，不一定是这两款浏览器。
- 对于移动端浏览器以及 WebView 而言，它们的用户代理字符串中有可能包含 Safari 浏览器的关键字，所以即使识别为 Safari，也不一定就是这款浏览器。

### 设备品牌

支持以下设备品牌的识别：

> 360、Google、HTC、LG、OPPO、Realme、TCL、iPad、iPhone、iPod、realme、vivo、一加、三星、中兴、乐丰、乐视、亿通、优学派、优购、传音、作业帮、华为、华硕、坚果、夏新、天语、学而思、宇飞来、小度、小米、小辣椒、康佳、快易典、摩托罗拉、朵唯、欧沃、比亚迪、波导、海信、海尔、糖果、索尼、纽曼、美图、联想、诺基亚 (Android)、诺基亚/Lumia、读书郎、酷比、酷派、金立、锤子、飞利浦、魅族

注意：

- 由于部分设备或浏览器的 User-Agent 中有设备型号而没有品牌标识。故本程序包除了根据品牌标识进行匹配以外，也会根据型号规则进行匹配。然而，设备型号实在太多，无法逐一枚举，不同厂商也可能使用近似的型号，故存在误判的可能性。
- 由于荣耀手机的型号规则与华为较为相似，暂无有效方法将两者区分开，故荣耀品牌归并到华为品牌中，不做区分。

## Changelog

### v2.2.0

- 优化部分浏览器的识别结果名称，均增加“(PC)”后缀。包括：
  - 猎豹浏览器 (PC)
  - 2345 浏览器 (PC)
  - 百度浏览器 (PC)
- 优化 IE 浏览器的识别规则。
- 优化 Linux 系统的识别规则。
- 新增 DingTalkBot 爬虫的识别（位于浏览器和客户端识别模块中）。
- 新增 FreeBSD 系统的识别。
- 联想品牌的识别规则新增 `erazer` 关键词。

### v2.1.0

- 优化小米、海信、金立、小辣椒、天语、酷派的识别规则。
- 新增学而思、作业帮、比亚迪（车机）的识别。

### v2.0.0

- 优化 vivo 设备的识别规则。
- 优化识别设备型号的正则表达式。
- `browser-core` 改名为 `browser`。
- `browser` 改名为 `client`。
- 增加类型声明注释。
