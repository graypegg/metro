<template>
  <div :class="'project-sidebar' + (this.shown ? ' shown' : '')">
    <div class="top">
      <div class="close" @click="close"></div>
      <div class="name">{{ projectObj.name }}</div>
    </div>
    <div class="services">
      <div class="service"></div>
    </div>
  </div>
</template>

<script>
  import store from 'src/vuex/store'

  export default {
    store,
    props: ['uid'],
    data () {
      return {
        projectObj: {
          name: ''
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
      close () {
        this.$parent.clear()
      }
    },
    mounted () {
      this.$watch('project', (p) => {
        if (p !== undefined) {
          this.projectObj = p
        }
      })
    }
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
  }
</style>
