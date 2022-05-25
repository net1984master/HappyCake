<template>
<div v-if="posts.length>0">
  <post-item
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @remove="$emit('remove', post)"
  />
</div>
  <h2 v-else>Постов нет</h2>
</template>

<script>
import PostItem from '@/components/PostItem';

export default {
  name: 'PostList',
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    PostItem,
  },
};
</script>

<style scoped></style>
