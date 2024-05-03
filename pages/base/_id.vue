<template>
  <div class="master">
    <div class="container">
      <h4 class="heading">База знаний</h4>
      <div class="grid">
        <div class="left">
          <aside>
            <Accordion>
              <AccordionItem v-for="item in bases" :key="item.id">
                <template slot="accordion-trigger">
                  <h4>{{ item.title }}</h4>
                </template>
                <template slot="accordion-content">
                  <ul>
                    <li>
                      <NuxtLink
                        :to="`/base/${link.id}`"
                        v-for="link in item.contents"
                        :key="link.id"
                      >
                        {{ link.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                </template>
              </AccordionItem>
            </Accordion>
          </aside>
        </div>

        <div class="right">
          <div class="card" v-for="card in base.contents" :key="card.id">
            <h4 class="par">{{ card.title }}</h4>

            <div class="html" v-html="card.description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronDown from "~/components/SvgIcons/ChevronDown.vue";

import Accordion from "@/components/Accordion.vue";
import AccordionItem from "@/components/AccordionItem.vue";

import baseApi from "@/api/base.js";

export default {
  layout: "inner",

  components: {
    ChevronDown,
    Accordion,
    AccordionItem,
  },

  data() {
    return {
      dropVal: false,
    };
  },

  async asyncData({ $axios, params, query, i18n }) {
    const bases = await baseApi.getBases($axios);
    const base = await baseApi.getBase(params.id, $axios, {
      ...query,
      // headers: {
      //   language: i18n.locale,
      // },
    });

    console.log(base);

    return {
      bases,
      base,
    };
  },
};
</script>

<style scoped>
.master {
  background: var(--Apple-Grey, #f5f5f7);
}

.grid {
  position: relative;
}

aside {
  position: sticky;
  top: 80px;
}

:deep(.chevron svg) {
  width: 24px !important;
  height: 24px !important;
}

aside :deep(h4) {
  color: var(--Blue-night, #001935);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

aside :deep(.accordion__item) {
  padding: 24px 0;
  border-bottom: 1px solid #d7d7dd;
}

aside :deep(.accordion__trigger_active) {
  margin-bottom: 24px;
}

aside :deep(.accordion__content ul) {
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

aside :deep(.accordion__content li) {
  list-style: disc;
}

aside :deep(.accordion__content a) {
  color: var(--Blue-night, #001935);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.master {
  padding: 165px 0 120px 0;
}

.grid {
  display: grid;
  grid-template-columns: 216px 1fr;
  gap: 40px;
  margin-top: 80px;
}

.card {
  border-radius: 12px;
  background: var(--White, #fff);
  padding: 64px;
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.par {
  color: var(--Blue-night, #001935);
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.html {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.html :deep(p),
.html :deep(li) {
  list-style: disc !important;
  display: flex;
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 25.2px */
}

.card :deep(img) {
  width: 100%;
  height: 665px;
  object-fit: cover;
  border-radius: 4px;
}

.card :deep(ul) {
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.card :deep(figure) {
  margin: 0;
}

.quote {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  border-radius: 8px;
  background: var(--Apple-Grey, #f5f5f7);
  padding: 24px;
}
</style>
