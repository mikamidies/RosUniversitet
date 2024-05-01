<template>
  <div class="wrap">
    <div class="container small">
      <h4 class="section__title title">Часто задаваемые вопросы</h4>

      <div class="items">
        <div v-for="item in items" :key="item.id" class="dropdown" @click="dropAction(item.id)"
          :class="{ heightAuto: dropVal == item.id }">
          <div class="dropdown-button">
            <h5>
              {{ item.question }}
            </h5>
            <span :class="{ rotate180: dropVal == item.id }">
              <chevron-down />
            </span>
          </div>
          <Transition name="bounceDrop">
            <div v-html="item.answer" class="dropdown-board"></div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronDown from "../SvgIcons/ChevronDown.vue";
export default {
  components: { ChevronDown },
  data() {
    return {
      dropVal: false,
      items: [
        {
          id: 0,
          question: "Savol",
          answer:
            "Россия – это огромная территория и большие расстояния, но даже если вы впервые в стране, добраться до места назначения самостоятельно совсем несложно. Главное заранее спланировать маршрут, как во время поездки в любое незнакомое место.",
        },
        {
          id: 1,
          question: "Savol 2",
          answer:
            "Россия – это огромная территория и большие расстояния, но даже если вы впервые в стране, добраться до места назначения самостоятельно совсем несложно. Главное заранее спланировать маршрут",
        },
        {
          id: 2,
          question: "Savol 3",
          answer: "Kак во время поездки в любое незнакомое место.",
        },
      ],
    };
  },

  methods: {
    dropAction(val) {
      if (val != this.dropVal) {
        this.dropVal = val;
      } else {
        this.dropVal = false;
      }
    },
  },
};
</script>

<style scoped>
.wrap {
  padding: 0 0 120px 0;
  background: #f5f5f7;
}

.title {
  text-align: center;
  margin-bottom: 40px;
}

.items {
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.bounceDrop-enter-active {
  animation: bounceDrop-in 0.3s;
}

.bounceDrop-leave-active {
  animation: bounceDrop-in 0.3s reverse;
}

@keyframes bounceDrop-in {
  0% {
    transform: translateY(-20%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.dropdown {
  background: var(--white, #fff);
  max-height: 88px;
  overflow: hidden;
  border-bottom: 1px solid #ebebeb;
}

.dropdown.heightAuto {
  max-height: 100%;
}

.dropdown-button span {
  transition: 0.4s;
}

.dropdown-button span.rotate180 {
  transform: rotate(180deg);
}

.dropdown-button {
  padding: 24px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: var(--black, #010e38);
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
}

.dropdown-button h5 {
  color: var(--Blue-night, #001935);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  /* 31.2px */
}

.dropdown.heightAuto .dropdown-button h5 {
  -webkit-line-clamp: 5;
}

.dropdown.heightAuto .dropdown-button {
  border-bottom: 1px solid #ebebeb;
}

.dropdown-board {
  padding: 24px 40px;
  color: #010e38;
  font-size: 18px;
  line-height: 150%;

  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 22.4px */
}
</style>
