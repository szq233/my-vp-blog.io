---
layout: Post  # 必须
title: js中回调函数的概念  # 博客标题（必须）
date: 2021-05-25 06:52:20
useHeaderImage: true  # 是否在博客中显示封面图（可选，默认：false）
headerImage: /img/post-bg/default.png  # 博客封面图（必须，即使上一项选了 false，因为图片也需要在首页显示）
headerMask: rgba(40, 57, 101, .4)  # 封面图遮罩（可选）
headerImageCredit: Jeremy Fenske  # 图片来源，比如图片作者的名字（可选，只在 "useHeaderImage: true" 时有效）
headerImageCreditLink: https://www.artstation.com/artwork/nLY0K  # 图片来源的链接（可选，只在 "useHeaderImage: true" 时有效）
catalog: true  # 启用/禁用当前页的右侧目录，会覆写 `themeConfig.catalog`（可选，默认：true）
giscus: false  # 启用/禁用当前页的 Giscus 评论（可选，默认：true）
tags:  # 博客标签（可选）
  - JavaScript
categories: JavaScript
---

*概要：Js中回调函数的概念...*

<!--more-->

## 个人理解：

### 回调函数的定义：

将一个函数作为参数的形式传入另一个函数中，那么这个函数就是回调函数，另一个函数可以决定在何时何处调用这个传入的回调函数。

比如：

```javascript
//不传参示例
function foo(callback) {
    //函数foo，callback是接收回调函数的形参，不一定命名为callback
	console.log("a");//打印a
    console.log("b");//打印b
    callback();//执行回调函数
}
function f() {
	console.log("c");//打印c
}
foo(f);//执行foo函数，将f函数作为参数传入，f函数就是回调函数

//传参示例
var param1 = "a";
function foo(param,callback) {
    //param是函数foo接收param1参数的形参
    //函数foo，callback是接收回调函数的形参，不一定命名为callback
    let param2 = "c"
	console.log(param);//打印param1
    console.log("b");//打印b
    callback(param2);//执行回调函数
}
function f(param) {
    //param为接收param2参数的形参
	console.log(param)//打印param2
}
foo(param1,f);//执行foo函数，将param1传入，将f函数作为参数传入，f函数就是回调函数
```

### javascript中回调函数的作用：

1、代码的功能执行位置更清晰

2、解决异步编程问题，使异步执行操作的执行顺序及先后变得可以控制。异步执行操作有：定时器、建立网络连接、读取网络流数据、向文件写入数据、Ajax提交、请求数据库服务，等等。

但是，过度的使用回调函数会产生回调地狱问题，因此promise和async、await是解决异步编程的更优方案。