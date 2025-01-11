<script setup>

import Nav from "./components/Nav.vue";
</script>

<template>
  <!-- 整个页面的遮罩层 -->
  <div class="overlay">
    很高兴您访问我的主页😊<br/>
    为了获得更好的浏览体验<br/>
    建议您使用PC端访问本站<br/>
    感谢您的支持🙏<br/>
    📱➡️💻<br/>
  </div>

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
/* 整个页面遮罩层样式 */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #242424;
  z-index: 9999999;
  display: none;
}

/* 媒体查询，当宽度小于1650px时显示遮罩层 */
@media (max-width: 1625px) {
  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    color: #fff;
    padding: 50px;
    line-height: 50px;
    text-align: center;
  }
}

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
