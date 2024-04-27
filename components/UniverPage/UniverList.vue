<template>
  <div class="wrap">
    <div class="grey">
      <div class="container">
        <div class="naming">
          <h4 class="heading">Список наших факультетов</h4>

          <p class="count">Всего 6 факультетов.</p>
        </div>
      </div>
    </div>
    <div class="white">
      <div class="container">
        <div class="item">
          <h4 class="name">Медицинское направление</h4>
          <table>
            <tr>
              <th>Последовательность наук</th>
              <th>Продолжительность курса</th>
              <th>Стоимость одного года обучения</th>
            </tr>
            <tr>
              <td>Лечебное дело - 1 курс</td>
              <td>6 лет</td>
              <td>$ 3000</td>
            </tr>
            <tr>
              <td>Лечебное дело - 1 курс</td>
              <td>6 лет</td>
              <td>$ 3000</td>
            </tr>
            <tr>
              <td>Лечебное дело - 1 курс</td>
              <td>6 лет</td>
              <td>$ 3000</td>
            </tr>
          </table>
        </div>

        <div class="item">
          <h4 class="name">Инженерное направление</h4>
          <table>
            <tr>
              <th>Последовательность наук</th>
              <th>Продолжительность курса</th>
              <th>Стоимость одного года обучения</th>
              <th>Стоимость одного года проживания в общежитии</th>
              <th>Язык обучения</th>
              <th>Стоимость страхования жизни и здоровья за один года</th>
              <th>Общая стоимость одного учебного года</th>
            </tr>
            <tr>
              <td>Лечебное дело - 1 курс</td>
              <td>6 лет</td>
              <td>$ 3000</td>
              <td>Бесплатно</td>
              <td>Франсия</td>
              <td>$ 190</td>
              <td>$ 3190</td>
            </tr>
            <tr>
              <td>Лечебное дело - 1 курс</td>
              <td>6 лет</td>
              <td>$ 3000</td>
              <td>Бесплатно</td>
              <td>Франсия</td>
              <td>$ 190</td>
              <td>$ 3190</td>
            </tr>
            <tr>
              <td>Лечебное дело - 1 курс</td>
              <td>6 лет</td>
              <td>$ 3000</td>
              <td>Бесплатно</td>
              <td>Франсия</td>
              <td>$ 190</td>
              <td>$ 3190</td>
            </tr>
          </table>
        </div>

        <div class="item">
          <h4 class="name">Экономическое направление</h4>
          <table>
            <tr>
              <th>Последовательность наук</th>
              <th>Продолжительность курса</th>
              <th>Стоимость одного года обучения</th>
              <th>Стоимость одного года проживания в общежитии</th>
              <th>Язык обучения</th>
              <th>Стоимость страхования жизни и здоровья за один года</th>
              <th>Общая стоимость одного учебного года</th>
            </tr>
            <tr>
              <td>Лечебное дело - 1 курс</td>
              <td>6 лет</td>
              <td>$ 3000</td>
              <td>Бесплатно</td>
              <td>Франсия</td>
              <td>$ 190</td>
              <td>$ 3190</td>
            </tr>
            <tr>
              <td>Лечебное дело - 1 курс</td>
              <td>6 лет</td>
              <td>$ 3000</td>
              <td>Бесплатно</td>
              <td>Франсия</td>
              <td>$ 190</td>
              <td>$ 3190</td>
            </tr>
            <tr>
              <td>Лечебное дело - 1 курс</td>
              <td>6 лет</td>
              <td>$ 3000</td>
              <td>Бесплатно</td>
              <td>Франсия</td>
              <td>$ 190</td>
              <td>$ 3190</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.naming {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.naming {
  padding-bottom: 40px;
}
.white {
  background: white;
  padding: 80px 0;
}
.name {
  color: var(--Blue-night, #001935);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
  margin-bottom: 24px;
}
table {
  width: 100%;
}
th {
  color: var(--Blue-night, #001935);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  text-transform: uppercase;
  padding: 16px 24px;
  background: var(--Apple-Grey, #f5f5f7);
}
td {
  padding: 16px 24px;
  color: var(--grey-80, #353437);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
.item {
  padding-bottom: 64px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 48px;
}
</style>
