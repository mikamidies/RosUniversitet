<template>
  <div class="wrap">
    <video muted loop autoplay playsinline src="/video6mb.mp4"></video>
    <div class="container big">
      <div class="content">
        <div class="logo">
          <img src="@/assets/img/build.png" alt="" />
          <p>ROSUNIVERSITET</p>
        </div>
        <h4 class="title">Твой выбор, твоё будущее!</h4>
        <p class="sub">
          Хочешь стать студентом одного из лучших Российских университетов?
          Хочешь стать студентом одного из лучших Российских университетов?
          Хочешь стать студентом одного из лучших Российских университетов?
        </p>
        <div class="buttons">
          <div class="call">
            <div class="icon">
              <CallIcon />
            </div>
            Связаться с нами
          </div>

          <div class="services">
            <div class="icon">
              <CallIcon />
            </div>
            Наши услуги
          </div>
        </div>
      </div>
      <div class="cards">
        <div class="card">
          <div class="top">
            <div class="pic">
              <StudientIcon />
            </div>
            <p class="name">Выбрать специальность</p>
          </div>
          <p class="txt">
            Более 500 направлений государственных университетов на выбор по всей
            России и Узбекистану.
          </p>
        </div>
        <div class="card">
          <div class="top">
            <div class="pic">
              <DocumentsIcon />
            </div>
            <p class="name">Подать документы</p>
          </div>
          <p class="txt">
            В светлое будущее с Rosuniversitet! Заполняйте заявку на сайте, и с
            вами свяжутся наши специалисты.
          </p>
        </div>
        <div class="card">
          <div class="top">
            <div class="pic">
              <BooksIcon />
            </div>
            <p class="name">Стать студентом</p>
          </div>
          <p class="txt">
            Поможем подготовить и подать документы в выбранный вами ВУЗ.
          </p>
        </div>
        <div class="card">
          <div class="top">
            <div class="pic">
              <TrophyIcon />
            </div>
            <p class="name">Производитель текстиля для гостиниц и дома</p>
          </div>
          <p class="txt">Мы рады видеть вас в числе партнеров!</p>
        </div>
      </div>
      <div class="swiper" ref="servSwiper">
        <div class="swiper-wrapper cards_2">
          <div class="swiper-slide card">
            <div class="top">
              <div class="pic">
                <StudientIcon />
              </div>
              <p class="name">Выбрать специальность</p>
            </div>
            <p class="txt">
              Более 500 направлений государственных университетов на выбор по всей
              России и Узбекистану.
            </p>
          </div>
          <div class="swiper-slide card">
            <div class="top">
              <div class="pic">
                <DocumentsIcon />
              </div>
              <p class="name">Подать документы</p>
            </div>
            <p class="txt">
              В светлое будущее с Rosuniversitet! Заполняйте заявку на сайте, и с
              вами свяжутся наши специалисты.
            </p>
          </div>
          <div class="swiper-slide card">
            <div class="top">
              <div class="pic">
                <BooksIcon />
              </div>
              <p class="name">Стать студентом</p>
            </div>
            <p class="txt">
              Поможем подготовить и подать документы в выбранный вами ВУЗ.
            </p>
          </div>
          <div class="swiper-slide card">
            <div class="top">
              <div class="pic">
                <TrophyIcon />
              </div>
              <p class="name">Производитель текстиля для гостиниц и дома</p>
            </div>
            <p class="txt">Мы рады видеть вас в числе партнеров!</p>
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
import StudientIcon from "../SvgIcons/StudientIcon.vue";
import DocumentsIcon from "../SvgIcons/DocumentsIcon.vue";
import BooksIcon from "../SvgIcons/BooksIcon.vue";
import TrophyIcon from "../SvgIcons/TrophyIcon.vue";
import space from "ant-design-vue/lib/space";

export default {
  components: {
    CallIcon,
    StudientIcon,
    DocumentsIcon,
    BooksIcon,
    TrophyIcon,
  },
  mounted() {
    new Swiper(this.$refs.servSwiper, {
      slidesPerView: 1,
      centeredSlides: true,
      loop: true,
      spaceBetween: 16,
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
  padding: 126px 0 40px 0;
  height: 100vh;
  position: relative;
}

.wrap::after {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(2, 1, 5, 0.4);
  z-index: 2;
  content: "";
  position: absolute;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.container {
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.logo img {
  width: 495px;
  height: auto;
  object-fit: contain;
}

.logo {
  text-align: center;
}

.logo p {
  color: var(--White, #fff);
  text-align: center;
  font-family: Unbounded;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 57.6px */
}

.logo {
  margin-bottom: 24px;
}

.title {
  color: var(--White, #fff);
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  /* 38.4px */
  margin-bottom: 16px;
}

.sub {
  color: var(--White, #fff);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 22.4px */
  max-width: 954px;
  margin: 0 auto 40px auto;
}

.buttons {
  display: flex;
  align-items: center;
  gap: 16px;
}

.call {
  border-radius: 4000px;
  background: var(--White, #fff);
  padding: 16px 24px;
  color: var(--Blue-night, #001935);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* 22.4px */
  display: flex;
  align-items: center;
  gap: 12px;
}

.services {
  border-radius: 4000px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* 22.4px */
  color: white;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.services :deep(path) {
  stroke: white;
}

.cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-top: 24px;
}

.card {
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  padding: 24px;
  min-height: 186px;
}

.top {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.name {
  color: var(--White, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* 28px */
}

.txt {
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 22.4px */
}

.pic {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper {
  display: none;
  width: 100%;
}

/* rem and em do NOT depend on html font-size in media queries! Instead, 1rem = 1em = 16px */

/**************************/
/* BELOW 1536px (Normal desktops) */
/**************************/

@media (max-width: 96em) {
  .wrap {
    height: 115vh;
  }
}

/**************************/
/* BELOW 1344px (Smaller desktops) */
/**************************/

@media (max-width: 84em) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
  .name {
    font-size: 18px;
  }
}

/**************************/
/* BELOW 704px (Smaller tablets) */
/**************************/

@media (max-width: 44em) {
  .name {
    font-size: 16px;
  }

  .txt {
    font-size: 14px;
  }
}

/**************************/
/* BELOW 544px (Phones) */
/**************************/

@media (max-width: 34em) {
  .wrap {
    height: 100%;
  }

  .cards {
    display: none;
  }

  .swiper {
    display: block;
    margin-top: 24px;
  }

  .logo img {
    width: 400px;
  }

  .logo p {
    font-size: 36px;
    margin-top: 8px;
  }

  .buttons {
    flex-direction: column;
    width: 300px;
  }

  .buttons>div {
    justify-content: center;
    width: 100%;
  }
}
</style>
