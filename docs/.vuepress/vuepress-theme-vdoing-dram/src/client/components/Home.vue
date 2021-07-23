<template>
  <div>home
    <post-list/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import PostList from './PostList.vue'
import {usePageData, usePageFrontmatter, useSiteData, useSiteLocaleData} from '@vuepress/client'
import type {DefaultThemePageFrontmatter} from "../../shared"


export default defineComponent({

      components: {
        PostList
      },
      name: "Home",
      setup() {
        const pageData = usePageData()
        const siteData = useSiteData()
        const siteLocaleData = useSiteLocaleData()

        const pageFrontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>();

        return {
          pageFrontmatter
        }
      }
    }
)

</script>
