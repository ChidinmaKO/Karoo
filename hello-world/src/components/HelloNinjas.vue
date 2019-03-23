<template>
  <div class="hello">
    <h3>List of Ninjas and their specialties!</h3>
    <ul>
      <li v-for="(ninja, index) in ninjas" :key="index" @click="ninja.show = !ninja.show">
        <h4>{{ ninja.name }} <span v-show="ninja.show">: {{ ninja.speciality }}</span></h4> 
      </li>
    </ul>
    <button @click="deleteNinja">Delete Ninja</button>
  </div>
</template>

<script>
export default {
  name: 'HelloNinjas',
  // props: ['ninjas'],
  props: {
    ninjas: {
      type: Array,
      required: true
    }
  },
  data: function() {
    return{
    }
  },
  methods: {
    deleteNinja: function() {
      this.ninjas.pop()
    }
  },
  beforeCreate() {
    alert('beforeCreate');
  },
  created() {
    // fetch data from APIs or database
    alert('created');
  },
  beforeMount() {
    alert('beforeMount');
  },
  mounted() {
    // manipulate the dom
    alert('mounted');
  },
  beforeUpdate() {
    alert('beforeUpdate');
  },
  updated() {
    alert('updated');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background: #DBDBDB;
  padding: 30px 0;
}
h3 {
  margin: 0;
  color: maroon;
}
ul {
  padding: 0;
  margin: 0;
}
li {
  cursor: pointer;
}
</style>
