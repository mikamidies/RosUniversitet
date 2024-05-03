<template>
  <div class="master">
    <div class="container">
      <h4 class="heading">
        ROSUNIVERSITET <br />
        это ваш надежный партнер!
      </h4>

      <div class="cover">
        <img src="@/assets/img/about.jpg" alt="" />
      </div>

      <div class="content">
        <div class="left">
          <h4 class="par">100% наших абитуриентов поступили в желаемые ВУЗы</h4>
          <div class="card">
            <p>
              Специалисты НИТЦ Нейротехнологий Южного федерального университета
              (ЮФУ) исследовали активность головного мозга крыс во время
              наркоза. Математическое описание этого процесса позволит ученым
              повысить точность определения запахов обонятельными биогибридными
              системами с 60% до 100%. В перспективе такие системы могут
              применяться в медицине, экологии и в сфере обеспечения
              безопасности.
            </p>
            <p>
              Биогибридные технологии совмещают перспективные технические
              разработки и лучшие свойства животных. Ученые ЮФУ разработали
              обонятельную систему, которая может определять, какое вещество
              содержится в воздухе.
            </p>
            <p>
              «Идеальным результатом для нас с практической точки зрения, было
              бы создание управляемых, высокочувствительных, помехоустойчивых и
              функционирующих 24/7 биогибридных устройств, способных
              детектировать интересующие заказчика пары веществ в воздухе или
              почве», — отметил Петр Косенко.
            </p>
            <p>
              Одной из вариаций внедрения таких технологий могут быть
              кинологические службы. Система будет работать в режиме
              круглосуточного отслеживания, а нейронная сеть – обрабатывать
              информацию и давать сигнал о потенциально-опасных веществах,
              например, взрывчатых или наркотических.
            </p>
            <p>
              Исследование проведено в рамках проекта «Интеллектуальные
              технологии управления и обработки информации в перспективных
              роботизированных комплексах и гибридных системах» по программе
              Минобрнауки России «Приоритет 2030» (нацпроект «Наука и
              университеты»). Результаты исследования опубликованы в научном
              журнале «IBRO Neuroscience Reportsthis link is disabled».
            </p>
          </div>
        </div>

        <div class="right">
          <h4 class="par">Наши статистика</h4>
          <div class="card">
            <div class="item">
              <p class="num">
                <star-icon />
                5000
              </p>
              <p class="sub">Абитуриенты</p>
            </div>

            <div class="item">
              <p class="num">
                <star-icon />
                5000
              </p>
              <p class="sub">Абитуриенты</p>
            </div>

            <div class="item">
              <p class="num">
                <star-icon />
                15
              </p>
              <p class="sub">Абитуриенты</p>
            </div>

            <div class="item">
              <p class="num">
                <star-icon />
                100%
              </p>
              <p class="sub">Абитуриенты</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AboutStages :faq="faq" />
    <AboutMap :roadmap="roadmap" />

    <AppForm />
    <HomeExperts class="white" />
  </div>
</template>

<script>
import AboutMap from "~/components/AboutPage/AboutMap.vue";
import AboutStages from "~/components/AboutPage/AboutStages.vue";
import AppForm from "~/components/AppForm.vue";
import HomeExperts from "~/components/HomePage/HomeExperts.vue";
import StarIcon from "~/components/SvgIcons/StarIcon.vue";

import aboutApi from "@/api/about.js";

export default {
  components: { StarIcon, AboutStages, AboutMap, AppForm, HomeExperts },

  layout: "inner",

  async asyncData({ $axios }) {
    const faq = await aboutApi.getFaq($axios);
    const roadmap = await aboutApi.getRoadmap($axios);

    return {
      faq,
      roadmap,
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
</style>
