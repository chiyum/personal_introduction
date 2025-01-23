<script setup lang="ts">
import IntroductionCard from "@/components/introductionCard.vue";
import WorksDisplay from "@/components/worksDisplay.vue";
import FooterChat from "@/components/footerChat.vue";
import getImageUrl from "@/utils/getImageUrl";
import { useI18n } from "@/i18n";
import { ref } from "vue";
import HeaderHost from "@/components/headshot.vue";
import { Vue3Marquee } from "vue3-marquee";
const { t } = useI18n();
const images = ref<string[]>([
  new URL("@/assets/images/icon/link.png", import.meta.url).href,
  new URL("@/assets/images/icon/link.png", import.meta.url).href,
  new URL("@/assets/images/icon/link.png", import.meta.url).href
]);
const worksDisplayData = ref<object[]>([
  {
    img: getImageUrl("worksDisplay/worksDisplay.jpg"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: t("home.worksDisplaySummaryOne"),
    title: "OOOXXX"
  },
  {
    img: getImageUrl("worksDisplay/worksDisplay.jpg"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: t("home.worksDisplaySummaryTwo"),
    title: "OOOXXX"
  },
  {
    img: getImageUrl("worksDisplay/worksDisplay.jpg"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: t("home.worksDisplaySummaryThree"),
    title: "OOOXXX"
  },
  {
    img: getImageUrl("worksDisplay/worksDisplay.jpg"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: t("home.worksDisplaySummaryFour"),
    title: "OOOXXX"
  },
  {
    img: getImageUrl("worksDisplay/worksDisplay.jpg"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: t("home.worksDisplaySummaryFive"),
    title: "OOOXXX"
  },
  {
    img: getImageUrl("worksDisplay/worksDisplay.jpg"),
    url: "https://www.youtube.com/watch?v=1F3OGIFnW1k",
    summary: t("home.worksDisplaySummarySix"),
    title: "OOOXXX"
  }
]);
const titleName = ref(["L", "U", "N", "A"]);
const homeTitle = ref(["P", "o", "r", "t", "f", "o", "l", "i", "o"]);
const footerTitle = ref(["L", "e", "t", "'s", " ", "C", "h", "a", "t"]);
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
    <section class="home-bar">
      <div class="home-left">
        <div class="home-left--title">
          <p class="home-left--title__text">Hey Y'all</p>
          <p class="home-left--title__symbol">*</p>
          <p class="home-left--title__text">I'm {{ t("home.name") }}</p>
        </div>
        <div class="home-left--introduce">
          <div class="home-left--introduce__bar">
            <p class="home-left--introduce__text">
              I'm a
              <span class="home-left--introduce__bright">{{
                t("home.jobTitle")
              }}</span>
              that's ready to help you make the experiences you've been missing!
            </p>
            <p class="home-left--introduce__text">
              UX Designer at <a href="#">Pendo.io</a>
            </p>
            <p class="home-left--introduce__text">
              <span class="home-left--title__symbol">* </span>Based in North
              Carolina
            </p>
          </div>
          <button class="home-left--btn">
            {{ t("home.connect") }}
            <img
              class="home-left--img"
              src="../assets/images/icon/link.png"
              alt=""
            />
          </button>
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
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              :alt="'圖片 ' + (index + 1)"
            />
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
    <section class="home-introductionBar">
      <div class="home-introductionCard">
        <IntroductionCard
          :title="homeTitle"
          :narrative="t('home.homeNarrative')"
          :content="t('home.homeConnect')"
        />
      </div>
      <div class="home-worksDisplay">
        <WorksDisplay :worksDisplay="worksDisplayData" />
      </div>
    </section>
    <section><FooterChat :title="footerTitle" /></section>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/home";
</style>
