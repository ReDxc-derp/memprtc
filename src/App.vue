<template>
  <div id="app" :class="{ light: isActive }">
    <router-view @themeChanged="ThemeChange"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
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
