<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__btns">
      <my-button @click="showDialog = true">Создать пост </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="showDialog"
      ><PostForm @create="createPost"></PostForm
    ></my-dialog>
    <PostList
      v-bind:posts="posts"
      @remove="removePost"
      v-if="!isPostsLoading"
    ></PostList>
    <h1 v-else>Идёт загрузка...</h1>
  </div>
</template>

<script>
import PostList from '@/components/PostList';
import PostForm from '@/components/PostForm';
import MyDialog from '@/components/UI/MyDialog';
import MyButton from '@/components/UI/MyButton';
import axios from 'axios';
import MySelect from '@/components/UI/MySelect';

export default {
  components: {
    MySelect,
    MyButton,
    MyDialog,
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      title: '',
      body: '',
      showDialog: false,
      isPostsLoading: false,
      selectedSort: '',
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
        { value: 'id', name: 'По ID' },
      ],
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
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10',
        );
        this.posts = response.data;
      } catch (e) {
        alert('Ошибка');
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    selectedSort(newValue) {
      this.posts.sort((post1, post2) => {
        if (typeof post1[newValue] === 'string') {
          return post1[newValue]?.localeCompare(post2[newValue]);
        } else if (typeof post1[newValue] === 'number') {
          return post1[newValue] - post2[newValue];
        }
      });
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
  &__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
  }
}
</style>
