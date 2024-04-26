<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <h4 class="section__title">Вузы и специальности</h4>

        <NuxtLink to="/" class="all">
          Все университеты <arrow-right />
        </NuxtLink>
      </div>

      <div class="items">
        <div class="item">
          <NuxtLink to="/">
            <div class="top">
              <div class="logo">
                <img src="@/assets/img/logo/uni-1.svg" alt="" />
              </div>
              <p class="name">
                Санкт-петербургский политехнический университет Петра Великого
              </p>
            </div>
            <div class="bottom">
              <div class="count">
                <studients-icon />
                24 4302
              </div>
              <div class="call">
                Связаться с нами
                <call-icon />
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="item">
          <NuxtLink to="/">
            <div class="top">
              <div class="logo">
                <img src="@/assets/img/logo/uni-2.svg" alt="" />
              </div>
              <p class="name">
                Санкт-петербургский политехнический университет Петра Великого
              </p>
            </div>
            <div class="bottom">
              <div class="count">
                <studients-icon />
                24 4302
              </div>
              <div class="call">
                Связаться с нами
                <call-icon />
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="item">
          <NuxtLink to="/">
            <div class="top">
              <div class="logo">
                <img src="@/assets/img/logo/uni-3.svg" alt="" />
              </div>
              <p class="name">
                Санкт-петербургский политехнический университет Петра Великого
              </p>
            </div>
            <div class="bottom">
              <div class="count">
                <studients-icon />
                24 4302
              </div>
              <div class="call">
                Связаться с нами
                <call-icon />
              </div>
            </div>
          </NuxtLink>
        </div>

        <div class="item">
          <NuxtLink to="/">
            <div class="top">
              <div class="logo">
                <img src="@/assets/img/logo/uni-4.svg" alt="" />
              </div>
              <p class="name">
                Санкт-петербургский политехнический университет Петра Великого
              </p>
            </div>
            <div class="bottom">
              <div class="count">
                <studients-icon />
                24 4302
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
  grid-template-columns: 40px 1fr;
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
</style>
