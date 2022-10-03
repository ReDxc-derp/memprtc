<template>
  <section id="ArticlesAll">
    <div class="wrapper wrapper_articlesall">
      <div class="row aifs sitearticles-content">
        <ArticlesItem
          v-for="(item, index) in latestArticles"
          :key="index"
          :img="item.img"
          :minread="item.minread"
          :title="item.title"
          :theme="item.theme"
          :date="item.date"
          :desc="item.desc"
          ><TagsBlock :tagitems="item.tagitems" />
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
    limit: Number,
  },
  computed: {
    latestArticles() {
      if (this.limit) return this.articles.slice(0, this.limit);
      return this.articles;
    },
  },
  data() {
    return {
      articles: [
        {
          img: "example1.png",
          title: "Example Guide to Flutter Hooks",
          theme: "Best packages - Part 1",
          date: "16 september 2022",
          desc: "Hooks are a new kind of object that manages a Widget life-cycles. Hooks are a new kind of object that manages a Widget life-cycles. They exist for one reason: increase the code-sharing between widgets by removing duplicates. They exist for one reason: increase the fe-cycles. code-sharing between....",
          tagitems: ["Mobala", "Kekium"],
        },
        {
          img: "example2.png",
          minread: "15 mins",
          title: "VPN Flare - Secure & Fast VPN",
          theme: "Best packages - Part 17",
          date: "12 september 2022",
          desc: "A VPN app that make you connect to the world freely!",
        },
        {
          img: "example1.png",
          minread: "25 mins",
          title: "Example Guide to Flutter Hooks",
          theme: "Best packages - Part 1",
          date: "16 september 2022",
          desc: "Hooks are a new kind of object that manages a Widget life-cycles. Hooks are a new kind of object that manages a Widget life-cycles. They exist for one reason: increase the code-sharing between widgets by removing duplicates. They exist for one reason: increase the fe-cycles. code-sharing between....",
        },
        {
          img: "example1.png",
          minread: "25 mins",
          title: "Example Guide to Flutter Hooks",
          theme: "Best packages - Part 1",
          date: "16 september 2022",
          desc: "Hooks are a new kind of object that manages a Widget life-cycles. Hooks are a new kind of object that manages a Widget life-cycles. They exist for one reason: increase the code-sharing between widgets by removing duplicates. They exist for one reason: increase the fe-cycles. code-sharing between....",
        },
      ],
    };
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