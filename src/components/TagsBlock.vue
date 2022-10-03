<template>
  <div class="row tags" v-if="tagitems && tagitems.length > 0">
    <a class="linktag-btn" v-for="(item, index) in tagitems" :key="index">
      {{ item }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    tagitems: Array,
  },
  computed: {
    latestTags() {
      if (this.limit) return this.tagitems.slice(0, this.limit);
      return this.tagitems;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>