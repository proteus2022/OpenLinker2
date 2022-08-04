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
        name: 'CXY521',
        desc: '程序员常用网址导航',
        logo: '/img/website/cxy521.png',
        href: 'https://www.cxy521.com/',
        tags: [''],
      },       
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
        name: 'Learn Git Branching',
        desc: 'Git使用可视化教学',
        logo: '/img/website/gitbranch.png',
        href: 'https://learngitbranching.js.org/?locale=zh_CN',
        tags: [''],
      },       
      {
        name: '墨滴',
        desc: 'Markdown Nice，一个好用的文章编辑平台',
        logo: '/img/website/mdnice.png',
        href: 'https://www.mdnice.com/',
        tags: [''],
      },     
      {
        name: 'JSON Visio',
        desc: '可视化JSON编辑',
        logo: '/img/website/jsonvisio.png',
        href: 'https://jsonvisio.com/',
        tags: [''],
      },          
      {
        name: 'Markdown',
        desc: 'Markdown指南中文版',
        logo: '/img/website/markdown.png',
        href: 'https://www.markdown.xyz/',
        tags: [''],
      },       
      {
        name: 'MDX',
        desc: '让Markdown步入组件时代',
        logo: '/img/website/mdx.png',
        href: 'https://www.mdxjs.cn/',
        tags: [''],
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
        name: 'AIoT库',
        desc: '其星图研究院的报告免费下载',
        logo: '/img/website/iotku.png',
        href: 'https://www.iotku.com/',
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
        name: '世强硬创平台',
        desc: '物料询价、采购',
        logo: '/img/website/sekorm.png',
        href: 'https://www.sekorm.com/',
        tags: [''],
      },      
      {
        name: '硬创社',
        desc: '开源硬件项目发布',
        logo: '/img/website/xjlc.png',
        href: 'https://x.jlc.com/',
        tags: [''],
      },      
      {
        name: '电路城',
        desc: '开源硬件项目发布',
        logo: '/img/website/cirmall.png',
        href: 'https://www.cirmall.com/',
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
        name: '电源网',
        desc: '电源方案、信息资讯',
        logo: '/img/website/dianyuan.png',
        href: 'https://www.dianyuan.com/',
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
      {
        name: '电子工程世界',
        desc: '电子信息资讯',
        logo: '/img/website/eeworld.png',
        href: 'http://www.eeworld.com.cn/',
        tags: [''],
      },       
      {
        name: '国际电子商情',
        desc: '电子信息资讯',
        logo: '/img/website/esmchina.png',
        href: 'https://www.esmchina.com/',
        tags: [''],
      },   
      {
        name: '面包板社区',
        desc: '电子信息资讯',
        logo: '/img/website/eetchina.png',
        href: 'https://mbb.eet-china.com/',
        tags: [''],
      },                                       
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
      {
        name: 'doyoudo',
        desc: '视频剪辑、PS、3D、工业设计的软件视频',
        logo: '/img/website/doyoudo.png',
        href: 'https://www.doyoudo.com/',
        tags: [],
      },
      {
        name: 'coursera',
        desc: '国际性，涉及各方向的学习网站',
        logo: '/img/website/coursera.png',
        href: 'https://www.coursera.org/',
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
        logo: '/img/website/stsemi.png',
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
    name: '物联网厂家',
    websites: [
      {
        name: '有人物联网',
        desc: '模组、终端',
        logo: '/img/website/usr.png',
        href: 'http://www.usr.cn',
        tags: [''],
      },
      
      {
        name: 'MOXA',
        desc: '交换机、路由器、串口设备',
        logo: '/img/website/moxa.png',
        href: 'https://www.moxa.com.cn',
        tags: [''],
      },     
      {
        name: '宏电',
        desc: '',
        logo: '/img/website/hongdian.png',
        href: 'https://www.hongdian.com',
        tags: [''],
      },  
      {
        name: '四信',
        desc: '',
        logo: '/img/website/fourfaith.png',
        href: 'http://www.four-faith.com/',
        tags: [''],
      }, 
      {
        name: '映翰通',
        desc: '',
        logo: '/img/website/inhand.png',
        href: 'https://www.inhand.com.cn/',
        tags: [''],
      }, 
    //
    {
      name: '研华',
      desc: '',
      logo: '/img/website/advantech.png',
      href: 'https://www.advantech.com.cn/',
      tags: [''],
    },  

    {
      name: '移远',
      desc: '模组',
      logo: '/img/website/quectel.png',
      href: 'https://www.quectel.com/cn',
      tags: [''],
    },
    {
      name: '合宙',
      desc: '系统、模组',
      logo: '/img/website/luat.png',
      href: 'https://www.openluat.com/welcome',
      tags: [''],
    },    

      {
        name: '卓岚',
        desc: '串口设备、芯片',
        logo: '/img/website/zlan.png',
        href: 'http://www.zlmcu.com',
        tags: [''],
      },        
      {
        name: '汉枫',
        desc: '模组、终端',
        logo: '/img/website/hiflying.png',
        href: 'http://www.hi-flying.com',
        tags: [''],
      },  
      {
        name: '塔石',
        desc: '',
        logo: '/img/website/tastek.png',
        href: 'https://www.tastek.cn/index.html',
        tags: [''],
      },  
      {
        name: '繁易',
        desc: '工控终端',
        logo: '/img/website/flexem.png',
        href: 'https://www.flexem.cn/Index.html',
        tags: [''],
      },  
    //苏州
    {
      name: '汇川',
      desc: '',
      logo: '/img/website/inovance.png',
      href: 'https://www.inovance.com/hc/index',
      tags: [''],
    },             
     

    {
      name: '顺舟',
      desc: '模组、网关',
      logo: '/img/website/shuncom.png',
      href: 'https://www.shuncom.com',
      tags: [''],
    },      
      //深圳
      {
        name: '康耐德',
        desc: '',
        logo: '/img/website/konnad.png',
        href: 'https://www.konnad.com',
        tags: [''],
      },    
      {
        name: '三旺',
        desc: '交换机',
        logo: '/img/website/3onedata.png',
        href: 'https://www.3onedata.com.cn',
        tags: [''],
      }, 
 
      {
        name: '力必拓',
        desc: '路由',
        logo: '/img/website/szlbt.png',
        href: 'http://www.szlbt.com',
        tags: [''],
      },  

      {
        name: '瑞兴恒方',
        desc: '',
        logo: '/img/website/risinghf.png',
        href: 'https://www.risinghf.com/home',
        tags: [''],
      },   
      {
        name: '纵横智控',
        desc: '',
        logo: '/img/website/iotrouter.png',
        href: 'https://www.iotrouter.com/',
        tags: [''],
      },             
  
      {
        name: '众山科技',
        desc: '',
        logo: '/img/website/zstel.png',
        href: 'https://www.zstel.com/',
        tags: [''],
      },    
    //厦门
  
    {
      name: '才茂',
      desc: '',
      logo: '/img/website/caimore.png',
      href: 'https://www.caimore.com/',
      tags: [''],
    },   
    {
      name: '计讯',
      desc: '',
      logo: '/img/website/topiot.png',
      href: 'http://www.top-iot.com/',
      tags: [''],
    },     
    {
      name: '锐谷智联',
      desc: '',
      logo: '/img/website/rigoiot.png',
      href: 'http://www.rigoiot.com/',
      tags: [''],
    },      
    {
      name: '爱陆通',
      desc: '',
      logo: '/img/website/alotcer.png',
      href: 'https://www.alotcer.com/',
      tags: [''],
    },       
    //北京
  
    {
      name: '康海时代',
      desc: '',
      logo: '/img/website/khtimes.png',
      href: 'http://www.khtimes.net.cn/',
      tags: [''],
    },     
    {
      name: '驿唐',
      desc: '',
      logo: '/img/website/etungtech.png',
      href: 'http://www.etungtech.com.cn/',
      tags: [''],
    },      
    {
      name: '门思科技',
      desc: '',
      logo: '/img/website/manthink.png',
      href: 'http://www.manthink.cn/',
      tags: [''],
    },  
    //广州
    {
      name: '鲁邦通',
      desc: '路由、网关',
      logo: '/img/website/robustel.png',
      href: 'http://www.robustel.com.cn/',
      tags: [''],
    },    
      //
      {
        name: '安信可',
        desc: '无线',
        logo: '/img/website/aithinker.png',
        href: 'https://www.ai-thinker.com/home',
        tags: [''],
      },     
      {
        name: '唯传',
        desc: '',
        logo: '/img/website/winext.png',
        href: 'http://www.winext.cn/new_winext/index.html',
        tags: [''],
      },              
      {
        name: '亿佰特',
        desc: '',
        logo: '/img/website/ebyte.png',
        href: 'https://www.ebyte.com/',
        tags: [''],
      },   
 
      {
        name: '泽耀',
        desc: '',
        logo: '/img/website/ashining.png',
        href: 'http://www.ashining.com/',
        tags: [''],
      },     
    //武汉
    {
      name: '慧联无限',
      desc: '',
      logo: '/img/website/easylinkin.png',
      href: 'http://easylinkin.com/index.aspx',
      tags: [''],
    },                   
    ],
  },  
  {   
    name: '嵌入式GUI',
    websites: [
      {
        name: 'LVGL',
        desc: '轻量级、开源、发展迅速',
        logo: '/img/website/lvgl.png',
        href: 'https://lvgl.io/',
        tags: ['GUI'],
      },
      {
        name: 'AWTK',
        desc: '国产、周立功推出的、赞',
        logo: '/img/website/awtk.png',
        href: 'https://awtk.zlg.cn/docs/',
        tags: ['GUI'],
      },       
      {
        name: 'Azure RTOS GUIX',
        desc: '微软Thread X配套GUI组件',
        logo: '/img/website/microsoft.png',
        href: 'https://docs.microsoft.com/zh-cn/azure/rtos/guix/',
        tags: ['GUI'],
      },     
      {
        name: 'MiniGUI',
        desc: '一款历史悠久的通用GUI',
        logo: '/img/website/minigui.png',
        href: 'https://minigui.fmsoft.cn/',
        tags: ['GUI'],
      },         
      {
        name: 'TouchGFX',
        desc: '被ST收购，ST处理器上免费使用',
        logo: '/img/website/touchgfx.png',
        href: 'https://support.touchgfx.com/4.20/docs/introduction/welcome',
        tags: ['GUI'],
      }, 
      {
        name: 'Embedded Wizard',
        desc: '收费，历史悠久',
        logo: '/img/website/embeddedwizard.png',
        href: 'https://www.embedded-wizard.de/',
        tags: ['GUI'],
      },       
      {
        name: 'emWin',
        desc: 'Segger旗下收费GUI组件',
        logo: '/img/website/segger.png',
        href: 'https://www.segger.com/products/user-interface/emwin/',
        tags: ['GUI'],
      },        
      {
        name: 'Qt',
        desc: '最著名的跨平台GUI',
        logo: '/img/website/qt.png',
        href: 'https://www.qt.io/',
        tags: ['GUI'],
      },          
      {
        name: 'MHGS',
        desc: 'Microchip 处理器配套GUI组件',
        logo: '/img/website/microchip.png',
        href: 'https://www.microchip.com/en-us/tools-resources/configure/mplab-harmony/graphics-suite#',
        tags: ['GUI'],
      },        
      {
        name: 'NXP GUI',
        desc: 'NXP 处理器配套GUI组件',
        logo: '/img/website/nxp.png',
        href: 'https://www.nxp.com/design/software/development-software/mcuxpresso-software-and-tools-/graphical-user-interfaces-for-nxp-microcontrollers:GRAPHICAL-USER-INTERFACES',
        tags: ['GUI'],
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
/*  {   //demo
    name: '芯片原厂',
    websites: [
      {
        name: 'NXP',
        desc: 'MCU、MPU、RFID',
        logo: '/img/website/nxp.png',
        href: 'https://www.nxp.com/',
        tags: [''],
      },
                      
    ],
  },  */  
  {
    name: '致谢',
    websites: friends,
  },
]
