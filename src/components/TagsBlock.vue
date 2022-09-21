<template>
  <div class="row tags">
    <a class="linktag-btn" v-for="(item, index) in listitems" :key="index">
      {{ item }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    listitems: Array,
  },
};
</script>

<style lang="scss" scoped>
</style>