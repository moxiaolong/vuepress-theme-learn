import {defineClientAppEnhance} from '@vuepress/client'


export default defineClientAppEnhance(({app, router}) => {

    console.log("app:")
    console.log(app)
})
