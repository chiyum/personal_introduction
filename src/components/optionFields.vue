<script setup lang="ts">
import { useRouter } from "vue-router";
import { useI18n } from "@/i18n";
const { t } = useI18n();
const router = useRouter();
const emit = defineEmits(["close"]);

const toHome = () => {
  router.push("/home");
  emit("close", false);
};
const toAbout = () => {
  router.push("/about");
  emit("close", false);
};
const toBlog = () => {
  router.push("/blog");
  emit("close", false);
};
const closeItem = () => {
  emit("close", false);
};
</script>

<template>
  <div class="optionFields" @click="closeItem">
    <div class="optionFields-card">
      <p class="optionFields-link optionFields-oneLink" @click="toHome">
        {{ t("global.portfolio") }}
      </p>
      <p class="optionFields-link" @click="toAbout">{{ t("global.about") }}</p>
      <p class="optionFields-link" @click="toBlog">{{ t("global.blog") }}</p>
      <p class="optionFields-link" @click="toHome">
        {{ t("global.linkedin") }}
      </p>
    </div>
  </div>
</template>
<style scoped lang="scss">
.optionFields {
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background-color: hsla(0, 0%, 7%, 0.851);
  &-card {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    position: relative;
    justify-content: center;
    width: 100%;
    background-color: var(--white);
    border-radius: 16px;
    padding: 32px 0;
    top: 100px;
  }

  &-link {
    color: var(--dark-100);
    padding: 16px 16px 16px 32px;
    font-size: 40px;
    cursor: pointer;
  }
  &-oneLink {
    background-color: var(--dark-100);
    color: var(--white);
    padding: 16px 16px 16px 32px;
    font-size: 40px;
  }
}
</style>
