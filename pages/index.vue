<template>
  <div class="master">
    <HomeHero />
    <HomeStages />
    <AppForm class="whiteApp" />
    <HomeServices :services="services" />
    <!-- <HomeStudients :students="students" /> -->
    <HomeSpecialties :univers="univers" />
    <HomeFAQ :faq="faq" />
    <AppForm class="greyApp" />
    <HomeExperts :experts="experts" />
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
import studentsApi from "@/api/students.js";
import expertsApi from "@/api/experts.js";
import servicesApi from "@/api/services.js";
import faqApi from "@/api/faq.js";
import HomeStages from "~/components/HomePage/HomeStages.vue";

export default {
  components: {
    HomeHero,
    HomeServices,
    HomeStudients,
    HomeSpecialties,
    AppForm,
    HomeFAQ,
    HomeExperts,
    HomeStages,
  },

  async asyncData({ $axios, query, i18n }) {
    const [univers,students,experts,services,faq] = await Promise.all([
      univerApi.getUnivers($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    }),
    studentsApi.getStudents($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    }),
    expertsApi.getExperts($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    }),
    servicesApi.getServices($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    }),
    faqApi.getFaq($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    })
    ])
    //  const univers = await univerApi.getUnivers($axios, {
    //   params: query,
    //   headers: {
    //     "Accept-Language": i18n.locale,
    //   },
    // });
    // const students = await studentsApi.getStudents($axios, {
    //   params: query,
    //   headers: {
    //     "Accept-Language": i18n.locale,
    //   },
    // });
    // const experts = await expertsApi.getExperts($axios, {
    //   params: query,
    //   headers: {
    //     "Accept-Language": i18n.locale,
    //   },
    // });
    // const services = await servicesApi.getServices($axios, {
    //   params: query,
    //   headers: {
    //     "Accept-Language": i18n.locale,
    //   },
    // });
    // const faq = await faqApi.getFaq($axios, {
    //   params: query,
    //   headers: {
    //     "Accept-Language": i18n.locale,
    //   },
    // });

    return {
      univers,
      students,
      experts,
      services,
      faq,
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
