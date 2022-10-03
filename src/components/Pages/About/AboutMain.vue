<template>
  <div id="AboutPage">
    <SiteHeader @themeChanged="ThemeChange" />
    <SiteStart />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import SiteStart from "@/components/SiteStart.vue";
export default {
  name: "AboutPage",
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
  components: { SiteHeader, SiteFooter, SiteStart },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/Main.scss";

@import "@/assets/css/_Responsive.scss";
</style>