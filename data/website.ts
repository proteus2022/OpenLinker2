import { Friends } from './friend';

export interface Website {
  name: string;
  logo: string;
  desc: string;
  href: string;
  tags?: string[];
}

export interface WebsiteCategory {
  name: string;
  websites: Website[];
}

const friends: Website[] = Friends.map((f) => {
  return {
    ...f,
    name: f.title,
    desc: f.description,
    logo: f.avatar,
    href: f.website,
  };
});

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
        name: '在线工具',
        desc: '在线小工具集合',
        logo: '/img/website/zaixiantool.png',
        href: 'https://tool.lu/',
        tags: [''],
      },   
      {
        name: 'Hexed',
        desc: 'HEX在线查看与编辑',
        logo: '/img/website/hexed.png',
        href: 'https://hexed.it/',
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
        name: 'wokwi',
        desc: 'ESP32、Arduino仿真',
        logo: '/img/website/wokwi.png',
        href: 'https://wokwi.com/',
        tags: [''],
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
        name: 'excalidraw',
        desc: '在线手绘风格电子白板和画图应用',
        logo: '/img/website/excalidraw.png',
        href: 'https://excalidraw.com/',
        tags: [''],
      },   
      {
        name: 'JSON Visio',
        desc: '可视化JSON编辑',
        logo: '/img/website/jsonvisio.png',
        href: 'https://jsoncrack.com/',
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
        name: '芯板坊',
        desc: '专注于最新、最权威的开发板资讯，评测，试用，折扣等信息',
        logo: '/img/website/xinbanfang.png',
        href: 'http://www.xinbanfang.com/',
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
        name: '51CTO',
        desc: '电子信息资讯、开源社区',
        logo: '/img/website/51cto.png',
        href: 'https://www.51cto.com/',
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
      {
        name: '全国大学生智能汽车竞赛',
        desc: '全国大学生智能汽车竞赛',
        logo: '/img/website/smartcarrace.jpg',
        href: 'http://www.smartcarrace.com/',
        tags: [''],
      },                                            
    ],
  },  


  {  
    name: '电子书',
    websites: [
      {
        name: '鸠摩搜书',
        desc: '电子书下载的天堂，搜索功能强大',
        logo: '/img/website/jiumo.png',
        href: 'https://www.jiumodiary.com/',
        tags: [''],
      },    

      {
        name: 'FreeComputerBooks',
        desc: '海量计算机相关电子书籍免费下载',
        logo: '/img/website/freecomputerbooks.jpg',
        href: 'https://freecomputerbooks.com/',
        tags: [''],
      },    

      {
        name: '无名图书',
        desc: '各类电子书籍免费下载',
        logo: '/img/website/wuming.png',
        href: 'https://www.book123.info/',
        tags: [''],
      },   
      {
        name: 'Java知识分享网',
        desc: 'Java、Android等电子书籍免费下载',
        logo: '/img/website/java1234.jpg',
        href: 'http://www.java1234.com/a/javabook/',
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
        name: '电子工程世界大学堂',
        desc: '嵌入式软硬件教程，如OpenCV、ESP32等',
        logo: '/img/website/eeworldclass.png',
        href: 'http://training.eeworld.com.cn/',
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
        name: 'TI培训',
        desc: 'TI在线培训中心是TI和21ic电子网联合推出的在线培训项目',
        logo: '/img/website/tipeixun.png',
        href: 'https://edu.21ic.com/',
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
        tags: ['安全'],
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
      {
        name: '先楫',
        desc: '高性能MCU',
        logo: '/img/website/hpmicro.png',
        href: 'https://www.hpmicro.com/',
        tags: [''],
      },    
      {
        name: '深圳模微',
        desc: '安全',
        logo: '/img/website/modsemi.png',
        href: 'https://www.modsemi.com/',
        tags: ['安全'],
      },   
      {
        name: '北京宏思',
        desc: '安全',
        logo: '/img/website/hongsi.png',
        href: 'http://www.hongsi-ic.com/',
        tags: ['安全'],
      },
      {
        name: '上海航芯',
        desc: '安全',
        logo: '/img/website/aisinochip.png',
        href: 'http://www.aisinochip.com/',
        tags: ['安全'],
      },    
      {
        name: '武汉瑞纳捷',
        desc: '安全',
        logo: '/img/website/runjetic.png',
        href: 'https://www.runjetic.com/',
        tags: ['安全'],
      },                                                          
    ],
  },
  {
    name: 'PCB设计',
    websites: [
      {
        name: 'Kicad',
        desc: '一款功能强大的设计软件，在不堪AD骚扰的情况下，可以试试',
        logo: '/img/website/kicad.png',
        href: 'https://www.kicad.org/',
        tags: ['PCB'],
      },
      {
        name: '立创EDA',
        desc: '支持国产。',
        logo: '/img/website/lceda.png',
        href: 'https://lceda.cn/',
        tags: ['PCB'],
      },
      {
        name: 'fritzing',
        desc: '如果你是一个Arduino或者其他开源硬件的爱好者,那么你一定不能错过Fritzing这款软件',
        logo: '/img/website/fritzing.png',
        href: 'https://fritzing.org/',
        tags: ['PCB'],
      },      
      {
        name: 'PCBWeb Desinger',
        desc: '已被datasheets收购，很多参考设计可以查看。',
        logo: '/img/website/pcbweb.png',
        href: 'https://www.datasheets.com/en',
        tags: ['PCB'],
      },         
    ],
  },   
  {
    name: '开发板',
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
    name: '物联网',
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
        href: 'https://www.tastek.cn',
        tags: [''],
      },  
      {
        name: '繁易',
        desc: '工控终端',
        logo: '/img/website/flexem.png',
        href: 'https://www.flexem.cn',
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
    {
      name: '迈威',
      desc: '',
      logo: '/img/website/maiwe.png',
      href: 'https://www.maiwe.com.cn/',
      tags: [''],
    },                      
    ],
  },  
  {   
    name: 'GUI',
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
    name: 'RFID',
    websites: [
      //深圳
      {
        name: '国芯物联',
        desc: '深圳,UHF,芯片，RFID模块',
        logo: '/img/website/nationrfid.png',
        href: 'https://www.nationrfid.com/',
        tags: [''],
      },
      {
        name: '御芯微',
        desc: '成都,芯片，RFID模块',
        logo: '/img/website/ucchip.png',
        href: 'https://ucchip.com/',
        tags: [''],
      },        
      {
        name: '易兆微',
        desc: '杭州,蓝牙、Wi-Fi、NFC',
        logo: '/img/website/yichip.png',
        href: 'http://www.yichip.com/sy',
        tags: [''],
      },  
      {
        name: 'IMPINJ',
        desc: '标签芯片，读写器芯片，读写器',
        logo: '/img/website/impinj.png',
        href: 'https://www.impinj.com/zh-cn',
        tags: [''],
      },  
      {
        name: 'Alien',
        desc: 'EPC标签芯片,读写器芯片',
        logo: '/img/website/alien.png',
        href: 'https://www.alientechnology.com/',
        tags: [''],
      }, 
      {
        name: 'EM',
        desc: '标签芯片，读写器芯片',
        logo: '/img/website/em.png',
        href: 'https://www.emmicroelectronic.com/',
        tags: [''],
      },       
      {
        name: 'PHYCHIPS',
        desc: '读写器芯片',
        logo: '/img/website/phychips.png',
        href: 'http://www.phychips.com/',
        tags: [''],
      }, 
      {
        name: '旗连电子',
        desc: '无锡,UHF芯片',
        logo: '/img/website/magicrf.png',
        href: 'http://www.magicrf.com/index.htm',
        tags: [''],
      },  
      {
        name: '智坤',
        desc: '上海，UHF,芯片，RFID模块',
        logo: '/img/website/iotelligent.png',
        href: 'http://www.iotelligent.com/',
        tags: [''],
      },      
      {
        name: '远望谷',
        desc: '深圳，方案，各种读写器',
        logo: '/img/website/invengo.png',
        href: 'https://www.invengo.cn/',
        tags: [''],
      },       

      {
        name: '金瑞铭',
        desc: '深圳，RFID射频产品，工业物联网',
        logo: '/img/website/genrace.png',
        href: 'https://www.genrace.com/',
        tags: [''],
      },   
      {
        name: '铨顺宏',
        desc: '深圳，UHF，方案',
        logo: '/img/website/fuwit.png',
        href: 'https://www.fuwit.com.cn/',
        tags: [''],
      },        
      {
        name: '鸿陆',
        desc: '深圳，UHF，方案',
        logo: '/img/website/hopeland.png',
        href: 'https://www.hopelandiot.com/',
        tags: [''],
      },  
      {
        name: '成为',
        desc: '深圳，UHF，各种读写器',
        logo: '/img/website/chainway.png',
        href: 'https://www.chainway.cn/',
        tags: [''],
      },   
      {
        name: '罗丹贝尔',
        desc: '深圳，UHF，各种读写器',
        logo: '/img/website/rodinbell.png',
        href: 'http://www.rodinbell.cn/cn/Index.html',
        tags: [''],
      },        
      {
        name: '万全智能',
        desc: '深圳，十五年聚焦于RFID',
        logo: '/img/website/vanch.png',
        href: 'http://www.vanch.cn/',
        tags: [''],
      },           
      {
        name: '中控迪优',
        desc: '深圳，各种读写器',
        logo: '/img/website/zkradio.png',
        href: 'http://www.zkradio.com/index.aspx',
        tags: [''],
      }, 
      {
        name: '汉德霍尔',
        desc: '深圳，手持式阅读设备',
        logo: '/img/website/handheld.png',
        href: 'http://hhw9.com/',
        tags: [''],
      },              
      {
        name: '斯科信息',
        desc: '深圳，大型RFID读写设备',
        logo: '/img/website/cykeo.png',
        href: 'http://www.cykeo.com/',
        tags: [''],
      },  
      {
        name: '先施科技',
        desc: '深圳，UHF,终端',
        logo: '/img/website/sensehk.png',
        href: 'http://www.sense-hk.com/',
        tags: [''],
      },          
      {
        name: '销邦科技',
        desc: '深圳，解决方案',
        logo: '/img/website/supoin.png',
        href: 'http://www.supoin.com/',
        tags: [''],
      },               
      {
        name: '捷通',
        desc: '深圳，各种读写器，小公司',
        logo: '/img/website/jtrfid.png',
        href: 'http://www.jt-rfid.com/',
        tags: [''],
      },
      {
        name: '荣睿科技',
        desc: '深圳，各种读写器，小公司',
        logo: '/img/website/rrrfid.png',
        href: 'http://www.rr-rfid.com/',
        tags: [''],
      },
      {
        name: '骏发瑞达',
        desc: '深圳，各种读写器，小公司',
        logo: '/img/website/jfrd.png',
        href: 'http://www.jf-rd.com/',
        tags: [''],
      },   
      {
        name: '博纬智能',
        desc: '深圳，天线、标签、通道门',
        logo: '/img/website/brrfid.png',
        href: 'http://www.brrfid.com/',
        tags: [''],
      },          
      {
        name: '华士精成',
        desc: '深圳，终端与解决方案',
        logo: '/img/website/marktrace.png',
        href: 'http://www.marktrace.com/',
        tags: [''],
      }, 
      {
        name: '德科物联',
        desc: '深圳，HF,NFC，读卡器、模块',
        logo: '/img/website/derkiot.png',
        href: 'https://www.derkiot.com/',
        tags: [''],
      },      

      //上海 
      {
        name: '浚蔚电子',
        desc: '上海，读写器、网关、IO',
        logo: '/img/website/junweitech.png',
        href: 'http://www.junweitech.com/',
        tags: [''],
      },     
      {
        name: '阿法迪',
        desc: '上海，UHF，读写器',
        logo: '/img/website/shrfid.png',
        href: 'http://www.sh-rfid.com/index.aspx',
        tags: [''],
      },   
      {
        name: '上海普阅',
        desc: '上海，解决方案',
        logo: '/img/website/anyid.png',
        href: 'http://www.anyid.com.cn/index.html',
        tags: [''],
      }, 
      {
        name: '上海营信信息',
        desc: '高频/超高频读写器，智能柜',
        logo: '/img/website/nxprfid.png',
        href: 'http://www.nxprfid.com/',
        tags: [''],
      }, 

      //广州
      {
        name: '安的电子',
        desc: '广州，UHF，方案',
        logo: '/img/website/gzandea.png',
        href: 'https://www.gzandea.com/',
        tags: [''],
      },  
      {
        name: '捷友',
        desc: '江门，小公司',
        logo: '/img/website/jieyoo.png',
        href: 'http://www.jieyoo.com/',
        tags: [''],
      },     
      {
        name: '品创电子',
        desc: '广州，读卡器，安全门',
        logo: '/img/website/pcrfid.png',
        href: 'https://www.pcrfid.com/',
        tags: [''],
      }, 
      {
        name: '思远创智能设备',
        desc: '广州，条码扫描，RFID读卡',
        logo: '/img/website/sycreader.png',
        href: 'https://www.sycreader.com/',
        tags: [''],
      },     
      {
        name: '暨嘉智能设备',
        desc: '广州，智能钥匙柜',
        logo: '/img/website/gzjnu.png',
        href: 'http://www.gzjnu.com/',
        tags: [''],
      }, 
      {
        name: '罗维尼科技',
        desc: '广州，解决方案，各种设备',
        logo: '/img/website/rovinj.png',
        href: 'http://www.rovinj.cn/',
        tags: [''],
      },                     
      //江苏
      {
        name: '东集',
        desc: '南京，各种读写终端，方案',
        logo: '/img/website/seuic.png',
        href: 'https://www.seuic.com/',
        tags: [''],
      },  
      {
        name: '品冠物联',
        desc: '无锡，各种标签、模块、读写终端',
        logo: '/img/website/thinkgo.png',
        href: 'http://www.thinkgo-iot.cc/',
        tags: [''],
      },  
      {
        name: '立芯科技',
        desc: '宁波，标签、终端、机器人',
        logo: '/img/website/laxcen.png',
        href: 'http://www.laxcen.com.cn/contact.html',
        tags: [''],
      },        

      //北京
      {
        name: '芯联',
        desc: '北京，各种模块、标签、读写器',
        logo: '/img/website/silion.png',
        href: 'https://www.silion.com.cn/',
        tags: [''],
      },            
      {
        name: '瑞弗艾迪',
        desc: '北京，多通道阅读器',
        logo: '/img/website/rfadtech.png',
        href: 'http://www.rfadtech.com/',
        tags: [''],
      },   

      //国际
      {
        name: 'Zebra',
        desc: '国际大厂，值得参照学习',
        logo: '/img/website/zebra.png',
        href: 'https://www.zebra.cn/cn/zh.html',
        tags: [''],
      },  
    ],
  },

    {   //云平台
    name: '云平台',
    websites: [
      {
        name: '小米IoT开发者平台',
        desc: '设备接入规范、标准、产品分类值得学习',
        logo: '/img/website/miiot.png',
        href: 'https://iot.mi.com/',
        tags: [''],
      },
      {
        name: 'OneNET',
        desc: '中国移动物联网开放平台',
        logo: '/img/website/onenet.png',
        href: 'https://open.iot.10086.cn/',
        tags: [''],
      },  
      {
        name: '阿里云IoT',
        desc: '阿里云物联网相关',
        logo: '/img/website/aliiot.png',
        href: 'https://iot.aliyun.com/',
        tags: [''],
      },    
      {
        name: 'AWS IoT',
        desc: '亚马逊云物联网相关',
        logo: '/img/website/awsiot.png',
        href: 'https://aws.amazon.com/cn/iot/?nc2=h_ql_prod_it',
        tags: [''],
      },      
      {
        name: '艾拉比',
        desc: '通过OTA技术赋予万物持续进化的能力',
        logo: '/img/website/abupdate.png',
        href: 'http://www.abupdate.com/',
        tags: [''],
      },         
      {
        name: 'EMQ',
        desc: '全球领先的开源云原生 MQTT 消息服务器和流处理数据库',
        logo: '/img/website/emqx.png',
        href: 'https://www.emqx.com/zh',
        tags: [''],
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
        logo: '/img/website/fontawesome.png',
        href: 'https://fa5.dashgame.com',
        tags: ['图标'],
      },
      {
        name: 'Font Meme',
        desc: '支持字体识别的网站，而且可以转换生成各种特效字体和文字图片。',
        logo: '/img/website/fontmeme.png',
        href: 'https://fontmeme.com/zh/',
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
        logo: '/img/website/shieldsio.png',
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

