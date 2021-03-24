<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

    <!-- Injeção de variáveis do config.js -->
    <p>Injected URL: {{ _env_.baseUrl }}</p>
    <!-- Injeção de variáveis do config.js -->

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
