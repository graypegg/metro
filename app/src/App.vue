<template>
  <div class="root">
    <sidebar></sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
  import store from 'src/vuex/store'
  import Sidebar from './components/Sidebar.vue'

  export default {
    store,
    components: { Sidebar }
  }
</script>

<style lang="scss">
  .root {
    display: flex;
  }
</style>
