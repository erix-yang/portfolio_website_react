<script setup>

import Nav from "./components/Nav.vue";
</script>

<template>
  <div class="header">
    <Nav/>
  </div>
  <div class="main">
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  background-color: #242424;
}

.main {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.content {
  margin-top: 105px;
  height: calc(100vh - 105px);
  overflow-y: scroll;
  box-sizing: border-box;

  /* 隐藏滚动条 */
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.content::-webkit-scrollbar {
  display: none;
}
</style>
