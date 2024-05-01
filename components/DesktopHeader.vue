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
export default {
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
</style>
