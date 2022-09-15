<template>
  <section id="SiteArticles">
    <div class="wrapper wrapper_sitearticles">
      <div class="row latestrow articles">
        <span class="latest-title">Latest Articles</span>
        <a class="link latest-seeall">See all</a>
      </div>
      <div class="row sitearticles-content">
        <SiteArticlesItem
          img="example1.png"
          minread="5 mins"
          title="Minimalist Guide to Flutter Hooks"
          theme="Best packages - Part 1"
          date="15 september 2022"
          desc="Hooks are a new kind of object that manages a Widget life-cycles.
              Hooks are a new kind of object that manages a Widget life-cycles.
              They exist for one reason: increase the code-sharing between
              widgets by removing duplicates. They exist for one reason:
              increase the fe-cycles. code-sharing between...."
        />
        <SiteArticlesItem
          img="example1.png"
          minread="4 mins"
          title="Minimalist Guide to Flutter Hooks"
          theme="Best packages - Part 5"
          date="15 september 2022"
          desc="Hooks are a new kind of object that manages a Widget
                life-cycles. They exist for one reason: increase the
                code-sharing between widgets by removing duplicates....."
        />
        <SiteArticlesItem
          img="example1.png"
          minread="50 mins"
          title="VPN Flare - Secure & Fast VPN"
          theme="Best packages - Part 9"
          date="14 september 2022"
          desc="A VPN app that make you connect to the world freely!"
        />
      </div>
    </div>
  </section>
</template>

<script>
import SiteArticlesItem from "./SiteArticlesItem.vue";
export default {
  name: "SiteArticles",
  components: { SiteArticlesItem },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_Main.scss";

#SiteArticles {
  font-family: $fontpop;
  font-weight: 400;
  height: 1000px;
  margin-top: 100px;
}

.sitearticles-content {
  flex-wrap: wrap;
}

@import "../assets/css/_Responsive.scss";
</style>