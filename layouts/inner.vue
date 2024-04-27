<template>
  <div class="site">
    <DesktopHeader class="white" />
    <main>
      <nuxt />
    </main>
    <DesktopFooter />
  </div>
</template>

<script>
import DesktopFooter from "~/components/DesktopFooter.vue";
export default {
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
