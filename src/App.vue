<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="gold-stripe"></div>
    <div class="black-stripe"><img alt="Purdue logo" class="logo" src="../src/assets/Purdue University Logo.svg" /></div>
    <div class="wrapper">
      <nav class="main-nav">
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
.gold-stripe{
  background-color: #6D5631;
  height: 25px;
}
.main-nav{
  background-color: #1E2A32;
  color: white;
}
.black-stripe{
  background-color: black;
}
</style>
