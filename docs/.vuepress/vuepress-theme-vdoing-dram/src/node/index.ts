import {path} from '@vuepress/utils'
import type {Theme} from '@vuepress/core'
import type {Post} from '../shared'
import {getFileList} from './utils'

const fooTheme: Theme = () => {

    let posts: Post[] = []

    return {

        //获取文章列表
        extendsPageData: (page, app) => {
            if (page.filePathRelative != null && page.filePathRelative.endsWith(".md")) {
                let post: Post = {
                    date: page.date,
                    title: page.title,
                    excerpt: page.excerpt,
                    path: page.path
                }
                posts.push(post)
            }
        },

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


