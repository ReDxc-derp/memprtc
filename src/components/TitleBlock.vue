<template>
  <div class="column aic title-block">
    <span class="top">{{ title }}</span>
    <span class="bot">{{ desc }}</span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Some title",
    },
    desc: {
      type: String,
      default: "Some desc",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>