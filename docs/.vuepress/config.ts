import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

export default defineUserConfig({
  lang: 'zh-CN', // 语言
  title: "Szq233's Blog", // 标题
  description: 'szq233的博客', // 描述，对应meta标签中的content，利于seo优化
  base: '/my-vp-blog.io/', //
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'VuePress',
      description: 'Vue 驱动的静态网站生成器',
    },
  },
  theme: gungnirTheme({
    // 你的主题配置
    navbarTitle: "Szq233",
    hitokoto: true,
    locales: {
      "/": {
        navbarTitle: "Peace",
        selectLanguageName: 'English'
      },
      "/zh/": {
        navbarTitle: "静",
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言'
      }
    },
    navbar: [
      // NavbarItem
      {
        text: '首页',
        link: '/',
        icon: 'fa-fort-awesome'
      },
      {
        text: '博文',
        link: '/posts/',
        icon: 'fa-book-open'
      },
      {
        text: '归档',
        link: '/tags/',
        icon: 'fa-box-open'
      },
      {
        text: '链接',
        link: '/links',
        icon: 'fa-satellite-dish'
      },
      {
        text: '关于',
        link: '/about/',
        icon: 'fa-question-circle'
      }
    ],
    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: "Szq233",

      // 必须：头像，将在首页和移动端侧边栏显示
      avatar: "/img/avatar.png",

      // 必须：个人简介，将在首页显示
      description: "A average person who needs constant self redemption.",

      // 可选：社交平台账号，将在首页和移动端侧边栏显示
      sns: {
        github: "szq233",  // Github
        // linkedin: "xiaohan-zou-55bba0160",  // 领英
        // facebook: "renovamen.zou",  // Facebook
        // twitter: "renovamen_zxh",  // 推特
        // zhihu: "chao-neng-gui-su",  // 知乎
        // weibo: "your-weibo-id",  // 新浪微博
        qq: {
          icon: "fa-qq",
          link: "http://wpa.qq.com/msgrd?v=3&uin=470774720&site=qq&menu=yes"
        }, // QQ
        email: "mailto:470774720@qq.com",  // 邮箱
        rss: "/rss.xml",  // RSS 文件的链接
        // 添加其他的社交平台
        // bilibili: {  // 随便什么名字
        //   icon: "ri-bilibili-line",  // 社交平台的图标
        //   link: "https://www.bilibili.com/"  // 主页链接
        // }
        // ...
      }
    },
    pages: {
      // 标签页配置
      tags: {
        // 可选：标签页副标题
        subtitle: '吼哇朋友们，这是标签归档页',

        // 可选：标签页封面图路径和蒙版
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)'
        }
      },

      // 链接页配置
      links: {
        // 可选：链接页副标题
        subtitle: '吼哇朋友们，这是链接页',

        // 可选：链接页封面图路径和蒙版
        bgImage: {
          path: '/img/pages/links.jpg',
          mask: 'rgba(64, 118, 190, 0.5)'
        }
      }
    },
    homeHeaderImages: [
      // 图 1
      {
        "path": "/img/home-bg/1.svg",
        "mask": "rgba(40, 57, 101, .4)"
      },
      // 图 2 ...
    ],
    blogNumPerPage: 20  // 可选：每页的博客数量，默认：10
  })
});