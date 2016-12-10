<template>
  <div class="sidebar">
    <div class="services">
      <div class="service online" @click="$router.push('service/Apache')">
        Apache
      </div>
      <div class="service offline">
        MySQL
      </div>
    </div>
    <div class="settings">
      <link-button to="/">edit hosts</link-button>
    </div>
  </div>
</template>

<script>
  import LinkButton from './UI/LinkButton.vue'

  export default {
    components: { LinkButton }
  }
</script>

<style lang="scss">
  @import "../sass/default.scss";

  .sidebar {
    position: relative;
    background: $warm-grey;
    flex: 1 1 275px;
    height: 100vh;
    max-width: 350px;
    min-width: 200px;

    .services {
      padding: 5px 20px;

      .service {
        &.online  { @include liquidate($green-1, $green-2); }
        &.offline { @include liquidate($red-1, $red-2);     }

        width: 100%;
        color: #FFF;
        font: $reg;
        font-size: 1.2rem;
        padding: 15px 20px;
        margin: 15px 0;
        cursor: pointer;
      }
    }

    .settings {
      position: absolute;
      bottom: 0;
      left: 0;
      background: $cold-grey;
      width: 100%;
      padding: 20px;
    }
  }
</style>
