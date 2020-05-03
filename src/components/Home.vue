<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs" />

    <singleBlog
      v-for="(blog, index) in filteredBlogs"
      :key="`${index}`"
    >
      <h3>{{ blog.title | textToUpperCase }}</h3>
      <p class="readMore">By: {{ blog.author }}</p>
      <small>
        <em>Categories: {{ blog.categories.join(', ') }}</em>
      </small>
      <article>
        {{ blog.content }}
      </article>
    </singleBlog>
    
  </div>
</template>

<script>
  import { searchMixin } from '../mixins/searchMixin.js'
  import SingleBlog from './SingleBlog.vue'

  export default {
    name: 'home',
    mixins: [searchMixin],
    components: {
      singleBlog: SingleBlog
    },
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
      },
      viewBlog() {
        this.$router.push('/single')
      }
    },
    created() {
      this.resource = this.$resource('blogData.json')
      this.getBlogs()
    }
  }
</script>

<style scoped>
  body {
    margin: 0;
  }
  #show-blogs {
    max-width: 800px;
    margin: 0px auto;
  }
  input {
    padding: 8px;
    width: 98%;
  }
  p.readMore {
    width: 17%;
    padding: 4px;
    background: #636FA4;
    color: #FFFFFF;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #636FA4;
    font-weight: 600;
  }
</style>
