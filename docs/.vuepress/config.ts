import {path} from '@vuepress/utils'
import {defineUserConfig} from "vuepress";

console.log("config")

export default defineUserConfig({
    base: '/',
    lang: 'en-US',
    title: 'Hello VuePress',
    head: [],
    description: 'Just playing around',
    theme: path.resolve(__dirname, './vuepress-theme-vdoing-dram/lib/node'),
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png'
    }
})




