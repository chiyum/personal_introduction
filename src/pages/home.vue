<script setup lang="ts">
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
</script>

<template>
  <div class="home">
    <div class="home-bar">
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
              that's ready to help <br />you make the experiences you've been
              missing!
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
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/home";
</style>
