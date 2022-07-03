<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import CardExample from "./views/CardExample.vue";
import { onMounted, onUpdated, onUnmounted } from "vue";
import { themeChange } from "theme-change";
import SideBar from "./components/SideBar.vue";

onMounted(() => {
  themeChange(false);
});
</script>

<template>
  <div class="flex">
    <SideBar />
    <CardExample />
  </div>
</template>

<style>
@import "@/assets/base.css";

#app {
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-size: 5px 5px;
  background-image: radial-gradient(
    hsla(var(--bc) / 0.2) 0.5px,
    hsla(var(--b2) / 1) 0.5px
  );
}
</style>
