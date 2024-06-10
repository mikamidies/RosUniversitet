<template>
  <div class="wrap">
    <div class="container">
      <ul class="links">
        <li>
          <NuxtLink :to="localePath('/')">{{
            $store.state.translations["main.home"]
          }}</NuxtLink>
        </li>
        <li>
          <div class="stick"></div>
        </li>
        <li>
          <NuxtLink :to="localePath('/about')">{{
            $store.state.translations["main.about"]
          }}</NuxtLink>
        </li>
        <li>
          <div class="stick"></div>
        </li>
        <li>
          <NuxtLink :to="localePath('/universities')">{{
            $store.state.translations["main.universitetsSpec"]
          }}</NuxtLink>
        </li>
        <li>
          <div class="stick"></div>
        </li>
        <li>
          <NuxtLink :to="localePath('/services')">{{
            $store.state.translations["main.services"]
          }}</NuxtLink>
        </li>
        <li>
          <div class="stick"></div>
        </li>
        <li>
          <NuxtLink :to="localePath('/contacts')">{{
            $store.state.translations["main.contact"]
          }}</NuxtLink>
        </li>
        <li>
          <div class="stick"></div>
        </li>
        <!-- <li>
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
        </li> -->
      </ul>
      <div class="logo">
        <img src="@/assets/img/build.png" alt="" />
      </div>
      <div class="contacts">
        <div class="item">
          <p class="sup">{{ $store.state.translations["contacts.address"] }}</p>
          <p class="value">
          {{contacts?.address}}
          </p>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations["contacts.number"] }}</p>
          <p class="value">
          <span v-for="number in contacts?.phone_numbers">
            {{number}} <br />
          </span>
          </p>
        </div>
        <div class="item">
          <p class="sup">{{$store.state.translations["contacts.email"]}}</p>
          <a :href="`mailto:${contacts?.email}`" class="value">{{contacts?.email}}</a>
        </div>
        <div class="item">
          <p class="sup">{{ $store.state.translations["contacts.social"] }}</p>
          <div class="socs">
            <a v-for="(messanger,index) in contacts?.social_networks" :href="messanger?.link" class="soc" target="_blank"> 
            <instagram-icon v-if="messanger.network == 'ig'"/>
            <facebook-icon v-if="messanger.network == 'fb'"/> 
            <telegram-icon v-if="messanger.network == 'tg'"/></a>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p>{{year.getFullYear()}} RosUniversitet @ {{$store.state.translations["main.footer-text"]}}</p>
        <p>by <a href="https://ndc.uz" target="_blank">NDC</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import InstagramIcon from "./SvgIcons/InstagramIcon.vue";
import FacebookIcon from "./SvgIcons/FacebookIcon.vue";
import TelegramIcon from "./SvgIcons/TelegramIcon.vue";
import contactsApi from "~/api/contacts";
export default {
  data() {
    return {
      contacts: {},
      year: new Date()
    }
  },
  async mounted() {
    const contacts = await contactsApi.getContacts(this.$axios, {
      params: this.$route.query,
      headers: {
        "Accept-Language": this.$i18n.locale,
      },
    });
   this.$store.commit('getSiteInfo',contacts[0])
   this.contacts = contacts[0]
  },
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 24px;
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

/**************************/
/* BELOW 944px (Tablets) */
/**************************/

@media (max-width: 59em) {
  .contacts {
    grid-template-columns: repeat(2, 1fr);
    justify-items: start;
  }

  .links {
    flex-wrap: wrap;
    justify-content: center;
  }
}

/**************************/
/* BELOW 704px (Smaller tablets) */
/**************************/

@media (max-width: 44em) {
  .stick {
    display: none;
  }

  li:nth-child(even) {
    display: none;
  }

  .links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    justify-items: center;
  }

  .links a {
    font-size: 14px;
  }
}

/**************************/
/* BELOW 544px (Phones) */
/**************************/

@media (max-width: 34em) {
  .links {
    display: none;
  }
  .contacts {
    grid-template-columns: 1fr;
  }
  .bottom {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }
}
</style>
