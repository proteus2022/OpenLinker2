export type Tag = {
  label: string
  description: string
  color: string
}

export type TagType = 'favorite' | 'opensource' | 'product' | 'design' | 'javascript'

export type Project = {
  title: string
  description: string
  preview?: any
  website: string
  source?: string | null
  tags: TagType[]
}

export const Tags: Record<TagType, Tag> = {
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
}

const Projects: Project[] = [
  {
    title: 'MCUBOOT',
    description: '一个被广泛采用的BOOT开源项目，值得深度分析学习。',
    preview: 'img/website/mcuboot.png',
    website: 'https://www.mcuboot.com/',
    source: 'https://github.com/mcu-tools/mcuboot',
    tags: ['opensource'],
  },
  {
    title: 'kz-admin',
    description: '管理系统',
    preview: 'https://img.kuizuo.cn/kz-admin.png',
    website: 'https://admin.kuizuo.cn',
    source: 'https://github.com/kuizuo/kz-nest-admin',
    tags: ['opensource', 'favorite', 'product'],
  },
  {
    title: 'KZ-API',
    description: '基于Nuxt3 + Vite3 + Vue3 + UnoCSS搭建的API接口服务网站',
    preview: 'https://img.kuizuo.cn/KZ%20API.png',
    website: 'https://api.kuizuo.cn',
    source: 'https://github.com/kuizuo/api-service',
    tags: ['opensource', 'favorite', 'product'],
  },
  {
    title: 'VScode-extension',
    description: 'vscode 插件的样品',
    preview: 'https://img.kuizuo.cn/vscode-extension.png',
    website: 'https://marketplace.visualstudio.com/items?itemName=kuizuo.vscode-extension-sample',
    source: 'https://github.com/kuizuo/vscode-extension',
    tags: ['opensource', 'javascript'],
  },
  {
    title: 'ocr-admin',
    description: '基于ddddocr与kz-admin搭建的图像识别后台系统',
    preview: 'https://img.kuizuo.cn/ocr-admin.png',
    website: 'https://ocr.kuizuo.cn',
    source: '',
    tags: ['product'],
  },
  {
    title: 'JS代码混淆与还原',
    description: '基于Babel的AST操作对JavaScript代码混淆与还原的网站',
    preview: 'https://img.kuizuo.cn/js-de-obfuscator.png',
    website: 'https://deobfuscator.kuizuo.cn',
    source: 'https://github.com/kuizuo/js-de-obfuscator',
    tags: ['opensource', 'javascript'],
  },
  {
    title: '资源导航',
    description: '学习编程中遇到的资源整合网站',
    preview: 'https://img.kuizuo.cn/code-nav.png',
    website: 'https://nav.kuizuo.cn',
    source: 'https://github.com/kuizuo/code-nav',
    tags: ['opensource', 'javascript'],
  },
  {
    title: 'OpenLinker在线工具',
    description: '基于React与MUI组件库编写的在线工具网站',
    preview: 'https://img.kuizuo.cn/tools.png',
    website: 'http://tools.kuizuo.cn',
    source: 'https://github.com/kuizuo/online-tools',
    tags: ['opensource', 'javascript'],
  },
]

export const TagList = Object.keys(Tags) as TagType[]
function sortProject() {
  let result = Projects
  // Sort by site name
  // result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  // result = sortBy(result, (user) => !user.tags.includes('javascript'));
  return result
}

export const sortedProjects = sortProject()
