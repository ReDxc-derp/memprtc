<template>
  <section id="SiteHire">
    <div class="wrapper wrapper_hire">
      <div class="column aic sitehire-content">
        <span class="top">Would you like to work with me?</span>
        <span class="bot">
          I'm open for new job opportunities and freelancer works!
        </span>
        <a class="link-btn">Contact Me</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SiteHire",
};
</script>

<style lang="scss" scoped>
@import "../assets/css/_Main.scss";

#SiteHire {
  padding-bottom: 50px;

  & .link-btn {
    font-size: 18px;
    text-transform: uppercase;
    padding: 17px 33px;
  }
}

.sitehire-content {
  span {
    letter-spacing: 1px;
  }

  & .top {
    font-size: 32px;
    font-weight: 700;
    line-height: 40px;
  }

  & .bot {
    opacity: 0.8;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    margin: 10px 0 30px;
  }
}

@import "../assets/css/_Responsive.scss";
</style>