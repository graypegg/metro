<template>
  <router-link :to="to" class="btn">
    <slot></slot>
  </router-link>
</template>

<script>
  export default {
    props: ['to']
  }
</script>

<style lang="scss">
  @import "../../sass/default.scss";
</style>
