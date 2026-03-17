const path = require('path')
const beian = '鲁ICP备2022025773号'

//const announcementBarContent = `🌟更新 2022 年终总结`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AIOT',
  titleDelimiter: '-',
  url: 'https://openlinker.cn',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'openlinker',
  projectName: 'blog',
  tagline: '人',
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

    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {},
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
          trackingID: 'G-JB0M6PSKS1',
          anonymizeIP: true,
        },
        // debug: true,
      }),
    ],
  ],
  themes: [
    '@docusaurus/theme-live-codeblock',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['zh', 'en'],
        indexBlog: true,
        indexDocs: true,
        indexPages: true,
        explicitSearchResultPath: true,
        highlightSearchTermsOnTargetPage: true,
        searchResultLimits: 8,
        searchResultContextMaxLength: 50,
      },
    ],
  ],
  plugins: [
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


  ],
  stylesheets: [],
  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      zh: {
        htmlLang: 'zh-Hans',
      }      
    },
  },
};

module.exports = config;
