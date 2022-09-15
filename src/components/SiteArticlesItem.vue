<template>
  <div class="column aifs sitearticles-item">
    <a class="sitearticles__img-wrap">
      <img :src="require(`../assets/images/SiteArticles/${img}`)" />
      <a class="minread">{{ minread }} read</a>
    </a>
    <div class="sitearticles__txt-wrap">
      <div class="row themedate">
        <span class="theme">{{ theme }}</span>
        <span class="date">{{ date }}</span>
      </div>
      <h3>
        <a class="link">{{ title }}</a>
      </h3>
      <p>{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteArticlesItem",
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
  position: relative;
  display: flex;
  width: fit-content;
  margin: 0 auto 10px;
}
.minread {
  color: $white !important;
  text-transform: uppercase;
  position: absolute;
  top: 5px;
  right: 10px;
  padding: 5px 10px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  .sitearticles__img-wrap:hover & {
    background: rgba(0, 0, 0, 0.7);
  }
}
.sitearticles__txt-wrap {
  width: 100%;
}

.sitearticles-item {
  width: 45%;

  & .themedate {
    opacity: 0.8;
  }
  & .date {
    text-transform: uppercase;
  }
  & h3 {
    margin: 10px 0;
  }
  & p {
    text-align: justify;
    font-size: 14px;
    font-weight: 400;
    line-height: 26px;
    letter-spacing: 0.5px;
  }

  &:first-child {
    flex-direction: row;
    width: 100%;
    margin-bottom: 60px;

    & .sitearticles__img-wrap {
      margin: 0 0 10px;
    }

    & .sitearticles__txt-wrap {
      width: 55%;
    }
  }
}
</style>