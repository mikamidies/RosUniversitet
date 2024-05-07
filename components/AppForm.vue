<template>
  <div class="wrap" id="application">
    <div class="container">
      <div class="card">
        <img src="@/assets/img/form.png" class="vector" alt="" />

        <div class="left">
          <h4 class="title">
            {{ $store.state.translations["main.form-title"] }}
          </h4>
          <p class="sub">
            {{ $store.state.translations["main.form-desc"] }}
          </p>
        </div>
        <div class="right">
          <form @submit.prevent="postData">
            <input
              type="text"
              v-model="form.name"
              required
              :placeholder="$store.state.translations['main.form-name']"
            />
            <input
              type="text"
              v-model="form.phone"
              required
              :placeholder="$store.state.translations['main.form-tel']"
            />
            <div class="buttons">
              <button type="submit">
                {{ $store.state.translations["main.send-app"] }}<arrow-right />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArrowRight from "./SvgIcons/ArrowRight.vue";
import servicesApi from "~/api/services";
export default {
  data() {
    return {
      form: {
        name: "",
        phone: "",
      },
    };
  },
  methods: {
    postData() {
      try {
        servicesApi.postApplication(this.$axios, this.form);
      
        this.$notification["success"]({
          message: this.$store.state.translations["main.app-message"],
        });
        this.form = {
          name: "",
          phone: "",
        };
      } catch (e) {}
    },
  },
  components: { ArrowRight },
};
</script>

<style scoped>
.card {
  border-radius: 16px;
  background: linear-gradient(77deg, #16222b 30.77%, #2e3942 69.23%);
  position: relative;
  display: grid;
  grid-template-columns: 6fr 4fr;
  padding: 80px 88px;
  overflow: hidden;
}
.vector {
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
  width: 60%;
  height: 100%;
  object-fit: contain;
}
.title {
  margin-bottom: 16px;
  color: var(--White, #fff);
  font-family: var(--decor);
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 48px */
}
.sub {
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  max-width: 605px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}
input {
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  padding: 16px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(20px);
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.buttons {
  display: flex;
  justify-content: flex-end;
}
button {
  border-radius: 4000px;
  background: var(--White, #fff);
  padding: 16px 24px;
  color: var(--Blue-night, #001935);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 22.4px */
  display: flex;
  align-items: center;
  gap: 12px;
}

/**************************/
/* BELOW 1200px (Landscape Tablets) */
/**************************/

@media (max-width: 75em) {
  .card {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

/**************************/
/* BELOW 704px (Smaller tablets) */
/**************************/

@media (max-width: 44em) {
  .card {
    padding: 40px;
  }
  .vector {
    width: 100%;
  }
  .title {
    font-size: 32px;
    line-height: 120%; /* 38.4px */
  }
  .sub {
    font-size: 14px;
    line-height: 140%; /* 19.6px */
  }
  form {
    gap: 24px;
  }
  input {
    font-size: 14px;
    line-height: 140%; /* 19.6px */
  }
  button {
    font-size: 14px;
    line-height: 140%; /* 19.6px */
    padding: 12px 20px;
  }
}

/**************************/
/* BELOW 544px (Phones) */
/**************************/

@media (max-width: 34em) {
  .card {
    padding: 24px;
  }
  .title {
    font-size: 24px;
    line-height: 120%; /* 28.8px */
  }
  .sub {
    font-size: 12px;
    line-height: 140%; /* 16.8px */
  }
  form {
    gap: 16px;
  }
  input {
    font-size: 12px;
    line-height: 140%; /* 16.8px */
  }
  button {
    font-size: 12px;
    line-height: 140%; /* 16.8px */
    padding: 8px 16px;
  }
}
</style>
