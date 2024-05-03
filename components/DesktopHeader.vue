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
          <li>
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item key="1">
                  <NuxtLink to="/base/id">Base 1</NuxtLink>
                </a-menu-item>
                <a-menu-item key="2">
                  <NuxtLink to="/base/id">Base 2</NuxtLink>
                </a-menu-item>
              </a-menu>
              <a-button style="margin-left: 8px">
                База знаний <a-icon type="down" />
              </a-button>
            </a-dropdown>
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
      <div class="burger">
        <input v-model="burgerToggle" type="checkbox" id="checkbox">
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
            <li>
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
            </li>
          </ul>
          <a href="+123 45 678 90 00" class="num">+123 45 678 90 00</a>
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
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      burgerToggle: false,
    }
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
    '$route': function() {
      this.burgerToggle = false;
    }
  }
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
.white .num {
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
.num {
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
  transition-duration: .5s;
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
  transition-duration: .8s;
}

#bar1,
#bar3 {
  width: 70%;
}

#checkbox:checked+.toggle .bars {
  background-color: var(--black);
}

#checkbox:checked+.toggle .bars {
  position: absolute;
  transition-duration: .5s;
}

#checkbox:checked+.toggle #bar2 {
  transform: scaleX(0);
  transition-duration: .5s;
}

#checkbox:checked+.toggle #bar1 {
  width: 100%;
  transform: rotate(45deg);
  transition-duration: .5s;
}

#checkbox:checked+.toggle #bar3 {
  width: 100%;
  transform: rotate(-45deg);
  transition-duration: .5s;
}

#checkbox:checked+.toggle {
  transition-duration: .5s;
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
