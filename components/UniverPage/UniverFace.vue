<template>
  <div class="wrap">
    <div class="container">
      <div class="naming">
        <div class="logo">
          <img :src="univer.logo" alt="" />
        </div>
        <h1 class="heading">
          {{ univer.title }}
        </h1>
      </div>
      <div class="card">
        <h4 class="par">Информация об университете</h4>

        <div class="html" v-html="univer.description"></div>

        <div class="img">
          <img :src="`https://ros.quvonchbek.uz/${univer.images[0]}`" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["univer"],
};
</script>

<style scoped>
.wrap {
  padding-bottom: 120px;
}
.naming {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 24px;
  margin-bottom: 80px;
}
.heading {
  max-width: 960px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.card {
  border-radius: 12px;
  background: var(--White, #fff);
  padding: 64px;
}
.par {
  margin-bottom: 40px;
  color: var(--Blue-night, #001935);
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 38.4px */
}
.html {
  margin-bottom: 56px;
}
.html :deep(p) {
  display: flex;
  margin-bottom: 24px;
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
}
.html :deep(p:last-child) {
  margin-bottom: 0;
}
.img img {
  width: 100%;
  height: 665px;
  object-fit: cover;
  border-radius: 4px;
}

/**************************/
/* BELOW 1200px (Landscape Tablets) */
/**************************/

@media (max-width: 75em) {
  .img img {
    height: 500px;
  }
}

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
  .naming {
    grid-template-columns: 64px 1fr;
  }
  .heading {
    font-size: 24px;
  }
  .card {
    padding: 40px;
  }
  .par {
    font-size: 24px;
  }
  .html :deep(p) {
    font-size: 16px;
  }
  .img img {
    height: 400px;
  }
}

/**************************/
/* BELOW 704px (Smaller tablets) */
/**************************/

@media (max-width: 44em) {
  .naming {
    grid-template-columns: 100px 1fr;
  }
  .heading {
    font-size: 20px;
  }
  .card {
    padding: 32px;
  }
  .par {
    font-size: 20px;
  }
  .img img {
    height: 300px;
  }
}

/**************************/
/* BELOW 544px (Phones) */
/**************************/

@media (max-width: 34em) {
  .heading {
    font-size: 18px;
  }
  .card {
    padding: 24px;
  }
  .par {
    font-size: 18px;
  }
  .html :deep(p) {
    font-size: 14px;
  }
  .img img {
    height: 200px;
  }
}
</style>
