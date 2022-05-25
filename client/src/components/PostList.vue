<template>
  <h4>Text</h4>
  <post-item v-for="post in posts" :post="post" :key="post.id" />
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
