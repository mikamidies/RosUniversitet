<template>
  <div class="wrap">
    <div class="container">
      <h4 class="section__title title">Наши этапы</h4>
      <div class="items">
        <div class="item">
          <p class="num">1</p>
          <div class="logo">
            <home-icon />
          </div>
          <p class="name">
            Подбираем университет, стипендию и программу под ваш запрос
          </p>
          <NuxtLink to="/">Подробнo <arrow-right /></NuxtLink>
        </div>

        <div class="item">
          <p class="num">2</p>
          <div class="logo">
            <book-icon />
          </div>
          <p class="name">Составляем персональные стратегии поступления</p>
          <NuxtLink to="/">Подробнo <arrow-right /></NuxtLink>
        </div>

        <div class="item">
          <p class="num">3</p>
          <div class="logo">
            <cert-icon />
          </div>
          <p class="name">
            Организуем подачу документов, получение визы и переезд
          </p>
          <NuxtLink to="/">Подробнo <arrow-right /></NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRight from "../SvgIcons/ArrowRight.vue";
import BookIcon from "../SvgIcons/BookIcon.vue";
import HomeIcon from "../SvgIcons/HomeIcon.vue";
import CertIcon from "../SvgIcons/CertIcon.vue";

export default {
  components: { ArrowRight, BookIcon, HomeIcon, CertIcon },
};
</script>

<style scoped>
.wrap {
  background: var(--Apple-Grey, #f5f5f7);
  padding: 80px 0;
}
.title {
  text-align: center;
  margin-bottom: 40px;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.item {
  position: relative;
  border-radius: 24px;
  background: var(--White, #fff);
  padding: 24px;
}
.num {
  color: var(--Apple-Grey, #f5f5f7);
  text-align: center;
  font-size: 104px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 156px */
  position: absolute;
  top: 20px;
  right: 48px;
}
.logo {
  border-radius: 16px;
  background: var(--Blue-night, #001935);
  padding: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
}
.name {
  color: var(--Blue-night, #001935);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 28px */
  margin-bottom: 40px;
}
a {
  color: var(--Blue-night, #001935);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  border-radius: 4000px;
  background: var(--Apple-Grey, #f5f5f7);
  padding: 16px 24px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
}
@media screen and (max-width: 1024px) {
  .items {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
