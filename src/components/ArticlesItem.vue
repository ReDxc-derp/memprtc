<template>
  <div class="column aifs mainarticproj-item sitearticles-item">
    <a class="linkimg-wrap sitearticles__img-wrap">
      <img :src="require(`../assets/images/SiteArticles/${img}`)" />
      <a class="linktag-btn solo">{{ minread }} read</a>
      <slot></slot>
    </a>
    <div class="txt-wrap sitearticles__txt-wrap">
      <div class="row themedate">
        <span class="theme">{{ theme }}</span>
        <span class="date">{{ date }}</span>
      </div>
      <h3>
        <a class="link" v-html="title"></a>
      </h3>
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
      default: "example1.png",
    },
    minread: {
      type: String,
      default: "KeK",
    },
    title: {
      type: String,
      default: "KeK",
    },
    theme: {
      type: String,
      default: "KeK",
    },
    date: {
      type: String,
      default: "KeK",
    },
    desc: {
      type: String,
      default: "KeK",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_Main.scss";

.sitearticles__img-wrap {
  margin: 0 auto 10px;
}

.sitearticles-item {
  width: 45%;

  &:first-child {
    flex-direction: row;
    width: 100%;
    margin-bottom: 60px;

    & .sitearticles__img-wrap {
      margin: 0;
    }

    & .sitearticles__txt-wrap {
      width: 55%;
    }
  }

  & .tags {
    top: 50px;
  }
}
</style>