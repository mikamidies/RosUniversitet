<template>
  <div class="wrap">
    <div class="container">
      <div class="left">
        <ul class="links">
          <li>
            <NuxtLink to="/">Главная</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">О нас</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Вузы и специальности</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Услуги</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">Контакты</NuxtLink>
          </li>
          <li>
            <a-dropdown>
              <a-menu slot="overlay">
                <a-menu-item key="1"> 1st menu item </a-menu-item>
                <a-menu-item key="2"> 2nd menu item </a-menu-item>
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
export default {};
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding: 24px 0;
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
  line-height: 140%; /* 22.4px */
}
</style>
