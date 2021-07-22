<template>
  <div>
    <home v-if="pageFrontmatter.home"></home>
    <Page v-else></Page>
  </div>
</template>

<script lang="ts">
import Home from "../components/Home.vue"
import Page from "../components/Page.vue"
import {usePageData, usePageFrontmatter, useSiteData, useSiteLocaleData} from '@vuepress/client'
import type {DefaultThemePageFrontmatter, Post} from "../../shared"
import {defineComponent} from 'vue'


export default defineComponent({


      name: "Layout",
      components: {Home, Page},
      setup() {

        const pageData = usePageData()
        const siteData = useSiteData()
        const siteLocaleData = useSiteLocaleData()
        console.log(pageData)
        console.log(siteData)
        console.log(siteLocaleData)
        const pageFrontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>();

        return {
          pageFrontmatter
        }
      }
    }
)

</script>
