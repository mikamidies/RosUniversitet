<template>
  <div class="master">
    <HomeHero />
    <AppForm class="whiteApp" />
    <HomeServices />
    <HomeStudients />
    <HomeSpecialties :univers="univers" />
    <HomeFAQ />
    <AppForm class="greyApp" />
    <HomeExperts />
  </div>
</template>

<script>
import AppForm from "~/components/AppForm.vue";
import HomeExperts from "~/components/HomePage/HomeExperts.vue";
import HomeFAQ from "~/components/HomePage/HomeFAQ.vue";
import HomeHero from "~/components/HomePage/HomeHero.vue";
import HomeServices from "~/components/HomePage/HomeServices.vue";
import HomeSpecialties from "~/components/HomePage/HomeSpecialties.vue";
import HomeStudients from "~/components/HomePage/HomeStudients.vue";

import univerApi from "@/api/univers.js";

export default {
  components: {
    HomeHero,
    HomeServices,
    HomeStudients,
    HomeSpecialties,
    AppForm,
    HomeFAQ,
    HomeExperts,
  },

  async asyncData({ $axios }) {
    const univers = await univerApi.getUnivers($axios);

    return {
      univers,
    };
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
