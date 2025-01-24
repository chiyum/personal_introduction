<script setup lang="ts">
import IntroductionCard from "@/components/introductionCard.vue";
import { useI18n } from "@/i18n";
import { Vue3Marquee } from "vue3-marquee";
import { ref } from "vue";
const { t } = useI18n();
interface WorkItem {
  title: string;
  text: string;
}

const worksData = ref<WorkItem[]>([
  { title: "OOOXXX |", text: "XXXOOO", date: "2025" },
  { title: "OOOXXX |", text: "XXXOOO", date: "2025" },
  { title: "OOOXXX |", text: "XXXOOO", date: "2025" },
  { title: "OOOXXX |", text: "XXXOOO", date: "2025" },
  { title: "OOOXXX |", text: "XXXOOO", date: "2025" },
  { title: "OOOXXX |", text: "XXXOOO", date: "2025" }
]);
const homeTitle = ref(["P", "o", "r", "t", "f", "o", "l", "i", "o"]);
</script>

<template>
  <div class="about">
    <div class="about-marquee">
      <Vue3Marquee>
        <h2 class="about-marquee--text">{{ t("home.aboutMe") }}</h2>
      </Vue3Marquee>
    </div>
    <section class="about-bar">
      <div class="about-left">
        <div class="about-left--title">
          <p class="about-left--title__text">Hey Y'all</p>
          <p class="about-left--title__symbol">*</p>
          <p class="about-left--title__text">I'm {{ t("home.name") }}</p>
        </div>
        <div class="about-left--introduce">
          <div class="about-left--introduce__bar">
            <p class="about-left--introduce__text">
              I'm a
              <span class="about-left--introduce__bright">{{
                t("home.jobTitle")
              }}</span>
              that's ready to help you make the experiences you've been missing!
            </p>
            <p class="about-left--introduce__text">
              UX Designer at <a href="#">Pendo.io</a>
            </p>
            <p class="about-left--introduce__text">
              <span class="about-left--title__symbol">* </span>Based in North
              Carolina
            </p>
          </div>
          <button class="connectBtn">
            {{ t("home.connect") }}
            <img
              class="about-left--img"
              src="../assets/images/icon/link.png"
              alt=""
            />
          </button>
        </div>
        <h2>{{ t("home.skills") }}</h2>
      </div>
      <div class="about-right">
        <header-host>
          <img
            class="about-right--img"
            srcset="
              https://cdn.prod.website-files.com/63c96fbd3f3abb1db1cbcab9/66f17147b276d2788ca91113_Purple%20Card%202-p-500.png 500w,
              https://cdn.prod.website-files.com/63c96fbd3f3abb1db1cbcab9/66f17147b276d2788ca91113_Purple%20Card%202.png       768w
            "
            alt=""
          />
        </header-host>
      </div>
    </section>
    <section class="about-introduce--card">
      <div class="about-introduce">
        <IntroductionCard
          :title="homeTitle"
          :narrative="t('home.homeNarrative')"
          :content="t('home.homeConnect')"
          :textColor="'black'"
        />
        <div
          class="about-introduce--block"
          v-for="(item, index) in worksData"
          :key="index"
        >
          <div class="about-introduce--bar">
            <h1 class="about-introduce--title">{{ item.title }}|</h1>
            <p class="about-introduce--text">{{ item.text }}</p>
          </div>
          <p class="about-introduce--text">{{ item.date }}</p>
        </div>
      </div>
    </section>
    <section>
      <div>
        <IntroductionCard
          :title="homeTitle"
          :narrative="t('home.homeNarrative')"
          :content="t('home.homeConnect')"
        />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/about";
</style>
