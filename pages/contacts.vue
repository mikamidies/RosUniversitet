<template>
  <div class="master">
    <div class="container">
      <h4 class="heading">
        Контакты
      </h4>

      <div class="buttons">
        <button @click="activeTab = 1" :class="{ active: activeTab == 1 }">
          Россия
        </button>
        <button @click="activeTab = 2" :class="{ active: activeTab == 2 }">
          Узбекистан
        </button>
        <button @click="activeTab = 3" :class="{ active: activeTab == 3 }">
          Беларусь
        </button>
        <button @click="activeTab = 4" :class="{ active: activeTab == 4 }">
          Украина
        </button>
        <button @click="activeTab = 5" :class="{ active: activeTab == 5 }">
          Казахстан
        </button>
      </div>

      <div class="tabs">
        <div class="tab" :class="{ active: activeTab == 1 }">
          <h4 class="par">
            Оставаться на связи
          </h4>
          <p class="sub">
            Чтобы найти контакты ближайшего вам офиса
            Rosuniversitet, изучите наши офисы по всему миру
          </p>

          <div class="items">
            <div class="item">
              <div class="name">
                <call-icon /> Номер телефона
              </div>
              <div class="body">
                <a href="">info@rosuniversitet.com</a>
                <a href="">
                  +7 (812) 219-56-56
                  +7 (964) 385-56-56
                </a>
              </div>
            </div>

            <div class="item">
              <div class="name">
                <map-icon /> Номер телефона
              </div>
              <div class="body">
                <p>
                  Россия, г.Санкт-Петербург, Лиговский проспект 43-45,
                  5 этаж, 519 кабинет: Вход между Билайном и Мегафоном
                </p>
              </div>
            </div>

            <div class="item">
              <div class="name">
                <socials-icon /> Номер телефона
              </div>
              <div class="body">
                <div class="socs">
                  <a href="#" class="soc" target="_blank"> <instagram-icon /> </a>
                  <a href="#" class="soc" target="_blank"> <facebook-icon /></a>
                  <a href="#" class="soc" target="_blank"> <telegram-icon /> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2154118923213!2d69.26125407656384!3d41.32592899980429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6a78b7bb25%3A0x3f3559ce60239dfe!2z0YPQu9C40YbQsCDQm9Cw0LHQt9Cw0LogMzAsIDEwMDEyOCwg0KLQvnNoa2VudCwgVG9zaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1707136289576!5m2!1sru!2s"
              width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="tab" :class="{ active: activeTab == 2 }">
          <h4 class="par">
            Оставаться на связи
          </h4>
          <p class="sub">
            Чтобы найти контакты ближайшего вам офиса
            Rosuniversitet, изучите наши офисы по всему миру
          </p>

          <div class="items">
            <div class="item">
              <div class="name">
                <call-icon /> Номер телефона
              </div>
              <div class="body">

              </div>
            </div>

            <div class="item">
              <div class="name">
                <map-icon /> Номер телефона
              </div>
              <div class="body">
                <p>
                  Россия, г.Санкт-Петербург, Лиговский проспект 43-45
                </p>
              </div>
            </div>

            <div class="item">
              <div class="name">
                <socials-icon /> Номер телефона
              </div>
              <div class="body">
                <div class="socs">
                  <a href="#" class="soc" target="_blank"> <instagram-icon /> </a>
                  <a href="#" class="soc" target="_blank"> <facebook-icon /></a>
                  <a href="#" class="soc" target="_blank"> <telegram-icon /> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2154118923213!2d69.26125407656384!3d41.32592899980429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6a78b7bb25%3A0x3f3559ce60239dfe!2z0YPQu9C40YbQsCDQm9Cw0LHQt9Cw0LogMzAsIDEwMDEyOCwg0KLQvnNoa2VudCwgVG9zaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1707136289576!5m2!1sru!2s"
              width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="tab" :class="{ active: activeTab == 3 }">
          <h4 class="par">
            Оставаться на связи
          </h4>
          <p class="sub">
            Чтобы найти контакты ближайшего вам офиса
            Rosuniversitet, изучите наши офисы по всему миру
          </p>

          <div class="items">
            <div class="item">
              <div class="name">
                <call-icon /> Номер телефона
              </div>
              <div class="body">

              </div>
            </div>

            <div class="item">
              <div class="name">
                <map-icon /> Номер телефона
              </div>
              <div class="body">
                <p>
                  Россия, г.Санкт-Петербург, Лиговский проспект 43-45,
                  5 этаж, 519 кабинет: Вход между Билайном и Мегафоном
                </p>
              </div>
            </div>

            <div class="item">
              <div class="name">
                <socials-icon /> Номер телефона
              </div>
              <div class="body">
                <div class="socs">
                  <a href="#" class="soc" target="_blank"> <instagram-icon /> </a>
                  <a href="#" class="soc" target="_blank"> <facebook-icon /></a>
                  <a href="#" class="soc" target="_blank"> <telegram-icon /> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2154118923213!2d69.26125407656384!3d41.32592899980429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6a78b7bb25%3A0x3f3559ce60239dfe!2z0YPQu9C40YbQsCDQm9Cw0LHQt9Cw0LogMzAsIDEwMDEyOCwg0KLQvnNoa2VudCwgVG9zaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1707136289576!5m2!1sru!2s"
              width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="tab" :class="{ active: activeTab == 4 }">
          <h4 class="par">
            Оставаться на связи
          </h4>
          <p class="sub">
            Чтобы найти контакты ближайшего вам офиса
            Rosuniversitet, изучите наши офисы по всему миру
          </p>

          <div class="items">
            <div class="item">
              <div class="name">
                <call-icon /> Номер телефона
              </div>
              <div class="body">

              </div>
            </div>

            <div class="item">
              <div class="name">
                <map-icon /> Номер телефона
              </div>
              <div class="body">
                <p>
                  Россия, г.Санкт-Петербург, Лиговский проспект 43-45,
                  5 этаж, 519 кабинет: Вход между Билайном и Мегафоном
                </p>
              </div>
            </div>

            <div class="item">
              <div class="name">
                <socials-icon /> Номер телефона
              </div>
              <div class="body">
                <div class="socs">
                  <a href="#" class="soc" target="_blank"> <instagram-icon /> </a>
                  <a href="#" class="soc" target="_blank"> <facebook-icon /></a>
                  <a href="#" class="soc" target="_blank"> <telegram-icon /> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2154118923213!2d69.26125407656384!3d41.32592899980429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6a78b7bb25%3A0x3f3559ce60239dfe!2z0YPQu9C40YbQsCDQm9Cw0LHQt9Cw0LogMzAsIDEwMDEyOCwg0KLQvnNoa2VudCwgVG9zaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1707136289576!5m2!1sru!2s"
              width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div class="tab" :class="{ active: activeTab == 5 }">
          <h4 class="par">
            Оставаться на связи
          </h4>
          <p class="sub">
            Чтобы найти контакты ближайшего вам офиса
            Rosuniversitet, изучите наши офисы по всему миру
          </p>

          <div class="items">
            <div class="item">
              <div class="name">
                <call-icon /> Номер телефона
              </div>
              <div class="body">

              </div>
            </div>

            <div class="item">
              <div class="name">
                <map-icon /> Номер телефона
              </div>
              <div class="body">
                <p>
                  Россия, г.Санкт-Петербург, Лиговский проспект 43-45,
                  5 этаж, 519 кабинет: Вход между Билайном и Мегафоном
                </p>
              </div>
            </div>

            <div class="item">
              <div class="name">
                <socials-icon /> Номер телефона
              </div>
              <div class="body">
                <div class="socs">
                  <a href="#" class="soc" target="_blank"> <instagram-icon /> </a>
                  <a href="#" class="soc" target="_blank"> <facebook-icon /></a>
                  <a href="#" class="soc" target="_blank"> <telegram-icon /> </a>
                </div>
              </div>
            </div>
          </div>

          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.2154118923213!2d69.26125407656384!3d41.32592899980429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b6a78b7bb25%3A0x3f3559ce60239dfe!2z0YPQu9C40YbQsCDQm9Cw0LHQt9Cw0LogMzAsIDEwMDEyOCwg0KLQvnNoa2VudCwgVG9zaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e0!3m2!1sru!2s!4v1707136289576!5m2!1sru!2s"
              width="600" height="450" style="border: 0" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CallIcon from '~/components/SvgIcons/CallIcon.vue';
import MapIcon from '~/components/SvgIcons/MapIcon.vue';
import SocialsIcon from '~/components/SvgIcons/SocialsIcon.vue';
import InstagramIcon from "~/components/SvgIcons/InstagramIcon.vue";
import FacebookIcon from "~/components/SvgIcons/FacebookIcon.vue";
import TelegramIcon from "~/components/SvgIcons/TelegramIcon.vue";

export default {
  layout: "inner",

  components: {
    CallIcon,
    MapIcon,
    SocialsIcon,
    InstagramIcon,
    TelegramIcon,
    FacebookIcon
  },

  data() {
    return {
      activeTab: 1,
    }
  },
}
</script>

<style scoped>
.master {
  padding: 156px 0 120px 0;
  background: var(--Apple-Grey, #F5F5F7);
}

.buttons {
  padding: 8px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 80px 0 24px 0;
  border-radius: 54px;
  background: var(--White, #FFF);
}

.buttons button {
  color: var(--grey-64, #5D5D5F);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* 22.4px */
  padding: 16px 24px;
  border-radius: 4000px;
  background: var(--Apple-Grey, #F5F5F7);
}

.buttons button.active {
  border-radius: 4000px;
  background: var(--Blue-night, #001935);
  color: white;
}

.tab {
  border-radius: 12px;
  background: var(--White, #FFF);
  padding: 56px;
  display: none;
}

.tab.active {
  display: block;
}

.par {
  color: var(--Blue-night, #001935);
  font-family: var(--decor);
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 38.4px */
  margin-bottom: 16px;
}

.sub {
  color: var(--grey-64, #5D5D5F);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  /* 25.2px */
  max-width: 580px;
}

.items {
  margin: 48px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid #ebebeb;
}

.item {
  height: 145px;
  border-right: 1px solid #ebebeb;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  padding: 0 24px 24px 24px
}

.item:last-child {
  border-right: 0;
}

.name {
  position: absolute;
  top: -22px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 51px;
  background: var(--Apple-Grey, #F5F5F7);
  color: var(--Blue-night, #001935);
  font-family: "Golos Text";
  font-size: 18px;
  font-style: normal;
  white-space: nowrap;
  font-weight: 500;
  line-height: 140%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
}

.item a,
.item p {
  color: var(--Black, #020105);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
}

.body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.socs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.soc {
  border-radius: 99px;
  background: #F5F5F7;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.soc :deep(path) {
  fill: black;
}

.map iframe {
  width: 100%;
  height: 460px;
}

/**************************/
/* BELOW 1200px (Landscape Tablets) */
/**************************/

@media (max-width: 75em) {

  .item {
    height: 200px;
  }

  .map iframe {
    height: 400px;
  }
}

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
  .items {
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }

  .item {
    border-top: 1px solid #ebebeb;
    text-align: center;
  }

  .item:first-child {
    border-top: 0;
  }

  .buttons button {
    font-size: 14px;
    padding: 12px 16px;
  }
}

/**************************/
/* BELOW 704px (Smaller tablets) */
/**************************/

@media (max-width: 44em) {
  .buttons {
    flex-wrap: wrap;
    gap: 8px;
    justify-content: center;
  }

  .tab {
    padding: 24px;
  }

  .name {
    font-size: 20px;
  }

  .sub {
    font-size: 14px;
  }

  .tag {
    font-size: 12px;
  }

  .map iframe {
    height: 360px;
  }
}

/**************************/
/* BELOW 544px (Phones) */
/**************************/

@media (max-width: 34em) {
  .buttons button {
    padding: 8px 12px;
  }

  .par {
    font-size: 22px;
    margin-bottom: 24px;
  }

  .item {
    padding: 16px;
    gap: 16px;
  }

  .map iframe {
    height: 300px;
  }
}
</style>