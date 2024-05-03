<template>
  <div class="master">
    <UniverFace :univer="univer" />
    <UniverList :univer="univer" />

    <AppForm class="innerForm" />
    <HomeExperts />
  </div>
</template>

<script>
import AppForm from "~/components/AppForm.vue";
import HomeExperts from "~/components/HomePage/HomeExperts.vue";
import UniverFace from "~/components/UniverPage/UniverFace.vue";
import UniverList from "~/components/UniverPage/UniverList.vue";

import univerApi from "@/api/univers.js";

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
      // headers: {
      //   language: i18n.locale,
      // },
    });

    console.log(univer);

    return {
      univer,
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
