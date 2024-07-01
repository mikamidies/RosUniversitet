<template>
  <div class="wrap">
    <div class="container">
      <h4 class="section__title">{{$store.state.translations['about.road_map']}}</h4>
      <div class="board">
        <div v-for="(road, idx) in roadmap" :key="road.id" :class="`piece_${idx+1}`" class="piece">{{ road.title }}</div>

        <div class="year">
          <p class="name">{{$store.state.translations['about.year_1']}}</p>
        </div>
        <div class="year">
          <p class="name">{{$store.state.translations['about.year_2']}}</p>
        </div>
        <div class="year">
          <p class="name">{{$store.state.translations['about.year_3']}}</p>
        </div>
        <div class="year">
          <p class="name">{{$store.state.translations['about.year_4']}}</p>
        </div>
        <div class="year">
          <p class="name">{{$store.state.translations['about.year_5']}}</p>
        </div>
        <div class="year">
          <p class="name">{{$store.state.translations['about.year_6']}}</p>
        </div>
        <div class="year">
          <p class="name">{{$store.state.translations['about.year_7']}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['roadmap']
};
</script>

<style scoped>
.wrap {
  padding: 80px 0 120px 0;
}

.section__title {
  text-align: center;
  margin-bottom: 40px;
}

.board {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-left: 1px solid #d7d7dd;
  height: 342px;
  position: relative;
}

.year {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-right: 1px solid #d7d7dd;
}

.name {
  color: var(--grey-40, #9a999b);
  font-family: "Golos Text";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.piece {
  color: var(--Blue-night, #001935);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  padding: 16px 24px;
  border-radius: 12px;
  text-align: center;
  background: var(--White, #fff);
  position: absolute;
  white-space: nowrap;
  min-width: 25%;
}

.piece_1 {
  left: 0%;
  top: 5px;
}

.piece_2 {
  left: 15%;
  top: 65px;
}

.piece_3 {
  left: 35%;
  top: 125px;
}

.piece_4 {
  left: 55%;
  top: 185px;
}

.piece_5 {
  left: 75%;
  top: 245px;
}

/**************************/
/* BELOW 1536px (Normal desktops) */
/**************************/

@media (max-width: 96em) {
  .board {
    height: 400px;
  }

  .piece {
    font-size: 14px;
  }

  .name {
    font-size: 14px;
  }

  .piece {
    text-align: center;
  }
}

/**************************/
/* BELOW 1344px (Smaller desktops) */
/**************************/

@media (max-width: 84em) {
  .board {
    height: 350px;
  }

  .piece {
    width: 100px;
    white-space: normal;
    padding: 12px 16px;
  }
}

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
  .board {
    height: 300px;
    overflow-x: auto;
    grid-template-columns: repeat(7, 120px);
  }

  .board::-webkit-scrollbar {
    height: 4px;
  }

  .piece {
    width: fit-content;
    white-space: nowrap;
    padding: 8px 12px;
    font-size: 12px;
  }

  .piece_1 {
    left: 0;
    top: 10px;
  }

  .piece_2 {
    left: calc(1.3 * 120px);
    top: 60px;
  }

  .piece_3 {
    left: calc(2.4 * 120px);
    top: 110px;
  }

  .piece_4 {
    left: calc(3.8 * 120px);
    top: 160px;
  }

  .piece_5 {
    left: calc(5.4 * 120px);
    top: 210px;
  }
}
</style>
