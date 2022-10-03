<template>
  <section id="BlogDetailsItem">
    <div class="wrapper wrapper_blogdetailsitem">
      <div class="column aifs mainarticproj-item sitearticles-item">
        <a class="linkimg-wrap sitearticles__img-wrap">
          <img src="@/assets/images/SiteArticles/example2.png" />
        </a>
        <div class="alltags">
          <div class="row tags">
            <a class="linktag-btn">Flutter</a>
            <a class="linktag-btn">Technology</a>
            <a class="linktag-btn">Dart</a>
            <a class="linktag-btn">Programming</a>
          </div>
        </div>
        <div class="txt-wrap sitearticles__txt-wrap">
          <div class="row themedate">
            <span class="theme">Best packages - Part 1</span>
            <span class="date">24 may 2022</span>
          </div>
          <h3>Minimalist Guide to Flutter Hooks</h3>
          <span class="intro">Maximize your code reuse with Flutter Hooks</span>
        </div>
        <div class="column mainarticproj__extension-content">
          <div class="column mainarticproj__extension-item">
            <span class="ext-title">What is Hooks?</span>
            <span class="ext-quote">
              Hooks are a new kind of object that manages a Widget life-cycles.
              They exist for one reasone: increase the code-sharing between
              widgets by removing duplicates.
            </span>
            <span class="ext-desc">
              in this article, I'll show you how to reduce your boilerplate code
              using <u>flutter hooks</u>
            </span>
          </div>
          <div class="column mainarticproj__extension-item">
            <span class="ext-title">Why this package exists?</span>
            <span class="ext-quote">
              StatefulWidget suffers from a big problem: it is very difficult to
              reuse the logic of say initState or dispose.
            </span>
            <span class="ext-desc">
              The most exciting thing about this package: when you use hooks,
              you don't need to worry about like
              <span class="back">initState</span> and
              <span class="back">dispose</span> methods in your widget
              lifecycle, the package will handle them like a boss instead of
              you.
              <hr />
              If you used any controller before, you understand better the pain
              we suffer.
            </span>
          </div>
          <div class="column mainarticproj__extension-item">
            <span class="ext-title">Motivation</span>
            <img src="@/assets/images/SiteArticles/bfaft1.png" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "BlogDetailsItem",
  created() {
    const id = this.$route.params?.id;
    this.article = this.articles.find((i) => i.id === id);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/_Main.scss";

.alltags {
  margin-bottom: 30px;

  & .tags {
    justify-content: center;
    position: relative;
    top: 0;
    right: 0;
    gap: 20px;
  }
}

@import "@/assets/css/_Responsive.scss";
</style>