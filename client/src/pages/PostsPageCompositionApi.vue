<template>
  <div>
    <div>{{blabla}}</div>
    <h1>Страница с постами Compo</h1>
    <PostList v-bind:posts="posts"></PostList>
    <!--    <my-input v-model="searchValue" />-->
    <!--    <div class="app__btns">-->
    <!--      <my-button @click="showDialog = true">Создать пост </my-button>-->
    <!--      <my-select v-model="selectedSort" :options="sortOptions" />-->
    <!--    </div>-->
    <!--    <my-dialog v-model:show="showDialog"-->
    <!--      ><PostForm @create="createPost"></PostForm-->
    <!--    ></my-dialog>-->
    <!--    <PostList-->
    <!--      v-bind:posts="sortedAndFilteredPosts"-->
    <!--      @remove="removePost"-->
    <!--      v-if="!isPostsLoading"-->
    <!--    ></PostList>-->
    <!--    <h1 v-else>Идёт загрузка...</h1>-->
  </div>
  <!--  <div v-intersection="{ run: loadMorePosts, need: needRun }" class="observer"></div>-->
</template>

<script>
import PostList from '@/components/PostList';
import PostForm from '@/components/PostForm';
import usePosts from '@/hooks/usePosts.ts';
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: 'PostsPageCompositionApi',
  components: {
    PostList,
  },
  data() {
    return {
      showDialog: false,
      sortOptions: [
        { value: 'title', name: 'По названию' },
        { value: 'body', name: 'По описанию' },
        { value: 'id', name: 'По ID' },
      ],
    };
  },
  setup(props) {
    const store = useStore();
    const blabla = computed(() => store.state.ccctest);
    const { posts, totalPage, isPostsLoading } = usePosts(10);
    return {
      posts,
      blabla
    };
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
