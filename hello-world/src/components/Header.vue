<template>
  <div class="header">
      <header>
            <h2 @click="changeTitle">{{ mainTitle }}</h2>
      </header>
        <nav>
            <h3>{{ title }}</h3>
            <ul>
                <li v-for="(nav, index) in navs" :key="index">{{ nav }}</li>
            </ul>
        </nav>
  </div>
</template>

<script>
import { bus } from '../main.js';

export default {
  name: 'Header',
  props: {
      mainTitle: {
          type: String,
          required: true
      }
  },
  data: function() {
    return{
      title: 'Welcome to Karoo',
      navs: ['Home', 'About', 'Blog', 'Contact'],
    }
  },
  methods: {
      changeTitle: function() {
          this.$emit('changeTitle', 'Guru App');
        // using the event bus
        // this.mainTitle = 'Sensei App';
        // bus.$emit('titleChanged', 'Sensei App');
      }
  }
}
</script>

<style scoped>
.header {
    color: #222;
    background: #45a247;
    padding: 10px 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 15px;
  color: #ffffff;
}

</style>
