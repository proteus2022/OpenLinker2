import { Friends } from './friend'
export interface Website {
  name: string
  logo: string
  desc?: string
  href: string
  tags?: string[]
}

export interface WebsiteCategory {
  name: string
  websites: Website[]
}

const friends: Website[] = Friends.map((f) => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  }
})

export const websiteData: WebsiteCategory[] = [

  {
    name: '常用网站',
    websites: [
      {
        name: 'GitHub',
        desc: '全球最大的软件项目托管平台，发现优质开源项目',
        logo: 'https://github.githubassets.com/favicons/favicon.svg',
        href: 'https://github.com/',
        tags: ['GitHub', '代码托管', '项目源码', '社区'],
      },
      {
        name: 'Gitee',
        desc: '蚂蚁集团全新一代数据可视化解决方案',
        logo: '/img/website/gitee.ico',
        href: 'https://gitee.com/',
        tags: ['代码托管', '项目源码'],
      },
      {
        name: 'CSDN',
        desc: '赞',
        logo: '/img/website/CSDN.png',
        href: 'https://www.csdn.net/',
        tags: [''],
      },      
      {
        name: '物联网世界',
        desc: '物联网信息资讯',
        logo: '/img/website/itworld.png',
        href: 'http://www.iotworld.com.cn/',
        tags: [''],
      },           
      {
        name: '立创商城',
        desc: '物料询价、采购',
        logo: '/img/website/lcsc.png',
        href: 'https://www.szlcsc.com/',
        tags: [''],
      },   
      {
        name: '逆天PCB',
        desc: '开源硬件工程、培训',
        logo: '/img/website/ntpcb.png',
        href: 'http://bbs.ntpcb.com/',
        tags: [''],
      },    
      {
        name: 'CNX Software',
        desc: '嵌入式系统新闻',
        logo: '/img/website/cnxsoftware.png',
        href: 'https://www.cnx-software.com/',
        tags: [''],
      },   
      {
        name: '与非网',
        desc: '电子信息资讯，含电路城、Datasheet5',
        logo: '/img/website/eefocus.png',
        href: 'https://www.eefocus.com/',
        tags: [''],
      },  
      {
        name: '电子发烧友',
        desc: '电子信息资讯',
        logo: '/img/website/elecfans.png',
        href: 'https://www.elecfans.com/',
        tags: [''],
      },            
      {
        name: '易特创芯',
        desc: '电子信息资讯',
        logo: '/img/website/eetop.png',
        href: 'https://www.eetop.cn/',
        tags: [''],
      },    
      {
        name: 'OFweek电子工程',
        desc: '电子信息资讯',
        logo: '/img/website/ofweek.png',
        href: 'https://ee.ofweek.com/',
        tags: [''],
      },     
      {
        name: '电子工程网',
        desc: '电子信息资讯',
        logo: '/img/website/eechina.png',
        href: 'https://www.eechina.com/',
        tags: [''],
      },                           
     /*  {
        name: 'Gitlab',
        desc: '更快地交付安全代码，部署到任何云，并推动业务成果。',
        logo: 'https://gitlab.com/uploads/-/system/group/avatar/6543/logo-extra-whitespace.png?width=64',
        href: 'https://gitlab.com/',
        tags: ['代码托管', '项目源码'],
      },
     {
        name: 'Vercel',
        desc: 'Vercel将最好的开发人员体验与对最终用户性能的执着关注相结合。',
        logo: 'https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png',
        href: 'https://vercel.com/',
        tags: ['代码托管'],
      },
      {
        name: 'Netlify',
        desc: 'Netlify 是一家提供静态网站托管的云平台，支持从 Github, GitLab, Bitbucket 等代码仓库中自动拉取代码 然后进行项目打包和部署等功能。',
        logo: 'https://www.netlify.com/v3/static/favicon/apple-touch-icon.png',
        href: 'https://www.netlify.com/',
        tags: ['代码托管'],
      },*/
    ],
  },  
  {
    name: '视频学习',
    websites: [
      {
        name: '安富莱',
        desc: '研发周报，技术视频课程，H7-TOOL开源编程工具',
        logo: '/img/website/armfly.png',
        href: 'https://www.armbbs.cn/',
        tags: [''],
      },
      {
        name: '百问网',
        desc: '韦东山嵌软全系列培训教程',
        logo: '/img/website/100ask.png',
        href: 'https://www.100ask.net/',
        tags: [''],
      },
      {
        name: '电堂科技',
        desc: 'ST原厂系列课程等',
        logo: '/img/website/diantang.png',
        href: 'https://web.51diantang.com/',
        tags: [''],
      },
      {
        name: '摩尔吧',
        desc: 'Lora系列课程等',
        logo: '/img/website/moore8.png',
        href: 'https://www.moore8.com/',
        tags: [''],
      },
      {
        name: 'MicroChip大学',
        desc: '安全、工业以太网等系列课程',
        logo: '/img/website/microchip.png',
        href: 'https://mu.microchip.com/page/cmu',
        tags: [''],
      },
      {
        name: 'CSDN课堂',
        desc: '课程丰富，可以买个账号',
        logo: '/img/website/CSDN.png',
        href: 'https://download.csdn.net/list/course',
        tags: [],
      },
      {
        name: '极术社区',
        desc: 'ARM体系架构课程',
        logo: '/img/website/aijishu.png',
        href: 'https://aijishu.com/',
        tags: [],
      },
    ],
  },
  {
    name: '芯片原厂',
    websites: [
      {
        name: 'NXP',
        desc: 'MCU、MPU、RFID',
        logo: '/img/website/nxp.png',
        href: 'https://www.nxp.com/',
        tags: [''],
      },
      {
        name: 'Microchip',
        desc: 'MCU、MAC+PHY、SAFE',
        logo: '/img/website/microchip2.png',
        href: 'https://www.microchip.com/',
        tags: [''],
      },
      {
        name: 'ST',
        desc: 'MCU、RFID',
        logo: '/img/website/st.png',
        href: 'https://www.st.com/',
        tags: [''],
      },
      {
        name: 'Renesas',
        desc: 'MCU、工业以太网',
        logo: '/img/website/renesas.png',
        href: 'https://www2.renesas.cn/cn/zh',
        tags: [''],
      },
      {
        name: 'TI',
        desc: 'MCU、模拟、电源',
        logo: '/img/website/tisemi.png',
        href: 'https://www.ti.com/',
        tags: [''],
      },
      {
        name: 'Infineon',
        desc: 'MCU、触摸、存储',
        logo: '/img/website/infineon.png',
        href: 'https://www.infineon.com/cms/cn/',
        tags: [''],
      },
      {
        name: 'nuvoton',
        desc: 'MCU、MPU',
        logo: '/img/website/nuvoton.png',
        href: 'https://www.nuvoton.com.cn/',
        tags: [''],
      },
      {
        name: '兆易创新',
        desc: 'MCU、存储',
        logo: '/img/website/gd32.png',
        href: 'https://www.gd32mcu.com/',
        tags: [''],
      },      
      {
        name: '国民技术',
        desc: 'MCU',
        logo: '/img/website/nation.png',
        href: 'https://www.nationstech.com/',
        tags: [''],
      },     
      {
        name: '南京沁恒',
        desc: 'MCU、接口',
        logo: '/img/website/wchsemi.png',
        href: 'https://www.wch.cn/',
        tags: [''],
      },   
      {
        name: '华大',
        desc: 'MCU、安全',
        logo: '/img/website/hdsc.png',
        href: 'https://www.hdsc.com.cn/',
        tags: [''],
      },   
      {
        name: '乐鑫',
        desc: 'MCU、蓝牙、WIFI',
        logo: '/img/website/lexin.png',
        href: 'https://www.espressif.com.cn/',
        tags: [''],
      },                         
    ],
  },
  {
    name: '开发板厂家',
    websites: [
      {
        name: '野火',
        desc: '板子不错，源码一般。',
        logo: '/img/website/embedfire.png',
        href: 'https://embedfire.com/',
        tags: ['开发板'],
      },
      {
        name: '正点原子',
        desc: '板子不错，视频丰富。',
        logo: '/img/website/alientek.png',
        href: 'http://www.alientek.com/',
        tags: ['开发板'],
      },
      {
        name: '安富莱',
        desc: '板子不错，技术文档详尽。',
        logo: '/img/website/armfly.png',
        href: 'http://www.anfulai.cn/',
        tags: ['开发板'],
      },    
      {
        name: '百问网',
        desc: '韦东山发力了。',
        logo: '/img/website/100ask.png',
        href: 'https://www.100ask.net/',
        tags: ['开发板'],
      },      
      {
        name: '飞凌嵌入式',
        desc: '少有的北方厂家，MPU为主。',
        logo: '/img/website/forlinx.png',
        href: 'https://forlinx.com/',
        tags: ['开发板'],
      },    
      {
        name: '米尔科技',
        desc: 'MPU为主，板子不错。',
        logo: '/img/website/myirtech.png',
        href: 'http://www.myir-tech.com/',
        tags: ['开发板'],
      },  
      {
        name: '万象奥科',
        desc: 'MPU为主，瑞萨、Microchip、NXP。',
        logo: '/img/website/vanxoak.png',
        href: 'http://www.vanxoak.com/',
        tags: ['开发板'],
      },    
      {
        name: 'Firefly',
        desc: 'RockChip + Android。',
        logo: '/img/website/firefly.png',
        href: 'https://www.t-firefly.com/',
        tags: ['开发板'],
      },                             
    ],
  },
  {
    name: '字体图标',
    websites: [
      {
        name: 'iconify',
        desc: '数千个图标，一个统一的框架。',
        logo: 'https://icon-sets.iconify.design/favicon.ico',
        href: 'https://icon-sets.iconify.design/',
        tags: ['图标'],
      },
      {
        name: 'iconfont',
        desc: 'iconfont-国内功能很强大且图标内容很丰富的矢量图标库，提供矢量图标下载、在线存储、格式转换等功能。',
        logo: 'https://img.alicdn.com/imgextra/i4/O1CN01EYTRnJ297D6vehehJ_!!6000000008020-55-tps-64-64.svg',
        href: 'https://www.iconfont.cn/',
        tags: ['图标'],
      },
      {
        name: 'Font Awesome',
        desc: '在您的网站上使用Font Awesome展示矢量图标和社交标志，这可是网络上最流行的图标集和工具包。',
        logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1610874224065-%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A120210117-170325@2x.png',
        href: 'https://fa5.dashgame.com',
        tags: ['图标'],
      },
      {
        name: 'feathericons',
        desc: '简单美丽的开源图标',
        logo: 'https://feathericons.com/favicon.ico',
        href: 'https://feathericons.com/',
        tags: ['图标'],
      },
      {
        name: 'undraw',
        desc: '一个不断更新的设计项目与美丽的SVG图像，使用完全免费',
        logo: 'https://undraw.co/apple-touch-icon.png',
        href: 'https://undraw.co/',
        tags: ['图标', 'svg'],
      },
      {
        name: 'Shields.io',
        desc: '为你的开源项目生成高质量小徽章图标',
        logo: 'https://636f-codenav-8grj8px727565176-1256524210.tcb.qcloud.la/img/1617853921212-6254238.png',
        href: 'https://shields.io/',
        tags: ['图标', '首页'],
      },
      {
        name: 'Emojiall',
        desc: 'Emoji表情大全',
        logo: 'https://www.emojiall.com/apple-touch-icon.png',
        href: 'https://www.emojiall.com/zh-hans',
        tags: ['图标', 'emoji'],
      },
      {
        name: '渐变色网站',
        desc: '数百万个自动生成的渐变的网站',
        logo: 'https://gradihunt.com/favicon.ico',
        href: 'https://gradihunt.com/',
        tags: ['配色', '背景'],
      },
      {
        name: 'WebGradients',
        desc: 'WebGradients是180个线性渐变的免费集合，您可以将其用作网站任何部分的内容背景',
        logo: '/img/website/webgradients.png',
        href: 'https://webgradients.com',
        tags: ['配色', '背景'],
      },
      // {
      //   name: '谷歌字体',
      //   desc: '一个生成渐变色背景的网站',
      //   logo: 'https://googlefonts.cn/favicon.ico',
      //   href: 'https://googlefonts.cn/',
      //   tags: ['字体'],
      // },
    ],
  },
  {
    name: '致谢',
    websites: friends,
  },
]
