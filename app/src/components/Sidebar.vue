<template>
  <div class="sidebar">

    <project-sidebar :uid="(shownProject ? shownProject.uid : '')"></project-sidebar>

    <div class="projects">
      <div class="project online" v-for="project in projects" @click="showProject(project)">
        {{ project.name }}
      </div>
    </div>
    <link-button to="/create-project">+</link-button>
    <div class="settings">
      <link-button to="/">edit hosts</link-button>
    </div>
  </div>
</template>

<script>
  import store from 'src/vuex/store'
  import LinkButton from './UI/LinkButton.vue'
  import ProjectSidebar from './ProjectSidebar.vue'

  export default {
    store,
    components: { LinkButton, ProjectSidebar },
    data () {
      return {
        projects: store.state.projects.list,
        shownProject: null
      }
    },
    methods: {
      showProject (project) {
        this.shownProject = project
      },
      clear () {
        this.shownProject = null
      }
    }
  }
</script>

<style lang="scss">
  @import "../sass/default.scss";

  .sidebar {
    position: relative;
    background: $warm-grey;
    flex: 0 0 250px;
    height: 100vh;
    overflow: hidden;

    .projects {
      padding: 5px 20px;

      .project {
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
