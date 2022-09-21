<template>
  <div id="app" :class="{ light: isActive }">
    <SiteHeader @themeChanged="ThemeChange" />
    <SiteStart />
    <SiteArticles />
    <SiteProjects />
    <SiteHire />
    <SiteFooter />
  </div>
</template>

<script>
import SiteStart from "./components/SiteStart.vue";
import SiteHeader from "./components/SiteHeader.vue";
import SiteArticles from "./components/SiteArticles.vue";
import SiteProjects from "./components/SiteProjects.vue";
import SiteHire from "./components/SiteHire.vue";
import SiteFooter from "./components/SiteFooter.vue";

export default {
  name: "App",
  components: {
    SiteStart,
    SiteHeader,
    SiteArticles,
    SiteProjects,
    SiteHire,
    SiteFooter
},
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    ThemeChange() {
      this.isActive = !this.isActive;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/css/_Main.scss";

#app {
  font-family: $fontint;
  color: $white;
  background-color: #27323e;

  &.light {
    color: $black;
    background-color: $white;
  }

  & a {
    color: $white;

    &.link:hover,
    &.link:active,
    &.link:focus {
      border-color: $white;
    }
  }
  &.light a {
    color: $black;

    &.link:hover,
    &.link:active,
    &.link:focus {
      border-color: $black;
    }
  }
}

@import "./assets/css/_Responsive.scss";
</style>
