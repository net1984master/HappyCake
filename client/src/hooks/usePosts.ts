import axios from 'axios';
import { onMounted, ref } from 'vue';

export default function UsePosts(limit: number) {
  const posts = ref([]);
  const totalPage = ref(0);
  const isPostsLoading = ref(true);
  const fetching = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?',
        {
          params: {
            _page: 1,
            _limit: limit,
          },
        },
      );
      posts.value = response.data;
      totalPage.value = Math.ceil(+response.headers['x-total-count'] / limit);
    } catch (e) {
      alert('Ошибка');
    } finally {
      isPostsLoading.value = false;
    }
  };
  onMounted(fetching);
  return {
    posts,
    totalPage,
    isPostsLoading,
  };
}
