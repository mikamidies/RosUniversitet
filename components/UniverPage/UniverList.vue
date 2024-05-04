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
          <div class="table_wrapper">
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
  line-height: 130%;
  /* 31.2px */
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
  line-height: 140%;
  /* 16.8px */
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
  line-height: 140%;
  /* 22.4px */
}

.item {
  padding-bottom: 64px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 48px;
}

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
  .naming {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  .item {
    padding-bottom: 40px;
  }
}

/**************************/
/* BELOW 704px (Smaller tablets) */
/**************************/

@media (max-width: 44em) {
  .heading {
    font-size: 24px;
  }

  th {
    padding: 12px 16px;
    font-size: 10px;
  }
}

/**************************/
/* BELOW 544px (Phones) */
/**************************/

@media (max-width: 34em) {
  th {
    min-width: 200px;
  }

  .table_wrapper {
    overflow-x: auto;
  }

  .table_wrapper::-webkit-scrollbar {
    height: 4px;
  }
}
</style>
