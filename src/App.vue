<template>
  <div id="app">
    <SiteHeader />
    <SiteStart />
  </div>
</template>

<script>
import SiteStart from "./components/SiteStart.vue";
import SiteHeader from "./components/SiteHeader.vue";

export default {
  name: "App",
  components: {
    SiteStart,
    SiteHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import "./assets/css/_Variables.scss";

body,
a,
p,
h1,
h2,
h3,
ul,
ol,
li,
figure {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
  border: none;
  outline: none;
}

div {
  position: relative;
}

h1 {
  font-size: 54px;
  font-weight: 700;
  line-height: 70px;
}

a,
button {
  transition: 0.3s;
}

a {
  color: $black;
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &.link:hover,
  &.link:active,
  &.link:focus {
    opacity: 0.8;
    border-color: black;
  }
}

.link-btn {
  width: fit-content;
  z-index: 1;
  display: inline-block;
  position: relative;
  overflow: hidden;
  font-size: 14px;
  font-weight: 600;
  padding: 19px 51px;
  color: $white;
  background-color: $black;
  border-radius: 6px;

  &:hover {
    color: $black;
  }

  &:before {
    content: "";
    position: absolute;
    width: 200%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    -webkit-transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -4em, 0);
    transform: rotate3d(0, 0, 1, -45deg) translate3d(0, -4em, 0);
    -webkit-transform-origin: 0% 100%;
    transform-origin: 0% 100%;
    -webkit-transition: all 0.35s ease-in-out 0s;
    -moz-transition: all 0.35s ease-in-out 0s;
    -ms-transition: all 0.35s ease-in-out 0s;
    -o-transition: all 0.35s ease-in-out 0s;
    transition: all 0.35s ease-in-out 0s;
  }

  &:hover:before {
    opacity: 1;
    background-color: $white;
    -webkit-transform: rotate3d(0, 0, 1, 0deg);
    transform: rotate3d(0, 0, 1, 0deg);
    -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
    transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  }
}

/* Container */
.wrapper {
  width: 100%;
  margin: auto;
  position: relative;
}
.row {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
}
.column {
  display: flex !important;
  flex-direction: column;
  justify-content: space-between;
}
.jcfs {
  justify-content: flex-start;
}
.jcc {
  justify-content: center;
}
.aifs {
  align-items: flex-start;
}
.aic {
  align-items: center;
}
.ais {
  align-items: stretch;
}

#app {
  font-family: $fontint;
  background-color: #cccccc;
}

@import "./assets/css/_Responsive.scss";
</style>
