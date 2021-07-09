import {path} from '@vuepress/utils'

console.log("config")

module.exports = {
    lang: 'en-US',
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: path.resolve(__dirname, './vuepress-theme-vdoing-dram/lib/node'),
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
    },
}


