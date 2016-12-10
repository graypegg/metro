<template>
  <div :class="'page ' + serviceState(project.services.nginx.online)">
    <div class="top">
      <h1>Nginx</h1>
      <div class="buttons">
      </div>
    </div>
  </div>
</template>

<script>
  import store from 'src/vuex/store'
  import { serviceState } from '../../js/helpers.js'

  export default {
    store,
    computed: {
      project () {
        return store.state.projects.list.filter((project) => project.uid === this.$route.params.uid)[0]
      }
    },
    methods: {
      serviceState
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/default.scss";
  @import "../../sass/page.scss";
  @import "../../sass/service.scss";
</style>
