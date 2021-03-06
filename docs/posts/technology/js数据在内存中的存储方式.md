---
layout: Post  # 必须
title: JavaScript不同数据在内存中存储方式  # 博客标题（必须）
date: 2021-04-29 22:44:01
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

*概要：Js数据类型在内存中的存储形式......*

<!--more-->

## Js数据类型：

- 简单数据类型（基本数据类型）:Number、String、Boolean、Undefined、Null
- 复杂数据类型（引用数据类型）:Object、Array、Function

## 数据结构：

- 常用的数据结构：数组、栈、堆、列表、链表、图、树
- Js上述两种数据类型使用两种数据结构：栈（先进后出）、堆（特殊的树形结构）

## 数据存储方式：

### 1、简单数据类型：

​	简单数据类型保存在栈中，这些类型在内存中别占有固定大小，他们的值保存在栈空间，按值访问。变量在声明过程中，会在栈中开辟一段内存空间，变量值直接存在该内存中，变量读写的是它们实际保存的值。

![](./js数据在内存中的存储方式/01.png)

​	简单数据数据复制时，会为新声明的变量直接开辟一段新空间， 然后把值复制到为新变量分配的空间中

​	简单数据类在当前执行环境结束时销毁。

### 2、复杂数据类型：

​	复杂数据类型是不固定大小的数据，但是存放他们的地址大小是固定的，所以把地址保存在栈中，值保存在堆中。复杂数据类型是一个指针，指针保存在栈中，但是指针指向的是堆。即存储复杂数据类型的变量保存在栈中，数据本身保存在堆中。读取其数据时，先访问栈中的地址，通过地址找到存在堆中的数据。

![](./js数据在内存中的存储方式/02.png)

​	复杂数据类型在进行拷贝的时候，分为深拷贝和浅拷贝：
​			浅拷贝：复制的是引用地址，所以拷贝的变量存储的引用地址和原来的指向堆中同一个地址。

​	深拷贝：栈中开辟一段新的空间存储复制的变量，堆中开辟一个新的空间存储复制的内容，栈中变量存储的引用地址指向堆中复制的一个新的地址。