// @ts-check
const path = require('path')
const beian = '闽----2'

//const announcementBarContent = `基于 <a href='https://v3.nuxtjs.org/'>Nuxt3</a> 实现 <a href='https://api.kuizuo.cn'>KZ API</a> 接口站点`

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OpenLinker',
  titleDelimiter: '-',
  url: 'https://openlinker.cn',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'kuizuo',
  projectName: 'blog',
  tagline: '记录所学知识，领略编程之美',
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    image: 'img/logo.png',
 /*   announcementBar: {
      id: 'announcementBar-3',
      content: announcementBarContent,
    },*/
    metadata: [
      {
        name: 'keywords',
        content: 'OpenLinker, blog, javascript, typescript, python ,node, react, vue, web, 前端, 后端',
      },
    ],
    docs: {
      sidebar: {
        hideable: true,
      }
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
          label: '网址导航',
          position: 'right',
          to: 'website',
        },
        {
          label: '文档中心',
          position: 'right',
          items: [
            {
              label: '开源项目',
              to: 'docs/skill/',
            },
            {
              label: '工具推荐',
              to: 'docs/tools/',
            },
          ],
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
        {
          label: '开源项目',
          position: 'right',
          to: 'project',
        },
/*        {
          label: '小工具',
          position: 'right',
          items: [
            {
              label: 'API接口',
              to: 'https://api.kuizuo.cn',
            },
            {
              label: 'JS代码混淆与还原',
              to: 'https://deobfuscator.kuizuo.cn',
            },
            {
              label: 'CyberChef在线加解密',
              to: 'https://cipher.kuizuo.cn',
            },
            {
              label: 'OpenLinker在线工具',
              to: 'https://tools.kuizuo.cn',
            },
            {
              label: 'OpenLinker网盘',
              to: 'https://pan.kuizuo.cn',
            },
          ],
        },*/
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
              to: '/#homepage_blogs',
            },
            {
              label: '开源项目',
              to: 'docs/skill',
            },
            {
              label: '实战项目',
              to: 'project',
            },
          ],
        },
        {
          title: '社交媒体',
          items: [
            {
              label: '首页',
              to: '/',
            },
            {
              label: '关于我',
              to: '/about',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/proteus2022',
            },
            {
              label: '掘金',
              href: 'https://csdn.net/ss_302',
            },
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
      copyright: `<p>Copyright © ${new Date().getFullYear()}  Built with Docusaurus.</p><p><a href="http://github.io/" ></a></p>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/okaidia'),
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      additionalLanguages: ['java', 'php'],
      // defaultLanguage: "javascript",
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
    algolia: {           //搜索组件，需要在algolia上建立自己的账号，更新下面的信息
      appId: '08Y76T8XXU',
      apiKey: '368583c01dd894729395e7d53ce7712e',
      indexName: 'openlink',
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {}
    },
    matomo: {      //网站统计分析功能
      matomoUrl: 'https://matomo.nouse.cn/',
      siteId: '1',
      phpLoader: 'matomo.php',
      jsLoader: 'matomo.js',
    }, 
    giscus: {             //blog评论功能
      repo: 'kuizuo/blog',
      repoId: 'MDEwOlJlcG9zaXRvcnkzOTc2MjU2MTI=',
      category: 'General',
      categoryId: 'DIC_kwDOF7NJDM4CPK95',
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
    // googleAnalytics: {
    //   trackingID: "UA-118572241-1",
    //   anonymizeIP: true, // Should IPs be anonymized?
    // },
    // gtag: {
    //   trackingID: "G-6PSESJX0BM",
    //   // Optional fields.
    //   anonymizeIP: true, // Should IPs be anonymized?
    // },
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
          customCss: [require.resolve('./src/css/custom.css')],
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
        },
        // debug: true,
      }),
    ],
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      path.resolve(__dirname, './src/plugin/plugin-content-blog'), {
        path: 'blog',
        routeBasePath: '/',
        editUrl: ({ locale, blogDirPath, blogPath, permalink }) =>
          `https://github.com/proteus2022/blog/edit/main/${blogDirPath}/${blogPath}`,
        editLocalizedFiles: false,
        blogSidebarTitle: '近期文章',
        blogSidebarCount: 10,
        postsPerPage: 10,
        showReadingTime: true,
        readingTime: ({ content, frontMatter, defaultReadingTime }) =>
          defaultReadingTime({ content, options: { wordsPerMinute: 300 } }),
        feedOptions: {
          type: 'all',
          title: 'OpenLinker',
          copyright: `Copyright © ${new Date().getFullYear()} OpenLinker Built with Docusaurus.<p><a href="http://beian.miit.gov.cn/" class="footer_lin">${beian}</a></p>`,
        },
      }
    ],
    path.resolve(__dirname, './src/plugin/plugin-baidu-analytics'),
    path.resolve(__dirname, './src/plugin/plugin-baidu-push'),
    'docusaurus-plugin-matomo',
    'docusaurus-plugin-image-zoom',
    [
      '@docusaurus/plugin-ideal-image', {
        disableInDev: false,
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: ['appInstalled', 'standalone', 'queryString'],
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
    locales: ['zh'],
  },
  onBrokenLinks: 'ignore',
}

module.exports = config
