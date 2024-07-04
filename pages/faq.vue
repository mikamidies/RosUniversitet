<template>
  <div class="master">
    <HomeFAQ :faq="faq" />
  </div>
</template>

<script>
import HomeFAQ from "~/components/HomePage/HomeFAQ.vue";

import faqApi from "@/api/faq.js";

export default {
  layout: "inner",
  components: {
    HomeFAQ,
  },
  async asyncData({ $axios, query, i18n }) {
    const faq = await faqApi.getFaq($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    });

    return {
      faq,
    };
  },
}
</script>

<style scoped>
  .master {
  padding: 156px 0 120px 0;
  background: var(--Apple-Grey, #f5f5f7);
}
</style>
