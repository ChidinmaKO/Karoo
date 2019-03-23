<template>
  <div id="app">
    <App-header :mainTitle='mainTitle' @changeTitle.once='updateTitle($event)'></App-header>
    <HelloNinjas :ninjas='ninjas'></HelloNinjas>
    <!-- props is passing data from the parent to the child(ren) -->
    <App-footer :mainTitle='mainTitle'></App-footer>
  </div>
</template>

<script>
import HelloNinjas from './components/HelloNinjas.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'app',
  data: function() {
    return {
      mainTitle: 'Ninja App',
      ninjas: [
              {name: 'Chidinma', speciality: 'Javascript Ninja', show: false},
              {name: 'Victoria', speciality: 'Python Queen', show: false},
              {name: 'Precious', speciality: 'Machine Learning Diva', show: false},
              {name: 'Tobi', speciality: 'C++ Ambassador', show: false},
              {name: 'Ada', speciality: 'Shell Warrior', show: false},
              {name: 'Amy', speciality: 'Deep Learning Master', show: false}
            ]
    }
  },
  methods: {
    updateTitle: function(receivedEvent) {
      this.mainTitle = receivedEvent;
    }
  },
  components: {
    HelloNinjas,
    'App-header': Header,
    'App-footer': Footer,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
