export const Friends: Friend[] = [
  {
    title: '峰华前端工程师',
    description: '了解静态网站就是从看见他的网站开始',
    website: 'https://zxuqian.cn',
    avatar: require('./avatar/zxuqian.png'),
  },
  {
    title: 'kuizuo',
    description: '现在网站架构是从这个老师网站上改的',
    website: 'https://kuizuo.cn/',
    avatar: require('./avatar/mas0n.png'),
  },
  {
    title: 'Docusaurus',
    description: '框架官方网站',
    website: 'https://docusaurus.io/zh-CN/',
    avatar: require('./avatar/docusaurus.png'),
  },  
 
]

export type Friend = {
  title: string;
  description: string;
  website: string;
  avatar?: any;
};
