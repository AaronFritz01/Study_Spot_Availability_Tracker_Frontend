<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="gold-stripe"></div>
    <div class="black-stripe">
      <img
        alt="Purdue logo"
        class="logo"
        src="../src/assets/Purdue University Logo.svg"
      />
    </div>
    <div class="wrapper">
      <nav class="main-nav">
        <RouterLink style="text-decoration: none; color: inherit" to="/"
          >Home</RouterLink
        >
        <RouterLink style="text-decoration: none; color: inherit" to="/About"
          >About</RouterLink
        >
        <RouterLink
          style="text-decoration: none; color: inherit"
          to="/Campus_Map"
          >Campus Map</RouterLink
        >
        <RouterLink
          style="text-decoration: none; color: inherit"
          to="/Study_Spaces"
          >Study Spaces</RouterLink
        >
        <RouterLink
          style="text-decoration: none; color: inherit"
          to="/Statistics"
          >Statistics</RouterLink
        >
        <RouterLink style="text-decoration: none; color: inherit" to="/Contact"
          >Contact</RouterLink
        >
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
.gold-stripe {
  background-color: #6d5631;
  height: 25px;
}
.main-nav {
  background-color: #1e2a32;
  color: white;
}
.black-stripe {
  background-color: black;
}
</style>
