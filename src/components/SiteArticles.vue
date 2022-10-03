<template>
  <section id="SiteArticles">
    <div class="wrapper wrapper_sitearticles">
      <div class="row latestrow articles">
        <span class="latest-title">Latest Articles</span>
        <router-link to="/blog">
          <a class="link latest-seeall">See all</a>
        </router-link>
      </div>
      <ArticlesAll :limit="3" />
    </div>
  </section>
</template>

<script>
import ArticlesAll from "./Pages/Blog/ArticlesAll.vue";
export default {
  name: "SiteArticles",
  components: { ArticlesAll },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_Main.scss";

#SiteArticles {
  font-family: $fontpop;
  font-weight: 400;
}

@import "../assets/css/_Responsive.scss";
</style>