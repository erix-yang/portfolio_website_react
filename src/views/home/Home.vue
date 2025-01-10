<script setup>
import Nav from "../../components/Nav.vue";
import HomeContent from "../../components/HomeContent.vue";
</script>

<template>
  <div id="home">
    <Nav/>
    <HomeContent/>
  </div>
</template>

<style scoped>
#home {
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  overflow: hidden;
}
</style>
