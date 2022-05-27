import { createStore } from 'vuex';
import { postModule } from '@/store/postModule';

export default createStore({
  modules: { post: postModule },
});

export interface PostPage {
  posts: [any];
  title: string;
  body: string;
  showDialog: boolean;
  isPostsLoading: boolean;
  selectedSort: string;
  searchValue: string;
  page: number;
  limit: number;
  totalPage: number;
  sortOptions: [];
}
