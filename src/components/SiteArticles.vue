<template>
  <section id="SiteArticles">
    <div class="wrapper wrapper_sitearticles">
      <div class="row latestrow articles">
        <span class="latest-title">Latest Articles</span>
        <a class="link latest-seeall">See all</a>
      </div>
      <ArticlesBlock />
    </div>
  </section>
</template>

<script>
import ArticlesBlock from "./ArticlesBlock.vue";
export default {
  name: "SiteArticles",
  components: { ArticlesBlock },
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