<template>
  <section id="SiteHeader">
    <div class="wrapper wrapper_header">
      <div class="row row_header">
        <a href="#" class="headerlogo">kek ReDxc memes</a>
        <nav class="row nav_header">
          <a href="#" class="link">About</a>
          <a href="#" class="link">Articles</a>
          <a href="#" class="link">Projects</a>
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