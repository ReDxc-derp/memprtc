<template>
  <div class="row siteprojects-content">
    <ProjectsItem
      img="example1.png"
      title="VPN Flare - Secure & Fast VPN"
      desc="A VPN app that make you connect to the world freely!"
      ><TagsBlock :listitems="['Mobile App', 'Design']" />
    </ProjectsItem>
    <ProjectsItem
      img="example1.png"
      title="VPN Flare - Secure & Fast VPN"
      desc="A VPN app that make you connect to the world freely!"
      ><TagsBlock :listitems="['Mobile App', 'Design']" />
    </ProjectsItem>
    <ProjectsItem
      img="example1.png"
      title="VPN Flare - Secure & Fast VPN"
      desc="A VPN app that make you connect to the world freely!"
      ><TagsBlock :listitems="['Mobile App', 'Design']" />
    </ProjectsItem>
  </div>
</template>

<script>
import ProjectsItem from "./ProjectsItem.vue";
import TagsBlock from "./TagsBlock.vue";
export default {
  name: "ProjectsBlock",
  components: { ProjectsItem, TagsBlock },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_Main.scss";

.siteprojects-content {
  flex-wrap: wrap;
}

@import "../assets/css/_Responsive.scss";
</style>