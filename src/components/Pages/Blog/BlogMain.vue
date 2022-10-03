<template>
  <div id="BlogPage">
    <SiteHeader @themeChanged="ThemeChange" />
    <BlogMainTop />
    <ArticlesAll />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import ArticlesAll from "./ArticlesAll.vue";
import BlogMainTop from "./BlogMainTop.vue";
export default {
  name: "BlogPage",
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
  components: { SiteHeader, SiteFooter, ArticlesAll, BlogMainTop },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/Main.scss";

@import "@/assets/css/_Responsive.scss";
</style>