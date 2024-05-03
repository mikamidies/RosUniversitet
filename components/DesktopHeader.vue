<template>
  <div class="wrap" id="navbar">
    <div class="container">
      <div class="left">
        <ul class="links">
          <li>
            <NuxtLink to="/">Главная</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about">О нас</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/universities">Вузы и специальности</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services">Услуги</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contacts">Контакты</NuxtLink>
          </li>
          <li class="modaller">
            <button class="caller">База знаний <chevron-down /></button>

            <div class="modal">
              <div class="space"></div>
              <div class="container">
                <div class="body">
                  <div class="up">
                    <h4 class="par">База знаний</h4>
                  </div>
                  <div class="down">
                    <div class="left">
                      <button
                        @click="handleTab = index"
                        v-for="(item, index) in bases"
                        :key="item.id"
                        :class="{ active: handleTab == index }"
                      >
                        {{ item.title }}
                      </button>
                    </div>
                    <div class="board">
                      <div
                        class="items"
                        :class="{ active: handleTab == index }"
                        v-for="(cards, index) in bases"
                        :key="cards.id"
                      >
                        <div
                          class="item"
                          v-for="card in cards.contents"
                          :key="card.id"
                        >
                          <img
                            src="@/assets/img/univer.jpg"
                            alt=""
                            class="pic"
                          />
                          <p class="naming">
                            <star-icon />
                            {{ card.title }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="right">
        <a href="+123 45 678 90 00" class="num">+123 45 678 90 00</a>
        <div class="stick"></div>
        <div class="lang">
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1"> 1st menu item </a-menu-item>
              <a-menu-item key="2"> 2nd menu item </a-menu-item>
            </a-menu>
            <a-button style="margin-left: 8px">
              Русский <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ChevronDown from "./SvgIcons/ChevronDown.vue";
import baseApi from "@/api/base.js";
import StarIcon from "./SvgIcons/StarIcon.vue";

export default {
  components: {
    ChevronDown,
    StarIcon,
  },

  data() {
    return {
      bases: [],
      handleTab: 0,
    };
  },

  async mounted() {
    this.bases = await baseApi.getBases(this.$axios);

    console.log(this.bases);

    function scrollHeader() {
      const navbar = document.getElementById("navbar");
      if (this.scrollY >= 50) {
        navbar.classList.add("scroll");
      } else {
        navbar.classList.remove("scroll");
      }
    }
    window.addEventListener("scroll", scrollHeader);
  },
};
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  transition: 0.3s;
}

.scroll,
.white {
  background: white;
  border-bottom: 1px solid #ebebeb;
}

.scroll .links a,
.scroll .num,
.white .links a,
.white .num,
.white .caller,
.scroll .caller {
  color: var(--black);
}

.scroll .container,
.white .container {
  padding: 16px 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 24px 0;
  transition: 0.3s;
  position: relative;
}

.links,
.right {
  display: flex;
  align-items: center;
  gap: 40px;
}

.stick {
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.4);
}

.links a,
.num,
.caller {
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 22.4px */
  transition: 0.3s;
}

.scroll .stick,
.white .stick {
  background: var(--black);
}

.caller :deep(path) {
  stroke: white;
}

.caller svg {
  width: 24px;
  height: 24px;
}

.caller {
  display: flex;
  align-items: center;
  gap: 8px;
}

.white .caller :deep(path),
.scroll .caller :deep(path) {
  stroke: var(--black);
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}
.body {
  border-radius: 12px;
  background: var(--White, #fff);
  width: 100%;
  box-shadow: 0px 4px 16px rgba(17, 17, 26, 0.05),
    0px 8px 32px rgba(17, 17, 26, 0.05);
}
.up {
  padding: 32px;
  border-bottom: 1px solid #d7d7dd;
}
.par {
  color: var(--Blue-night, #001935);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 31.2px */
}
.down {
  padding: 24px 32px 32px 32px;
  display: grid;
  grid-template-columns: 206px 1fr;
  gap: 40px;
}
.left button {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  text-align: left;
  border-bottom: 1px solid #a8addc;
  padding: 16px 0;
}
.left button.active {
  color: var(--black);
  font-weight: 500;
}
.left button:first-child {
  padding-top: 0;
}
.left button:last-child {
  padding-bottom: 0;
  border-bottom: 0px solid #000;
}
.board {
  border-radius: 8px;
  background: #f5f5f7;
  padding: 12px;
}
.items {
  display: none;
}
.items.active {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}
.item {
  border-radius: 8px;
  background: var(--White, #fff);
  padding: 12px;
}
.pic {
  width: 100%;
  height: 113px;
  border-radius: 4px;
  margin-bottom: 12px;
}
.naming {
  display: grid;
  align-items: flex-start;
  gap: 16px;
  grid-template-columns: 16px 1fr;
  color: var(--Blue-night, #001935);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 25.2px */
}
.modal .container {
  border-bottom: 0;
}
</style>
