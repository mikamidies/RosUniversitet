<template>
  <div class="wrap table_list">
    <div class="grey">
      <div class="container">
        <div class="naming">
          <h4 class="heading">{{$store.state.translations['universities.faculty_list']}}</h4>

          <p class="count">{{$store.state.translations['universities.total']}} {{univer.faculties.length}} {{$store.state.translations['universities.faculties']}}.</p>
        </div>
      </div>
    </div>
    <div class="white">
      <div class="container">
        <div class="item" v-for="item in univer.faculties" :key="item.id">
          <h4 class="name">{{ item.title }}</h4>
          <div class="table_wrapper" v-html="item.body">
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

<style>
.table_list .naming {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.table_list .naming {
  padding-bottom: 40px;
}

.table_list .white {
  background: white;
  padding: 80px 0;
}

.table_list .table_wrapper {
  border-radius: 8px;
  overflow: hidden;
}

.table_list .name {
  color: var(--Blue-night, #001935);
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  /* 31.2px */
  margin-bottom: 24px;
}

.table_list table {
  width: 100%;
}

.table_list tr:first-child {
  border: 0;
  background-color: #F5F5F7;
}

.table_list tr:first-child td {
  font-weight: 500;
}

.table_list tr {
  border-bottom: 1px solid #ebebeb;
}

.table_list tr:last-child {
  border: 0;
}

.table_list th {
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

.table_list td {
  padding: 16px 24px;
  color: var(--grey-80, #353437);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 22.4px */
}

.table_list .item {
  padding-bottom: 64px;
  border-bottom: 1px solid #ebebeb;
  margin-bottom: 48px;
}

.table_list .item:last-child {
  border-bottom: 0;
}

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
  .table_list .naming {
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr;
  }

  .table_list .item {
    padding-bottom: 40px;
  }
}

/**************************/
/* BELOW 704px (Smaller tablets) */
/**************************/

@media (max-width: 44em) {
  .table_list .heading {
    font-size: 24px;
  }

  .table_list th {
    padding: 12px 16px;
    font-size: 10px;
  }
}

/**************************/
/* BELOW 544px (Phones) */
/**************************/

@media (max-width: 34em) {
  .table_list th {
    min-width: 200px;
  }

  .table_list .table_wrapper figure {
    overflow-x: auto;
  }

  .table_list .table_wrapper figure::-webkit-scrollbar {
    height: 4px;
  }
}
</style>
