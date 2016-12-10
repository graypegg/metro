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

  .btn {
    display: inline-block;
    padding: 6px 10px;
    border: 1px solid #FFF;
    border-radius: 5px;
    color: #FFF;
    font: $reg;
    text-decoration: none;
    margin: 0 5px;
    transition: 90ms all $quad;

    &:first-of-type { margin-left: 0; }
    &:last-of-type { margin-right: 0; }

    &:hover {
      background: rgba(255, 255, 255, 0.5);
    }
  }
</style>
