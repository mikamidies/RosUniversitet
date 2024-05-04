<template>
  <div class="master">
    <UniverFace :univer="univer" />
    <UniverList :univer="univer" />

    <AppForm class="innerForm" />
    <HomeExperts :experts="experts" />
  </div>
</template>

<script>
import AppForm from "~/components/AppForm.vue";
import HomeExperts from "~/components/HomePage/HomeExperts.vue";
import UniverFace from "~/components/UniverPage/UniverFace.vue";
import UniverList from "~/components/UniverPage/UniverList.vue";

import univerApi from "@/api/univers.js";
import expertsApi from "@/api/experts.js";

export default {
  components: {
    AppForm,
    HomeExperts,
    UniverFace,
    UniverList,
  },

  layout: "inner",

  async asyncData({ $axios, params, query, i18n }) {
    const univer = await univerApi.getUniver(params.id, $axios, {
      ...query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    });
    const experts = await expertsApi.getExperts($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    });

    return {
      univer,
      experts,
    };
  },
};
</script>

<style scoped>
.master {
  padding: 164px 0 0 0;
  background: var(--Apple-Grey, #f5f5f7);
}
.innerForm {
  padding-top: 120px;
}
</style>
