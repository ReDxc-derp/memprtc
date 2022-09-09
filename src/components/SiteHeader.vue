<template>
  <div id="SiteHeader">
    <div class="wrapper wrapper_header">
      <div class="row row_header">
        <a href="#" class="headerlogo">kek ReDxc memes</a>
        <nav class="row nav_header">
          <a href="#" class="link">About</a>
          <a href="#" class="link">Articles</a>
          <a href="#" class="link">Projects</a>
          <div class="row aic nav-icons">
            <a href="#">
              <img class="exc" src="../assets/images/header/search.png" />
            </a>
            <a href="#"><img src="../assets/images/header/mode.png" /></a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteHeader",
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_Variables.scss";

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

.nav_header a {
  margin-right: 50px;

  &:last-child {
    margin-right: 0;
  }
}

.nav-icons {
  & img {
    width: 26px;
    height: 26px;
  }

  .exc {
    width: 24px;
    height: 24px;
  }

  & div {
    display: flex;
    margin-right: 25px;

    &:last-child {
      margin-right: 0;
    }
  }
}

@import "../assets/css/_Responsive.scss";
</style>