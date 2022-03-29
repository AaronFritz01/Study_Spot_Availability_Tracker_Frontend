<script setup>
import SplashButton from "./templates/SplashButton.vue";
</script>

<template>
  <div class="parent-container">
    <img
      alt="WALC"
      class="logo"
      src="@/assets/WALC_Background_Front_Page.jpg"
    />
    <div class="transparent-rectangle">
      <div class="gold-bar"></div>
      <h2>Welcome</h2>
      <h4>To the Purdue</h4>
      <h4>Study Spot Tracker</h4>
      <div class="button-spacer">
        <SplashButton />
      </div>
    </div>
  </div>
</template>

<style scoped>
.transparent-rectangle {
  background: rgba(0, 0, 0, 0.25);
  position: absolute;
  z-index: 2;
  top: 8em;
  left: 5em;
  width: 60%;
  height: 55%;
}
h2 {
  color: #b19d78;
  position: relative;
  left: 2em;
  top: 0.5em;
  font-size: 4em;
}
h4 {
  color: white;
  position: relative;
  left: 2.5em;
  top: 0.5em;
  font-size: 3em;
  margin: 0.25em;
}
.gold-bar {
  position: absolute;
  background: #b19d78;
  width: 2%;
  height: 80%;

  left: 2em;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.parent-container {
  width: 100%;
  position: relative;
  left: 0;
  font-family: "Helvetica", sans-serif;
}

img {
  position: relative;
  transform: scaleX(-1);
  width: 100%;
  z-index: 1;
}
</style>
