简体中文 |  [English](./README.md)

<h1 align="center">
<b>TechUI-lite 开发包</b>
</h1>
<div align="center">TechUI-lite是一款免费简单易用的动态SVG可视化大屏开发框架，基于vite+react开发</div>

<p align="center">
  <a href="https://lite.techui.net/docs">文档</a> •
  <a href="https://lite.techui.net/">演示站</a> •
  <a href="https://www.npmjs.com/package/techui-react-lite">核心库</a> •
  <a href="https://techui.net/docs">高级版</a> •
  <a href="https://t.me/ayin86cn">Telgram</a>
</p>

## 🛡️公告

**techUI-Lite框架完全免费，自由使用，其核心文件非开源，发布在NPM服务器**

**如果你发现这个框架对你有帮助，请给我一个star，我会更有动力开发更多的免费框架。我有非常多的不错的主意。**

**如果star数量达到500，我会把高级版的adaptivePanel下放到免费版。**

还有一款付费Premium版本，提供了更多的强大的功能，相关文档和Demo请访问这里 [TechUI-Premium](https://techui.net/docs)

注意：框架内的SVG素材、代码，仅限于框架内使用，请勿提取后用于其他用途。



-----

作者于2023年8月1日开始学习React，到了8月中旬已完成React学习任务，为巩固React知识，重构了TechUI-Lite框架。在功能上与TechUI-Vue3-Lite一致。这个重构工作大约花费了两周时间，Wasm模块仍然采用之前用Rust语言开发的。

由于作者一直是独立开发，所以在前端开发中几乎没有使用TypeScript语言。然而，在构建这个框架时，使用了TypeScript。对于ECharts图表的复杂配置和地图的GeoJSON，作者对这些元素的类型感到困惑，因此在定义这些元素的类型时使用了部分"any"。作者不确定这是否符合TypeScript开发的最佳实践。

这个框架是在短短两周内用React重构完成的，因此难免可能存在一些bug。如果有用户去使用它，我将会在这上面花费时间继续深入迭代完善。如果没有太多人使用，那么我将把重心放在学习Python上。如果你觉得这个框架对你有帮助，请考虑给它点一个Star，感谢支持！

文档部分，请暂时参考 [Techui-Vue3-Lite Docs](https://lite.techui.net/docs)的版本，和React的版本的框架，使用上基本没太大的差别。

-----





**本开发包内置4个数据屏，如下图。**

**演示GIF动画**

<img src="./demoImage/techui-react-lite.gif" style="border-radius:10px" width="800" />

**数据屏A**

<img src="./demoImage/dashboardA-CN.png" style="border-radius:10px" width="800" />

**数据屏B**

<img src="./demoImage/dashboardB-CN.png" style="border-radius:10px" width="800" />

**数据屏C**

<img src="./demoImage/dashboardC-CN.png" style="border-radius:10px" width="800" />

**数据屏D**

<img src="./demoImage/dashboardD-CN.png" style="border-radius:10px" width="800" />


**更多Demo，请查阅 [TechUI-Lite-Demo](https://lite.techui.net/)** 

-----



## ✨特性

- **🖥️全端适配**

  完美的等比适配方案，个人电脑、手机、平板、企业拼接屏，可以说绝大多数终端设备均可以完美适配。

- **🛸自由开发无限制**

  采用vite、react等流行技术栈，通过调用自研发组件和图表组件，不需要过多繁琐的开发过程即可快速部署上线，大大缩短了开发周期。真正做到了源码级的自由开发。

- **📊企业拼接屏**

  面对企业级的拼接屏，我们有着非常多的展现方案，可以根据客户的拼接屏设备情况进行定制开发。在任意设备下均可以达到最佳的展现效果。

- **🧩去位图化全面使用动态SVG**

  全面矢量化（去位图化），因可视化大屏的特殊使用场景，采用传统位图的情况图形放大细节模糊，而采用矢量图细节缩放后还能保持原来的细节清晰度。


- **🚀稳步迭代急速响应**

  本框架历经多个版本迭代，bug修复及时，功能拓展稳步进行中，Lite版本和Premium同步更新。

- **🧑‍🚀完全免费，自由使用**

  lite版本，完全免费，无任何使用限制，可用于任何类型的产品，项目等。


-----



## 📜更新说明

- **20230714 techui-react-lite-ver3.5 Lite正式版发布，其SVG元素节点计算采用WASM组件计算返回**


-----

## 📖安装教程

1.  `cnpm i` 安装依赖，建议使用cnpm
2.  `npm run dev` 启动项目即可预览

开发包介绍和使用方式请查阅 [文档](https://techui.net/docs)

-----

## 🛠️兼容性和Nodejs版本

1. nodejs 16-18 支持良好其他版本未测试
2. 除IE外的主流浏览器均支持良好，包括移动端浏览器。

-----

## 🌟合作洽谈

Lite版本框架免费使用，不提供任何技术支持，遇到问题请在github提交issues，或者添加以下QQ群进行技术交流。

数据可视化TechGroupQQ群:119059920 技术交流

或者添加 [TechUI discord](https://discord.gg/JXgn5Gq2)讨论群组。

或者添加 [TechUI Telgram](https://t.me/+RJZ4cmDrcCFmNWNl)讨论群组。

对于付费服务，如定制开发、技术支持，或购买高级许可证，请通过以下联系方式与我联系

微信：ayin86cn

<img src="./demoImage/QRcode.png" width="300" />

海外客户，请通过邮件联系  ayin86cn@gmail.com

也可以添加TechUI的Telgram讨论群组 [TechUI](https://t.me/+RJZ4cmDrcCFmNWNl)

-----
## ❤️我能提供的服务

作者本人，由UI设计师转为前端开发，从业15年之久，在一个项目或产品的开发中，可以承担的职责有：产品经理、UI设计师、前端开发。

所以，可以说是初创公司最佳且划算的合作伙伴，欢迎洽谈合作。


#### 可以具体做的工作

- UI设计图
- 产品、项目的规划和设计
- 可视化项目开发
- GEO项目开发（echarts+geojson+在线地图）
- Rust开发WASM模块
- 任意类型的业务系统
- 移动端开发
- 文档编撰
- 前端安全，加解密
