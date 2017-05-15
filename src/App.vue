<template>
  <div id="app">
    <navbar></navbar>
    <div class="row">
      <div class="col s3">
        <add></add>
      </div>
      <div class="col s9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Add from '@/components/Add'

export default {
  name: 'app',
  components: {
    navbar: Navbar,
    add: Add,
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
}
</style>
