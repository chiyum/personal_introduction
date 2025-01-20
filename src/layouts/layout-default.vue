<script setup lang="ts">
import { useI18n } from "@/i18n";

const { t } = useI18n();
const author = import.meta.env.VITE_PROJECT_AUTHOR;
</script>

<template>
  <div class="layout-default">
    <div class="layout-default-title">
      <h1>{{ t("home.title", { author: author }) }}</h1>
      <h2>{{ t("home.description") }}</h2>
    </div>
    <slot />
  </div>
</template>

<style lang="scss"></style>
