<template>
  <div class="wrap">
    <div class="container small">
      <h4 class="section__title title">{{$store.state.translations['main.faq-title']}}</h4>

      <div class="items">
        <Accordion>
          <AccordionItem v-for="item in faq" :key="item.id">
            <template slot="accordion-trigger">
              <h4>{{ item?.title }}</h4>
            </template>
            <template slot="accordion-content">
              <div v-html="item?.description"></div>
            </template>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronDown from "../SvgIcons/ChevronDown.vue";
import Accordion from "@/components/Accordion.vue";
import AccordionItem from "@/components/AccordionItem.vue";

export default {
  components: { ChevronDown, Accordion, AccordionItem },

  props: ["faq"],

  data() {
    return {
      dropVal: false,
    };
  },

  methods: {
    dropAction(val) {
      if (val != this.dropVal) {
        this.dropVal = val;
      } else {
        this.dropVal = false;
      }
    },
  },
};
</script>

<style scoped>
.wrap {
  padding: 0 0 120px 0;
  background: #f5f5f7;
}

.title {
  text-align: center;
  margin-bottom: 40px;
}

.items {
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

:deep(.accordion__item) {
  padding: 24px 40px;
  border-bottom: 1px solid #d7d7dd;
}

:deep(.accordion__trigger_active) {
  margin-bottom: 16px;
}

.items :deep(h4) {
  color: var(--Blue-night, #001935);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
}

.items :deep(p) {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
</style>
