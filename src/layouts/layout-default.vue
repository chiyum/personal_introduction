<script setup lang="ts">
// import { useI18n } from "@/i18n";

// const { t } = useI18n();
// const author = import.meta.env.VITE_PROJECT_AUTHOR;
</script>

<template>
  <div class="layout-default">
    <div class="layout-default-head">
      <a class="layout-default-head-frontPage">a</a>
      <div class="layout-default-linkBar">
        <a class="layout-default-link">Portfolio</a>
        <a class="layout-default-link">About Me</a>
        <a class="layout-default-link">Blog</a>
        <a class="layout-default-link"
          >Link
          <img
            class="layout-default-img"
            src="../assets/images/icon/link.png"
            alt=""
          />
        </a>
      </div>
      <div class="layout-default-connect">
        <a href="" class="layout-default-link"
          >Let's Connect
          <img
            class="layout-default-img"
            src="../assets/images/icon/link.png"
            alt=""
          />
        </a>
        <a class="layout-default-link connectLink">⋯</a>
      </div>
    </div>
    <div class="layout-default-suspension">
      <div class="layout-default-suspensionBar">
        <p>G</p>
        <p class="layout-default-suspensionBar--text">texttexttext</p>
      </div>
    </div>
    <slot />
  </div>
</template>

<style lang="scss"></style>
