<template>
  <div class="master">
    <HomeHero />
    <AppForm class="homeApp" />
  </div>
</template>

<script>
import AppForm from "~/components/AppForm.vue";
import HomeHero from "~/components/HomePage/HomeHero.vue";

export default {
  components: {
    HomeHero,
  },
};

AppForm;
</script>

<style scoped>
.homeApp {
  padding: 120px 0;
}
</style>
