<template>
  <div class="wrap">
    <div class="container">
      <h4 class="section__title title">
        Эксперты унверистета, которые помогут вам поступить в любой иностранный
        вуз
      </h4>
      <div class="items">
        <div class="item">
          <div class="img">
            <img src="@/assets/img/stud.jpg" alt="" />
          </div>
          <p class="name">Anva Sanayev</p>
          <div class="html">
            <p>
              Участник 20 международных ассоциации специалистов попрограмн в
              Европе, ОАЭ и США планированию карьеры NCDA
            </p>
            <p>5 лет работы в сфере</p>
            <p>
              Более б лет работет в сфере образования за границей образования за
              рубежон
            </p>
            <p>37 успешных кейсов поступления</p>
            <p>
              Всегда в курсе нововведений и изменений в програнмах вузов,
              требованиях кабитуриентам и условиях поступления
            </p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/stud.jpg" alt="" />
          </div>
          <p class="name">Anva Sanayev</p>
          <div class="html">
            <p>
              Участник 20 международных ассоциации специалистов попрограмн в
              Европе, ОАЭ и США планированию карьеры NCDA
            </p>
            <p>5 лет работы в сфере</p>
            <p>
              Более б лет работет в сфере образования за границей образования за
              рубежон
            </p>
            <p>37 успешных кейсов поступления</p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/stud.jpg" alt="" />
          </div>
          <p class="name">Anva Sanayev</p>
          <div class="html">
            <p>
              Участник 20 международных ассоциации специалистов попрограмн в
              Европе, ОАЭ и США планированию карьеры NCDA
            </p>
            <p>5 лет работы в сфере</p>
            <p>
              Более б лет работет в сфере образования за границей образования за
              рубежон
            </p>
          </div>
        </div>
        <div class="item">
          <div class="img">
            <img src="@/assets/img/stud.jpg" alt="" />
          </div>
          <p class="name">Anva Sanayev</p>
          <div class="html">
            <p>
              Участник 20 международных ассоциации специалистов попрограмн в
              Европе, ОАЭ и США планированию карьеры NCDA
            </p>
            <p>5 лет работы в сфере</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrap {
  padding: 80px 0 120px 0;
}
.items {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.title {
  max-width: 987px;
  margin-bottom: 40px;
}
.item {
  padding: 24px;
  transition: 0.4s;
  height: max-content;
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
  line-height: 140%; /* 28px */
  margin: 24px 0 16px 0;
}
.html {
  padding-left: 20px;
}
.html p {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  margin-bottom: 16px;
  position: relative;
}
.html p::after {
  width: 12px;
  height: 2px;
  background: #f2994a;
  content: "";
  position: absolute;
  top: 12px;
  left: -20px;
}
</style>
