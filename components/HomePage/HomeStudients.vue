<template>
  <div class="wrap">
    <div class="container">
      <div class="header">
        <div class="left">
          <h4 class="section__title">Наши студенты</h4>
          <p class="sub">
            Россия – это огромная территория и большие расстояния, но даже если
            вы впервые в стране, добраться до места назначения самостоятельно
            совсем несложно. Главное заранее спланировать маршрут, как во время
            поездки в любое незнакомое место.
          </p>
        </div>
        <div class="right">
          <div class="call">Подать заявку <call-icon /></div>
        </div>
      </div>

      <div class="wrapper">
        <div class="swiper" ref="studSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in students" :key="item.id">
              <p class="name">
                <star-icon />
                {{ item.name }}
              </p>

              <img :src="item.media" alt="" class="pic" />

              <p class="status" v-html="item.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";
import CallIcon from "../SvgIcons/CallIcon.vue";
import StarIcon from "../SvgIcons/StarIcon.vue";

export default {
  props: ["students"],

  components: {
    CallIcon,
    StarIcon,
  },

  mounted() {
    new Swiper(this.$refs.studSwiper, {
      slidesPerView: 4,
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
        }
      },
    });
  },
};
</script>

<style scoped>
.wrap {
  padding: 80px 0;
  overflow: hidden;
}

.swiper {
  overflow: visible;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.left {
  display: flex;
  align-items: flex-start;
  gap: 74px;
}

.section__title {
  white-space: nowrap;
}

.sub {
  max-width: 704px;
}

.call {
  border-radius: 4000px;
  background: linear-gradient(77deg, #16222b 30.77%, #2e3942 69.23%);
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* 22.4px */
}

.call :deep(path) {
  stroke: white;
}

.swiper-slide {
  border-radius: 12px;
  border: 1px solid var(--grey-8, #ebebeb);
  background: var(--White, #fff);
  padding: 28px 24px;
  transition: 0.4s;
}

.swiper-slide:hover {
  box-shadow: 0px 8px 24px 0px rgba(0, 25, 53, 0.16);
}

.name {
  color: var(--Blue-night, #001935);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* 28px */
  margin-bottom: 22px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.pic {
  width: 100%;
  height: 349px;
  object-fit: cover;
  margin-bottom: 24px;
}

.status {
  color: var(--grey-80, #353437);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 22.4px */
}

/**************************/
/* BELOW 1536px (Normal desktops) */
/**************************/

@media (max-width: 96em) {
  .swiper-slide {
    padding: 24px 16px;
  }
}

/**************************/
/* BELOW 1344px (Smaller desktops) */
/**************************/

@media (max-width: 84em) {
  .swiper-slide {
    padding: 20px 12px;
  }
}

/**************************/
/* BELOW 1200px (Landscape Tablets) */
/**************************/

@media (max-width: 75em) {
  .left {
    flex-direction: column;
    gap: 24px;
  }
}

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
  .sub {
    max-width: 80%;
  }
  .right {
    flex-shrink: 0;
  }
}

/**************************/
/* BELOW 704px (Smaller tablets) */
/**************************/

@media (max-width: 44em) {
  .sub {
    max-width: 100%;
  }
  .swiper-slide {
    padding: 16px;
  }
  .header {
    flex-direction: column;
    align-items: start;
    gap: 24px;
  }
}
</style>
