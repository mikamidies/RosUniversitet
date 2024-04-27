<template>
  <div class="master">
    <div class="container">
      <h4 class="heading">Услуги, которые мы предоставляем</h4>

      <div class="items">
        <div class="item">
          <div class="content">
            <p class="name">
              Мы изучаем ваш запрос: какую задачу нужно решить.
            </p>
            <p class="sub">
              Россия – это огромная территория и большие расстояния, но даже
              если вы впервые в стране, добраться до места назначения
              самостоятельно совсем несложно. Главное заранее спланировать
              маршрут, как во время поездки в любое незнакомое место.
            </p>
            <div class="tags">
              <p class="tag">Узбекистан</p>
              <p class="tag">Россия</p>
            </div>
          </div>

          <div class="img">
            <img src="@/assets/img/serv.jpg" alt="" class="pic" />
          </div>
        </div>

        <div class="item">
          <div class="content">
            <p class="name">
              Мы изучаем ваш запрос: какую задачу нужно решить.
            </p>
            <p class="sub">
              Россия – это огромная территория и большие расстояния, но даже
              если вы впервые в стране, добраться до места назначения
              самостоятельно совсем несложно. Главное заранее спланировать
              маршрут, как во время поездки в любое незнакомое место.
            </p>
            <div class="tags">
              <p class="tag">Узбекистан</p>
              <p class="tag">Россия</p>
            </div>
          </div>

          <div class="img">
            <img src="@/assets/img/serv.jpg" alt="" class="pic" />
          </div>
        </div>

        <div class="item">
          <div class="content">
            <p class="name">
              Мы изучаем ваш запрос: какую задачу нужно решить.
            </p>
            <p class="sub">
              Россия – это огромная территория и большие расстояния, но даже
              если вы впервые в стране, добраться до места назначения
              самостоятельно совсем несложно. Главное заранее спланировать
              маршрут, как во время поездки в любое незнакомое место.
            </p>
            <div class="tags">
              <p class="tag">Узбекистан</p>
              <p class="tag">Россия</p>
            </div>
          </div>

          <div class="img">
            <img src="@/assets/img/serv.jpg" alt="" class="pic" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "inner",
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
.img img {
  width: 100%;
  height: 380px;
  object-fit: cover;
  border-radius: 8px;
}
.item:nth-child(even) .content {
  order: 1;
}
</style>
