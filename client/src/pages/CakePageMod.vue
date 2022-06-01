<template>
  <div>tyutgiui</div>
</template>

<script>
import { useStore } from 'vuex';
import {computed, ref} from 'vue';

export default {
  name: 'CakePageMod',
  setup() {
    const store = useStore();
    const likes = ref(999);
    const test = computed(() => store.state['cake/ccctest']);
    console.log(test);
    return {
      likes,
      test,
    };
  },
};
</script>

<style scoped></style>
