<template>
  <div class="master">
    <div class="container">
      <h4 class="heading">Вузы и специальности</h4>

      <div class="items">
        <div class="item" v-for="item in univers" :key="item.id">
          <NuxtLink :to="`/universities/${item.id}`">
            <div class="img">
              <img src="@/assets/img/univer.jpg" alt="" />
            </div>
            <div class="naming">
              <img :src="item.logo" alt="" />
              <p class="name">
                {{ item.title }}
              </p>
            </div>
            <div class="info">
              <div class="count">
                <studients-icon />
                {{ item.students_count }}
              </div>

              <div class="call">
                Связаться с нами
                <call-icon />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CallIcon from "~/components/SvgIcons/CallIcon.vue";
import StudientsIcon from "~/components/SvgIcons/StudientsIcon.vue";

import univerApi from "@/api/univers.js";

export default {
  components: { StudientsIcon, CallIcon },

  layout: "inner",

  async asyncData({ $axios }) {
    const univers = await univerApi.getUnivers($axios);

    return {
      univers,
    };
  },
};
</script>

<style scoped>
.master {
  padding: 164px 0 120px 0;
  background: var(--Apple-Grey, #f5f5f7);
}
.heading {
  margin-bottom: 80px;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.item {
  padding: 24px;
  border-radius: 12px;
  background: var(--White, #fff);
}
.img img {
  width: 100%;
  height: 212px;
  object-fit: cover;
  border-radius: 4px;
}
.naming {
  margin: 24px 0;
  display: grid;
  gap: 16px;
  grid-template-columns: 40px 1fr;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #ebebeb;
}
.naming img {
  width: 100%;
  height: 40px;
  object-fit: contain;
}
.naming .name {
  color: var(--Blue-night, #001935);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 25.2px */
}
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.count {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--grey-80, #353437);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
.call {
  color: var(--Blue-night, #001935);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  display: flex;
  align-items: center;
  gap: 12px;
}

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
  .items {
    grid-template-columns: repeat(2, 1fr);
  }
}

/**************************/
/* BELOW 704px (Smaller tablets) */
/**************************/

@media (max-width: 44em) {
  .items {
    grid-template-columns: 1fr;
  }
  .naming .name {
    font-size: 16px;
  }
  .call {
    font-size: 14px;
  }
  .count {
    font-size: 14px;
  }
  .logo img {
    width: 40px;
    height: 40px;
  }
}

/**************************/
/* BELOW 544px (Phones) */
/**************************/

@media (max-width: 34em) {
  .heading {
    font-size: 24px;
  }

  .naming {
    grid-template-columns: 32px 1fr;
    align-items: start;
  }

  .naming .name {
    font-size: 14px;
  }
}
</style>
