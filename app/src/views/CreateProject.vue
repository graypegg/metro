<template>
	<div class="page">
    <input type="text" v-model="name">
    <input type="text" v-model="directory">
    <div class="btn" @click="create">Create '{{ name || 'Project' }}'</div>
	</div>
</template>

<script>
  import store from 'src/vuex/store'
  
  export default {
    data () {
      return {
        name: '',
        directory: ''
      }
    },
    methods: {
      create () {
        store.dispatch('createProject', {
          name: this.name,
          directory: this.directory
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../sass/default.scss";
  @import "../sass/page.scss";

  .page {
    @include liquidate($blue-1, $blue-2);
  }
</style>
