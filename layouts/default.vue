<template>
  <div class="site">
    <DesktopHeader />
    <main>
      <nuxt />
    </main>
    <DesktopFooter />
  </div>
</template>

<script>
import DesktopFooter from "~/components/DesktopFooter.vue";
import translationsApi from "~/api/translations";
import contactsApi from "~/api/contacts";
export default {
  computed: {
    currentLang() {
      return this.$i18n.locale;
    },
  },
  async fetch() {
    const translations = await translationsApi.getTranslations(this.$axios, {
      params: this.$route.query,
      headers: {
        "Accept-Language": this.$i18n.locale,
      },
    });
    const contacts = await contactsApi.getContacts(this.$axios, {
      params: this.$route.query,
      headers: {
        "Accept-Language": this.$i18n.locale,
      },
    });
   this.$store.commit('getSiteInfo',contacts[0])
    this.$store.commit("getTranslations", translations.data);
  },
  watch: {
    async currentLang() {
      const translations = await translationsApi.getTranslations(this.$axios, {
      params: this.$route.query,
      headers: {
        "Accept-Language": this.$i18n.locale,
      },
    });
    this.$store.commit("getTranslations", translations.data);
    }
  },
  components: { DesktopFooter },
};
</script>

<style scoped>
.site {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1 1 auto;
}
</style>
