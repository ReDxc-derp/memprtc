<template>
  <div id="home">
    <SiteHeader @themeChanged="ThemeChange" />
    <SiteStart />
    <SiteArticles />
    <SiteProjects />
    <SiteHire />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteStart from "@/components/SiteStart.vue";
import SiteArticles from "@/components/SiteArticles.vue";
import SiteProjects from "@/components/SiteProjects.vue";
import SiteHire from "@/components/SiteHire.vue";
import SiteFooter from "@/components/SiteFooter.vue";
export default {
  name: "App",
  components: {
    SiteHeader,
    SiteStart,
    SiteArticles,
    SiteProjects,
    SiteHire,
    SiteFooter,
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    ThemeChange() {
      this.isActive = !this.isActive;
      this.$emit("themeChanged");
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/_Main.scss";

@import "../assets/css/_Responsive.scss";
</style>
