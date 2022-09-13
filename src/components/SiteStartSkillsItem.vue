<template>
  <div class="column skills-item">
    <span class="skills__item-title">{{ title }}</span>
    <div class="loading-bar">
      <div class="percentage" :style="skillsitem"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SiteStartSkillsItem",
  props: {
    title: {
      type: String,
      default: "KeK",
    },
    endPercent: {
      type: Number,
      default: 50,
    },
    color: {
      type: String,
      default: "#A15448",
    },
  },
  data: () => {
    return {
      percentage: 0,
    };
  },
  computed: {
    percent() {
      return this.percentage.toFixed();
    },
    skillsitem() {
      return {
        backgroundColor: this.color,
        width: this.percentage + "%",
      };
    },
  },
  created() {
    var intval = setInterval(() => {
      if (this.percentage < this.endPercent) this.percentage += 0.1;
      else clearInterval(intval);
    }, 10);
  },
};
</script>

<style lang="scss">
@import "../assets/css/_Main.scss";

.skills-item {
  & span {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.3px;
  }

  .loading-bar {
    width: 170px;
    height: 6px;
    margin-top: 5px;
    border-radius: 6px;
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    box-shadow: inset 0 1px 2px rgba($color: #000, $alpha: 0.4), 0 -1px 1px #fff,
      0 1px 0 #fff;

    .percentage {
      position: absolute;
      top: 1px;
      left: 1px;
      right: 1px;
      display: block;
      height: 100%;
      border-radius: 15px;
      background-color: #a5df41;
      background-size: 30px 30px;
      background-image: linear-gradient(
        135deg,
        rgba($color: #fff, $alpha: 0.15) 25%,
        transparent 25%,
        transparent 50%,
        rgba($color: #fff, $alpha: 0.15) 50%,
        rgba($color: #fff, $alpha: 0.15) 75%,
        transparent 75%,
        transparent
      );
      animation: animate-stripes 3s linear infinite;
    }
  }
}
</style>