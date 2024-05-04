<template>
  <div class="master">
    <div class="container">
      <h4 class="heading">Контакты</h4>

      <div class="buttons">
        <button
          v-for="(button, index) in contacts"
          :key="index"
          @click="activeTab = index"
          :class="{ active: activeTab == index }"
        >
          {{ button.country }}
        </button>
      </div>

      <div class="tabs">
        <div
          class="tab"
          v-for="(item, index) in contacts"
          :key="index"
          :class="{ active: activeTab == index }"
        >
          <h4 class="par">Оставаться на связи</h4>
          <p class="sub">
            Чтобы найти контакты ближайшего вам офиса Rosuniversitet, изучите
            наши офисы по всему миру
          </p>

          <div class="items">
            <div class="item">
              <div class="name"><call-icon /> Номер телефона</div>
              <div class="body">
                <a href="">{{ item.email }}</a>
                <a href="" v-for="number in item.phone_numbers" :key="number">
                  {{ number }}
                </a>
              </div>
            </div>

            <div class="item">
              <div class="name"><map-icon /> Адрес</div>
              <div class="body">
                <p>
                  {{ item.address }}
                </p>
              </div>
            </div>

            <div class="item">
              <div class="name"><socials-icon /> Социальные сети</div>
              <div class="body">
                <div class="socs">
                  <a
                    :href="item.social_networks[0].link"
                    class="soc"
                    target="_blank"
                  >
                    <instagram-icon />
                  </a>
                  <a
                    :href="item.social_networks[1].link"
                    class="soc"
                    target="_blank"
                  >
                    <facebook-icon
                  /></a>
                  <a
                    :href="item.social_networks[2].link"
                    class="soc"
                    target="_blank"
                  >
                    <telegram-icon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="map" v-html="item.map_iframe"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CallIcon from "~/components/SvgIcons/CallIcon.vue";
import MapIcon from "~/components/SvgIcons/MapIcon.vue";
import SocialsIcon from "~/components/SvgIcons/SocialsIcon.vue";
import InstagramIcon from "~/components/SvgIcons/InstagramIcon.vue";
import FacebookIcon from "~/components/SvgIcons/FacebookIcon.vue";
import TelegramIcon from "~/components/SvgIcons/TelegramIcon.vue";

import contactsApi from "@/api/contacts.js";

export default {
  layout: "inner",

  components: {
    CallIcon,
    MapIcon,
    SocialsIcon,
    InstagramIcon,
    TelegramIcon,
    FacebookIcon,
  },

  data() {
    return {
      activeTab: 1,
    };
  },

  async asyncData({ $axios, query, i18n }) {
    const contacts = await contactsApi.getContacts($axios, {
      params: query,
      headers: {
        "Accept-Language": i18n.locale,
      },
    });

    return {
      contacts,
    };
  },
};
</script>

<style scoped>
.master {
  padding: 156px 0 120px 0;
  background: var(--Apple-Grey, #f5f5f7);
}

.buttons {
  padding: 8px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 80px 0 24px 0;
  border-radius: 54px;
  background: var(--White, #fff);
}

.buttons button {
  color: var(--grey-64, #5d5d5f);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  /* 22.4px */
  padding: 16px 24px;
  border-radius: 4000px;
  background: var(--Apple-Grey, #f5f5f7);
}

.buttons button.active {
  border-radius: 4000px;
  background: var(--Blue-night, #001935);
  color: white;
}

.tab {
  border-radius: 12px;
  background: var(--White, #fff);
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
  color: var(--grey-64, #5d5d5f);
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
  padding: 0 24px 24px 24px;
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
  background: var(--Apple-Grey, #f5f5f7);
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
  background: #f5f5f7;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.soc :deep(path) {
  fill: black;
}

.map :deep(iframe) {
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
