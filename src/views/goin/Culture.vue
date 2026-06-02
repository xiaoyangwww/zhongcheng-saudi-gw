<template>
  <div class="culture">
    <div class="culture-title">
      <div class="top">
        <h3>{{ $t("corporateCulture") }}</h3>
        <div class="underline"></div>
      </div>
    </div>

    <div id="c2-about-us-valuenotion">
      <div class="card-container">
        <div
          class="card-item"
          v-for="(card, index) in cards"
          :key="index"
          @mouseover="hoverCard(index)"
          @mouseleave="leaveCard(index)"
          :class="{ active: hoveredIndex === index }"
        >
          <embed class="title-en" :src="card.embedImg" type="image/svg+xml" />
          <p class="title">{{ card.title }}</p>
          <i class="el-icon-s-opportunity icon" aria-hidden="true"></i>
          <div>
            <span v-for="(text, i) in card.texts" :key="i" class="content"
              >{{ text }}<br
            /></span>
          </div>
          <img
            class="card-image"
            :src="hoveredIndex === index ? card.hoverImage : card.defaultImage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCulture } from "@/api/culture.js";
export default {
  data() {
    return {
      cards: [],
      hoveredIndex: null,
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getCulture().then((res) => {
        this.cards = res.data;
        // console.log(res.data);
      });
    },
    hoverCard(index) {
      this.hoveredIndex = index;
    },
    leaveCard() {
      this.hoveredIndex = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.culture {
  margin-top: 60px;
  animation: moveUp 0.8s ease-out forwards;
}

.culture-title {
  padding: 0 100px;
}

#c2-about-us-valuenotion {
  padding-left: 5%;
  padding-right: 5%;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #f6f6f6;
  min-height: 266.67px;
  position: relative;
  cursor: pointer;
  padding-top: 66.67px;
  padding-bottom: 66.67px;
  background-color: #f6f6f6;
  box-sizing: border-box;
}

#c2-about-us-valuenotion > .card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card-item {
  margin-top: 26.67px;
  background-color: #fff;
  width: 500px;
  height: 550px;
  border-radius: 10.67px;
  width: 30%;
  box-sizing: border-box;
  color: #000000;
  font-size: 40px;
  font-weight: bold;
  line-height: 53.33px;
  padding: 42.67px 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  /* 添加平滑过渡效果 */
  transform: scale(1);
  /* 默认大小 */
}

#c2-about-us-valuenotion > .card-container > .card-item > .title-en {
  margin-bottom: 45px;
  display: block;
  z-index: -1;
  width: 214.056px;
  /* SVG宽度 */
  height: 47.208px;
  /* SVG高度 */
}

.content {
  position: relative; // 确保文字层级高于图片
  z-index: 1;
  font-size: 22px;
  max-width: 70%; // 限制文字宽度，避免被图片挤压
}

.card-item:hover {
  transform: scale(1.05);
  /* 鼠标悬停时放大效果 */
  background-color: #16a085;
  /* 背景变深色 */
  color: #fff;
  /* 字体颜色变白 */
}

.card-item > i {
  color: #16a085;
  transition: color 0.3s ease;
  /* SVG颜色过渡 */
}

.card-item:hover > i {
  color: #ff9900;
  /* 悬停时SVG变白 */
}

.card-item > img {
  position: absolute;
  width: 254px;
  height: 254px;
  right: -10%;
  bottom: -40px;
  transition: opacity 0.3s ease;
  /* 图片透明度过渡 */
  opacity: 1; // 可选：降低透明度避免喧宾夺主
  z-index: 0; // 确保图片在文字下方
}

// RTL 特定样式
[dir="rtl"] {
  .card-item > img {
    position: absolute;
    width: 254px;
    height: 254px;
    right: 40%;
    bottom: -40px;
    transition: opacity 0.3s ease;
    /* 图片透明度过渡 */
    opacity: 1; // 可选：降低透明度避免喧宾夺主
    z-index: 0; // 确保图片在文字下方
  }
}

.card-item:hover > img:last-of-type {
  display: block;
  /* 切换为悬停图片 */
}

.icon {
  width: 25px;
  height: 25px;
  font-size: 26.67px;
  vertical-align: -2.4px;
  fill: currentColor;
  overflow: hidden;
  transition: transform 0.3s ease, color 0.3s ease;
  /* 增加颜色和缩放过渡 */
}

.icon:hover {
  transform: scale(1.2);
  color: yellow;
  /* 悬停时图标稍微变大 */
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 160px, 0);
  }

  100% {
    opacity: 1;
    transform: translateZ(0);
  }
}

@keyframes slideInUp {
  0% {
    transform: translate3d(0, 160px, 0);
    visibility: visible;
  }

  100% {
    transform: translateZ(0);
  }
}

.wow.animate__fadeInUp {
  animation: fadeInUp 1s ease;
}

.wow.animate__slideInUp {
  animation: slideInUp 1s ease;
}

p {
  margin: 16px 0;
}
</style>