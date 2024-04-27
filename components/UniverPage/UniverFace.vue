<template>
  <div class="wrap">
    <div class="container">
      <div class="naming">
        <div class="logo">
          <img src="@/assets/img/logo/uni-2.svg" alt="" />
        </div>
        <h1 class="heading">
          Санкт-петербургский политехнический университет Петра Великого
        </h1>
      </div>
      <div class="card">
        <h4 class="par">Информация об университете</h4>

        <div class="html">
          <p>
            Санкт-Петербургский государственный Технологический институт был
            основан в 1828 году. 6 факультетов, более 68000 выпускников, из
            которых 110 были избраны академиками и член-корреспондентами РАН и
            отраслевых академий.
          </p>

          <p>
            Технологический институт был свидетелем первых научных достижений,
            дал России сотни техников, которые двигают прогресс вперед.
          </p>
        </div>

        <div class="img">
          <img src="@/assets/img/univer.jpg" alt="" />
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
.html p {
  display: flex;
  margin-bottom: 24px;
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
}
.html p:last-child {
  margin-bottom: 0;
}
.img img {
  width: 100%;
  height: 665px;
  object-fit: cover;
  border-radius: 4px;
}
</style>
