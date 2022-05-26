<template>
  <div class="page__wrapper">
    <div
      class="page"
      :class="{ 'current-page': page === currentPage }"
      v-for="page in totalPages"
      :key="page"
      @click="$emit('change', page)"
    >
      {{ page }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'PagesPagination',
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.page__wrapper {
  display: flex;
}
.page {
  border: 1px solid black;
  padding: 10px;
}
.current-page {
  border: 2px solid teal;
}
</style>
