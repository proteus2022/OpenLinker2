"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortedProjects = exports.TagList = exports.Tags = void 0;
exports.Tags = {
    favorite: {
        label: '喜爱',
        description: '我最喜欢的网站，一定要去看看!',
        color: '#e9669e',
    },
    opensource: {
        label: '开源',
        description: '开源项目可以提供灵感!',
        color: '#39ca30',
    },
    product: {
        label: '产品',
        description: '与产品相关的项目!',
        color: '#dfd545',
    },
    design: {
        label: '设计',
        description: '设计漂亮的网站!',
        color: '#a44fb7',
    },
    javascript: {
        label: 'JavaScript',
        description: 'JavaScript 项目',
        color: '#dfd545',
    },
};
const Projects = [

    {
        title: '痞子衡嵌入式半月刊',
        description: '嵌入式领域项目、新闻、信息分享。',
        preview: 'img/website/pzh-mcu.png',
        website: 'https://blog.csdn.net/Henjay724',
        source: 'https://github.com/JayHeng/pzh-mcu-bi-weekly',
        tags: ['opensource'],
    },
    {
        title: '嵌入式资源大杂烩',
        description: '嵌入式相关资源链接，分类清晰，资源丰富。',
        preview: 'img/website/embededallin.png',
        website: 'https://gitee.com/zhengnianli/EmbedSummary',
        //source: 'https://gitee.com/zhengnianli/EmbedSummary',
        tags: ['opensource', 'favorite'],
    },
    {
        title: 'MCUBOOT',
        description: '一个被广泛采用的boot开源项目，值得深度分析。',
        preview: 'img/website/mcuboot.png',
        website: 'https://www.mcuboot.com/',
        source: 'https://github.com/mcu-tools/mcuboot',
        tags: ['opensource'],
    },    
    {
        title: 'MicroPython中文社区',
        description: 'micropthon中文论坛，microbit开源项目。',
        preview: 'img/website/micropython3.png',
        website: 'https://www.micropython.org.cn/forum/',
        source: 'https://gitee.com/microbit',
        tags: ['opensource'],
    },
    {
        title: 'Arm Education',
        description: '资料很详细，特别是PPT，值得借鉴。',
        preview: 'img/website/armeducation.png',
        website: 'https://github.com/arm-university',
        tags: ['opensource'],
    },    
    {
        title: 'LuatOS开源',
        description: '基于lua的开源系统，支持多种硬件平台',
        preview: 'img/website/luatos.png',
        website: 'https://www.openluat.com/welcome',
        source: 'https://gitee.com/openLuat',
        tags: ['opensource'],
    },
    {
        title: 'NUC980开源项目',
        description: 'NUC980软硬件开源项目',
        preview: 'img/website/nuc980blog.png',
        website: 'https://blog.csdn.net/Jun626',
        source: 'https://gitee.com/jun626/nuc980-open-source-project',
        tags: ['opensource'],
    },
    {
        title: 'Modbus开源协议栈',
        description: '一个Modbus开源协议栈',
        preview: 'img/website/modbus.png',
        website: 'https://blog.csdn.net/foxclever',
        source: 'https://gitee.com/ErichMoonan/Modbus',
        tags: ['opensource'],
    },
    {
        title: 'Serial-Studio',
        description: '一个多平台，多用途的串行数据可视化的应用软件,可以轻松地可视化的呈现和分析其项目和设备生成的数据。',
        preview: 'img/website/serialstudio.png',
        website: 'https://serial-studio.github.io/',
        source: 'https://github.com/Serial-Studio/Serial-Studio',
        tags: ['opensource'],
    },
    {
        title: 'X-TRACK自行车码表',
        description: '开源GPS自行车码表，LVGL应用',
        preview: 'img/website/xtrack.png',
        website: 'https://github.com/FASTSHIFT/X-TRACK',
        //source: 'https://github.com/FASTSHIFT/X-TRACK',
        tags: ['opensource', 'favorite'],
    },
    {
        title: 'Open-Smartwatch',
        description: '基于Esp32的开源手表项目',
        preview: 'img/website/opensmartwatch.png',
        website: 'https://open-smartwatch.github.io/',
        source: 'https://github.com/Open-Smartwatch',
        tags: ['opensource', 'favorite'],
    },    
    {
        title: '卡西欧腕表复刻',
        description: '开源腕表方案，了解下其低功耗处理',
        preview: 'img/website/casio.png',
        website: 'https://github.com/joeycastillo/Sensor-Watch',
        //source: 'https://github.com/joeycastillo/Sensor-Watch',
        tags: ['opensource'],
    },     
    {
        title: 'SFUD',
        description: '一款开源的串行 SPI Flash 通用驱动库。',
        preview: 'img/website/sfud.png',
        website: 'https://github.com/armink/SFUD',
        //source: 'https://github.com/armink/SFUD',
        tags: ['opensource'],
    },  
    {
        title: '100ask-t113-pro',
        description: '韦东山开发的全志t113软硬件开源项目。',
        preview: 'img/website/dongshanpi.png',
        website: 'http://100ask.net/',
        source: 'https://github.com/DongshanPI/buildroot_100ask_t113-pro',
        tags: ['opensource'],
    },      
    {
        title: '自己动手写FAT32文件系统',
        description: '自己动手写文件系统、操作系统，收费视频课程在CSDN课堂。',
        preview: 'img/website/zijidongshou.png',
        website: 'https://www.yuque.com/lishutong-docs',
        //source: 'https://www.yuque.com/lishutong-docs',
        tags: ['opensource'],
    },   
    {
        title: 'avr-crypto-lib',
        description: '各种加密算法实现。',
        preview: 'img/website/avrcrypto.png',
        website: 'https://wiki.das-labor.org/w/AVR-Crypto-Lib/en',
        source: 'https://github.com/cantora/avr-crypto-lib',
        tags: ['opensource'],
    }, 
    {
        title: 'C library and data structures',
        description: '各种开源C库和数据结构。',
        preview: 'img/website/clib.png',
        website: 'https://github.com/tezc/sc',
        //source: 'https://github.com/tezc/sc',
        tags: ['opensource'],
    },
    {
        title: 'WEMOS',
        description: '基于Micropython、Esp32的开源项目',
        preview: 'img/website/wemos.png',
        website: 'https://www.wemos.cc/en/latest/index.html',
        source: 'https://github.com/wemos',
        tags: ['opensource'],
    },   
    {
        title: 'OLIMEX',
        description: '国外开源开发板网站，包括ESP32和各ARM平台产品',
        preview: 'img/website/olimex.png',
        website: 'https://www.olimex.com/',
        source: 'https://github.com/OLIMEX',
        tags: ['opensource'],
    },    
    {
        title: '小熊派',
        description: '各自开发板开源项目',
        preview: 'img/website/morixinguan.png',
        website: 'https://blog.csdn.net/morixinguan',
        source: 'https://gitee.com/morixinguan',    
        tags: ['opensource'],
    },     
    {
        title: 'ZINT',
        description: '二维码及条形码的开源项目',
        preview: 'img/website/zint.png',
        website: 'https://www.zint.org.uk/',
        source: 'https://github.com/zint/',    
        tags: ['opensource'],
    },                             
 
    {
        title: 'strongerHuang的嵌入式专栏',
        description: '无OS的MCU软件管理和AT指令解析',
        preview: 'img/website/moluotech.png',
        website: 'https://gitee.com/moluo-tech',
        tags: ['opensource'],
    },    
    {
        title: 'Mculover666',
        description: 'STM32 HAL库外设驱动库和多页显示框架',
        preview: 'img/website/mculover666.png',
        website: 'https://github.com/Mculover666',
        tags: ['opensource'],
    },  
    {
        title: '大橙子疯',
        description: '单色LCD GUI库和轻量级菜单框架',
        preview: 'img/website/constzpc.png',
        website: 'https://gitee.com/const-zpc',
        tags: ['opensource'],
    },   
    {
        title: 'wujique',
        description: 'stm32入门教程、驱动库、电阻触摸屏驱动',
        preview: 'img/website/wujique.png',
        website: 'https://github.com/wujique',
        tags: ['opensource'],
    },                             
];
exports.TagList = Object.keys(exports.Tags);
function sortProject() {
    let result = Projects;
    // Sort by site name
    // result = sortBy(result, (user) => user.title.toLowerCase());
    // Sort by favorite tag, favorites first
    // result = sortBy(result, (user) => !user.tags.includes('javascript'));
    return result;
}
exports.sortedProjects = sortProject();
