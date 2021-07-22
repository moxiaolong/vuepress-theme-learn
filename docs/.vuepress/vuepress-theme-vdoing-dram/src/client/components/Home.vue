<template>
  <div>home
    <div v-for="item in posts">
      {{ item.title }}
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {usePageData, usePageFrontmatter, useSiteData, useSiteLocaleData} from '@vuepress/client'
import type {DefaultThemePageFrontmatter, Post} from "../../shared"

const posts: Post[] = __POSTS__


export default defineComponent({


      name: "Home",
      setup() {
        console.log(posts)
        const pageData = usePageData()
        const siteData = useSiteData()
        const siteLocaleData = useSiteLocaleData()
        console.log(pageData)
        console.log(siteData)
        console.log(siteLocaleData)
        const pageFrontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>();

        return {
          pageFrontmatter
          , posts
        }
      }
    }
)

</script>
