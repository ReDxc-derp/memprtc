<template>
  <section id="SiteStart">
    <div class="wrapper wrapper_sitestart">
      <div class="row aifs row_sitestart">
        <div class="sitestart-left">
          <span>Professional</span>
          <h1>Flutter Developer<br />and UI/UX Designer</h1>
          <p>
            My main goal is travelling the whole world while working
            remotely!<br />If you'd like to help/work with me, Let's get in
            touch!
          </p>
          <a href="#" class="link-btn">Say Hello!</a>
        </div>
        <div class="sitestart-right">
          <div class="sitestart__img-wrap">
            <img src="../assets/images/SiteStart/flut.png" />
          </div>
          <div class="sitestart__txt-wrap">
            <div class="sitestart-txt">
              <span>
                Hi, I'm an eager<br />developer who <br />flutter around!
              </span>
            </div>
          </div>
          <div class="sitestart__skills-wrap">
            <div class="sitestart-skills">
              <span class="title">My Main Skills</span>
              <SiteStartSkills />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SiteStartSkills from "./SiteStartSkills.vue";
export default {
  name: "SiteStart",
  components: { SiteStartSkills },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_Main.scss";

#SiteStart {
  font-family: $fontint;
}

.sitestart-left {
  width: 60%;
  z-index: 3;

  & span,
  p {
    color: #929292;
  }

  & span {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -1px;
  }

  & h1 {
    margin: 10px 0 20px;
  }

  & p {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 20px;
  }
}

.sitestart-right {
  color: $black !important;
  width: 40%;
  min-height: 450px;
  z-index: 1;
}

.sitestart__img-wrap {
  position: absolute;
  top: 0;
  right: 0;
  border: 2px dashed #027dfd;
  border-radius: 100%;
  padding: 40px;

  & img {
    width: 340px;
    height: 350px;
  }
}

.sitestart__txt-wrap {
  position: absolute;
  z-index: 2;
  right: 0;
}

.sitestart-txt {
  background-color: $white;
  padding: 15px 25px 25px;
  border-radius: 15px;
  box-shadow: 0px 24px 34px rgba(199, 201, 217, 0.35);

  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 25px;
    bottom: -25px;
    border-top: 30px solid $white;
    border-right: 35px solid transparent;
    transform: rotate(10deg);
  }

  & span {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
}

.sitestart__skills-wrap {
  position: absolute;
  z-index: 2;
  left: 0;
  bottom: 0;
}

.sitestart-skills {
  padding: 25px;
  border-radius: 15px;
  background-color: $white;
  filter: drop-shadow(0px 24px 34px rgba(199, 201, 217, 0.5));

  & .title {
    font-size: 14px;
    line-height: 21px;
  }
}

@import "../assets/css/_Responsive.scss";
</style>