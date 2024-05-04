<template>
  <div class="wrap">
    <div class="container medium">
      <h4 class="section__title">Наши этапы</h4>

      <div class="acc">
        <Accordion>
          <AccordionItem v-for="(item, index) in faq" :key="item.id">
            <template slot="accordion-trigger">
              <h4>
                <span class="index"> {{ index + 1 }} </span>
                {{ item?.title }}
              </h4>
            </template>
            <template slot="accordion-content">
              <img src="@/assets/img/shit.jpg" alt="" class="pic" />

              <div class="html" v-html="item?.description"></div>
            </template>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from "@/components/Accordion.vue";
import AccordionItem from "@/components/AccordionItem.vue";

export default {
  components: {
    Accordion,
    AccordionItem,
  },

  props: ["faq"],
};
</script>

<style scoped>
.wrap {
  padding: 80px 0;
  background: white;
}

.section__title {
  text-align: center;
  margin-bottom: 40px;
}

:deep(.accordion__trigger) {
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--White, #fff);
}

:deep(.accordion) {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

:deep(.accordion__content ul) {
  padding: 40px;
  border-radius: 0 0 12px 12px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--White, #fff);
  border-top: 0;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

:deep(.accordion__trigger_active) {
  border-radius: 12px 12px 0 0;
}

:deep(img) {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

:deep(p) {
  color: var(--grey-64, #5d5d5f);
  font-family: "Golos Text";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

:deep(h4) {
  color: var(--Blue-night, #001935);
  font-family: "Golos Text";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  display: flex;
  align-items: center;
  gap: 16px;
}

.index {
  border-radius: 8px;
  background: var(--Blue-night, #001935);
  padding: 6px;
  color: var(--White, #fff);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
