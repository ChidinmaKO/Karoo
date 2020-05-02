<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import AddBlog from './components/AddBlog.vue';
  import Home from './components/Home.vue';
  import Header from './components/Header.vue';

  export default {
    name: 'app',
    components: {
      'add-blog': AddBlog,
      'home': Home,
      'app-header': Header
    }
  }
</script>

<style>
  body{
    background: #ECE9E6;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #FFFFFF, #ECE9E6);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #FFFFFF, #ECE9E6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    margin: 0;
    color: #0F0C29;
    font-family: Nunito Sans;
  }
</style>
