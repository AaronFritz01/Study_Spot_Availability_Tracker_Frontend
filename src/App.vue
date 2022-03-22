<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="black-stripe"><img alt="Purdue logo" class="logo" src="../src/assets/Purdue University Logo.svg" /></div>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/About">About</RouterLink>
        <RouterLink to="/Campus_Map">Campus Map</RouterLink>
        <RouterLink to="/Study_Spaces">Study Spaces</RouterLink>
        <RouterLink to="/Statistics">Statistics</RouterLink>
        <RouterLink to="/Contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>
