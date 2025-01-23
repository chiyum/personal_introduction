<script setup lang="ts">
import ArchAnimation from "@/components/arch-animation.vue";

import { useI18n } from "@/i18n";
const { t } = useI18n();

defineProps<{
  title: string[];
}>();
</script>

<template>
  <footer class="footerChat">
    <div class="footerChat-container">
      <div class="footerChat-block">
        <h1 class="footerChat-title">
          <p
            v-for="(item, index) in title"
            :key="index"
            class="footerChat-title--text"
          >
            {{ item }}
          </p>
        </h1>
        <div class="footerChat-linkBar">
          <arch-animation color="var(--primary-100)" border-radius="8px">
            <a class="footerChat-link">Let's Chat </a>
          </arch-animation>

          <arch-animation color="var(--primary-100)" border-radius="8px">
            <a class="footerChat-link">Email Me</a>
          </arch-animation>
        </div>
      </div>
    </div>

    <div class="footerChat-chatBlock">
      <div class="footerChat-chatBlock--bar">
        <p class="footerChat-chatBlock--text">{{ t("home.jobTitle") }}</p>
        <p class="footerChat-chatBlock--signature">{{ t("home.jobTitle") }}</p>
      </div>
      <div class="footerChat-chatBlock--webflow">
        <p class="footerChat-chatBlock--signature">{{ t("home.jobTitle") }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footerChat {
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding-top: 88px;
  padding-bottom: 88px;
  &-block {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  &-container {
    grid-column-gap: 44px;
    grid-row-gap: 44px;
    color: var(--dark-100);
    border-radius: 16px;
    flex-flow: column;
    width: 100%;
    padding: 88px;
    display: flex;
    position: relative;
    background-color: var(--primary-100);
    justify-content: flex-start;
    align-items: center;
  }
  &-title {
    display: flex;
    justify-content: start;
    align-content: center;
    color: var(--white);
    text-transform: uppercase;
    width: 100%;
    font-family: var(--fontConcertOne);
    line-height: 0.95;
    &--text {
      font-size: 180px;
      @include desktop {
        font-size: 16vw;
      }
    }
  }
  &-linkBar {
    display: flex;
    gap: 16px;
    width: 100%;
  }
  &-link {
    padding: 16px 24px;
    border-radius: 8px;
    color: var(--white);
    background-color: var(--dark-100);
    font-size: 24px;
    font-family: var(--fontConcertOne);
  }
  &-chatBlock {
    display: flex;
    gap: 44px;
    &--bar {
      display: flex;
      grid-column-gap: 24px;
      grid-row-gap: 24px;
      background-color: var(--dark-200);
      color: var(--low-contrast-text);
      letter-spacing: 0.2px;
      border-radius: 16px;
      flex-flow: column;
      width: 100%;
      max-width: 500px;
      padding: 32px;
      font-size: 14px;
      font-style: italic;
      font-weight: 700;
      line-height: 1.5;
    }
    &--webflow {
      background-color: var(--dark-200);
      color: var(--low-contrast-text);
      border-radius: 16px;
      font-family: var(--fontConcertOne);

      justify-content: flex-end;
      align-items: center;
      width: 100%;
      padding: 32px;
      display: flex;
    }
    &--text {
      letter-spacing: 0.5px;
      text-transform: none;
      font-size: 16px;
      font-style: italic;
      font-weight: 900;
      line-height: 1;
    }
    &--signature {
      font-size: 24px;
      font-family: var(--fontConcertOne);
    }
  }
}
</style>
