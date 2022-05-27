<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input :model-value="searchValue" @update:model-value="setSearchValue" />
    <div class="app__btns">
      <my-button @click="showDialog = true">Создать пост </my-button>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
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
  </div>
  <div
    v-intersection="{ run: loadMorePosts, need: needRun }"
    class="observer"
  ></div>
</template>

<script>
import PostList from '@/components/PostList';
import PostForm from '@/components/PostForm';
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'PostsPageWithStore',
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      showDialog: false,
    };
  },
  methods: {
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchValue: 'post/setSearchValue',
      setSelectedSort: 'post/setSelectedSort',
    }),
    ...mapActions({
      loadMorePosts: 'post/loadMorePosts',
      fetchPosts: 'post/fetchPosts',
    }),
    createPost(post) {
      this.posts.push(post);
      this.showDialog = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    needRun() {
      return this.page < this.totalPage;
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchValue: (state) => state.post.searchValue,
      page: (state) => state.post.page,
      totalPage: (state) => state.post.totalPage,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPost: 'post/sortedPost',
      sortedAndFilteredPosts: 'post/sortedAndFilteredPosts',
    }),
  },
  watch: {
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
