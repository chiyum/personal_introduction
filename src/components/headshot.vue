<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const headshot = ref<HTMLElement | null>(null);
const content = ref<HTMLElement | null>(null);

// 初始化transform值
const headshotTransform = ref({
  rotateX: 0,
  rotateY: 0,
  rotateZ: 0
});

const contentTransform = ref({
  translateX: 0,
  translateY: 0
});

// 處理滑鼠移動
const handleMouseMove = (event: MouseEvent) => {
  if (!headshot.value) return;

  // 獲取元素的位置和尺寸
  const rect = headshot.value.getBoundingClientRect();

  // 計算滑鼠在元素內的相對位置 (0-1)
  const x = (event.clientX - rect.left) / rect.width;
  const y = (event.clientY - rect.top) / rect.height;

  // 計算headshot的旋轉角度
  // x: 0 -> -30deg, 1 -> 30deg
  // y: 0 -> -10deg, 1 -> 10deg
  headshotTransform.value = {
    rotateX: (y - 0.5) * -20, // -10 to 10
    rotateY: (x - 0.5) * 60, // -30 to 30
    rotateZ: (x - 0.5) * 2 // -1 to 1
  };

  // 計算content的位移
  // x: -50% to 50%
  // y: -12% to 12%
  contentTransform.value = {
    translateX: (x - 0.5) * 100, // -50% to 50%
    translateY: (y - 0.5) * 24 // -12% to 12%
  };
};

// 重置transform值
const handleMouseLeave = () => {
  headshotTransform.value = {
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
  };
  contentTransform.value = {
    translateX: 0,
    translateY: 0
  };
};

onMounted(() => {
  if (headshot.value) {
    headshot.value.addEventListener("mousemove", handleMouseMove);
    headshot.value.addEventListener("mouseleave", handleMouseLeave);
  }
});

onUnmounted(() => {
  if (headshot.value) {
    headshot.value.removeEventListener("mousemove", handleMouseMove);
    headshot.value.removeEventListener("mouseleave", handleMouseLeave);
  }
});
</script>

<template>
  <div
    ref="headshot"
    class="headshot"
    :style="{
      transform: `translate3d(0px, 0%, 0px) scale3d(1, 1, 1)
                 rotateX(${headshotTransform.rotateX}deg)
                 rotateY(${headshotTransform.rotateY}deg)
                 rotateZ(${headshotTransform.rotateZ}deg)
                 skew(0deg, 0deg)`
    }"
  >
    <div
      ref="content"
      class="headshot-content"
      :style="{
        transform: `translate3d(${contentTransform.translateX}%, ${contentTransform.translateY}%, 0px)
                   scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
                   skew(0deg, 0deg)`
      }"
    >
      <slot>
        <q-img src="@/assets/images/mock-bg.png"></q-img>
      </slot>
    </div>
  </div>
</template>

<style lang="scss">
.headshot {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  will-change: transform;
  transition: transform 0.1s ease-out;

  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    transform-style: preserve-3d;
    will-change: transform;
    transition: transform 0.1s ease-out;
  }
}
</style>
