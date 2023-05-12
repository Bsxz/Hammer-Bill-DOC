import {defineUserConfig, defaultTheme} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'

export default defineUserConfig({
    lang: 'zh-CN',
    title: '大锤记账API文档',
    description: '大锤记账API文档',
    base: '/',
    theme: defaultTheme({
        sidebar: [
            {
                text: '登入',
                link: '/mds/login/README.md'
            },
            {
                text: '获取当前用户',
                link: '/mds/user/README.md'
            },
            {
                text: '标签',
                collapsible: true,
                children: [
                    {
                        text: '修改标签',
                        link: '/mds/tags/Modify.md'
                    },
                    {
                        text: '创建标签',
                        link: '/mds/tags/Create.md'
                    },
                    {
                        text: '删除标签',
                        link: '/mds/tags/Delete.md'
                    },
                    {
                        text: '获取标签',
                        link: '/mds/tags/Obtain.md'
                    },
                    {
                        text: '获取标签列表',
                        link: '/mds/tags/ObtainList.md'
                    }
                ]
            },
            {
                text: '账目',
                collapsible: true,
                children: [
                    {
                        text: '创建账目',
                        link: '/mds/bill/Create.md'
                    },
                    {
                        text: '统计信息（按happen_at分组）',
                        link: '/mds/bill/Happen_at.md'
                    },
                    {
                        text: '统计信息（按happened_at分组）',
                        link: '/mds/bill/Happened_at.md'
                    },
                    {
                        text: '统计信息（按Tag_id分组）',
                        link: '/mds/bill/Tag_id.md'
                    },
                    {
                        text: '获取收支信息',
                        link: '/mds/bill/Payment.md'
                    },
                    {
                        text: '获取账目',
                        link: '/mds/bill/GetBill.md'
                    }
                ]
            },
            {
                text: '验证码',
                link: '/mds/code/README.md'
            }
        ]
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索文档'
                }
            }
        })
    ]
})

