<script setup lang="ts">
import { computed } from "vue";

interface Props {
  text: string;
  direction: "top" | "bottom";
}

const props = withDefaults(defineProps<Props>(), {
  direction: "bottom"
});

const animationDelay = 50;
const animationDuration = 300;

const fontsAry = computed(() => {
  return props.text.split("");
});
</script>

<template>
  <div class="font-wrap">
    <span
      class="font-item"
      v-for="(font, index) in fontsAry"
      :key="`${index}-${font}`"
      :class="`font-item-${direction}`"
      :style="`--animation-delay:${index * animationDelay}ms; --animate-duration: ${animationDuration}ms;`"
    >
      {{ font }}
    </span>
  </div>
</template>

<style scoped lang="scss">
.font-wrap {
  display: flex;
  align-items: center;
  overflow-y: hidden;
  font-size: 2rem;
}

.font-item {
  display: flex;
  color: #ffffff;
  &-bottom {
    transform: translateY(-100%);
    animation: slideDown var(--animate-duration) var(--animation-delay) forwards;
  }
  &-top {
    transform: translateY(100%);
    animation: slideUp var(--animate-duration) var(--animation-delay) forwards;
  }
  //transform: translateY(-100%);
}
</style>
