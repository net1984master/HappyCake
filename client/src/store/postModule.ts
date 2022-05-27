import { PostPage } from '@/store/index';
import axios from 'axios';
import { Commit, ActionContext, Getter } from 'vuex';

export const postModule = {
  state: () => ({
    posts: [],
    isPostsLoading: false,
    selectedSort: '',
    searchValue: '',
    page: 1,
    limit: 10,
    totalPage: 0,
    sortOptions: [
      { value: 'title', name: 'По названию' },
      { value: 'body', name: 'По описанию' },
      { value: 'id', name: 'По ID' },
    ],
  }),
  getters: {
    sortedPost(state: PostPage) {
      const newArray = [...state.posts];
      const newValue = state.selectedSort;
      newArray.sort((post1, post2) => {
        if (typeof post1[newValue] === 'string') {
          return post1[newValue]?.localeCompare(post2[newValue]);
        } else if (typeof post1[newValue] === 'number') {
          return post1[newValue] - post2[newValue];
        }
      });
      return newArray;
    },
    sortedAndFilteredPosts(state: PostPage, getters: any) {
      return getters.sortedPost.filter((post: any) =>
        post['title'].toLowerCase().includes(state.searchValue.toLowerCase()),
      );
    },
  },
  mutations: {
    setPosts(state: PostPage, posts: [any]) {
      state.posts = posts;
    },
    setIsPostsLoading(state: PostPage, isPostLoading: boolean) {
      state.isPostsLoading = isPostLoading;
    },
    setSelectedSort(state: PostPage, selectedSort: string) {
      state.selectedSort = selectedSort;
    },
    setSearchValue(state: PostPage, searchValue: string) {
      state.searchValue = searchValue;
    },
    setPage(state: PostPage, page: number) {
      state.page = page;
    },
    setTotalPage(state: PostPage, totalPage: number) {
      state.totalPage = totalPage;
    },
  },
  actions: {
    async fetchPosts({ state, commit }: { state: PostPage; commit: Commit }) {
      try {
        commit('setIsPostsLoading', true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?',
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          },
        );
        commit('setPosts', response.data);
        const totalPage = Math.ceil(
          +response.headers['x-total-count'] / state.limit,
        );
        commit('setTotalPage', totalPage);
      } catch (e) {
        console.log(e);
      } finally {
        commit('setIsPostsLoading', false);
      }
    },

    async loadMorePosts({
      state,
      commit,
    }: {
      state: PostPage;
      commit: Commit;
    }) {
      try {
        commit('setPage', ++state.page);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?',
          {
            params: {
              _page: state.page,
              _limit: state.limit,
            },
          },
        );
        const posts = [...state.posts, ...response.data];
        commit('setPosts', posts);
        const totalPage = Math.ceil(
          +response.headers['x-total-count'] / state.limit,
        );
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
