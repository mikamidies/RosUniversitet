<template>
  <div class="master">
    <HomeHero />
    <AppForm class="whiteApp" />
    <HomeServices />
    <HomeStudients />
    <HomeSpecialties />
    <HomeFAQ />
    <AppForm class="greyApp" />
  </div>
</template>

<script>
import AppForm from "~/components/AppForm.vue";
import HomeFAQ from "~/components/HomePage/HomeFAQ.vue";
import HomeHero from "~/components/HomePage/HomeHero.vue";
import HomeServices from "~/components/HomePage/HomeServices.vue";
import HomeSpecialties from "~/components/HomePage/HomeSpecialties.vue";
import HomeStudients from "~/components/HomePage/HomeStudients.vue";

export default {
  components: {
    HomeHero,
    HomeServices,
    HomeStudients,
    HomeSpecialties,
    AppForm,
    HomeFAQ,
  },
};
</script>

<style scoped>
.whiteApp {
  padding: 120px 0;
}
.greyApp {
  padding: 0 0 120px 0;
  background: #f5f5f7;
}
</style>
