---
layout: Post  # 必须
title: webpack入坑  # 博客标题（必须）
date: 2021-06-14 14:44:36
useHeaderImage: true  # 是否在博客中显示封面图（可选，默认：false）
headerImage: /img/post-bg/default.png  # 博客封面图（必须，即使上一项选了 false，因为图片也需要在首页显示）
headerMask: rgba(40, 57, 101, .4)  # 封面图遮罩（可选）
headerImageCredit: Jeremy Fenske  # 图片来源，比如图片作者的名字（可选，只在 "useHeaderImage: true" 时有效）
headerImageCreditLink: https://www.artstation.com/artwork/nLY0K  # 图片来源的链接（可选，只在 "useHeaderImage: true" 时有效）
catalog: true  # 启用/禁用当前页的右侧目录，会覆写 `themeConfig.catalog`（可选，默认：true）
giscus: false  # 启用/禁用当前页的 Giscus 评论（可选，默认：true）
tags:  # 博客标签（可选）
  - webpack
categories: webpack
---

## 结论：

webpack不同版本的options不同以及其使用的各个loader和plugin之间的版本差异导致的各种兼容问题真的是巨坑！！！:sob:

## 解决办法：

老老实实踩坑。:poop:

