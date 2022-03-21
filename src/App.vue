<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

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
