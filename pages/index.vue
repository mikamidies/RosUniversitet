<template>
  <div class="master">
    <HomeHero />
    <AppForm class="homeApp" />
    <HomeServices />
    <HomeStudients />
  </div>
</template>

<script>
import AppForm from "~/components/AppForm.vue";
import HomeHero from "~/components/HomePage/HomeHero.vue";
import HomeServices from "~/components/HomePage/HomeServices.vue";
import HomeStudients from "~/components/HomePage/HomeStudients.vue";

export default {
  components: {
    HomeHero,
    HomeServices,
    HomeStudients,
  },
};

AppForm;
</script>

<style scoped>
.homeApp {
  padding: 120px 0;
}
</style>
