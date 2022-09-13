<template>
  <div class="column skills-list">
    <SiteStartSkillsItem
      title="Kekium + Memes"
      endPercent="100"
      color="#027DFD"
    />
    <SiteStartSkillsItem title="HTMLCSS" endPercent="60" color="#A9DC3C" />
    <SiteStartSkillsItem title="Vue JS" endPercent="10" color="#E49115" />
    <SiteStartSkillsItem />
  </div>
</template>

<script>
import SiteStartSkillsItem from "./SiteStartSkillsItem.vue";
export default {
  name: "SiteStartSkills",
  components: { SiteStartSkillsItem },
};
</script>

<style lang="scss" scoped>
.skills-list {
  margin-top: 20px;
  gap: 20px;
}
</style>