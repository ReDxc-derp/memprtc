<template>
  <div id="BlogDetails">
    <SiteHeader @themeChanged="ThemeChange" />
    <BlogDetailsItem />
    <ArticlesAll :limit="3" />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import BlogDetailsItem from "./BlogDetailsItem.vue";
import ArticlesAll from "./ArticlesAll.vue";
export default {
  name: "BlogDetails",
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
  components: { SiteHeader, SiteFooter, BlogDetailsItem, ArticlesAll },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/Main.scss";

@import "@/assets/css/_Responsive.scss";
</style>