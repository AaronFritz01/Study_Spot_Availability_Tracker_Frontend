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

<style scoped>
.gold-stripe {
  background-color: #cfb991;
  height: 30px;
  padding: 0em 2em;
}
.main-nav {
  font-family: "Helvetica", sans-serif;
  background-color: white;
  color: black;
  height: 30px;
  padding: 0.25em 3.25em;
  display: flex;
  justify-content: space-between;
}
.black-stripe {
  background-color: black;
}
img {
  width: 20%;
  padding: 1.25em 3.25em;
}
</style>
