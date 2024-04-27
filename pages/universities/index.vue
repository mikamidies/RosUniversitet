<template>
  <div class="master">
    <div class="container">
      <h4 class="heading">Вузы и специальности</h4>

      <div class="items">
        <div class="item">
          <NuxtLink to="/universities/slug">
            <div class="img">
              <img src="@/assets/img/univer.jpg" alt="" />
            </div>
            <div class="naming">
              <img src="@/assets/img/logo/uni-1.svg" alt="" />
              <p class="name">
                Санкт-петербургский политехнический университет Петра Великого
              </p>
            </div>
            <div class="info">
              <div class="count">
                <studients-icon />
                24 4302
              </div>

              <div class="call">
                Связаться с нами
                <call-icon />
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/universities/slug">
            <div class="img">
              <img src="@/assets/img/univer.jpg" alt="" />
            </div>
            <div class="naming">
              <img src="@/assets/img/logo/uni-1.svg" alt="" />
              <p class="name">
                Санкт-петербургский политехнический университет Петра Великого
              </p>
            </div>
            <div class="info">
              <div class="count">
                <studients-icon />
                24 4302
              </div>

              <div class="call">
                Связаться с нами
                <call-icon />
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/universities/slug">
            <div class="img">
              <img src="@/assets/img/univer.jpg" alt="" />
            </div>
            <div class="naming">
              <img src="@/assets/img/logo/uni-1.svg" alt="" />
              <p class="name">
                Санкт-петербургский политехнический университет Петра Великого
              </p>
            </div>
            <div class="info">
              <div class="count">
                <studients-icon />
                24 4302
              </div>

              <div class="call">
                Связаться с нами
                <call-icon />
              </div>
            </div>
          </NuxtLink>
        </div>
        <div class="item">
          <NuxtLink to="/universities/slug">
            <div class="img">
              <img src="@/assets/img/univer.jpg" alt="" />
            </div>
            <div class="naming">
              <img src="@/assets/img/logo/uni-1.svg" alt="" />
              <p class="name">
                Санкт-петербургский политехнический университет Петра Великого
              </p>
            </div>
            <div class="info">
              <div class="count">
                <studients-icon />
                24 4302
              </div>

              <div class="call">
                Связаться с нами
                <call-icon />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CallIcon from "~/components/SvgIcons/CallIcon.vue";
import StudientsIcon from "~/components/SvgIcons/StudientsIcon.vue";
export default {
  components: { StudientsIcon, CallIcon },
  layout: "inner",
};
</script>

<style scoped>
.master {
  padding: 164px 0 120px 0;
  background: var(--Apple-Grey, #f5f5f7);
}
.heading {
  margin-bottom: 80px;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
.item {
  padding: 24px;
  border-radius: 12px;
  background: var(--White, #fff);
}
.img img {
  width: 100%;
  height: 212px;
  object-fit: cover;
  border-radius: 4px;
}
.naming {
  margin: 24px 0;
  display: grid;
  gap: 16px;
  grid-template-columns: 40px 1fr;
  align-items: center;
  padding-bottom: 24px;
  border-bottom: 1px solid #ebebeb;
}
.naming img {
  width: 100%;
  height: 40px;
  object-fit: contain;
}
.naming .name {
  color: var(--Blue-night, #001935);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 25.2px */
}
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.count {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--grey-80, #353437);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
}
.call {
  color: var(--Blue-night, #001935);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  display: flex;
  align-items: center;
  gap: 12px;
}
</style>
