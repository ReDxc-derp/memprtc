<template>
  <section id="ArticlesAll">
    <div class="wrapper wrapper_articlesall">
      <div class="row aifs sitearticles-content">
        <ArticlesItem
          img="example2.png"
          minread="5 mins"
          title="Minimalist Guide to Flutter Hooks"
          theme="Best packages - Part 1"
          date="16 september 2022"
          desc="Hooks are a new kind of object that manages a Widget life-cycles.
              Hooks are a new kind of object that manages a Widget life-cycles.
              They exist for one reason: increase the code-sharing between
              widgets by removing duplicates. They exist for one reason:
              increase the fe-cycles. code-sharing between...."
          ><TagsBlock :listitems="['Mobala', 'Kekium']" />
        </ArticlesItem>
        <ArticlesItem
          img="example1.png"
          minread="4 mins"
          title="Minimalist Guide to Flutter Hooks"
          theme="Best packages - Part 5"
          date="15 september 2022"
          desc="Hooks are a new kind of object that manages a Widget
                life-cycles. They exist for one reason: increase the
                code-sharing between widgets by removing duplicates....."
        />
        <ArticlesItem
          img="example1.png"
          minread="50 mins"
          title="VPN Flare - Secure & Fast VPN"
          theme="Best packages - Part 9"
          date="14 september 2022"
          desc="A VPN app that make you connect to the world freely!"
        >
          <TagsBlock :listitems="['Example', 'Memes']" />
        </ArticlesItem>
        <ArticlesItem
          img="example1.png"
          minread="5 mins"
          title="Minimalist Guide to Flutter Hooks"
          theme="Best packages - Part 1"
          date="16 september 2022"
          desc="Hooks are a new kind of object that manages a Widget life-cycles.
              Hooks are a new kind of object that manages a Widget life-cycles.
              They exist for one reason: increase the code-sharing between
              widgets by removing duplicates. They exist for one reason:
              increase the fe-cycles. code-sharing between...."
          ><TagsBlock :listitems="['Mobala', 'Kekium']" />
        </ArticlesItem>
      </div>
    </div>
  </section>
</template>

<script>
import ArticlesItem from "@/components/ArticlesItem.vue";
import TagsBlock from "@/components/TagsBlock.vue";
export default {
  name: "ArticlesAll",
  components: { ArticlesItem, TagsBlock },
  props: {
    limit: {
      type: Number,
      default: 3,
    },
    articles: Array,
  },
  computed: {
    latestArticles() {
      if (this.limit) return this.articles.slice(0, this.limit);
      return this.articles;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_Main.scss";

#ArticlesAll {
  font-family: $fontpop;
  font-weight: 400;
}

.sitearticles-content {
  flex-wrap: wrap;
  gap: 50px;
}

@import "@/assets/css/_Responsive.scss";
</style>