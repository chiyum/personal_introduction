<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  title: string;
  text: string;
  img: string;
  imgWidth?: string;
}>();
</script>

<template>
  <div class="gameCard">
    <!-- 動態綁定圖片來源和樣式 -->
    <img
      :src="img"
      :style="{ width: imgWidth }"
      class="gameCard-img"
      alt="Game Image"
    />
    <div class="gameCard-content">
      <p class="gameCard-text">{{ text }}</p>
      <h1 class="gameCard-title">{{ title }}</h1>
    </div>
  </div>
</template>
<style scoped lang="scss">
.gameCard {
  width: 100%;
  &-img {
    border-radius: 16px;
  }
  &-content {
  }
  &-text {
    color: var(--primary-400);
    letter-spacing: 0.8px;
    font-size: 20px;
    font-style: italic;
    line-height: 1;
    font-family: var(--fontConcertOne);
  }
  &-title {
    color: var(--white);
    letter-spacing: 0.5px;
    font-size: 32px;
    font-style: italic;
    line-height: 1.1;
    font-family: var(--fontConcertOne);
  }
}
</style>
