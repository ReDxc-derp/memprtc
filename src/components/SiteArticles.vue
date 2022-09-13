<template>
  <section id="SiteArticles">
    <div class="wrapper wrapper_sitearticles">
      <div class="row latestrow articles">
        <span class="latest-title">Latest Articles</span>
        <a class="link latest-seeall">See all</a>
      </div>
      <div class="sitearticles-content">
        <div class="row aifs sitearticles-main">
          <a class="sitearticles__img-wrap">
            <img src="../assets/images/SiteArticles/example1.png" />
            <a class="minread">3 mins read</a>
          </a>
          <div class="sitearticles__txt-wrap">
            <div class="row themedate">
              <span class="theme">Best packages - Part 1</span>
              <span class="date">24 may 2022</span>
            </div>
            <h3><a class="link">Minimalist Guide to Flutter Hooks</a></h3>
            <p>
              Hooks are a new kind of object that manages a Widget life-cycles.
              Hooks are a new kind of object that manages a Widget life-cycles.
              They exist for one reason: increase the code-sharing between
              widgets by removing duplicates. They exist for one reason:
              increase the fe-cycles. code-sharing between....
            </p>
          </div>
        </div>
        <div class="row sitearticles-others">
          <div class="column sitearticles__others-item">
            <a class="sitearticles__img-wrap">
              <img src="../assets/images/SiteArticles/example1.png" />
              <a class="minread">3 mins read</a>
            </a>
            <div class="sitearticles__txt-wrap">
              <div class="row themedate">
                <span class="theme">Best packages - Part 1</span>
                <span class="date">24 may 2022</span>
              </div>
              <h3><a class="link">Minimalist Guide to Flutter Hooks</a></h3>
              <p>
                Hooks are a new kind of object that manages a Widget
                life-cycles. They exist for one reason: increase the
                code-sharing between widgets by removing duplicates.....
              </p>
            </div>
          </div>
          <div class="column sitearticles__others-item">
            <SiteArticlesItem
              img="../assets/images/SiteArticles/example1.png"
              minread="50 mins"
              title="VPN Flare - Secure & Fast VPN"
              theme="Best packages - Part 9"
              date="14 september 2022"
              desc="A VPN app that make you connect to the world freely!"
            />
          </div>
        </div>
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

.sitearticles-main {
  margin-bottom: 60px;
  filter: drop-shadow(0px 24px 34px rgba(199, 201, 217, 0.5));
}

.sitearticles__img-wrap {
  position: relative;
  display: flex;
  width: fit-content;
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
  width: 55%;
}
.themedate {
  opacity: 0.8;
}
.date {
  text-transform: uppercase;
}
h3 {
  margin: 10px 0;
}
p {
  text-align: justify;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0.5px;
}

.sitearticles__others-item {
  width: 45%;
  filter: drop-shadow(0px 24px 34px rgba(199, 201, 217, 0.5));

  & .sitearticles__txt-wrap,
  & .sitearticles__img-wrap {
    width: 100%;
  }

  & .sitearticles__img-wrap {
    margin-bottom: 10px;

    & img {
      margin: auto;
    }
    & .minread {
      right: 95px;
    }
  }
}

@import "../assets/css/_Responsive.scss";
</style>