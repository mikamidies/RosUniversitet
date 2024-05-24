<template>
  <div class="wrap">
    <div class="container">
      <h4 class="section__title title">
        {{ $store.state.translations['main.help-spec-title'] }}
      </h4>
      <div class="items swiper" ref="expertSwiper">
        <div class="swiper-wrapper">
          <div class="item swiper-slide" v-for="item in experts" :key="item.id">
            <div class="img">
              <img :src="item?.media" alt="" />
            </div>
            <p class="name">{{ item?.name }}</p>
            <div class="html" v-html="item?.description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
export default {
  props: ["experts"],
  mounted() {
    new Swiper(this.$refs.expertSwiper, {
      slidesPerView: 4,
      autoplay: {
        delay: 5000
      },
      speed: 1000,
      spaceBetween: 16,
      breakpoints: {
        1200: {
          slidesPerView: 4,
        },
        944: {
          slidesPerView: 3,
        },
        704: {
          slidesPerView: 2,
        },
        0: {
          slidesPerView: 1,
        },
      },
    });
  },
};
</script>

<style scoped>
.swiper {
  overflow: visible;
}

.wrap {
  padding: 80px 0 120px 0;
  overflow: hidden;
}

.title {
  max-width: 987px;
  margin-bottom: 40px;
}

.item {
  padding: 24px;
  transition: 0.4s;
  height: auto;
}

.item:hover {
  box-shadow: 0px 8px 24px 0px rgba(0, 25, 53, 0.16);
}

.img img {
  width: 100%;
  height: 348px;
  object-fit: cover;
}

.name {
  color: var(--Blue-night, #001935);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* 28px */
  margin: 24px 0 16px 0;
}

.html {
  padding-left: 20px;
}

.html :deep(p) {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 22.4px */
  margin-bottom: 16px;
  position: relative;
}

.html :deep(p::after) {
  width: 12px;
  height: 2px;
  background: #f2994a;
  content: "";
  position: absolute;
  top: 12px;
  left: -20px;
}

/**************************/
/* BELOW 1200px (Landscape Tablets) */
/**************************/

@media (max-width: 75em) {
  .items {
    grid-template-columns: repeat(3, 1fr);
  }
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
}

/**************************/
/* BELOW 544px (Phones) */
/**************************/

@media (max-width: 34em) {
  .title {
    font-size: 20px;
  }
}
</style>
