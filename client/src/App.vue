<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-button @click="showDialog=true" style="margin: 15px 0">Создать пост</my-button>
    <my-dialog v-model:show="showDialog"><PostForm @create="createPost"></PostForm></my-dialog>
    <PostList v-bind:posts="posts" @remove="removePost"></PostList>
  </div>
</template>

<script>
import PostList from '@/components/PostList';
import PostForm from '@/components/PostForm';
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";

export default {
  components: {
    MyButton,
    MyDialog,
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
      showDialog: false,
    };
  },
  methods: {
    createPost(post) {
      console.log(post);
      this.posts.push(post);
      this.showDialog = false;
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
