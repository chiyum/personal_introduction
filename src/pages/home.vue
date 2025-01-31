<script setup lang="ts">
import IntroductionCard from "@/components/introductionCard.vue";
import WorksDisplay from "@/components/worksDisplay.vue";
import FooterChat from "@/components/footerChat.vue";
import getImageUrl from "@/utils/getImageUrl";
import { useI18n } from "@/i18n";
import { ref } from "vue";
import HeaderHost from "@/components/headshot.vue";
import { Vue3Marquee } from "vue3-marquee";
import { WorkDisplay } from "@/types/home";
import ArchAnimation from "@/components/arch-animation.vue";
const { t } = useI18n();
const images = ref<string[]>([
  new URL("@/assets/images/icon/link.png", import.meta.url).href,
  new URL("@/assets/images/icon/link.png", import.meta.url).href,
  new URL("@/assets/images/icon/link.png", import.meta.url).href,
  new URL("@/assets/images/icon/link.png", import.meta.url).href,
  new URL("@/assets/images/icon/link.png", import.meta.url).href
]);
const worksDisplayData = ref<WorkDisplay[]>([
  {
    img: getImageUrl("worksDisplay/worksDisplay.jpg"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: "XXXOOO",
    title: "OOOXXX"
  },
  {
    img: getImageUrl("worksDisplay/worksDisplay.jpg"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: "XXXOOO",
    title: "OOOXXX"
  },
  {
    img: getImageUrl("worksDisplay/worksDisplay.jpg"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: "XXXOOO",
    title: "OOOXXX"
  },
  {
    img: getImageUrl("worksDisplay/worksDisplay.jpg"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: "XXXOOO",
    title: "OOOXXX"
  },
  {
    img: getImageUrl("worksDisplay/worksDisplay.jpg"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: "XXXOOO",
    title: "OOOXXX"
  },
  {
    img: getImageUrl("worksDisplay/worksDisplay.jpg"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: "XXXOOO",
    title: "OOOXXX"
  }
]);
const titleName = ref(["L", "U", "N", "A"]);
</script>

<template>
  <div class="home">
    <div class="home-titleName">
      <p
        v-for="(item, index) in titleName"
        :key="index"
        class="home-titleName--name"
      >
        {{ item }}
      </p>
    </div>
    <section class="home-bar card-pd">
      <div class="home-left">
        <div class="home-left--title">
          <p class="home-left--title__text">Hey Y'all</p>
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
              <a href="#"> {{ t("home.company") }}</a>
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
        <div class="marquee">
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
            srcset="
              https://cdn.prod.website-files.com/63c96fbd3f3abb1db1cbcab9/66f17147b276d2788ca91113_Purple%20Card%202-p-500.png 500w,
              https://cdn.prod.website-files.com/63c96fbd3f3abb1db1cbcab9/66f17147b276d2788ca91113_Purple%20Card%202.png       768w
            "
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
    <section><FooterChat :title="titleName" /></section>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/home";
</style>
