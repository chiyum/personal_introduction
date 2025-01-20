<script setup lang="ts">
import SlideControl from "@/components/slide-control.vue";
</script>

<template>
  <div class="home">
    <div class="home-direction"></div>
    <div class="home-content-selected"></div>
    <div class="home-content-options">
      <slide-control />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/home";
</style>
