<template>
  <div class="outer_container">
    <div class="container">
      <h4 class="title">{{$store.state.translations['main.certificate_title']}}</h4>

      <div class="swiper" ref="sertificateSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="certificate in certificates" :key="certificate.id">
            <a
              target="_blank"
              :href="certificate.image"
            >
              <img
                :src="certificate.image"
                alt="sertificate"
                class="pic"
              />
            </a>
          </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.min.css";

export default {
  props: {
    certificates: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    new Swiper(this.$refs.sertificateSwiper, {
      slidesPerView: 3,
      // spaceBetween: 80,
      autoplay: {
        delay: 5000,
      },
      loop: true,
      speed: 1000,
      breakpoints: {
        944: {
          slidesPerView: 3,
        },
        0: {
          slidesPerView: 1,
        },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  },
};
</script>

<style scoped>
.outer_container {
  background: linear-gradient(77deg, #16222b 30.77%, #2e3942 69.23%);
}

.swiper {
  margin-top: 100px;
  max-width: 1200px;
}

.swiper-wrapper {
  width: 1000px;
}


.title {
  max-width: 60%;
  margin: 0 auto;
  color: var(--White, #fff);
  text-align: center;
  font-family: "Unbounded";
  font-size: 32px;
  font-weight: 400;
  line-height: 120%; /* 38.4px */
  margin-bottom: 40px;
}

.container {
  padding: 80px 0;
}

.swiper-slide {
  transform: scale(0.6) !important;
  opacity: 0.5;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.swiper-slide a {
  display: block;
  margin: 0 auto;
  height: 100%;
  width: fit-content;
}

.swiper-slide a img {
  /* width: 100%; */
  /* height: 100%; */
  height: 480px;
  border-radius: 16px !important;
  object-fit: cover;
}

.swiper-slide.swiper-slide-next {
  transform: scale(1) !important;
  opacity: 1;
}

.swiper-button-next,
.swiper-button-prev {
  height: 56px;
  width: 56px;
  border-radius: 100%;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.swiper-button-next::after,
.swiper-button-prev::after {
  color: var(--White, #fff);
  font-size: 24px;
}

.swiper-button-prev {
  left: 0;
}

.swiper-button-next {
  right: 0;
}

@media (max-width: 59em) {
  .container {
    padding: 40px 0;
  }

  .swiper {
    margin-top: 40px;
  }

  .title {
    max-width: 80%;
    font-size: 24px;
    margin-bottom: 20px;
  }

  .swiper-slide {
    transform: scale(1) !important;
    opacity: 1;
  }

  .swiper-wrapper {
    width: 100%;
  }

  .swiper-button-prev {
    left: 20px;
  }

  .swiper-button-next {
    right: 20px;
  }
}

@media (max-width: 46em) {
  .swiper-button-next,
  .swiper-button-prev {
    height: 40px;
    width: 40px;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    font-size: 18px;
  }

  .title {
    max-width: 100%;
    font-size: 20px;
    margin-bottom: 10px;
  }

  .swiper-slide a img {
    height: 320px;
  }

  .swiper-button-prev {
    left: 10px;
  }

  .swiper-button-next {
    right: 10px;
  }
}
</style>
