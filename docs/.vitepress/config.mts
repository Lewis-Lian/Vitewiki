import { defineConfig ,type DefaultTheme} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,// 设置为 true 以启用最后更新时间戳
  title: "LewisViteWiki",
  description: "Lewis的个人Wiki",
   head: [
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/logo.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/logo.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/logo.png",
      },
    ],
    ["link", { rel: "shortcut icon", href: "/favicon-16x16.ico" }],
  ],
  themeConfig: {
    search: {
      provider: "local",
      options: {
        miniSearch: {
          options: {
            /* ... */
          },
          searchOptions: {
            /* ... */
          },
        },
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "没有找到结果",
            resetButtonTitle: "清除搜索条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "关闭",
            },
          },
        },
      },
    },
     logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // 导航项，包含文字和跳转的链接
      { text: '首页', link: '/' },
      { text: '指南', link: '/Studynotes/' },
      { text: 'Blog', link: "http://i615.cn" }
    ],
 // 配置侧边栏
    sidebar: [
      { text: '学习笔记', link: '/Studynotes/' },
      {
      text: 'Python',
      collapsed: false,
      items: [
        { text: '基础知识', 
          items: [
            { text: 'v3程序设计的语言和分类', link: '/Studynotes/Python/1/1-1' },
            { text: 'Python 安装与环境配置指南', link: '/Studynotes/Python/1/1-2' },
            { text: 'Python输入和输出', link: '/Studynotes/Python/1/1-3' },
            { text: '程序设计的语言和分类', link: '/Studynotes/Python/1/1-4' }
          ]

         },
      ]
    },
    {
      text: 'JAVA',
      collapsed: false,
      items: [
        { text: '基础知识', 
          items: [
            { text: 'JAVA简介', link: '/Studynotes/java/1/1-1' },
            { text: 'Java进阶', link: '/Studynotes/java/1/1-2' },
            { text: 'Java数据结构与算法', link: '/Studynotes/java/1/1-3' },
            { text: 'Java 注释', link: '/Studynotes/java/1/1-4' },
            { text: 'Java 对象和类', link: '/Studynotes/java/1/1-5' }
          ]
         },
      ]
    },
    {
      text: 'git',
      collapsed: true,
      items: [
        { text: 'Windows版Git安装教程', link: '/Studynotes/git/1-1' },
        { text: 'Git 常用命令速查表', link: '/Studynotes/git/1-2' },
        { text: 'Git 图文教程', link: '/Studynotes/git/1-3' }
      ]
    },
    {
      text: 'Github',
      collapsed: true,
      items: [
        { text: 'GitHub代码管理教程', link: '/Studynotes/github/1-1' }
      ]
    }  


    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Lewis-Lian' }
    ],
    footer: {
      message: `<a href="https://wiki.i615.cn/" target="_blank">浙ICP备16001001号</a>`,
      copyright: `版权所有 © 2025-${new Date().getFullYear()} Lewis`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    // https://vitepress.dev/zh/reference/default-theme-config#outline
    outline: {
      level: [2, 3],
      label: "页面导航",
    },
    
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short", // full
        timeStyle: "short", // medium
      },
    },
    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    skipToContentLabel: '跳转到内容'
  },
})

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '参考',
      items: [
        { text: '站点配置', link: 'site-config' },
        { text: 'frontmatter 配置', link: 'frontmatter-config' },
        { text: '运行时 API', link: 'runtime-api' },
        { text: 'CLI', link: 'cli' },
        {
          text: '默认主题',
          base: '/reference/default-theme-',
          items: [
            { text: '概览', link: 'config' },
            { text: '导航栏', link: 'nav' },
            { text: '侧边栏', link: 'sidebar' },
            { text: '主页', link: 'home-page' },
            { text: '页脚', link: 'footer' },
            { text: '布局', link: 'layout' },
            { text: '徽章', link: 'badge' },
            { text: '团队页', link: 'team-page' },
            { text: '上下页链接', link: 'prev-next-links' },
            { text: '编辑链接', link: 'edit-link' },
            { text: '最后更新时间戳', link: 'last-updated' },
            { text: '搜索', link: 'search' },
            { text: 'Carbon Ads', link: 'carbon-ads' }
          ]
        }
      ]
    }
  ]
}
function searchOptions(): Partial<DefaultTheme.AlgoliaSearchOptions> {
  return {
    placeholder: '搜索文档',
    translations: {
      button: {
        buttonText: '搜索文档',
        buttonAriaLabel: '搜索文档'
      },
      modal: {
        searchBox: {
          resetButtonTitle: '清除查询条件',
          resetButtonAriaLabel: '清除查询条件',
          cancelButtonText: '取消',
          cancelButtonAriaLabel: '取消'
        },
        startScreen: {
          recentSearchesTitle: '搜索历史',
          noRecentSearchesText: '没有搜索历史',
          saveRecentSearchButtonTitle: '保存至搜索历史',
          removeRecentSearchButtonTitle: '从搜索历史中移除',
          favoriteSearchesTitle: '收藏',
          removeFavoriteSearchButtonTitle: '从收藏中移除'
        },
        errorScreen: {
          titleText: '无法获取结果',
          helpText: '你可能需要检查你的网络连接'
        },
        footer: {
          selectText: '选择',
          navigateText: '切换',
          closeText: '关闭',
          searchByText: '搜索提供者'
        },
        noResultsScreen: {
          noResultsText: '无法找到相关结果',
          suggestedQueryText: '你可以尝试查询',
          reportMissingResultsText: '你认为该查询应该有结果？',
          reportMissingResultsLinkText: '点击反馈'
        }
      }
    }
  }
}

