<template>
  <div class="master">
    <HomeHero :videoUrl="video.media_url" />
    <HomeStages />
    <Certificates :certificates="certificates" />
    <AppForm class="whiteApp" />
    <HomeServices :services="services" />
    <HomeStudients :students="students" />
    <HomeSpecialties :univers="univers" />
    <AppForm class="greyApp" />
    <HomeExperts :experts="experts" />
  </div>
</template>

<script>
import AppForm from "~/components/AppForm.vue";
import HomeExperts from "~/components/HomePage/HomeExperts.vue";
import HomeHero from "~/components/HomePage/HomeHero.vue";
import HomeServices from "~/components/HomePage/HomeServices.vue";
import HomeSpecialties from "~/components/HomePage/HomeSpecialties.vue";
import HomeStudients from "~/components/HomePage/HomeStudients.vue";
import Certificates from "~/components/Certificates.vue";
import HomeStages from "~/components/HomePage/HomeStages.vue";

import univerApi from "@/api/univers.js";
import videoApi from "@/api/video.js";
import studentsApi from "@/api/students.js";
import expertsApi from "@/api/experts.js";
import servicesApi from "@/api/services.js";
import certificateApi from "@/api/certificate.js";


export default {
  components: {
    HomeHero,
    HomeServices,
    HomeStudients,
    HomeSpecialties,
    AppForm,
    HomeExperts,
    HomeStages,
    Certificates
  },

  async asyncData({ $axios, query, i18n }) {
    const [univers,students,experts,services,video,certificates] = await Promise.all([
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
    videoApi.getVideo($axios, {
      headers: {
        "Accept-Language": i18n.locale,
      },
    }),
    certificateApi.getCertificate($axios, {
      headers: {
        "Accept-Language": i18n.locale,
      },
    })
    ]);

    return {
      univers,
      students,
      experts,
      services,
      video,
      certificates
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
