<template>
  <div class="wrap" id="navbar">
    <div class="container">
      <div class="left">
        <ul class="links">
          <li>
            <NuxtLink :to="localePath('/')">Главная</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/about')">О нас</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/universities')"
              >Вузы и специальности</NuxtLink
            >
          </li>
          <li>
            <NuxtLink :to="localePath('/services')">Услуги</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/contacts')">Контакты</NuxtLink>
          </li>
          <li class="modaller">
            <button class="caller" @click="modalHandle = !modalHandle">
              База знаний <chevron-down />
            </button>

            <div class="modal" :class="{ show: modalHandle == true }">
              <div class="space" @click="modalHandle = false"></div>
              <div class="container">
                <div class="body">
                  <div class="up">
                    <h4 class="par">База знаний</h4>
                  </div>
                  <div class="down">
                    <div class="buttons">
                      <button
                        @click="handleTab = index"
                        v-for="(item, index) in bases"
                        :key="item?.id"
                        :class="{ active: handleTab == index }"
                      >
                        {{ item?.title }}
                      </button>
                    </div>
                    <div class="board">
                      <div
                        class="items"
                        :class="{ active: handleTab == index }"
                        v-for="(cards, index) in bases"
                        :key="cards?.id"
                      >
                        <div
                          class="item"
                          v-for="card in cards?.contents"
                          :key="card?.id"
                        >
                          <NuxtLink :to="localePath(`/base/${card?.id}`)">
                            <img :src="card?.image" alt="" class="pic" />
                            <p class="naming">
                              <star-icon />
                              {{ card?.title }}
                            </p>
                          </NuxtLink>
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
              <a-menu-item key="1">
                <NuxtLink :to="switchLocalePath('ru')">Русский</NuxtLink>
              </a-menu-item>
              <a-menu-item key="2">
                <NuxtLink :to="switchLocalePath('en')">English</NuxtLink>
              </a-menu-item>
              <a-menu-item key="3">
                <NuxtLink :to="switchLocalePath('uz')">O'zbekcha</NuxtLink>
              </a-menu-item>
            </a-menu>
            <a-button style="margin-left: 8px">
              <p class="langer">
                {{ $i18n.locale }}
              </p>
              <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </div>
      </div>
      <div class="burger">
        <input v-model="burgerToggle" type="checkbox" id="checkbox" />
        <label for="checkbox" class="toggle">
          <div class="bars" id="bar1"></div>
          <div class="bars" id="bar2"></div>
          <div class="bars" id="bar3"></div>
        </label>
      </div>
    </div>
    <transition name="sidebar">
      <div v-if="burgerToggle" class="sidebar">
        <ul class="links">
          <li>
            <NuxtLink :to="localePath('/')">Главная</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/about')">О нас</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/universities')"
              >Вузы и специальности</NuxtLink
            >
          </li>
          <li>
            <NuxtLink :to="localePath('/services')">Услуги</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/contacts')">Контакты</NuxtLink>
          </li>
          <!-- <li>
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item key="1">
                  <NuxtLink to="/base/slug">Base 1</NuxtLink>
                </a-menu-item>
                <a-menu-item key="2">
                  <NuxtLink to="/base/slug">Base 2</NuxtLink>
                </a-menu-item>
              </a-menu>
              <a-button style="margin-left: 8px">
                База знаний <a-icon type="down" />
              </a-button>
            </a-dropdown>
          </li> -->
        </ul>
        <a href="+123 45 678 90 00" class="num">+123 45 678 90 00</a>
        <!-- <div class="lang">
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1"> 1st menu item </a-menu-item>
              <a-menu-item key="2"> 2nd menu item </a-menu-item>
            </a-menu>
            <a-button style="margin-left: 8px">
              Русский <a-icon type="down" />
            </a-button>
          </a-dropdown>
        </div> -->
      </div>
    </transition>
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
      burgerToggle: false,
      modalHandle: false,
      item: "",
    };
  },

  async fetch() {
    this.bases = await baseApi.getBases(this.$axios);
  },

  async mounted() {
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
  watch: {
    $route: function () {
      this.burgerToggle = false;
    },
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

.sidebar {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  gap: 40px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  overflow-y: hidden;
  z-index: -1;
  transition: 0.3s;
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
.langer {
  text-transform: capitalize;
}
.lang :deep(button) {
  display: flex;
  align-items: center;
  gap: 8px;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: -1;
  transition: 0.4s;
}
.modal.show {
  opacity: 1;
  visibility: visible;
  pointer-events: initial;
  z-index: 1000;
}
.modal .container {
  padding: 0;
}
.space {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.212);
  z-index: 1;
}
.body {
  border-radius: 12px;
  background: var(--White, #fff);
  width: 100%;
  box-shadow: 0px 4px 16px rgba(17, 17, 26, 0.05),
    0px 8px 32px rgba(17, 17, 26, 0.05);
  margin-top: 88px;
  position: relative;
  z-index: 2;
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
.buttons button {
  color: var(--grey-64, #5d5d5f);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  text-align: left;
  border-bottom: 1px solid #a8addc;
  padding: 16px 0;
}
.buttons button.active {
  color: var(--black);
  font-weight: 500;
}
.buttons button:first-child {
  padding-top: 0;
}
.buttons button:last-child {
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
  object-fit: cover;
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

.burger {
  display: none;
}

#checkbox {
  display: none;
}

.toggle {
  position: relative;
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition-duration: 0.5s;
}

.bars {
  width: 100%;
  height: 4px;
  background-color: #fff;
  border-radius: 4px;
}

.white .bars,
.scroll .bars {
  background-color: var(--black);
}

#bar2 {
  transition-duration: 0.8s;
}

#bar1,
#bar3 {
  width: 70%;
}

#checkbox:checked + .toggle .bars {
  background-color: var(--black);
}

#checkbox:checked + .toggle .bars {
  position: absolute;
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle #bar2 {
  transform: scaleX(0);
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: 0.5s;
}

#checkbox:checked + .toggle {
  transition-duration: 0.5s;
  transform: rotate(180deg);
}

.sidebar-enter-active,
.sidebar-leave-active {
  transition: opacity 0.3s;
}

.sidebar-enter,
.sidebar-leave-to {
  opacity: 0;
}

.sidebar-enter-to,
.sidebar-leave {
  opacity: 1;
}

/**************************/
/* BELOW 1536px (Normal desktops) */
/**************************/

@media (max-width: 96em) {
  .container,
  .white .container,
  .scroll .container {
    padding-left: 24px;
    padding-right: 24px;
  }
}

/**************************/
/* BELOW 1200px (Landscape Tablets) */
/**************************/

@media (max-width: 75em) {
  .container {
    flex-direction: column;
    gap: 24px;
  }
}

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
  .links a,
  .num {
    font-size: 14px;
  }
}

/**************************/
/* BELOW 736x (Smaller tablets) */
/**************************/

@media (max-width: 46em) {
  .container {
    padding: 24px;
  }

  .burger {
    display: block;
  }

  .sidebar {
    display: flex;
    height: 100%;
  }

  .sidebar .links a,
  .sidebar .num,
  .sidebar .ant-btn {
    font-size: 20px;
    color: var(--black);
  }

  .container,
  .white .container,
  .scroll .container {
    padding: 24px;
  }

  .sidebar .links {
    flex-direction: column;
  }

  .container {
    align-items: end;
  }

  .left,
  .right {
    display: none;
  }
}
</style>
