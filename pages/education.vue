<template>
  <div class="master">
    <div class="container">
      <h4 class="heading">{{$store.state.translations['base.education']}}</h4>

      <div class="items">
        <div class="item" v-for="item in education" :key="item.id">
          <div class="content">
            <p class="name">
              {{ item?.title }}
            </p>
            <div class="sub" v-html="item?.description"></div>
          </div>

          <div class="img">
            <img
              :src="`${item?.image}`"
              :alt="item?.title"
              class="pic"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import educationApi from "@/api/education.js";

export default {
  layout: "inner",

  async asyncData({ $axios, query, i18n }) {
    const education = await educationApi.getEducation($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    });

    return {
      education,
    };
  },
};
</script>

<style scoped>
.master {
  padding: 164px 0 120px 0;
  background: var(--Apple-Grey, #f5f5f7);
}
.heading {
  margin-bottom: 80px;
}
.items {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.item {
  border-radius: 12px;
  background: var(--White, #fff);
  padding: 56px;
  display: grid;
  grid-template-columns: 5fr 5fr;
  gap: 56px;
}
.name {
  color: var(--Blue-night, #001935);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
  margin-bottom: 16px;
}
.sub {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  margin-bottom: 24px;
}

.img img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: 8px;
}
.item:nth-child(even) .content {
  order: 1;
}

/**************************/
/* BELOW 1200px (Landscape Tablets) */
/**************************/

@media (max-width: 75em) {
  .item {
    padding: 40px;
    gap: 24px;
  }
  .img img {
    height: 240px;
  }
}

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
}

/**************************/
/* BELOW 704px (Smaller tablets) */
/**************************/

@media (max-width: 44em) {
  .item {
    padding: 24px;
    gap: 16px;
    grid-template-columns: 1fr;
  }

  .item:nth-child(odd) .content {
    order: 1;
  }

  .heading {
    font-size: 26px;
  }

  .img img {
    height: 200px;
  }
  .name {
    font-size: 20px;
  }
  .sub {
    font-size: 14px;
  }
}

/**************************/
/* BELOW 544px (Phones) */
/**************************/

@media (max-width: 34em) {
  .heading {
    font-size: 22px;
    margin-bottom: 24px;
  }
  .item {
    padding: 16px;
    gap: 16px;
  }
}
</style>
