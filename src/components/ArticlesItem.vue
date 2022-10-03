<template>
  <div class="column aifs mainarticproj-item sitearticles-item">
    <a class="linkimg-wrap sitearticles__img-wrap">
      <router-link to="/blog/article" style="width: 100%">
        <img :src="require(`../assets/images/SiteArticles/${img}`)" />
      </router-link>
      <a class="linktag-btn solo" v-if="minread">{{ minread }} read</a>
      <slot></slot>
    </a>
    <div class="txt-wrap sitearticles__txt-wrap">
      <div class="row themedate">
        <span class="theme">{{ theme }}</span>
        <span class="date">{{ date }}</span>
      </div>
      <router-link to="/blog/article">
        <h3>
          <a class="link" v-html="title"></a>
        </h3>
      </router-link>
      <p v-html="desc"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlesItem",
  props: {
    img: {
      type: String,
      default: "example2.png",
    },
    minread: {
      type: String,
      default: "some mins",
    },
    title: {
      type: String,
      default: "Example title",
    },
    theme: {
      type: String,
      default: "any theme",
    },
    date: {
      type: String,
      default: "00 may 2022",
    },
    desc: {
      type: String,
      default: "some desc",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_Main.scss";

@import "@/assets/css/_Responsive.scss";
</style>