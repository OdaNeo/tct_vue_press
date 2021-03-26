module.exports = {
    title: '非容器化部署文档',
    dest: './dist', 
    themeConfig: {
        nav: [
          { text: '文档', link: '/guide/' },
          { text: '非容器化部署平台', link: 'http://112.126.65.241:14010/shell/installApp', target:'_blank' },
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