<template>
  <div>
    postList
    <post-card v-for="item in postsReactive.posts" :post="item"/>

    <a @click="nextPage">page++</a>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'
import {useRoute, useRouter} from 'vue-router'
import type {Post} from "../../shared";
import PostCard from "./PostCard.vue";

const sourcePosts: Post[] = __POSTS__

export default defineComponent({

      name: "PostList",
      components: {
        PostCard
      },
      setup() {
        let route = useRoute();
        let router = useRouter();

        let pageNum = 1
        let pageSize = 10
        let postsReactive: { posts: Post[] } = reactive({posts: []})


        //从路由获取页码
        if (route.query.p != null && pageNum.toString() !== route.query.p) {
          pageNum = route.query.p
        }


        //刷新页面
        let flushPage = () => {
          //根据编码截取数组
          postsReactive.posts = sourcePosts.slice((pageNum - 1) * pageSize, pageNum * pageSize)

          //路由跳转
          router.push({
            query: {
              ...route.query,
              p: pageNum
            }
          })
        }

        flushPage()

        let nextPage = () => {
          pageNum++
          flushPage()
        }


        return {postsReactive, pageNum, nextPage}
      },

    }
)

</script>
