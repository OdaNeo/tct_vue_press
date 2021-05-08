module.exports = {
    title: '统一运维平台',
    dest: './dist',
    description: '统一运维平台部署文档',
    themeConfig: {
        nav: [
            { text: '容器部署文档', link: '/guide/cmd' },
            { text: '非容器部署文档', link: '/guide/shell' },
            { text: '容器部署平台', link: 'http://112.126.65.241:14010/cmdTask/taskView', target: '_blank' },
            { text: '非容器部署平台', link: 'http://112.126.65.241:14010/shell/installApp', target: '_blank' },
        ],
        lastUpdated: '上次更新',
        smoothScroll: true,
        sidebarDepth: 2,
        sidebar: [
            {
                isGroup: true,
                title: '统一运维平台',
                text: 'Group',
                children: ['/guide/cmd.md', '/guide/shell.md']
            },
        ],
    },
    plugins: ['@vuepress/back-to-top', '@vuepress/nprogress']
}