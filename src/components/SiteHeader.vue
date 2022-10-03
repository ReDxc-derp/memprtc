<template>
  <section id="SiteHeader">
    <div class="wrapper wrapper_header">
      <div class="row row_header">
        <router-link to="/">
          <a class="headerlogo">kek ReDxc memes</a>
        </router-link>
        <nav class="row nav_header">
          <router-link to="/about">
            <a class="link">About</a>
          </router-link>
          <router-link to="/blog">
            <a class="link">Articles</a>
          </router-link>
          <router-link to="/project">
            <a class="link">Projects</a>
          </router-link>
          <div class="row aic nav-icons">
            <a>
              <div class="icon search exc"></div>
            </a>
            <a @click="ThemeChange">
              <div class="icon mode"></div>
            </a>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SiteHeader",
  methods: {
    ThemeChange() {
      this.isActive = !this.isActive;
      this.$emit("themeChanged");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_Main.scss";

#SiteHeader {
  margin-top: 0;
  padding-top: 30px;
  font-family: $fontnoto;
  font-size: 20px;
}

.wrapper_header {
  padding: 0 10px;
}

.headerlogo {
  font-size: 24px;
  font-weight: 700;
  line-height: 33px;
}

.nav_header {
  gap: 50px;
}

.nav-icons {
  gap: 25px;

  .icon {
    width: 26px;
    height: 26px;
    background-color: $white;

    .exc {
      width: 24px;
      height: 24px;
    }

    &.search {
      -webkit-mask: url("../assets/svgs/header/search.svg") no-repeat center;
      mask: url("../assets/svgs/header/search.svg") no-repeat center;
    }

    &.mode {
      -webkit-mask: url("../assets/svgs/header/mode.svg") no-repeat center;
      mask: url("../assets/svgs/header/mode.svg") no-repeat center;
    }
  }

  & a {
    display: flex;
  }
}

#app.light .nav-icons .icon {
  background-color: $black;
}

@import "../assets/css/_Responsive.scss";
</style>