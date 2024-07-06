<template>
  <div class="master">
    <div class="container">
      <h1 class="heading">{{$store.state.translations['base.become_student']}}</h1>

      <div class="container_inner">
        <div class="items">
          <div v-for="item in student" :key="item.id" class="item">
            <h3 class="item_heading">{{ item.title }}</h3>
            <div class="content">
              <h4 class="name">{{ item.subtitle }}</h4>
              <div class="sub" v-html="item.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import studentApi from "@/api/student.js";

export default {
  layout: "inner",

  async asyncData({ $axios, query, i18n }) {
    const student = await studentApi.getStudent($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    });

    return {
      student,
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
.container_inner {
  border-radius: 12px;
  background: var(--White, #fff);
  padding: 56px;
}

.items {
  max-width: 1000px;
  margin: 0 auto;
}

.item {
  position: relative;
  padding-left: 48px;
  padding-bottom: 40px;
  border-left: 1px solid #ebebeb;
}

.item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -50%); /* Center it */
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: #ebebeb;

}

.item_heading {
  font-size: 24px;
  margin-bottom: 24px;
  font-family: 'Unbounded';
  color: var(--Blue-night, #001935);
  line-height: 120%;
}

.content{
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: var(--Apple-Grey, #F5F5F7);
  border-radius: 8px;
}

.name {
  color: var(--Blue-night, #001935);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 31.2px */
}
.sub {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/**************************/
/* BELOW 1200px (Landscape Tablets) */
/**************************/

@media (max-width: 75em) {
}

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
  .container_inner {
    padding: 40px;
  }
}

/**************************/
/* BELOW 704px (Smaller tablets) */
/**************************/

@media (max-width: 44em) {
  .item {
    padding-left: 24px;
    padding-bottom: 20px;
  }
  .container_inner {
    padding: 20px;
  }
  .item_heading {
    font-size: 20px;
  }
  .heading {
    font-size: 26px;
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
  .item_heading {
    font-size: 16px;
  }
  .name {
    font-size: 16px;
  }
}
</style>
