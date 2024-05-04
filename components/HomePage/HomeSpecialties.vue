<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <h4 class="section__title">Вузы и специальности</h4>

        <NuxtLink :to="localePath('/universities')" class="all">
          Все университеты <arrow-right />
        </NuxtLink>
      </div>

      <div class="items">
        <div class="item" v-for="item in univers" :key="item.id">
          <NuxtLink :to="localePath(`/universities/${item?.id}`)">
            <div class="top">
              <div class="logo">
                <img :src="item?.logo" alt="" />
              </div>
              <p class="name">
                {{ item?.title }}
              </p>
            </div>
            <div class="bottom">
              <div class="count">
                <studients-icon />
                {{ item?.students_count }}
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
import ArrowRight from "../SvgIcons/ArrowRight.vue";
import CallIcon from "../SvgIcons/CallIcon.vue";
import StudientsIcon from "../SvgIcons/StudientsIcon.vue";

export default {
  components: { ArrowRight, StudientsIcon, CallIcon },

  props: ["univers"],
};
</script>

<style scoped>
.wrap {
  padding: 120px 0;
  background: #f5f5f7;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
.all {
  border-radius: 4000px;
  background: white;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--Blue-night, #001935);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.item {
  border-radius: 12px;
  background: var(--White, #fff);
  padding: 24px;
}
.top {
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 16px;
  align-items: flex-start;
  margin-bottom: 40px;
}
.name {
  color: var(--Blue-night, #001935);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 25.2px */
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.count {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--black);
}
.call {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--Blue-night, #001935);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
.logo img {
  width: 50px;
  height: 50px;
  object-fit: contain;
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
  .top {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .section__title {
    font-size: 20px;
  }
  .name {
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
  .section__title {
    font-size: 24px;
  }

  .header {
    flex-direction: column;
    gap: 24px;
  }
}
</style>
