<template>
  <div class="navbar">
    <div @click="$router.push('/')">Happy Cake</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button style="margin-left: 15px" @click="$router.push('/about')"
        >About</my-button
      >
      <my-button @click="$router.push('/store')">store</my-button>
    </div>
    <!--    <router-link to="/posts">Posts</router-link>-->
    <!--    <router-link to="/about">About</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  components: {},
};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>
