<template>
  <div>
    postcard
    {{ post.date }}
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import type {Post} from "../../shared";

export default defineComponent({

      name: "PostCard",
      props: {
        post: { // 菜单数据
          type: Object as Post,
          required: true,
        }
      },

      setup(props) {

        let post = props.post;

        console.log(post)
        return {
          post
        }
      }
    }
)

</script>
