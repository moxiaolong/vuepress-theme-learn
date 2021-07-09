<template>
  <div>
    <Content/>
    <home></home>
  </div>
</template>

<script lang="ts">
import Home from "../components/Home.vue"
// import {usePageData} from '@vuepress/client'
import {defineComponent} from 'vue'

export default defineComponent({
      name:"Layout",
      components: {Home},
      setup() {
        console.log("setup")
        // const route = usePageData ()
        // console.log(site)
      }
    }
)

</script>
