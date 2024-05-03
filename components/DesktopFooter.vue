<template>
  <div class="wrap">
    <div class="container">
      <ul class="links">
        <li>
          <NuxtLink to="/">Главная</NuxtLink>
        </li>
        <li>
          <div class="stick"></div>
        </li>
        <li>
          <NuxtLink to="/about">О нас</NuxtLink>
        </li>
        <li>
          <div class="stick"></div>
        </li>
        <li>
          <NuxtLink to="/universities">Вузы и специальности</NuxtLink>
        </li>
        <li>
          <div class="stick"></div>
        </li>
        <li>
          <NuxtLink to="/services">Услуги</NuxtLink>
        </li>
        <li>
          <div class="stick"></div>
        </li>
        <li>
          <NuxtLink to="/contacts">Контакты</NuxtLink>
        </li>
        <li>
          <div class="stick"></div>
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
      <div class="logo">
        <img src="@/assets/img/build.png" alt="" />
      </div>
      <div class="contacts">
        <div class="item">
          <p class="sup">Адрес</p>
          <p class="value">
            Лиговский проспект 43-45, 5 этаж, 519 офис, ориентир: Вход между
            Билайном и Мегафоном
          </p>
        </div>
        <div class="item">
          <p class="sup">Телефон номер</p>
          <p class="value">+7 (812) 219 56 56 | +7 (964) 385 56 56</p>
        </div>
        <div class="item">
          <p class="sup">Эл.почта</p>
          <p class="value">info@rosuniversitet.com</p>
        </div>
        <div class="item">
          <p class="sup">Соц сеть</p>
          <div class="socs">
            <a href="#" class="soc" target="_blank"> <instagram-icon /> </a>
            <a href="#" class="soc" target="_blank"> <facebook-icon /></a>
            <a href="#" class="soc" target="_blank"> <telegram-icon /> </a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p>2024 RosUniversitet @ Все права защищена</p>
        <p>by <a href="#" target="_blank">NDC</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import InstagramIcon from "./SvgIcons/InstagramIcon.vue";
import FacebookIcon from "./SvgIcons/FacebookIcon.vue";
import TelegramIcon from "./SvgIcons/TelegramIcon.vue";

export default {
  components: { InstagramIcon, TelegramIcon, FacebookIcon },
};
</script>

<style scoped>
.wrap {
  border-radius: 24px 24px 0px 0px;
  background: linear-gradient(77deg, #16222b 30.77%, #2e3942 69.23%);
  color: white;
}
.links {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px 0 20px 0;
  max-width: 936px;
  margin: 0 auto;
}
.links a {
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
.stick {
  width: 1px;
  height: 18px;
  background: rgba(255, 255, 255, 0.24);
}
.logo img {
  width: 100%;
  max-width: 931px;
  object-fit: contain;
  margin-bottom: -4px;
}
.logo {
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
}
.contacts {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding-bottom: 24px;
}
.sup {
  margin-bottom: 12px;
  color: var(--grey-40, #9a999b);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
}
.value {
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  max-width: 372px;
}
.socs {
  display: flex;
  align-items: center;
  gap: 24px;
}
.bottom {
  padding: 24px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
