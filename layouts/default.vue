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
export default {
  components: { DesktopFooter },
};
</script>

<style></style>
