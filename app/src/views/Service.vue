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
        font: $reg;
        color: #FFF;
        font-size: 2.5rem;
        font-weight: normal;
        margin: 0;
      }
    }
  }
</style>
