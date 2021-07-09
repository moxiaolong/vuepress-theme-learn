import {path} from '@vuepress/utils'
import type {Theme} from '@vuepress/core'

const fooTheme: Theme = () => {
    console.log("theme-index")
    return {
        name: 'vuepress-theme-vdoing-dram',
        layouts: {
            Layout: path.resolve(__dirname, '../client/layouts/Layout.vue'),
            404: path.resolve(__dirname, '../client/layouts/404.vue'),
        }
        // ...
    }
}

export default fooTheme

