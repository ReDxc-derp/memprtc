<template>
  <section id="BlogMainTop">
    <div class="wrapper wrapper_blogmaintop">
      <TitleBlock
        title="All Articles"
        desc="I write articles about programming, design and cutting edge technologies!"
      />
      <div class="alltags">
        <TagsBlock
          :tagitems="[
            'Flutter',
            'Technology',
            'Dart',
            'Programming',
            'Flutter',
            'Technology',
            'Dart',
            'Programming',
            'Flutter',
            'Technology',
            'Dart',
            'Flutter',
            'Technology',
            'Dart',
            'Programming',
            'Flutter',
            'Technology',
            'Dart',
            'Programming',
          ]"
        />
      </div>
    </div>
  </section>
</template>

<script>
import TagsBlock from "@/components/TagsBlock.vue";
import TitleBlock from "@/components/TitleBlock.vue";
export default {
  name: "BlogMainTop",
  components: { TagsBlock, TitleBlock },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_Main.scss";

@import "@/assets/css/_Responsive.scss";
</style>