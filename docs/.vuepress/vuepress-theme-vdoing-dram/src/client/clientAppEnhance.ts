import {defineClientAppEnhance} from '@vuepress/client'
import './styles/index.scss'

export default defineClientAppEnhance(({app, router}) => {

    console.log("app:")
    console.log(app)
})
