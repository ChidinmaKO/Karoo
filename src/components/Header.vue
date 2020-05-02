<template>
  <nav>
    <ul>
      <router-link to="/" tag="li" active-class="active" exact>
        <a>Home</a>
      </router-link>
      <router-link to="/add" tag="li" active-class="active">
        <a>Add a new blog</a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'app-header'
  }
</script>

<style>
  ul {
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #FFFFFF;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
  }
  /* a:hover, a:focus, a:active {
    text-decoration: none;
    color: #000;
    background-color: #E8CBC0;
  } */
  nav {
    background: #6F0000;
    padding: 30px 0;
    margin-bottom: 40px;
  }
  li.router-link-exact-active.active a {
    color: #000;
    background-color: #E8CBC0;
}
</style>
