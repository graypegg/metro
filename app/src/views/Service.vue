<template>
	<div class="page">
    <div class="top">
      <h1>{{ name }}</h1>
    </div>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        name: this.$route.params.name
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../sass/default.scss";
  @import "../sass/page.scss";

  .page {
    @include liquidate($green-1, $green-2);

    .top {
      h1 {
        display: inline-block;
        position: relative;
        font: $reg;
        font-size: 2.75rem;
        color: #FFF;
        font-weight: normal;
        margin: 0;

        &::after {
          content: "";
          display: block;
          position: relative;
          top: 3px;
          background: #FFF;
          height: 1px;
          width: 100%;
        }
      }
    }
  }
</style>
