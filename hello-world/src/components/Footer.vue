<template>
  <div class="footer">
      <footer>
          <p>{{ copyright }} {{ mainTitle }}.</p>
      </footer>
  </div>
</template>

<script>
import { bus } from '../main.js';

export default {
  name: 'Footer',
  props: {
      mainTitle: {
          type: String,
          required: true
      }
  },
  data: function() {
    return{
      copyright: 'Copyright 2019',
    }
  },
  created() {
      bus.$on('titleChanged', (data) => {
          this.mainTitle = data;
      })
  },
}
</script>

<style scoped>
.footer {
    color: #ffffff;
    background: #283c86;
    padding: 10px 0;
}

</style>
