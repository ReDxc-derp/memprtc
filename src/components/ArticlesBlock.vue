<template>
  <div class="row sitearticles-content">
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
  </div>
</template>

<script>
import ArticlesItem from "./ArticlesItem.vue";
import TagsBlock from "./TagsBlock.vue";
export default {
  name: "ArticlesBlock",
  components: { ArticlesItem, TagsBlock },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_Main.scss";

.sitearticles-content {
  flex-wrap: wrap;
}

@import "../assets/css/_Responsive.scss";
</style>