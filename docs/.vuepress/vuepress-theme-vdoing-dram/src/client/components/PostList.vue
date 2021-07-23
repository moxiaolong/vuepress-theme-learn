<template>
  <div>
    postList
    <post-card v-for="item in posts" :post="item"/>
    <a @click="nextPage">page++</a>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useRoute} from 'vue-router'
import type {Post} from "../../shared";
import PostCard from "./PostCard.vue";

const sourcePosts: Post[] = __POSTS__

export default defineComponent({

      name: "PostList",
      components: {
        PostCard
      },
      setup() {
        let router = useRoute();

        let pageNum = 1
        let pageSize = 10
        let posts

        if (pageNum.toString() !== router.query.p) {
          pageNum = router.query.p
        }


        let flushPage = () => {
          posts = sourcePosts.slice((pageNum - 1) * pageSize, pageNum * pageSize)

        }
        flushPage()
        let nextPage = () => {
          pageNum++
          console.log(pageNum)
          flushPage()
          console.log(posts)
        }


        return {posts, pageNum, nextPage}
      },

    }
)

</script>
