<template>
	<div :class="'page ' + serviceState(service.online)">
    <div class="top">
      <h1>Apache</h1>
      <div class="buttons">
        <div v-if="service.online !== null" class="btn"
             @click="start($store, service, serviceName)">
             Start
        </div>
        <div v-if="service.online !== null" class="btn"
             @click="stop($store, service, serviceName)">
             Stop
        </div>
        <div v-if="service.online !== null" class="btn"
             @click="deinit($store, service, serviceName)">
             <img src="../../img/icon-delete.png" width="16" />
        </div>
        <div v-if="service.online === null" class="btn"
             @click="init($store, service, serviceName)">
             Initiate
        </div>
      </div>
    </div>
	</div>
</template>

<script>
  import store from 'src/vuex/store'
  import { serviceState } from '../../js/helpers.js'
  import { init, deinit, start, stop } from '../../system/api/containers.js'

  export default {
    store,
    computed: {
      project () {
        return store.state.projects.list.filter((project) => project.uid === this.$route.params.uid)[0]
      },
      service () {
        return (this.project ? this.project.services.apache : {})
      }
    },
    methods: {
      serviceState,
      init,
      deinit,
      start,
      stop
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/default.scss";
  @import "../../sass/page.scss";
  @import "../../sass/service.scss";
</style>
