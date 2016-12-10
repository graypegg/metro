<template>
	<div class="page">
    <div class="top">
      <h1>Apache</h1>
      <div class="buttons">
        <div @click="createCon">Create</div>
      </div>
    </div>
	</div>
</template>

<script>
  import containers from '../../system/containers.js'

  export default {
    methods: {
      createCon () {
        containers.create('Apache')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../sass/default.scss";
  @import "../../sass/page.scss";
  @import "../../sass/service.scss";
</style>
