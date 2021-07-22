<template>
  <div>
    <Content/>
    <home v-if="pageFrontmatter.home"></home>
    <Page v-else></Page>
  </div>
</template>

<script lang="ts">
import Home from "../components/Home.vue"
import Page from "../components/Page.vue"
import {usePageData, usePageFrontmatter} from '@vuepress/client'
import type {DefaultThemePageFrontmatter} from "../../shared"
import {defineComponent} from 'vue'

export default defineComponent({
      name: "Layout",
      components: {Home, Page},
      setup() {
        // const pageData = usePageData ()
        const pageFrontmatter = usePageFrontmatter<DefaultThemePageFrontmatter>();

        return {
          pageFrontmatter
        }
      }
    }
)

</script>
