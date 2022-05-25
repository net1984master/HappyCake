<template>
  <div class="app">
    <PostForm @create="createPost"></PostForm>
    <PostList v-bind:posts="posts" @remove="removePost"></PostList>
  </div>
</template>

<script>
import PostList from '@/components/PostList';
import PostForm from '@/components/PostForm';

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: 'JavaScript', body: 'description' },
        { id: 2, title: 'JavaScript', body: 'description' },
        { id: 3, title: 'JavaScript', body: 'description' },
      ],
      title: '',
      body: '',
    };
  },
  methods: {
    createPost(post) {
      console.log(post);
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
