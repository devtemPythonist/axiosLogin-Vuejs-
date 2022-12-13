<template>
  <div class="home">
    <h1>Welcome to home page website</h1>
  </div>
  <router-link :to="{name: 'adminHome'}">admin dashboard</router-link>
  <br>
  <router-link :to="{name:'testPage'}">Test</router-link>

  <div>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { }
}
</script>
