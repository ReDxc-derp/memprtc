<template>
  <div class="row jcc socials">
    <a
      class="socials-item"
      target="_blank"
      v-for="(icon, index) in socials"
      :key="index"
      :href="icon.href"
    >
      <img :src="icon.icon" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          icon: require("../assets/svgs/socials/ex1.svg"),
          href: "https://linkedin.com/",
        },
        {
          icon: require("../assets/svgs/socials/ex2.svg"),
          href: "https://gitlab.com/",
        },
        {
          icon: require("../assets/svgs/socials/ex3.svg"),
          href: "https://github.com/",
        },
        {
          icon: require("../assets/svgs/socials/ex4.svg"),
          href: "https://figma.com/",
        },
        {
          icon: require("../assets/svgs/socials/ex5.svg"),
          href: "https://patreon.com/",
        },
        {
          icon: require("../assets/svgs/socials/ex6.svg"),
          href: "https://telegram.com/",
        },
        {
          icon: require("../assets/svgs/socials/ex7.svg"),
          href: "https://dribbble.com/",
        },
        {
          icon: require("../assets/svgs/socials/ex8.svg"),
          href: "https://play.google.com/store/games?hl=ru&gl=US",
        },
        {
          icon: require("../assets/svgs/socials/ex9.svg"),
          href: "https://www.apple.com/ru/app-store/",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.socials {
  gap: 24px;

  & a {
    display: flex;
    background-color: #fff;
    padding: 8px;
    border-radius: 8px;

    & img {
      width: 24px;
      height: 24px;
    }
  }
}
</style>