<script setup>
import SplashScreenSection from "../components/SplashScreenSection.vue";
import OptionCardSection from "../components/OptionCardSection.vue";
import AnnouncmentsSection from "../components/AnnouncmentsSection.vue";
import AboutSection from "../components/AboutSection.vue";
import ContactSection from "../components/ContactSection.vue";
</script>

<template>
  <main>
    <SplashScreenSection />
    <OptionCardSection />
    <AnnouncmentsSection />
    <AboutSection />
    <ContactSection />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
