<template>
  <div class="Welcome">
    <swiper ref="Swiper" id="swiper-wc" v-bind:options="swiperOption">
      <swiper-slide v-for="(item, index) in imageList" :key="index">
        <div class="welcome">
          <img :src="item.url" class="carousel-image" />
          <div class="wc-text">
            <p class="slogan">{{ item.title }}</p>
            <h2 class="toptitlesub"></h2>
            <div class="toptitleup">
              <div class="mouse" data-v-5aff6e40></div>
            </div>
            <p data-v-5aff6e40 class="mousep">{{ $t("scrollDown") }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
  
  <script>
// import { swiper, swiperSlide } from "vue-awesome-swiper";
import { getAll } from "@/api/welcome";

export default {
  name: "Welcome",
  data() {
    return {
      swiperOption: {
        slidesPerView: 1, // 每次只显示一张
        spaceBetween: 0, // 每个滑动项之间的间隔
        loop: true, // 启用循环模式
        autoplay: {
          delay: 5000, // 自动播放，间隔10秒
        },
        autoHeight: true,
        effect: "slide", // 水平滑动效果
        // height: window.innerHeight - 280, // 高度设置，占满设备高度
      },
      imageList: [],
      // imageList: [],
    };
  },
  mounted() {
    this.fetchImages(); // 组件挂载时获取图片
  },
  methods: {
    fetchImages() {
      getAll().then((response) => {
        this.imageList = response.data;
        // console.log(response);
      });
    },
  },
};
</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/mixins";

/* 启用 rem 转换 */
@include use-rem(true);

.welcome {
  position: relative;
  height: 100%;
  img {
    width: 100%;
    height: 96.1vh; // 视窗单位保留
    object-fit: cover;
  }

  .wc-text {
    width: px2rem(1000);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
  }
}

.toptitleup {
  transform: scale(0.5); // 无单位值保留
  margin-top: px2rem(250);
}

.page {
  text-align: center;
  height: px2rem(120);
  overflow: hidden;
  margin-bottom: px2rem(20);
  h3,
  p {
    font-size: px2rem(40);
    font-weight: 400;
    color: #fff;
  }
}

.slogan {
  text-align: center;
  font-size: px2rem(60);
  font-weight: bold;
  color: #fff;
  padding: px2rem(30) 0;
  margin-bottom: px2rem(50);
  text-shadow: -1px -1px 0 #bebebe, 1px -1px 0 #bebebe, -1px 1px 0 #bebebe, 1px 1px 0 #bebebe; // 阴影模糊半径保留 px

  .toptitlesub {
    animation-name: bounceInLeft;
    animation-duration: 1s; // 时间单位保留
    font-weight: 400;
  }
}

.mousep {
  font-size: px2rem(24);
}

.mouse[data-v-5aff6e40] {
  margin: 0 auto;
  background: #4e5559 linear-gradient(transparent, transparent 50%, #fff 0, #fff);
  position: relative;
  width: px2rem(52);
  height: px2rem(88);
  border-radius: px2rem(100);
  background-size: 225%; // 百分比保留
  animation: colorSlide-data-v-5aff6e40 5s linear infinite, 
             nudgeMouse-data-v-5aff6e40 5s ease-out infinite; // 动画保留

  &:before {
    content: "";
    width: px2rem(46);
    height: px2rem(82);
    background-color: #222a30;
    border-radius: px2rem(100);
    position: absolute;
    top: px2rem(3);
    left: px2rem(3);
  }

  &:after {
    content: "";
    background-color: #fff;
    width: px2rem(10);
    height: px2rem(10);
    border-radius: 100%;
    position: absolute;
    top: px2rem(35);
    left: px2rem(21);
    animation: trackBallSlide-data-v-5aff6e40 5s linear infinite; // 动画保留
  }
}

@keyframes colorSlide-data-v-5aff6e40 {
  0% {
    background-position: 0 100%;
  }
  20% {
    background-position: 0 0;
  }
  21% {
    background-color: #4e5559;
  }
  29.99% {
    background-color: #fff;
    background-position: 0 0;
  }
  30% {
    background-color: #4e5559;
    background-position: 0 100%;
  }
  50% {
    background-position: 0 0;
  }
  51% {
    background-color: #4e5559;
  }
  59.99% {
    background-color: #fff;
    background-position: 0 0;
  }
  60% {
    background-color: #4e5559;
    background-position: 0 100%;
  }
  80% {
    background-position: 0 0;
  }
  81% {
    background-color: #4e5559;
  }
  89.99%,
  100% {
    background-color: #fff;
  }
}

@keyframes nudgeMouse-data-v-5aff6e40 {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(8px);
  }
  30% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(8px);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(8px);
  }
  90% {
    transform: translateY(0);
  }
}

@keyframes trackBallSlide-data-v-5aff6e40 {
  0% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  6% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }
  14% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }
  15%,
  19% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }
  28%,
  29.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  30% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  36% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }
  44% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }
  45%,
  49% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }
  58%,
  59.99% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  60% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
  66% {
    opacity: 1;
    transform: scale(0.9) translateY(5px);
  }
  74% {
    opacity: 0;
    transform: scale(0.4) translateY(40px);
  }
  75%,
  79% {
    opacity: 0;
    transform: scale(0.4) translateY(-20px);
  }
  88%,
  100% {
    opacity: 1;
    transform: scale(1) translateY(-20px);
  }
}
</style>
  