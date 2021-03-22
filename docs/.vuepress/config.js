module.exports = {
    title: '非容器化部署文档',
    dest: './dist', 
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: '#' },
        ],
        sidebarDepth: 2,
        sidebar: [
            {
                title: 'Guide',
                collapsable: true,
                children: ['/guide/']
            },
            {
                title: 'Guide2',
                collapsable: true,
                children: ['/guide2/']
            }             
        ],
    },
   
}