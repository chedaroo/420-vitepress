<script setup lang="ts">
import VPHomeHero from "vitepress/dist/client/theme-default/components/VPHomeHero.vue";
import VPHomeFeatures from "vitepress/dist/client/theme-default/components/VPHomeFeatures.vue";
import VPHomeContent from "vitepress/dist/client/theme-default/components/VPHomeContent.vue";
import { useData } from "vitepress/dist/client/theme-default/composables/data";

const { frontmatter, theme } = useData();
</script>

<template>
  <div
    class="VPHome"
    :class="{
      'external-link-icon-enabled': theme.externalLinkIcon,
    }"
  >
    <slot name="home-hero-before" />
    <VPHomeHero>
      <template #home-hero-info-before
        ><slot name="home-hero-info-before"
      /></template>
      <template #home-hero-info><slot name="home-hero-info" /></template>
      <template #home-hero-info-after
        ><slot name="home-hero-info-after"
      /></template>
      <template #home-hero-actions-after
        ><slot name="home-hero-actions-after"
      /></template>
      <template #home-hero-actions-before-actions
        ><slot name="home-hero-actions-before-actions"
      /></template>
      <template #home-hero-image><slot name="home-hero-image" /></template>
    </VPHomeHero>
    <slot name="home-hero-after" />

    <slot name="home-features-before" />
    <VPHomeFeatures />
    <slot name="home-features-after" />

    <VPHomeContent v-if="frontmatter.markdownStyles !== false">
      <Content />
    </VPHomeContent>
    <Content v-else />
  </div>
</template>

<style scoped>
:global(.VPContent:has(.VPHome)) {
  display: flex;
  flex-direction: column;
  padding: 0;
}

.VPHome .container {
  margin: 0;
}

.VPHome {
  background-image: var(--vp-home-hero-image-background-image);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  margin-bottom: 0;
}
</style>
