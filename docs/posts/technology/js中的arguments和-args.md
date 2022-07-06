---
layout: Post  # 必须
title: js中的arguments和...args  # 博客标题（必须）
date: 2021-06-04 05:20:54
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

*概要：学习express中间件原理时候遇到的arguments对象和...args形参，从一脸懵逼到简单认识...*

<!--more-->

## 引言：

最近在学习express框架的中间件原理时候遇到了一系列问题，让我总算是明白了啥叫基础不牢，地动山摇:sob:。首先是学习视频中使用的以下传参和解析方式。

```javascript
const slice = Array.prototype.slice；
function a(n) {
	const info = {};
    info.stack = slice.call(arguments, 1);
}
```

刚看到时我是真的满脸问号，slice是从Array原型上提取的方法，这arguments是啥，找半天愣是没找着哪里传入的参数。

## 了解过程1：

再搜遍百度后，发现原来这个参数是function自带的属性，是一个类数组对象，保存的是当前函数传入的参数，是一个函数本身就有的对象属性。那么问题又来了，一个对象怎么使用了数组的slice方法，再一遍搜索百度之后（学习就是面向百度的过程:satisfied:），发现，这个类数组对象有.length属性。可以使用数组的slice方法进行数组切片。

```javascript
function max() {
    console.log(arguments.length);
}
max(1, 2, 3);//3
```

但是，由于该arguments对象继承于Object.prototype，原生没有slice方法，所以需要从数组原型链上提取slice方法来使用，所以其实第一个代码示例中的`slice.call(arguments, 1);`就是将arguments对象转换成数组，并切片返回第二个元素开始的所有元素的数组。

## 了解过程2：

了解了这些，我回过头来看代码，清晰了很多，但是又发现了一个与arguments很相似的参数，`(...args)`。我以前学过的知识的印象里，这东西叫三点语法，作用是可以接收未知数量的参数。由于这个语法是真的和arguments有关系，我在百度arguments的同时了解到了`...args`的全貌。

首先，这个语法是ES6引入的新语法，全名叫做rest parameters(剩余参数)，三个点后面是自定义的参数名，它接收后得到的是一个真正的数组，也确实可以使用来传入未知数量的参数，如下示例。

```javascript
function foo(...rest) {
	console.log(rest);
}
foo(1, 2, 3, 4);//[1,2,3,4]
```

这样的特性使得它可以替代arguments来实现一些功能。:+1:

但是，它既然叫做剩余参数，那么一定有其”剩余“的特性，如下示例代码可以说明。

```javascript
//代码1
function foo2(a, ...rest) {
    console.log(a);
    console.log(rest);
}
foo2(1, 2, 3, 4);
//1
//[2, 3, 4]
/////////////////////////////////////////
//代码2
function foo3(a, b, ...rest) {
    console.log(a);
    console.log(b);
    console.log(rest);
}
foo2(1, 2, 3, 4);
//1
//2
//[3, 4]
/////////////////////////////////////////
```

可以说明，剩余参数接收的是全部参数中未与形参对应传入的剩下的参数。

值得注意的是：

1、三点语法只能放在所有形参的最后，不然会错，因为它已经包揽了未与它之前形参对应的剩余参数，再整个形参来接收看看有没有剩下的参数岂不是看不起它了。:joy_cat:

2、使用剩余参数后，函数的length属性会发生改变。

```javascript
function foo(a, b, ...rest) {
}
foo.length; //2
```

说明，length不包含rest。

3、不能和arguments一起使用。

## 了解过程3：

在演示所学的代码的时候，我发现三点语法还可以当做运算符来使用，实现如下的结果。

```javascript
function max(...args) {
    console.log(...args);
}
max(1, 2, 3);//1 2 3
```

没错，对数组进行了解构，将[1, 2, 3]解构成了1,2,3，它可以将可遍历的数组，对象甚至是字符串进行解构，再进行赋值，就可以实现数组复制，对象复制，字符串转换数组等功能。

## 结束语：

JavaScript基础知识内容太多了！:triumph::sob:

