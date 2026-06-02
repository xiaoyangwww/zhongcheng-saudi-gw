<template>
  <div class="advantage-container">
    <div
      v-for="(advantage, index) in advantages"
      :key="index"
      class="advantage-item"
    >
      <div>
        <div class="advantage-item-title">
          <i class="el-icon-s-opportunity"></i>
          <h3>{{ advantage.title }}</h3>
        </div>
        <p>{{ advantage.content }}</p>
      </div>
      <img :src="advantage.image" alt="优势图片" />
    </div>
  </div>
</template>
  
  <script>
import { getOurAdvantages } from "@/api/advantages.js";
export default {
  data() {
    return {
      advantages: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getOurAdvantages().then((res) => {
        this.advantages = res.data;
      });
    },
  },
};
</script>
  
  <style scoped>
/* 优势模块容器样式 */
.advantage-container {
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
}

/* 单个优势项基础样式 */
.advantage-item {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  padding: 30px;
  align-items: center;
  color: #333;
  background-color: #16a085;
  color: white;
}

/* LTR方向下的进入动画 */
.advantage-item:dir(ltr) {
  animation: slideInFromRight 1s ease-in-out;
}

/* RTL方向下的进入动画 */
.advantage-item:dir(rtl) {
  animation: slideInFromLeft 1s ease-in-out;
}

/* 图片样式 */
.advantage-item img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 10px;
}

/* LTR方向下的图片右边距 */
.advantage-item img:dir(ltr) {
  margin-right: 30px;
}

/* RTL方向下的图片左边距 */
.advantage-item img:dir(rtl) {
  margin-left: 30px;
}

/* 标题容器样式 */
.advantage-item-title {
  display: flex;
  align-items: center;
}

/* 图标基础样式 */
.advantage-item-title i {
  color: #ffee03;
  font-size: 24px;
}

/* LTR方向下的图标右边距 */
.advantage-item-title i:dir(ltr) {
  margin-right: 10px;
}

/* RTL方向下的图标左边距 */
.advantage-item-title i:dir(rtl) {
  margin-left: 10px;
}

/* 标题文本样式 */
.advantage-item-title h3 {
  font-size: 24px;
  margin: 0;
}

/* 副标题样式 */
.advantage-item h3 {
  margin-top: 0;
  font-size: 24px;
}

/* 内容段落样式 */
.advantage-item p {
  margin: 0;
  line-height: 1.5;
  font-size: 20px;
  margin: 10px 0;
  text-align: start;
}

/* 从右侧滑入的动画定义 */
@keyframes slideInFromRight {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

/* 从左侧滑入的动画定义 */
@keyframes slideInFromLeft {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

/* RTL语言特定样式 */
[dir="rtl"] .advantage-item {
  text-align: right;
}
</style>