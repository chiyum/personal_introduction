<script setup lang="ts">
import IntroductionCard from "@/components/introductionCard.vue";
import WorksDisplay from "@/components/worksDisplay.vue";
import getImageUrl from "@/utils/getImageUrl";
import { useI18n } from "@/i18n";
import { ref } from "vue";
import HeaderHost from "@/components/headshot.vue";
import { Vue3Marquee } from "vue3-marquee";
import { WorkDisplay } from "@/types/home";
import ArchAnimation from "@/components/arch-animation.vue";
import FontMoveAnimation from "@/components/font-move-animation.vue";
const { t } = useI18n();
const images = ref<string[]>([
  new URL("@/assets/images/icon/vue.png", import.meta.url).href,
  new URL("@/assets/images/icon/react.png", import.meta.url).href,
  new URL("@/assets/images/icon/js.png", import.meta.url).href,
  new URL("@/assets/images/icon/css.png", import.meta.url).href,
  new URL("@/assets/images/icon/html.png", import.meta.url).href,
  new URL("@/assets/images/icon/typescript.png", import.meta.url).href
]);
const worksDisplayData = ref<WorkDisplay[]>([
  {
    img: getImageUrl("portfolio/mobile_game_project.png"),
    url: "https://chiyum.github.io/game_platform/#/loading",
    summary: "與設計師合作的手機版本遊戲平台",
    title: "手機遊戲平台"
  },
  {
    img: getImageUrl("portfolio/9M.png"),
    url: "https://pc.9mbet01.com/",
    summary: "過去的公司專案",
    title: "遊戲平台"
  },
  {
    img: getImageUrl("portfolio/start_project.png"),
    url: "https://chiyum.github.io/vite_start_project/#/home",
    summary: "起手架構專案與CSS動畫",
    title: "起手專案"
  },
  {
    img: getImageUrl("portfolio/store_project.png"),
    url: "https://chiyum.github.io/electricity/",
    summary: "純切版的外包專案",
    title: "廠商外包"
  }
]);
</script>

<template>
  <div class="home">
    <section class="home-bar card-pd">
      <div class="home-left">
        <div class="home-left--title home-left--title--mobile">
          <p class="home-left--title__text">
            <font-move-animation
              :title="t('home.header.title2')"
              direction="top"
              title-color="#ffffff"
            />
          </p>
          <p class="home-left--title__text">
            <font-move-animation
              :title="t('home.header.title')"
              direction="top"
              title-color="#ffffff"
            />
          </p>
        </div>
        <div class="home-left--title home-left--title--desktop">
          <p class="home-left--title__text">{{ t("home.hello") }}</p>
          <p class="home-left--title__symbol">*</p>
          <p class="home-left--title__text">{{ t("home.helloTitle") }}</p>
        </div>
        <div class="home-left--introduce">
          <div class="home-left--introduce__bar">
            <p class="home-left--introduce__text">
              {{ t("home.im") }}
              <span class="home-left--introduce__bright">{{
                t("home.jobTitle")
              }}</span>
              {{ t("home.openingText") }}
            </p>
            <p class="home-left--introduce__text">
              {{ t("home.jobTitleAt") }}
              <a href="https://honestdesign.com.tw/">
                {{ t("home.company") }}</a
              >
            </p>
            <p class="home-left--introduce__text">
              <span class="home-left--title__symbol">* </span>
              {{ t("home.workLocation") }}
            </p>
          </div>
          <arch-animation color="#121212">
            <button class="connectBtn">
              {{ t("home.button") }}
              <img
                class="connectBtnImg"
                src="../assets/images/icon/link.png"
                alt=""
              />
            </button>
          </arch-animation>
        </div>
        <h2>{{ t("home.skills") }}</h2>
        <div class="home-marquee">
          <Vue3Marquee>
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              :alt="'圖片 ' + (index + 1)"
            />
          </Vue3Marquee>
        </div>
      </div>
      <div class="home-right">
        <header-host>
          <img
            class="home-right--img"
            src="@/assets/images/card_green.png"
            alt=""
          />
        </header-host>
      </div>
    </section>
    <section class="home-introductionBar page-container">
      <div class="home-introductionCard">
        <IntroductionCard
          :title="t('global.portfolio')"
          :narrative="t('home.narrative')"
          :content="t('home.connect')"
        />
      </div>
      <div class="home-worksDisplay">
        <WorksDisplay :worksDisplay="worksDisplayData" />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/home";
</style>
