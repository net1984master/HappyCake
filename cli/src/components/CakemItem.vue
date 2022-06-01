<template>
<div class="cake">
  <div>
    <div>{{ cake.id }}</div>
    <div><strong>Название</strong> {{ cake.name }}</div>
    <div><strong>Описание</strong> {{ cake.description }}</div>
  </div>
  <div class="cake__btns">
<!--    <my-button @click="$router.push(`/posts/${post.id}`)">Открыть</my-button>-->
<!--    <my-button @click="$emit('remove', post)">Удалить</my-button>-->
  </div>
</div>
</template>

<script>
export default {
  name: "CakemItem"
}
</script>

<style scoped>

</style>
