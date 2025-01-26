<script setup lang="ts">
import IntroductionCard from "@/components/introductionCard.vue";
import FooterChat from "@/components/footerChat.vue";
import ContentCard from "@/components/content-card.vue";
import getImageUrl from "@/utils/getImageUrl";

import { useI18n } from "@/i18n";

// import ArchAnimation from "@/components/arch-animation.vue";
const footerTitle = ref(["L", "e", "t", "'s"]);

const { t } = useI18n();
</script>

<template>
  <section class="card-pd">
    <introductionCard
      :title="'Hello'"
      :narrative="t('home.homeNarrative')"
      :content="t('home.homeConnect')"
      :fontSize="'20vw'"
    />
    <button class="connectBtn">
      {{ t("home.connect") }}
      <img class="connectBtnImg" src="../assets/images/icon/link.png" alt="" />
    </button>
  </section>
  <section class="blog-contentCard">
    <ContentCard
      :title="t('content-card.title')"
      :content="t('content-card.content')"
      :text="t('content-card.text')"
      :date="t('content-card.date')"
      :img="getImageUrl('worksDisplay/worksDisplay.jpg')"
    />
    <ContentCard
      :title="t('content-card.title')"
      :content="t('content-card.content')"
      :text="t('content-card.text')"
      :date="t('content-card.date')"
      :img="getImageUrl('worksDisplay/worksDisplay.jpg')"
    />
  </section>
  <section class="card-pd"><FooterChat :title="footerTitle" /></section>
</template>

<style scoped lang="scss">
.blog {
  &-contentCard {
    display: flex;
    flex-direction: column;
    gap: 44px;
    padding: 0 88px;
    @include desktop {
      padding: 0 24px;
    }
  }
}
</style>
