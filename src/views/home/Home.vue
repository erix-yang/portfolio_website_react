<script setup>
import {useI18n} from 'vue-i18n'

const {t, locale} = useI18n()

// 切换语言的方法
const changeLanguage = () => {
  // 切换语言，'en' 或 'zh'
  locale.value = 'en' !== locale.value ? 'en' : 'zh'
}
</script>

<template>
  <div>
    <h1>{{ t('hello') }}</h1>
    <button @click="changeLanguage">Change Language</button>
  </div>
</template>

<style scoped>

</style>
