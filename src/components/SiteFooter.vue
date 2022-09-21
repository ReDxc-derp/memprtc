<template>
  <footer id="SiteFooter">
    <div class="wrapper wrapper_footer">
      <SocialsBlock />
    </div>
  </footer>
</template>

<script>
import SocialsBlock from "./SocialsBlock.vue";
export default {
  name: "SiteFooter",
  components: { SocialsBlock },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_Main.scss";

footer {
  padding: 45px 0;
  color: $white;
  background-color: #232932;
}

@import "../assets/css/_Responsive.scss";
</style>