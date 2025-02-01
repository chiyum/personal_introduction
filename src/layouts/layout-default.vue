<script setup lang="ts">
import { useRouter } from "vue-router";
import optionFields from "@/components/optionFields.vue";
import ArchAnimation from "@/components/arch-animation.vue";
const router = useRouter();
const isOptionFields = ref(false);
const showOptionFields = () => {
  isOptionFields.value = true;
  console.log("666666", isOptionFields.value);
};
const toHome = () => {
  router.push("/home");
};
const toAbout = () => {
  router.push("/about");
};
const toBlog = () => {
  router.push("/blog");
};
</script>

<template>
  <div class="layout-default">
    <optionFields v-model="isOptionFields"></optionFields>
    <div class="layout-default-head">
      <a class="layout-default-head-frontPage" @click="toHome">a</a>
      <div class="layout-default-linkBar">
        <arch-animation color="#ffffff" border-radius="8px">
          <a class="layout-default-link" @click="toHome"> Portfolio </a>
        </arch-animation>
        <arch-animation color="#ffffff" border-radius="8px">
          <a class="layout-default-link" @click="toAbout">About Me</a>
        </arch-animation>
        <arch-animation color="#ffffff" border-radius="8px">
          <a class="layout-default-link" @click="toBlog">Blog</a>
        </arch-animation>
        <arch-animation direction="top" color="#ffffff" border-radius="8px">
          <a class="layout-default-link"
            >Link
            <img
              class="layout-default-img"
              src="../assets/images/icon/link.png"
              alt=""
            />
          </a>
        </arch-animation>
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
        <a
          class="layout-default-link connectLink"
          @click.prevent="showOptionFields"
        >
          <q-icon name="more_horiz" color="#ffffff" size="24px"></q-icon>
        </a>
        <teleport to="body" v-if="isOptionFields">
          <a
            class="layout-default-link connectLink layout-default-link--fixed"
            @click.prevent="isOptionFields = false"
          >
            <q-icon name="more_horiz" color="#ffffff" size="24px"></q-icon>
          </a>
        </teleport>
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
