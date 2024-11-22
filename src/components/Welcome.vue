<template>
  <div class="Welcome">
    <swiper
      ref="Swiper"
      id="swiper-wc"
      v-bind:options="swiperOption"
      style="width: 100%; height: 100%"
    >
      <!-- Swiper项 -->
      <swiper-slide v-for="(item, index) in imageList" :key="index">
        <div class="welcome">
          <img :src="item.url" class="carousel-image" />
          <div class="wc-text">
            <div class="page">
              <h3>中成深圳</h3> 
              <p>ZCTS SHENZHEN</p>
            </div>
            <p class="slogan">聚焦客户需求 服务成就价值</p>
            <h2 class="toptitlesub"></h2>
            <div class="toptitleup" style="transform: scale(0.5)">
              <div class="mouse" data-v-5aff6e40></div>
            </div>
            <p data-v-5aff6e40 class="mousep">鼠标滚动</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- <div class="wc-text">
      <div class="page">
        <h3>中成深圳</h3>
        <p>ZCTS SHENZHEN</p>
      </div>
      <p class="slogan">聚焦客户需求 服务成就价值</p>
      <h2 class="toptitlesub"></h2>
      <div class="toptitleup" style="transform: scale(0.5)">
        <div class="mouse" data-v-5aff6e40></div>
      </div>
      <p data-v-5aff6e40 class="mousep">鼠标滚动</p>
    </div> -->
  </div>
</template>
  
  <script>
// import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "Welcome",
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,  // 每次只显示一张
        spaceBetween: 0,  // 每个滑动项之间的间隔
        loop: true,  // 启用循环模式
        autoplay: {
          delay: 5000,  // 自动播放，间隔10秒
        },
        autoHeight: true,
        effect: 'slide',  // 水平滑动效果
        // height: window.innerHeight - 280, // 高度设置，占满设备高度
      },
      imageList: [
        {
          url: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/home_1.jpg",
          title: "标题1",
          description: "描述1",
        },
        {
          url: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E9%A6%96%E9%A1%B5.png",
          title: "标题2",
          description: "描述2",
        },
        {
          url: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/home_5.png",
          title: "标题3",
          description: "描述3",
        },
      ],
    };
  },
  mounted() {
    this.fetchImages(); // 组件挂载时获取图片
  },
  methods: {
    async fetchImages() {
      // try {
      //   // 替换为实际的后端接口地址
      //   const response = await axios.get('https://your-api-endpoint.com/images');
      //   this.imageList = response.data; // 假设后端返回的数组对象有 `url` 字段
      // } catch (error) {
      //   console.error('获取图片失败:', error);
      // }
    },
  },
};
</script>
  
  <style lang="scss" scoped >
// .Welcome {
//   height: 9.465rem;//9.465rem
// }

.welcome {
  position: relative;
  height: 100%;
  img {
    width: 100%;
    height: 94.1vh;
    object-fit: cover;
  }

  .wc-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
  }
}

// .el-carousel {
//   height: 93.5vh;
// }

// .el-carousel__container {
//     height: 7.465rem !important;
// }

// .el-carousel-item {
//   height: 7.465rem; /* Full viewport height */
// }
.page {
  text-align: center;
  height: 120px;
  overflow: hidden;
  margin-bottom: 20px;
  h3,
  p {
    font-size: 40px;
    font-weight: 400;
    color: #fff;
  }
}
.slogan {
  text-align: center;
  font-size: 50px;
  color: #fff;
  padding: 30px 0;

  .toptitlesub {
    animation-name: bounceInLeft;
    animation-duration: 1s;
    font-weight: 400;
  }
}

.mouse[data-v-5aff6e40] {
  margin: 0 auto;
  background: #4e5559
    linear-gradient(transparent, transparent 50%, #fff 0, #fff);
  position: relative;
  width: 52px;
  height: 88px;
  background-size: 100% 100%;
  border-radius: 100px;
  background-size: 225%;
  animation: colorSlide-data-v-5aff6e40 5s linear infinite,
    nudgeMouse-data-v-5aff6e40 5s ease-out infinite;
}

.mouse[data-v-5aff6e40]:before {
  content: "";
  width: 46px;
  height: 82px;
  background-color: #222a30;
  border-radius: 100px;
  position: absolute;
  top: 3px;
  left: 3px;
}

.mouse[data-v-5aff6e40]:after {
  content: "";
  background-color: #fff;
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
  top: 35px;
  left: 21px;
  animation: trackBallSlide-data-v-5aff6e40 5s linear infinite;
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
  