const path = require('path')
const beian = '鲁ICP备2022025773号'

//const announcementBarContent = `🌟更新 2022 年终总结`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '个人生活笔记',
  titleDelimiter: '-',
  url: 'https://openlinker.cn',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'openlinker',
  projectName: 'blog',
  tagline: '记录所学知识，领略编程之美',
  onBrokenLinks: 'warn',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',

    metadata: [
      {
        name: 'keywords',
        content: 'OpenLinker, blog, javascript, typescript, python ,node, react, vue, web, 前端, 后端',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      },
    },
  
    navbar: {
      title: 'OpenLinker',
      logo: {
        alt: 'OpenLinker',
        src: 'img/logo.webp',
        srcDark: 'img/logo.webp',
      },
      items: [
        {
          label: '文档中心',
          position: 'right',
          items: [
            {
              label: '产品资料',
              to: 'docs/document/',
            },  
            {
              label: '解决方案',
              to: 'docs/solution/',
            },                     
            {
              label: '开源项目',
              to: 'docs/opensource/',
            },
            {
              label: '资源分享',
              to: 'docs/share/',
            },
          ],
        },        
        {
          label: '网址导航',
          position: 'right',
          to: 'website',
        },
        {
          label: '开源链接',
          position: 'right',
          to: 'project',
        },        
         {
         label: '博客标签',
          to: 'tags',
          position: 'right',
        },
        {
          label: '博客归档',
          to: 'archive',
          position: 'right',
        },
      ],
    },
    footer: {      //底部导航栏
      style: 'dark',
      links: [
        {
          title: '学习',
          items: [
            {
              label: '技术博客',
              to: '/tags',
            },
            {
              label: '开源项目',
              to: 'docs/opensource',
            },
           /* {
              label: '实战项目',
              to: 'project',
            },*/
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '首页',
              to: '/',
            },
            /*{
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/proteus2022',
            },*/
           /* {
              label: '掘金',
              href: 'https://csdn.net/ss_302',
            },*/
          ],
        },
        {
          title: '更多',
          items: [{
            label: '友链',
            position: 'right',
            to: 'friends',
          }, {
            label: '导航',
            position: 'right',
            to: 'website',
          }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OpenLinker Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
    },

    prism: {
      theme: require('prism-react-renderer/themes/vsLight'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php', 'rust', 'toml'],
      defaultLanguage: 'javascript',
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-error-line',
          line: 'This will error',
        },
      ],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {           //搜索组件，需要在algolia上建立自己的账号，更新下面的信息
      appId: '08Y76T8XXU',
      apiKey: '368583c01dd894729395e7d53ce7712e',
      indexName: 'openlinker',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {},
    },
    matomo: {      //网站统计分析功能
      matomoUrl: 'https://matomo.nouse.cn/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    }, 
    giscus: {   //blog评论
      repo: 'proteus2022/OpenLinker2',
      repoId: 'R_kgDOHsvN3A',
      category: 'General',
      categoryId: 'DIC_kwDOHsvN3M4CQlv_',
      mapping: 'title',
      lang: 'zh-CN',
    },    
    liveCodeBlock: {
      playgroundPosition: 'top',
    },
    socials: {
      github: 'https://github.com/proteus2022',
      csdn: 'https://blog.csdn.net/ss_302',
      qq: 'https://wpa.qq.com/msgrd?v=3&amp;uin=149350110&amp;site=qq',
      wx: 'https://music.163.com/#/user/home?id=1333010742',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        gtag: {
          trackingID: 'G-S4SD5NXWXF',
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    'docusaurus-plugin-sass',
    path.resolve(__dirname, './src/plugin/plugin-baidu-tongji'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'),
      {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({locale, blogDirPath, blogPath, permalink}) =>
        `https://github.com/proteus2022/OpenLinker2/tree/master/blog/`,
        editLocalizedFiles: false,
        blogSidebarCount: 10,
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({content, frontMatter, defaultReadingTime}) =>
          defaultReadingTime({content, options: {wordsPerMinute: 300}}),
        feedOptions: {
          type: 'all',
          title: 'OpenLinker',
          copyright: `Copyright © ${new Date().getFullYear()} OpenLinker Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(51 139 255)',
          },
        ],
      },
    ],
  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
    },
  },
};

module.exports = config;
