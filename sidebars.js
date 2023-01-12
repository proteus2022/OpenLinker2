/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  document: [
    'document/introduction',
    {
      label: '智能卡',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'document/智能卡/HYM4616A4',
        'document/智能卡/HYM4616A7',
        'document/智能卡/HYM4616B4',
        'document/智能卡/HYM4616C7',
      ],
    },
    {
      label: '读卡器',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'document/读卡器/HYC901S',
        'document/读卡器/HYC902S',
        'document/读卡器/HYC921',
        'document/读卡器/HYB620',
      ],
    },
    {
      label: '安全芯片',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'document/安全芯片/HY9840',
        'document/安全芯片/HY5950&HY5960',
      ],
    },
  ],  
  solution: [         //解决方案
    'solution/introduction',
    'solution/智能档案管理系统',
  ],

  opensource: [         //开源项目
    'opensource/introduction',
    {
      label: 'OpenLinker_NUC980',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'opensource/OpenLinker_NUC980/pinia',
      ],
    },
    {
      label: '开发板配件',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'opensource/开发板配件/3.5寸LCD+电容触摸',
        'opensource/开发板配件/5寸LCD+电容触摸',
      ],
    },    
   
  ],
  share: [                   //资源分享
    'share/introduction',
    'share/软件开发相关图书',
    'share/硬件开发相关图书',
    'share/管理类图书',
    'share/常用软件',  
    {
      label: 'CISSP',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        'share/CISSP/域一.安全和风险管理',
        'share/CISSP/域二.资产安全',   
        'share/CISSP/域三.安全架构和工程',   
        'share/CISSP/域四.通信与网络安全',   
        'share/CISSP/域五.身份与访问管理',   
        'share/CISSP/域六.安全评估与测试',   
        'share/CISSP/域七.安全运营',   
        'share/CISSP/域八.软件开发安全',                                                        
      ],
    },         
  ]
}


module.exports = sidebars
