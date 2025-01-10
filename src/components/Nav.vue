<script setup>
import {useI18n} from 'vue-i18n'

const {t, locale} = useI18n()

// 切换语言的方法
const changeLanguage = () => {
  locale.value = locale.value === 'en' ? 'zh' : 'en'
}
</script>

<template>
  <nav class="navbar">
    <div class="logo">{{ t('logo') }}</div>
    <div class="nav-container">
      <ul class="nav-links">
        <li><a href="#home">{{ t('home') }}</a></li>
        <li><a href="#skills">{{ t('skills') }}</a></li>
        <li><a href="#projects">{{ t('projects') }}</a></li>
        <li><a href="#experience">{{ t('experience') }}</a></li>
        <li><a href="#more">{{ t('more') }}</a></li>
      </ul>
      <div class="language-dropdown">
        <button @click="changeLanguage">{{ t('language') }}</button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 35px 120px;
  width: 100%;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.logo {
  font-weight: bold;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s ease;
}

.logo:hover {
  color: #ff4081;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
}

.nav-links li a {
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  padding: 5px 10px;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.nav-links li a:hover {
  color: #ff4081;
  border-radius: 4px;
  background-color: rgba(255, 64, 129, 0.2);
}

.language-dropdown button {
  width: 80px;
  height: 35px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  padding: 0;
  text-align: center;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.language-dropdown button:hover {
  background-color: #ff4081;
  border-color: #ff4081;
}

</style>
