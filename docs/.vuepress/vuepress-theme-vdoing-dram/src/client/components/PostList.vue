<template>
  <div>
    postList
    <post-card v-for="item in posts" :post="item"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type {Post} from "../../shared";
import PostCard from "./PostCard.vue";

const posts: Post[] = __POSTS__

export default defineComponent({

      name: "PostList",
      components: {
        PostCard
      },
      setup() {
        console.log(posts)
        return {posts}
      }
    }
)

</script>
