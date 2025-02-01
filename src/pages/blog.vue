<script setup lang="ts">
import IntroductionCard from "@/components/introductionCard.vue";
import FooterChat from "@/components/footerChat.vue";
import ContentCard from "@/components/content-card.vue";
import getImageUrl from "@/utils/getImageUrl";

import { useI18n } from "@/i18n";

// import ArchAnimation from "@/components/arch-animation.vue";

const { t } = useI18n();
</script>

<template>
  <section class="card-pd">
    <introductionCard
      :title="'Hello'"
      :narrative="t('blog.narrative')"
      :content="t('blog.connect')"
      :fontSize="'20vw'"
    />
    <button class="connectBtn">
      {{ t("blog.button") }}
      <img class="connectBtnImg" src="../assets/images/icon/link.png" alt="" />
    </button>
  </section>
  <section class="blog-contentCard">
    <ContentCard
      :title="t('content-card.title.one')"
      :content="t('content-card.content.one')"
      :text="t('content-card.text.one')"
      :date="t('content-card.date.one')"
      :img="getImageUrl('worksDisplay/worksDisplay.jpg')"
    />
    <ContentCard
      :title="t('content-card.title.two')"
      :content="t('content-card.content.two')"
      :text="t('content-card.text.two')"
      :date="t('content-card.date.two')"
      :img="getImageUrl('worksDisplay/worksDisplay.jpg')"
    />
  </section>
  <section><FooterChat :title="'Hello'" /></section>
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
