<template lang="html">
  <div>
    <a-modal
      v-model="visible"
      :body-style="{ borderRadius: '12px' }"
      :closable="false"
      centered
      class="close-modal"
      width="496px"
      @ok="handleOk"
    >
      <div class="head">
        <img src="@/assets/img/image.png" />
        <button class="close" @click="visible = false">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2431 7.75738L7.75781 16.2427M16.2431 16.2426L7.75781 7.75732"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div class="body">
        <h4>Получите консультацию от экспертов по высшему образованию за рубежом</h4>
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
            v-mask="'+998 ## ### ## ##'"
            required
            :placeholder="$store.state.translations['main.form-tel']"
          />
          <div class="buttons">
            <button type="submit" class="send">
              {{ $store.state.translations["main.send-app"] }}<arrow-right />
            </button>
          </div>
        </form>
      </div>
    </a-modal>
  </div>
</template>
<script>
import servicesApi from "~/api/services";
export default {
  data() {
    return {
      visible: false,
      form: {
        name: "",
        phone: "",
      },
    };
  },
  methods: {
    openModal() {
      this.visible = true;
    },
    closeModal() {
      this.visible = false;
    },
    postData() {
      try {
        servicesApi.postApplication(this.$axios, this.form);

        this.$notification["success"]({
          message: this.$store.state.translations["main.app-message"],
        });
        this.handleOk();
        this.form = {
          name: "",
          phone: "",
        };
      } catch (e) {}
    },
    handleOk() {
      this.visible = false;
    },
  },
};
</script>
<style lang="css" scoped>
:deep(.ant-modal-footer) {
  display: none;
}
:deep(.ant-modal-body) {
  padding: 0;
}
:deep(.ant-modal-content) {
  border-radius: 12px;
  overflow: hidden;
  background-color: transparent;
}
h4 {
  font-family: var(--decor);
  font-size: 18px;
  font-weight: 400;
  line-height: 21.6px;
  text-align: left;
  color: #001935;
}
.head {
  position: relative;
}
.close {
  position: absolute;
  top: 16px;
  right: 16px;
}
.body {
  background-color: #fff;
  padding: 24px;
}
input {
  border-bottom: 1px solid #b8bcc1;
  height: 54px;
  padding: 16px 0px 16px 0px;
  width: 100%;
  margin-top: 24px;
}
.send {
  width: 100%;
  height: 54px;
  padding: 16px 24px 16px 24px;
  border-radius: 4000px;
  background: #001935;
  color: #fff;
  font-family: var(--regular);
  font-size: 16px;
  font-weight: 500;
  line-height: 22.4px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
}
</style>
