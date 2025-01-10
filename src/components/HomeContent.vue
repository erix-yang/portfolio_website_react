<script setup>
import {ref} from 'vue';
import {useI18n} from "vue-i18n";

const {t, locale} = useI18n()

const mouseX = ref(0);
const mouseY = ref(0);

// 监听鼠标移动事件
const handleMouseMove = (event) => {
  mouseX.value = event.clientX;
  mouseY.value = event.clientY;
};

// 计算头像的偏移量
const getTransformStyle = () => {
  const offsetX = (mouseX.value - window.innerWidth / 2) / 20; // 控制偏移的强度
  const offsetY = (mouseY.value - window.innerHeight / 2) / 20;
  return {
    transform: `translate(${offsetX}px, ${offsetY}px)`,
  };
};
</script>

<template>
  <div class="container" @mousemove="handleMouseMove">
    <div class="left-side">
      <h1>{{ t('homeContent.name') }} 【 2001.01 】 </h1>
      <p class="profession">{{ t('homeContent.profession') }}</p>
      <p class="description">
        {{ t('homeContent.description[0]') }} | {{ t('homeContent.description[1]') }} |
        {{ t('homeContent.description[2]') }} | {{ t('homeContent.description[3]') }}
      </p>
      <p class="hobbies">{{ t('homeContent.hobbies') }}</p>
      <p class="skills">Java & Python & Rust & Vue & React & C</p>
      <p class="pursuit1">
        {{ t('homeContent.pursuit1[0]') }} <strong style="color: #ff4081; font-size: 20px; font-weight: bold">
        {{ t('homeContent.pursuit1[1]') }}
      </strong>
      </p>
      <p class="pursuit2">
        {{ t('homeContent.pursuit2[0]') }}| {{ t('homeContent.pursuit2[1]') }} |
        {{ t('homeContent.pursuit2[2]') }} | {{ t('homeContent.pursuit2[3]') }} |
        {{ t('homeContent.pursuit2[4]') }} | {{ t('homeContent.pursuit2[5]') }}
      </p>
      <div class="social-links">
        <button class="social-btn" @click="window.open('https://twitter.com', '_blank')">
          {{ t('homeContent.socialLinks.wechat') }}
        </button>
        <button class="social-btn" @click="window.open('https://github.com', '_blank')">QQ</button>
        <button class="social-btn" @click="window.open('https://linkedin.com', '_blank')">CSDN</button>
      </div>
    </div>
    <div class="right-side">
      <!-- 动态绑定transform样式 -->
      <img :style="getTransformStyle()" alt="头像" class="avatar" src="../assets/SolarSystemHead.png"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 35px 120px;
  height: 75vh;
}

.left-side {
  max-width: 50%;
}

.left-side h1 {
  font-size: 46px;
  margin-bottom: 40px;
  font-weight: bold;
}

.profession {
  font-size: 18px;
  margin-bottom: 25px;
}

.description {
  font-size: 21px;
  margin-bottom: 25px;
}

.hobbies {
  font-size: 16px;
  margin-bottom: 10px;
}

.skills {
  font-size: 16px;
  margin-bottom: 25px;
}

.pursuit1 {
  font-size: 16px;
  margin-bottom: 25px;
}

.pursuit2 {
  font-size: 14px;
  margin-bottom: 40px;
}

.social-links {
  margin-top: 20px;
}

.social-btn {
  width: 100px;
  height: 40px;
  background-color: transparent;
  border: 1px solid #fff;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  border-radius: 4px;
  padding: 0;
  text-align: center;
  margin-right: 15px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.social-btn:hover {
  background-color: #ff4081;
  border-color: #ff4081;
}

.right-side {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  width: 40vh;
  height: 40vh;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.1s ease;
}
</style>
