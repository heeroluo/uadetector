# UA Detector

UA Detector 是一个用于分析 **User-Agent** 字符串的程序包，能识别出**操作系统**、**浏览器核心**以及**浏览器**。对于移动设备，还可以识别出**设备品牌**。

## 在命令行界面中使用

通过 npm 全局安装：

```bash
npm install uadetector -g
```

安装成功后，可以运行此命令查看版本号：

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
uadetect "an useragent string" -devicebrand -os -browsercore -browser
```

结果默认以 JSON 字符串输出，但也可以通过 output-format 参数指定输出格式：

```bash
uadetect "an useragent string" -os -output-format "%name|%version"
```

## 作为依赖包使用

在项目目录下运行命令安装程序包：

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

## Changelog

### v2.1.0

- 优化小米、海信、金立、小辣椒、天语、酷派的识别规则。
- 新增学而思、作业帮、比亚迪（车机）的识别。

### v2.0.0

- 优化 vivo 设备的识别规则。
- 优化识别设备型号的正则表达式。
- `browser-core` 改名为 `browser`。
- `browser` 改名为 `client`。
- 增加类型声明注释。
