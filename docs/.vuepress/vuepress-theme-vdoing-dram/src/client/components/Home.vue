<template>
  <navbar/>
  <div>home
    <post-list/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import PostList from './PostList.vue'
import {usePageData, usePageFrontmatter, useSiteData, useSiteLocaleData} from '@vuepress/client'
import type {DefaultThemePageFrontmatter} from "../../shared"
import Navbar from "./Navbar.vue";

export default defineComponent({

      components: {
        Navbar,
        PostList
      },
      name: "Home",
      setup() {
        const pageData = usePageData()
        const siteData = useSiteData()
        const siteLocaleData = useSiteLocaleData()

        const pageFrontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>();

      }
    }
)

</script>
