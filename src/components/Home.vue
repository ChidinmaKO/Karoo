<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs" />
    <div 
      v-for="(blog, index) in filteredBlogs"
      :key="`${index}`"
      class="single-blog"
    >
      <h3>{{ blog.title }}</h3>
      <p>By: {{ blog.author }}</p>
      <small>
        <em>Categories: {{ blog.categories.join(', ') }}</em>
      </small>
      <article>{{ blog.content }}</article>
    </div>
  </div>
</template>

<script>
  import { searchMixin } from '../mixins/searchMixin.js'

  export default {
    name: 'home',
    mixins: [searchMixin],
    data() {
      return {
        resource: {},
        blogs: [],
        search: ''
      }
    },
    methods: {
      getBlogs() {
        this.resource.get({}).then(response => {
          const result = response.body;
          const data = []
          for(let key in result) {
            data.push(result[key])
          }
          this.blogs = data;
        });
      }
    },
    created() {
      this.resource = this.$resource('blogData.json')
      this.getBlogs()
    }
  }
</script>

<style>
  body {
    margin: 0;
    font-family: 'Nunito SemiBold';
  }
  #show-blogs {
    max-width: 800px;
    margin: 0px auto;
  }
  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #E8CBC0;
  }
</style>
