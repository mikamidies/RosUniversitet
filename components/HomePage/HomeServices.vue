<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <h4 class="section__title">Наши услуги</h4>

        <NuxtLink class="all" to="/services">
          Все услуги <arrow-right />
        </NuxtLink>
      </div>
    </div>
    <div class="swiper" ref="servSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in services" :key="item.id">
          <div class="left">
            <div class="content">
              <p class="name">
                {{ item.title }}
              </p>
              <p class="sub" v-html="item.description"></p>
              <div class="tags">
                <p class="tag" v-for="tag in item.countries" :key="tag.id">
                  {{ tag }}
                </p>
              </div>
            </div>

            <NuxtLink to="/services" class="link"
              >Подробно <arrow-right
            /></NuxtLink>
          </div>
          <div class="right">
            <img
              :src="`https://ros.quvonchbek.uz/${item.images[0]}`"
              alt=""
              class="pic"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
import ArrowRight from "../SvgIcons/ArrowRight.vue";

export default {
  props: ["services"],

  components: {
    ArrowRight,
  },

  mounted() {
    new Swiper(this.$refs.servSwiper, {
      slidesPerView: 1.4,
      centeredSlides: true,
      loop: false,
      autoplay: {
        delay: 5000,
      },
      //   breakpoints: {
      //     1024: {
      //       slidesPerView: 4,
      //     },
      //   },
      speed: 1000,
    });
  },
};
</script>

<style scoped>
.wrap {
  padding-bottom: 88px;
  border-bottom: 1px solid #ebebeb;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
}
.all {
  border-radius: 4000px;
  background: var(--Apple-Grey, #f5f5f7);
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
.swiper {
  padding-block: 8px;
  margin-block: -8px;
}
.swiper-slide {
  display: grid;
  grid-template-columns: 1fr 574px;
  gap: 56px;
  padding: 56px;
  border-right: 1px solid #ebebeb;
  position: relative;
}
.swiper-slide::after {
  width: 16px;
  height: 16px;
  background: #ebebeb;
  content: "";
  position: absolute;
  top: -8px;
  right: -8px;
  border-radius: 50%;
}
.swiper-slide::before {
  width: 16px;
  height: 16px;
  background: #ebebeb;
  content: "";
  position: absolute;
  bottom: -8px;
  right: -8px;
  border-radius: 50%;
}
.swiper-slide:nth-child(odd) {
  border-top: 1px solid #ebebeb;
}
.swiper-slide:nth-child(even) {
  border-bottom: 1px solid #ebebeb;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.name {
  color: var(--Blue-night, #001935);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
}
.sub {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
.tags {
  display: flex;
  align-items: center;
  gap: 16px;
}
.tag {
  color: var(--Blue-night, #001935);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  padding: 8px 16px;
  border-radius: 48px;
  background: var(--Apple-Grey, #f5f5f7);
}
.link {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  padding: 16px 24px;
  border-radius: 4000px;
  border: 1px solid var(--grey-24, #c2c2c3);
  background: var(--White, #fff);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-width: 164px;
}
.right img {
  width: 100%;
  height: 313px;
  object-fit: cover;
  border-radius: 8px;
}
</style>
