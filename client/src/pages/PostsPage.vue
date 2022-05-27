<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-model="searchValue" />
    <div class="app__btns">
      <my-button @click="showDialog = true">Создать пост </my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="showDialog"
      ><PostForm @create="createPost"></PostForm
    ></my-dialog>
    <PostList
      v-bind:posts="sortedAndFilteredPosts"
      @remove="removePost"
      v-if="!isPostsLoading"
    ></PostList>
    <h1 v-else>Идёт загрузка...</h1>
    <!--    <pages-pagination-->
    <!--      style="margin-top: 15px"-->
    <!--      :total-pages="totalPage"-->
    <!--      :current-page="page"-->
    <!--      @change="changePage"-->
    <!--    />-->
  </div>
  <div v-intersection="{ run: loadMorePosts, page: this.page, total: this.totalPage }" class="observer"></div>
  <!--  <div ref="observer" class="observer"></div>-->
</template>

<script>
import PostList from '@/components/PostList';
import PostForm from '@/components/PostForm';
import axios from 'axios';

export default {
  name: 'PostsPage',
  components: {
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
      searchValue: '',
      page: 1,
      limit: 25,
      totalPage: 0,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
        { value: 'id', name: 'По ID' },
      ],
    };
  },
  methods: {
    createPost(post) {
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
          'https://jsonplaceholder.typicode.com/posts?',
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          },
        );
        this.posts = response.data;
        this.totalPage = Math.ceil(
          response.headers['x-total-count'] / this.limit,
        );
      } catch (e) {
        alert('Ошибка');
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page++;
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?',
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          },
        );
        this.posts = [...this.posts, ...response.data];
        this.totalPage = Math.ceil(
          response.headers['x-total-count'] / this.limit,
        );
      } catch (e) {
        alert('Ошибка');
      }
    },
    // changePage(newPage) {
    //   this.page = newPage;
    // },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPost() {
      const newArray = [...this.posts];
      const newValue = this.selectedSort;
      newArray.sort((post1, post2) => {
        if (typeof post1[newValue] === 'string') {
          return post1[newValue]?.localeCompare(post2[newValue]);
        } else if (typeof post1[newValue] === 'number') {
          return post1[newValue] - post2[newValue];
        }
      });
      return newArray;
    },
    sortedAndFilteredPosts() {
      return this.sortedPost.filter((post) =>
        post['title'].toLowerCase().includes(this.searchValue.toLowerCase()),
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     if (typeof post1[newValue] === 'string') {
    //       return post1[newValue]?.localeCompare(post2[newValue]);
    //     } else if (typeof post1[newValue] === 'number') {
    //       return post1[newValue] - post2[newValue];
    //     }
    //   });
    // },
  },
};
</script>

<style scoped>
app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.observer {
  height: 30px;
  background: green;
}
</style>
