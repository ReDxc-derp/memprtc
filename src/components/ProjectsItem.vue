<template>
  <div class="column aifs mainarticproj-item siteprojects-item">
    <a class="linkimg-wrap siteprojects__img-wrap">
      <img :src="require(`../assets/images/SiteProjects/${img}`)" />
      <slot></slot>
    </a>
    <div class="txt-wrap siteprojects__txt-wrap">
      <h3>
        <a class="link" v-html="title"></a>
      </h3>
      <p v-html="desc"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsItem",
  props: {
    img: {
      type: String,
      default: "example1.png",
    },
    title: {
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

.siteprojects__img-wrap {
  margin: 0 auto 10px;
}
</style>