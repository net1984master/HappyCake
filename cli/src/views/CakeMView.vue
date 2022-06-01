<template>
<div v-for="cake in cakes" :key="cake.id">
  <div>{{cake.id}}</div>
  <div>{{cake.name}}</div>
  <div>{{cake.description}}</div>
</div>
</template>

<script>
import { useStore } from 'vuex';
import { computed, onMounted } from 'vue';

export default {
  name: 'CakeMView',
  setup () {
    const store = useStore();
    const cakes = computed(() => store.state.cakem.cakes);
    onMounted(() => {
      store.dispatch('cakem/getAll');
    });
    return {
      cakes
    };
  }
};
</script>

<style scoped>

</style>
