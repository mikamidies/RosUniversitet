<template>
  <div class="master">
    <div class="container">
      <h4 class="heading">
        {{$store.state.translations['main.title']}} <br />
        {{$store.state.translations['about.heading']}}
      </h4>

      <div class="cover">
        <img src="@/assets/img/about.jpg" alt="" />
      </div>

      <div class="content">
        <div class="left">
          <h4 class="par">  {{$store.state.translations['about.paragraph']}}</h4>
          <div class="card" v-html="mainInfo?.description">
          </div>
        </div>

        <div class="right">
          <h4 class="par">{{$store.state.translations['about.statistics']}}</h4>
          <div class="card">
            <div class="item" v-for="statistic in mainInfo?.statistics" :key="statistic?.id">
              <p class="num">
                <star-icon />
                {{ statistic?.value }}
              </p>
              <p class="sub">{{ statistic?.title }}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
    <AboutStages :faq="faq" />
    <AboutMap :roadmap="roadmap" />

    <AppForm />
    <HomeExperts :experts="experts" class="white" />
  </div>
</template>

<script>
import AboutMap from "~/components/AboutPage/AboutMap.vue";
import AboutStages from "~/components/AboutPage/AboutStages.vue";
import AppForm from "~/components/AppForm.vue";
import HomeExperts from "~/components/HomePage/HomeExperts.vue";
import StarIcon from "~/components/SvgIcons/StarIcon.vue";

import aboutApi from "@/api/about.js";
import expertsApi from "@/api/experts.js";

export default {
  components: { StarIcon, AboutStages, AboutMap, AppForm, HomeExperts },

  layout: "inner",
async mounted() {
  const mainInfo = await aboutApi.getMainInfo(this.$axios, {
      params: this.$route.query,
      headers: {
        "Accept-Language": this.$i18n.locale,
      },
    });
},
  async asyncData({ $axios, query, i18n }) {
    const faq = await aboutApi.getFaq($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    });
    const roadmap = await aboutApi.getRoadmap($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    });
    const experts = await expertsApi.getExperts($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    });
    const mainInfo = await aboutApi.getMainInfo($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    });
    
    return {
      mainInfo,
      faq,
      roadmap,
      experts,
    };
  },
};
</script>

<style scoped>
.master {
  padding: 156px 0 0 0;
  background: var(--Apple-Grey, #f5f5f7);
}

.heading {
  margin-bottom: 80px;
}

.cover img {
  width: 100%;
  height: 720px;
  object-fit: cover;
  border-radius: 12px;
}

.content {
  margin: 80px 0;
  display: grid;
  grid-template-columns: 1fr 240px;
  gap: 16px;
}

.par {
  color: var(--Blue-night, #001935);
  font-family: "Golos Text";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  margin-bottom: 24px;
}

.left .card {
  border-radius: 12px;
  background: var(--White, #fff);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.left .card p {
  color: var(--grey-64, #5d5d5f);
  font-family: "Golos Text";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  display: flex;
}

.right .card {
  padding: 40px;
  border-radius: 12px;
  background: var(--White, #fff);
}

.num {
  color: var(--Blue-night, #001935);
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  text-transform: uppercase;
  display: grid;
  gap: 8px;
  grid-template-columns: 20px 1fr;
  align-items: center;
}

.item {
  padding: 40px 0;
  border-bottom: 1px solid #ebebeb;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.item:first-child {
  padding-top: 0;
}

.item:last-child {
  padding-bottom: 0;
  border-bottom: 0;
}

.white {
  margin-top: 120px;
  background: white;
}

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
  .content {
    grid-template-columns: 1fr;
  }

  .right .card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .card .item {
    text-align: center;
    border-bottom: 0;
    border-right: 1px solid #ebebeb;
    padding: 0;
  }

  .item:last-child {
    border-right: 0;
  }

  .num {
    display: flex;
    justify-content: center;
  }
}

/**************************/
/* BELOW 704px (Smaller tablets) */
/**************************/

@media (max-width: 44em) {
  .right .card {
    row-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  .item:nth-child(2) {
    border-right: 0;
  }
}

/**************************/
/* BELOW 544px (Phones) */
/**************************/

@media (max-width: 34em) {
  .heading {
    font-size: 24px;
    line-height: 130%;
  }

  .cover img {
    height: 400px;
  }

  .card .item {
    /* justify-self: center; */
    border-right: 0;
    padding-bottom: 40px;
    border-bottom: 1px solid #ebebeb;
  }

  .item:last-child {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .right {
    margin-top: 40px;
  }

  .left .card {
    padding: 16px;
  }

  .right .card {
    row-gap: 40px;
    grid-template-columns: 1fr;
  }
}
</style>
