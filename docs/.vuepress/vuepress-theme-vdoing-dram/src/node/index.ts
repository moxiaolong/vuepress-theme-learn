import {path} from '@vuepress/utils'
import type {Theme} from '@vuepress/core'
import type {Post} from '../shared'

const fooTheme: Theme = () => {

    //存放文章列表
    let posts: Post[] = []
    return {

        //该 Hook 会在 VuePress App 完成文件准备后被立即调用。
        onPrepared: (app) => {
            posts.sort((a, b) => {
                    return new Date(a.date).getTime() - new Date(b.date).getTime()
                }
            )
        },


        //页面信息回调 获取文章列表
        extendsPageData: (page, app) => {
            if (page.filePathRelative != null && page.filePathRelative.endsWith(".md") && page.date !== "0000-00-00") {
                posts.push({
                    date: page.date,
                    title: page.title,
                    excerpt: page.excerpt,
                    path: page.path
                })
            }
        },

        //定义常量 可以在客户端使用
        define: {
            __POSTS__: posts
        },


        clientAppEnhanceFiles: path.resolve(
            __dirname,
            '../client/clientAppEnhance.js'
        ),
        name: 'vuepress-theme-vdoing-dram',
        layouts: {
            Layout: path.resolve(__dirname, '../client/layouts/Layout.vue'),
            404: path.resolve(__dirname, '../client/layouts/404.vue'),
        }
        // ...
    }
}

export default fooTheme


