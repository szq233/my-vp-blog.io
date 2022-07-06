---
layout: Post  # 必须
title: js中闭包的概念  # 博客标题（必须）
date: 2021-05-25 07:14:34
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

*概要：Js中闭包的概念...*

<!--more-->

## 个人理解：

### js中闭包的定义:speech_balloon:：

一个函数及其对外部某几个参数的引用，形成的一个整体，可以称之为闭包。

例如：

```javascript
()(var a = 1, b=2;
   function foo() {
      return a+b;
    })
//明显函数foo引用了foo函数外部的两个变量，这个函数和其引用的变量（环境）形成一个整体
//这样一个整体可以称之为闭包
```

我之前在学习闭包的时候所参照的一些返回函数和内嵌函数的例子，那么这里也简单做个例子：

```javascript
var a = "全局变量";
function foo1() {
	var a = "局部变量"
    function foo2() {
        console.log(a);
	} 
    return foo2();
}
foo1();//打印“局部变量”
//foo2函数和局部变量a参数形成了闭包
//foo1函数实际执行return的foo2函数，foo2与局部变量a形成闭包，所以打印的是局部变量而不是全局变量
```

### 那么为什么要这样使用闭包呢:question:？

原因是避免全局变量的影响。在es6的let、const新关键字出现之前，javascript只有函数作用域的概念而没有块作用域的概念。使用局部变量则需要函数内部定义，而如何访问到函数内部定义的局部变量，这就是闭包的作用。

### 闭包的作用:sunglasses:：

1、通过闭包可以访问局部变量

2、可以是局部变量驻留内存中，避免使用全局变量

### 闭包的缺陷:neutral_face:：

由于闭包里作用域返回的局部变量资源不会被立刻销毁回收,所以可能会**占用更多的内存**;所以过度使用闭包会导致性能下降;

