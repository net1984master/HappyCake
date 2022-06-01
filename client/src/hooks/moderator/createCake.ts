import { ref } from 'vue';
import axios from 'axios';

export default function createCake() {
  console.log(55);
  const name = ref('new name');
  const description = ref('new description');

  const create = async () => {
    const result = await axios.post('http://localhost:3000/cake/', {
      name: name.value,
      description: description.value,
    });
    console.log(result);
  };
  create();
}
