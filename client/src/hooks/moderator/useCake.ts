import { onMounted, ref } from 'vue';
import axios from 'axios';

export default function useCake() {
  const cakes = ref([]);
  const fetching = async () => {
    try {
      const response = await axios.get('http://localhost:3000/cake/');
      cakes.value = response.data;
    } catch (e) {
      console.log(e);
    } finally {
    }
  };
  onMounted(fetching);
  return {
    cakes,
  };
}
