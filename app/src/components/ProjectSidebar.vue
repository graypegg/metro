<template>
  <div :class="'project-sidebar' + (this.shown ? ' shown' : '')">
    <div class="top">
      <div class="close" @click="close"></div>
      <div class="name">{{ projectObj.name }}</div>
    </div>
    <div class="services">
      <div v-for="(service, serviceName) in projectObj.services"
           :class="'service ' + serviceState(service.online)"
           @click="$router.push('/' + serviceName + '/' + projectObj.uid)">
       {{ serviceName }}
      </div>
    </div>
    <div class="settings">
      <link-button to="/">delete project</link-button>
    </div>
  </div>
</template>

<script>
  import store from 'src/vuex/store'
  import LinkButton from './UI/LinkButton.vue'
  import { serviceState } from '../js/helpers.js'

  export default {
    store,
    props: ['uid'],
    data () {
      return {
        projectObj: {
          name: '',
          services: []
        }
      }
    },
    computed: {
      project () {
        return store.state.projects.list.filter((project) => project.uid === this.uid)[0]
      },
      shown () {
        return this.project !== undefined
      }
    },
    methods: {
      close () { this.$parent.clear() },
      serviceState
    },
    mounted () {
      this.$watch('project', (p) => {
        if (p !== undefined) {
          this.projectObj = p
        }
      })
    },
    components: { LinkButton }
  }
</script>


<style lang="scss">
  @import "../sass/default.scss";

  .project-sidebar {
    position: absolute;
    left: 0;
    top: 0;
    transform: translateX(100%);
    z-index: 999;
    background: $warm-grey;
    width: 250px;
    height: 100%;
    transition: 0.5s transform $quad;

    &.shown {
      transform: translateX(0);

      .top {
        .close {
          &::before {
            transform: translate(-50%, -50%) rotate(45deg);
          }

          &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
          }
        }
      }
    }

    .top {
      @include liquidate($green-1, $green-2);
      position: relative;
      display: flex;

      .close {
        flex: 0 0 50px;
        height: 50px;
        position: relative;
        cursor: pointer;

        &::before,
        &::after {
          position: absolute;
          top: 50%;
          left: 50%;
          content: "";
          background: #FFF;
          width: 30px;
          height: 2px;
          transition: 0.75s all $quad;
        }

        &::before {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        &::after {
          transform: translate(-50%, -50%) rotate(0deg);
        }
      }

      .name {
        flex: 1 1 10px;
        display: flex;
        align-items: center;
        color: #FFF;
        font: $reg;
        font-size: 1.4rem;
        padding-left: 10px;
      }
    }

    .services {
      padding: 5px 20px;

      .service {
        &.online   { @include liquidate($green-1, $green-2); }
        &.offline  { @include liquidate($red-1, $red-2);     }
        &.inactive { background: $cold-grey;                 }

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
