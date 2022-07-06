---
layout: Post  # 必须
title: 关于js中深拷贝和浅拷贝思考  # 博客标题（必须）
date: 2021-06-23 22:47:12
useHeaderImage: true  # 是否在博客中显示封面图（可选，默认：false）
headerImage: /img/post-bg/default.png  # 博客封面图（必须，即使上一项选了 false，因为图片也需要在首页显示）
headerMask: rgba(40, 57, 101, .4)  # 封面图遮罩（可选）
headerImageCredit: Jeremy Fenske  # 图片来源，比如图片作者的名字（可选，只在 "useHeaderImage: true" 时有效）
headerImageCreditLink: https://www.artstation.com/artwork/nLY0K  # 图片来源的链接（可选，只在 "useHeaderImage: true" 时有效）
catalog: true  # 启用/禁用当前页的右侧目录，会覆写 `themeConfig.catalog`（可选，默认：true）
giscus: false  # 启用/禁用当前页的 Giscus 评论（可选，默认：true）
tags:  # 博客标签（可选）
  - JavaScript
  - Js数据
categories: JavaScript
---

*概要：对Js数据的深拷贝和浅拷贝做一个总结，加深记忆*

<!--more-->

## Js数据类型

由基本数据类型和引用数据类型组成，简单数据类型包括（Number、String、Boolean、Undefined、Null）；引用数据类型包括（Object、Array、Function）。两者的数据结构和存储方式都有所不同。具体参考我写的另一篇博文（[Blog：js数据在内存中的存储方式-2021.04.29](https://szq233.github.io/2021/04/29/js%E6%95%B0%E6%8D%AE%E5%9C%A8%E5%86%85%E5%AD%98%E4%B8%AD%E7%9A%84%E5%AD%98%E5%82%A8%E6%96%B9%E5%BC%8F/#more)）。

由于不同的数据存储方式，Js引用数据类型拷贝具有深拷贝和浅拷贝的区别。

## Js数据浅拷贝

顾名思义，比较浅层面的拷贝。对于引用数据来说，一个变量保存了一个引用类型数据，那么该变量其实是保存了一个指向数据堆中该引用数据的一个引用地址（理解为“变量保存了一个指向数据堆中引用类型数据的指针”可能对一些小伙伴来说更好理解）。所以在浅层面变量保存的是引用地址（指针），浅拷贝就是拷贝引用地址（指针）。代码示例。

```javascript
const obj = {
	name: '测试对象'
}
//对象是一个引用类型数据，obj这个变量保存了指向{name：‘测试对象’}（方便理解这么写）这个对象的引用地址，这个引用地址是该数据在数据堆中位置，比如我拿二维坐标模拟，现在存的是（x=1米，y=2米）。
const obj2 = obj;
//实现浅拷贝
//obj2将obj保存的（x=1米，y=2米）这么一个坐标位置复制过来，赋值到自己身上。
//那么obj2对应的数据跟上面obj一样，是同一个{name: '测试对象'},因为坐标是一样的嘛。
```

#### 实现浅拷贝的方法

##### 1、变量赋值

## Js数据深拷贝

顾名思义，实现深层次的拷贝，深挖到数据堆中，将对应数据堆中的数据进行拷贝一份而不是拷贝引用地址。

如下代码示例。

```javascript
//为方便解释，暂时对象中只包含基本类型数据的属性。
const obj = {
	name: '测试对象'，
    age: 12
}

const obj1 = {} //初始化一个空对象，拿来拷贝obj

for(let key in obj) {
	obj1[key] = obj[key]
}
//以下是测试
//使用node命令运行js文件
console.log(obj)//{ name: '测试对象', age: 12 }
console.log(obj1)//{ name: '测试对象', age: 12 }
//两者内容一样，实现了拷贝
console.log(obj === obj1)//false
//两者保存的不是同一个数据，实现了深拷贝
```

:exclamation:但是在实际中对象属性不一定是基本类型数据，也有可能是引用类型数据，所以需要使用其他方法实现深拷贝。

#### 实现深拷贝的方法

##### 1、递归

```javascript
function deepClone(source) {
  const newObj = source.constructor === Array ? [] : {};//判断source（被拷贝目标）是数组还是对象
  for(let key in source) {
    if(source.hasOwnProperty(key)) {
      if(source[key] && typeof source[key] === 'object'){
        //判断每一次遍历属性的值是否存在并且是对象，则递归
        newObj[key] = source.constructor === Array ? [] : {};
        newObj[key] = deepClone(source[key]);
      }
      else {
        newObj[key] = source[key];
      }
    }
  }
  return newObj;//返回拷贝处理后的对象，以用于递归，递归完成后该对象完成深拷贝
}
//自定义一个含有许多引用类型数据属性的对象
const obj = {
  name: '测试对象2',
  list: [1,2,3,4,5],
  post: {
    title: '测试标题',
    content: '测试内容'
  },
  music: [
    {
      mtitle: '晴天',
      mauthor: '周杰伦'
    },
    {
      mtitle: '美人鱼',
      mauthor: '林俊杰'
    }
  ]
}
const obj1 = deepClone(obj);//调用写好的拷贝方法，将obj拷贝给obj1
//以下是测试
console.log(obj);
/*
{
  name: '测试对象2',
  list: [ 1, 2, 3, 4, 5 ],
  post: { title: '测试标题', content: '测试内容' },
  music: [
    { mtitle: '晴天', mauthor: '周杰伦' },
    { mtitle: '美人鱼', mauthor: '林俊杰' }
  ]
}
*/
console.log(obj1);
/*
{
  name: '测试对象2',
  list: [ 1, 2, 3, 4, 5 ],
  post: { title: '测试标题', content: '测试内容' },
  music: [
    { mtitle: '晴天', mauthor: '周杰伦' },
    { mtitle: '美人鱼', mauthor: '林俊杰' }
  ]
}
*/
//两者内容一样，实现了拷贝
console.log(obj === obj1);//false
//两者不是引用的同一个对象，实现了深拷贝
```

##### 2、使用JSON.stringify和JSON.parse

总所周知，json是一种字符串形式的数据，js中使用JSON方法将json数据在字符串与特殊类型数据之间转换，同样，总所周知，字符串在js中是基本数据类型String，拷贝基本类型数据，将在栈中开辟一个新空间并拷贝内容进其中。

那么，就可以将一个引用类型数据转换为json字符串形式的数据，将这字符串先赋值给一个暂存变量，再将暂存变量中的json字符串转换为一个引用类型数据并赋值给一个新变量，就可以实现引用类型数据深拷贝。如下代码示例。

```javascript
//自定义一个较为复杂的对象
const jsonObj = {
  name: '测试对象2',
  list: [1,2,3,4,5],
  post: {
    title: '测试标题',
    content: '测试内容'
  },
  music: [
    {
      mtitle: '晴天',
      mauthor: '周杰伦'
    },
    {
      mtitle: '美人鱼',
      mauthor: '林俊杰'
    }
  ]
}

const jsonBuffer = JSON.stringify(jsonObj);//对象转换为json字符串，并赋值给一个暂时存储用的变量。
const jsonObj1 = JSON.parse(jsonBuffer);//将暂存变量中json字符串重新转换为对象，并赋值给一个新的变量。
									/*拷贝完成*/
//以下是测试
console.log(jsonObj);
/*
{
  name: '测试对象2',
  list: [ 1, 2, 3, 4, 5 ],
  post: { title: '测试标题', content: '测试内容' },
  music: [
    { mtitle: '晴天', mauthor: '周杰伦' },
    { mtitle: '美人鱼', mauthor: '林俊杰' }
  ]
}
*/
console.log(jsonObj1);
/*
{
  name: '测试对象2',
  list: [ 1, 2, 3, 4, 5 ],
  post: { title: '测试标题', content: '测试内容' },
  music: [
    { mtitle: '晴天', mauthor: '周杰伦' },
    { mtitle: '美人鱼', mauthor: '林俊杰' }
  ]
}
*/
//两者内容一样，实现了拷贝
console.log(jsonObj === jsonObj1);
//两个变量引用的不是同一个对象，实现了深拷贝。
```

## 总结

写的有点多，一直敲的没停，手疼。:joy_cat: