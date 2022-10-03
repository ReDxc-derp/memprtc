<template>
  <div id="ProjectPage">
    <SiteHeader @themeChanged="ThemeChange" />
    <SiteFooter />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
export default {
  name: "ProjectPage",
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
  components: { SiteHeader, SiteFooter },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/Main.scss";

@import "@/assets/css/_Responsive.scss";
</style>