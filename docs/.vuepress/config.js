module.exports = {
    title: '非容器化部署文档',
    dest: './dist', 
    themeConfig: {
        nav: [
          { text: '文档', link: '/guide/' },
          { text: '非容器化部署平台', link: 'http://1.1.1.1', target:'_blank' },
        ],
        lastUpdated: '上次更新',
        smoothScroll: true,
        sidebarDepth: 2,
        sidebar: [
            {
                collapsable: false,
                children: ['/guide/']
            },
        ],
    },
}