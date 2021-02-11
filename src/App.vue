<template>
  <div id="app">
    <div class="navbar">
      <Navbar />
    </div>

    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'app',
  components: {
    Navbar,
  }
}
</script>

<style lang="scss">
  @import "~materialize-css/dist/css/materialize.min.css";

  #app {
    display: flex;
    flex-direction: column;
  }
</style>
