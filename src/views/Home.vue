<template>
  <div class="home" v-loading="loading">
    <!-- 页面竖型轮播图 -->
    <swiper
      id="swiperBox"
      v-bind:options="swiperOption"
      ref="mySwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide class="swiper-slide slide-one">
        <div class="page">
          <h3 style="margin-bottom: 20px">中成深圳</h3>
          <p>ZCTS SHENZHEN</p>
        </div>
        <p class="slogan">聚焦客户需求 服务成就价值</p>
        <h2 class="toptitlesub"></h2>
        <div class="toptitleup" style="transform: scale(0.5)">
          <div class="mouse" data-v-5aff6e40></div>
        </div>
        <p data-v-5aff6e40 class="mousep">鼠标滚动</p>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-two">
        <div class="about-us-container">
          <!-- 关于我们文本 -->
          <transition name="fade-up">
            <h1 v-if="showText" class="about-title">ABOUT US</h1>
          </transition>

          <!-- 公司介绍部分 -->
          <transition name="slide-up">
            <div v-if="showContent" class="company-info">
              <div class="left-img">
                <img src="company-image.jpg" alt="Company Image" />
              </div>
              <div class="right-text">
                <p>公司简介内容...</p>
                <button @click="goToMore" class="more-btn">More</button>
              </div>
            </div>
          </transition>
        </div>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-three">
        <div class="page">
          <h3>经典案例</h3>
          <p>Suecessful Cass</p>
        </div>
        <ul class="case-item">
          <li
            v-for="(item, index) in caseList"
            :key="index"
            v-lazy:background-image="imgserver + item.Img"
          >
            <router-link
              class="text-decoration"
              :to="{ name: 'casedetails', params: { id: item.Id } }"
            >
              <div class="case-item-hover">
                <p class="hover-title">{{ item.Title }}</p>
                <div class="bottom"></div>
                <div class="more">
                  <span>MORE</span>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide class="swiper-slide slide-four">
        <div class="page">
          <h3>最新资讯</h3>
          <p>Latest News</p>
        </div>
        <div class="news-content">
          <div class="news-content-item" v-for="(news, i) in newsList" :key="i">
            <div :style="'order: ' + (i % 2 == 0 ? 1 : 3)">
              <router-link
                class="text-decoration"
                :to="{ name: 'newsdetails', params: { id: news.Id } }"
              >
                <div
                  class="item-img"
                  v-lazy:background-image="imgserver + news.Img"
                ></div>
              </router-link>
            </div>
            <div style="order: 2">
              <el-divider>
                <i class="el-icon-apple"></i>
              </el-divider>
            </div>
            <div class="item-content" :style="'order: ' + (i % 2 == 0 ? 3 : 1)">
              <h3>{{ news.Title }}</h3>
              <p>{{ news.Content }}</p>
              <span>{{ news.CreateTime }}</span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <!-- 导航栏 -->
    <div
      id="fp-nav"
      class="right"
      style="color: rgb(0, 0, 0); margin-top: -33.5px"
    >
      <ul>
        <li>
          <a
            href="#"
            :class="{ active: currentNavIndex === 0 }"
            @click="navigateToSlide(0)"
            ><span></span
          ></a>
          <div class="fp-tooltip right">中成欢迎您</div>
        </li>
        <li>
          <a
            href="#"
            :class="{ active: currentNavIndex === 1 }"
            @click="navigateToSlide(1)"
            ><span></span
          ></a>
          <div class="fp-tooltip right">关于中成</div>
        </li>
        <li>
          <a
            href="#"
            :class="{ active: currentNavIndex === 2 }"
            @click="navigateToSlide(2)"
            ><span></span
          ></a>
          <div class="fp-tooltip right">经典案例</div>
        </li>
        <li>
          <a
            href="#"
            :class="{ active: currentNavIndex === 3 }"
            @click="navigateToSlide(3)"
            ><span></span
          ></a>
          <div class="fp-tooltip right">新闻资讯</div>
        </li>
      </ul>
    </div>
  </div>
</template>
 
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "HelloWorld",
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      showText: true, // 控制关于我们标题是否显示
      showContent: true, // 控制公司介绍内容是否显示
      show: true,
      currentNavIndex: 0, // 当前激活的导航索引
      loading: true,
      caseList: [],
      newsList: [],
      swiperOption: {
        speed: 1000, // 设置过渡持续时间为 1000 毫秒（1 秒）
        effect: "slide", // 使用 'slide'（滑动）效果，'fade'（淡入淡出）或者 'cube'（立方体）等效果也可以
        easing: "ease-in-out", // 设置缓动函数，使过渡更加平滑
        // loop: true, // 启用循环播放
        autoplay: {
          delay: 3000, // 每个切换的时间间隔，单位为毫秒
        },
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
        grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight - 60, // 高度设置，占满设备高度
        resistanceRatio: 0, //抵抗率。边缘抵抗力的大小比例。值越小抵抗越大越难将slide拖离边缘，0时完全无法拖离。本业务需要
        observeParents: true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新

        // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
        //debugger: true,

        // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
        on: {
          //监听滑动切换事件，返回swiper对象
          // slideChange: () => {
          //   let swiper = this.$refs.mySwiper.swiper;
          //   //console.log(swiper.activeIndex); //滑动打印当前索引
          //   if (swiper.activeIndex === this.list.length - 1) {
          //     //到最后一个加载更多数据
          //     let newList = [];
          //     let listLength = this.list.length;
          //     for (let i = 0; i < 10; i++) {
          //       newList.push(listLength + i);
          //     }
          //     this.list = this.list.concat(newList);
          //   }
          // }
        },
      },
    };
  },
  methods: {
    //监听滑动切换事件，返回swiper对象
    onSlideChange() {
      // 获取当前激活的滑块索引
      const activeIndex = this.$refs.mySwiper.swiper.activeIndex;
      this.updateNavActive(activeIndex);
      
    },
    navigateToSlide(index) {
      // 使用 Swiper 实例方法跳转到对应的滑块
      this.$refs.mySwiper.swiper.slideTo(index);
      this.updateNavActive(index); // 更新导航栏的高亮状态
    },
    updateNavActive(index) {
      // 更新导航栏按钮的高亮状态
      this.currentNavIndex = index;
    },

    
    // 点击按钮跳转到更多页面
    goToMore() {
      // 这里可以使用路由跳转，或者弹出更多的内容
    },
  },
  created() {},
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },
  mounted() {

    this.$http
      .all([
        this.$http.get("Cases/GetCasesAll"),
        this.$http.get(`News?type=1&num=3`),
      ])
      .then(
        this.$http.spread((responseCases, responseNews) => {
          this.caseList = responseCases.data;
          this.newsList = responseNews.data;
          this.loading = false;
        })
      );
  },
};
</script>
 
<style lang="scss" scoped>
/* .el-header {
  position: absolute;
} */
.swiper-slide {
  font-size: 24px;
  // text-align: center;
  // line-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  .page {
    text-align: center;
    height: 120px;
    overflow: hidden;
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

  .mousep[data-v-5aff6e40] {
    text-align: center;
    font-weight: 300;
    font-family: Microsoft YaHei, Lantinghei SC, Open Sans, Arial,
      Hiragino Sans GB, STHeiti, WenQuanYi Micro Hei, SimSun, sans-serif;
    letter-spacing: 12px;
    text-indent: 12px;
    color: #fff;
    animation: colorText-data-v-5aff6e40 5s ease-out infinite,
      nudgeText-data-v-5aff6e40 5s ease-out infinite;
  }

  @keyframes colorText-data-v-5aff6e40 {
    21% {
      color: hsla(0, 0%, 100%, 0);
    }
    30% {
      color: #fff;
    }
    51% {
      color: hsla(0, 0%, 100%, 0);
    }
    60% {
      color: #fff;
    }
    81% {
      color: hsla(0, 0%, 100%, 0);
    }
    90% {
      color: #fff;
    }
  }

  @keyframes nudgeText-data-v-5aff6e40 {
    0% {
      transform: translateY(0);
    }
    20% {
      transform: translateY(2px);
    }
    30% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(2px);
    }
    60% {
      transform: translateY(0);
    }
    80% {
      transform: translateY(2px);
    }

    90% {
      transform: translateY(0);
    }
  }
}
//经典案例
.case-item {
  width: 1100px;
  height: 500px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  li {
    width: 330px;
    height: 250px;
    list-style: none;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-origin: content-box;
    margin: 5px;
    position: relative;
    overflow: hidden;

    &:hover {
      .case-item-hover {
        opacity: 1;
        transition: all 0.4s ease-in-out;
      }
    }
  }
}
//经典案例hover
.case-item-hover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  overflow: hidden;
  background-color: rgba(225, 56, 52, 0.7);

  .hover-title {
    height: 50px;
    color: #fff;
    font-size: 18px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    margin-top: 20px;
  }
  .bottom {
    border-bottom: 1px solid #fff;
    width: 60px;
    margin: 0 auto;
  }
  .more {
    width: 90px;
    padding: 5px 5px;
    margin: 0 auto;
    margin-top: 100px;
    border: 2px solid #fff;
    span {
      color: #fff;
      font-size: 20px;
    }
  }
}
// .swiper-slide:nth-child(2n) {
//   background: skyblue;
// }
// .swiper-slide:nth-child(2n-1) {
//   background: seashell;
// }
.slide-one {
  background: url(../assets/img/home_1.jpg) no-repeat center;
  background-size: cover;
}
.slide-two {
  background: url(../assets/img/首页.png) no-repeat center;
  background-size: cover;
}
.slide-three {
  background: url(../assets/img/home_do.jpg) no-repeat center;
  background-size: cover;
}
.slide-four {
  background: url(../assets/img/home_anli.jpg) no-repeat center;
  background-size: cover;
}
//最新资讯
.news-content {
  width: 1240px;
  margin: 0 auto;
  margin-top: 40px;
  display: flex;
  justify-content: center;

  &-item {
    width: 400px;
    display: flex;
    flex-direction: column;

    .item-img {
      width: 360px;
      height: 230px;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      background-origin: content-box;
      margin: 0 auto;
    }
    .el-divider {
      background-color: #fff;
      height: 3px;
      .el-divider__text {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        padding: 0px;
        color: #fff;
      }
    }
    .item-content {
      width: 360px;
      height: 230px;
      margin: 0 auto;
      //border: 1px solid paleturquoise;
      h3 {
        font-size: 22px;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p {
        font-size: 15px;
        height: 80px;
        overflow: hidden;
        margin: 10px 0;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        white-space: normal !important;
        word-wrap: break-word;
      }
      span {
        display: block;
        font-size: 14px;
        text-align: end;
      }
      h3,
      p,
      span {
        color: #fff;
      }
    }
  }
}
.order {
  order: -1;
}
.order-img {
  order: 1;
}

// 导航栏样式
#fp-nav {
  position: fixed;
  z-index: 100;
  top: 50%;
  margin-top: -32px;
  opacity: 1;

  &.right {
    right: 17px;
  }

  ul,
  .fp-slidesNav ul {
    margin: 0;
    padding: 0;
  }

  ul li,
  .fp-slidesNav ul li {
    display: block;
    width: 14px;
    height: 13px;
    margin: 7px;
    position: relative;
  }

  ul li a,
  .fp-slidesNav ul li a {
    display: block;
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;
    cursor: pointer;
    text-decoration: none;

    span {
      position: absolute;
      top: 2px;
      left: 2px;
      width: 8px;
      height: 8px;
      border: 1px solid #000;
      background: transparent;
      border-radius: 50%;
      z-index: 1;
    }

    &.active span {
      background: #333; // 修改为需要的颜色
    }
  }

  .fp-tooltip.right {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    white-space: nowrap;
    background: transparent;
    padding: 5px 10px;
    font-size: 12px;
    color: #000;
    opacity: 0; // 初始透明
    visibility: hidden; // 初始不可见
    transition: opacity 0.3s ease-in-out;
  }
}

#fp-nav ul li a:hover + .fp-tooltip {
  opacity: 1;
  visibility: visible; /* 使其可见 */
}

.move-enter-active,
.move-leave-active {
  transition: transform 1s;
}

.move-enter,
.move-leave-to {
  transform: translateX(-100%);
}


</style>