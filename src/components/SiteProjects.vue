<template>
  <section id="SiteProjects">
    <div class="wrapper wrapper_siteprojects">
      <div class="row latestrow projects">
        <span class="latest-title">Latest Projects</span>
        <a class="link latest-seeall">See all</a>
      </div>
      <ProjectsBlock />
    </div>
  </section>
</template>

<script>
import ProjectsBlock from "./ProjectsBlock.vue";
export default {
  name: "SiteProjects",
  components: { ProjectsBlock },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_Main.scss";

#SiteProjects {
  font-family: $fontpop;
  font-weight: 400;
}

@import "../assets/css/_Responsive.scss";
</style>