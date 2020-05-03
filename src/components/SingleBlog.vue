<template>
  <div id="single-blog">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'singleBlog'
  }
</script>

<style scoped>
  #single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #E8CBC0;
  }
</style>
