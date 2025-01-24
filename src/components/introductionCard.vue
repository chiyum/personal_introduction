<script setup lang="ts">
import { defineProps } from "vue";
import FontMoveAnimation from "@/components/font-move-animation.vue";

defineProps<{
  title: string;
  narrative: string;
  content: string;
}>();
// introductionCard-title--text
</script>

<template>
  <div class="introductionCard">
    <h1 class="introductionCard-title">
      <font-move-animation
        class="introductionCard-title--text"
        text="title"
        direction="top"
      />
    </h1>
    <div class="introductionCard-narrativeBar">
      <h2 class="introductionCard-narrative">
        {{ narrative }}
      </h2>
      <p class="introductionCard-content">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.introductionCard {
  &-title {
    display: flex;
    justify-content: start;
    align-content: center;
    color: var(--white);
    text-transform: uppercase;
    padding-top: 20px;
    padding-left: 4px;
    padding-right: 4px;
    font-family: var(--fontConcertOne);
    line-height: 0.95;
    &--text {
      font-size: 180px;
      @include desktop {
        font-size: 16vw;
      }
    }
  }
  &-narrativeBar {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 500px;
    @include desktop {
      width: 62vw;
    }
  }
  &-narrative {
    font-family: var(--fontConcertOne);
    color: var(--white);
    letter-spacing: 0.5px;
    font-size: 32px;
    font-style: italic;
    line-height: 1.1;
    @include desktop {
      font-size: 4vw;
    }
  }
  &-content {
    color: var(--low-contrast-text);
    letter-spacing: 0.3px;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    @include desktop {
      font-size: 2vw;
    }
  }
}
</style>
