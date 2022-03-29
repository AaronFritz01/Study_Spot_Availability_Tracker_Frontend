<script setup>
import ContactSection from "../components/ContactSection.vue";
import LocationSection from "../components/LocationSection.vue";
</script>

<template>
  <main>
      <LocationSection />
    <ContactSection />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
