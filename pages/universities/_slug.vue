<template>
  <div class="master">
    <UniverFace />
    <UniverList />

    <AppForm />
    <HomeExperts />
  </div>
</template>

<script>
import AppForm from "~/components/AppForm.vue";
import HomeExperts from "~/components/HomePage/HomeExperts.vue";
import UniverFace from "~/components/UniverPage/UniverFace.vue";
import UniverList from "~/components/UniverPage/UniverList.vue";

export default {
  components: {
    AppForm,
    HomeExperts,
    UniverFace,
    UniverList,
  },

  layout: "inner",
};
</script>

<style scoped>
.master {
  padding: 164px 0 0 0;
  background: var(--Apple-Grey, #f5f5f7);
}
</style>
