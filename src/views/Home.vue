<template>
  <div class="home" v-loading="loading">
    <!-- 页面竖型轮播图 -->
    <swiper
      id="swiperBox"
      v-bind:options="swiperOption"
      ref="mySwiper"
      @slideChange="onSlideChange"
    >
      <!-- 欢迎页 -->
      <swiper-slide class="swiper-slide slide-one">
        <Welcome></Welcome>
      </swiper-slide>
      <!-- 关于中成 -->
      <swiper-slide class="swiper-slide slide-two">
        <AboutCompany :currentNavIndex="currentNavIndex"></AboutCompany>
      </swiper-slide>
      <!-- 产品服务 -->
      <swiper-slide class="swiper-slide slide-three">
        <ProductService :currentNavIndex="currentNavIndex"></ProductService>
      </swiper-slide>
      <!-- 项目案例 -->
      <swiper-slide class="swiper-slide slide-four">
        <ProjectCase :currentNavIndex="currentNavIndex"></ProjectCase>
      </swiper-slide>
      <!-- <swiper-slide class="swiper-slide slide-five">
        <Footer></Footer>
      </swiper-slide> -->
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
          <div class="fp-tooltip right">产品服务</div>
        </li>
        <li>
          <a
            href="#"
            :class="{ active: currentNavIndex === 3 }"
            @click="navigateToSlide(3)"
            ><span></span
          ></a>
          <div class="fp-tooltip right">项目案例</div>
        </li>
        <!-- <li>
          <a
            href="#"
            :class="{ active: currentNavIndex === 4 }"
            @click="navigateToSlide(4)"
            ><span></span
          ></a>
          <div class="fp-tooltip right">联系我们</div>
        </li> -->
      </ul>
    </div>
  </div>
</template>
 
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import AboutCompany from "../components/AboutCompany.vue";
import ProductService from "../components/ProductService";
import Welcome from "../components/Welcome.vue";
import ProjectCase from "../components/ProjectCase.vue";
// import Footer from "../components/Footer.vue";
export default {
  name: "HelloWorld",
  components: {
    swiper,
    swiperSlide,
    ProductService,
    AboutCompany,
    Welcome,
    ProjectCase,
  },
  data() {
    return {
      showText: true, // 控制关于我们标题是否显示
      showContent: true, // 控制公司介绍内容是否显示
      show: true,
      currentNavIndex: 0, // 当前激活的导航索引
      loading: true,
      isLun: 0,
      caseList: [],
      newsList: [],
      swiperOption: {
        speed: 1000, // 设置过渡持续时间为 1000 毫秒（1 秒）
        effect: "slide", // 使用 'slide'（滑动）效果，'fade'（淡入淡出）或者 'cube'（立方体）等效果也可以
        easing: "ease-in-out", // 设置缓动函数，使过渡更加平滑
        // loop: true, // 启用循环播放
        // autoplay: {
        //   delay: 10000, // 每个切换的时间间隔，单位为毫秒
        // },
        simulateTouch: false, // 禁止鼠标拖动
        notNextTick: true, //notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        direction: "vertical", //水平方向移动
        // grabCursor: true, //鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
        setWrapperSize: true, //Swiper使用flexbox布局(display: flex)，开启这个设定会在Wrapper上添加等于slides相加的宽或高，在对flexbox布局的支持不是很好的浏览器中可能需要用到。
        autoHeight: true, //自动高度。设置为true时，wrapper和container会随着当前slide的高度而发生变化
        slidesPerView: 1, //设置slider容器能够同时显示的slides数量(carousel模式)。可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。loop模式下如果设置为'auto'还需要设置另外一个参数loopedSlides。
        mousewheel: true, //开启鼠标滚轮控制Swiper切换。可设置鼠标选项，默认值false
        mousewheelControl: true, //同上
        height: window.innerHeight - 40, // 高度设置，占满设备高度
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
    // 监听滑动切换事件，返回swiper对象
    onSlideChange() {
      const swiper = this.$refs.mySwiper.swiper;
      const activeIndex = swiper.activeIndex; // 获取实际显示的滑块索引（不受循环影响）
      this.updateNavActive(activeIndex);
    },
    navigateToSlide(index) {
      const swiper = this.$refs.mySwiper.swiper;
      swiper.slideTo(index); // 使用 swiper 实例方法跳转到对应的滑块
      this.updateNavActive(index); // 更新导航栏的高亮状态
    },
    updateNavActive(index) {
      this.currentNavIndex = index; // 更新导航栏按钮的高亮状态
    },

    mouseScroll() {
      var rolladd = function (e) {
        var delta = 0;
        e = e || window.event; // 兼容不同浏览器
        // 获取滚轮滚动的距离
        delta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        // 获取 Swiper 实例
        var swiper = document.querySelector(".swiper-container").swiper;
        // 判断滚动方向
        if (delta < 0) {
          // 判断是否是最后一页
          if (swiper.activeIndex === swiper.slides.length - 1) {
            // 如果是最后一页，设置isLun为true，表示可以跳回第一页
            if (this.isLun >= 6) {
              // 如果isLun为true，表示鼠标滚动到最后一页后滑动，跳转回第一页
              swiper.slideTo(0);
              this.isLun = false; // 滑动完毕后，重置isLun
            }
          }
        } else {
          // 滚动向上时，不进行任何操作
          this.isLun = 0;
        }
        // 判断是否到达最后一页
        if (swiper.activeIndex === swiper.slides.length - 1) {
          this.isLun++; // 当到达最后一页时，允许跳回第一页
        }
      };

      // 兼容不同浏览器的鼠标滚轮事件
      if (window.netscape) {
        document.addEventListener("DOMMouseScroll", rolladd, true); // Firefox
      } else {
        document.onmousewheel = rolladd; // 其他浏览器
      }
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
    this.loading = false;
    // 初始化滚轮事件监听
    this.mouseScroll();
  },
  beforeDestroy() {
    // 在组件销毁前移除滚轮事件监听
    if (window.netscape) {
      document.removeEventListener("DOMMouseScroll", this.mouseScroll, true);
    } else {
      document.onmousewheel = null;
    }
  },
};
</script>
 
<style lang="scss" scoped>
/* .el-header {
  position: absolute;
} */
// .swiper-wrapper {
//   height: 4.465rem !important;
// }
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
}

// .swiper-slide:nth-child(2n) {
//   background: skyblue;
// }
// .swiper-slide:nth-child(2n-1) {
//   background: seashell;
// }
.slide-one {
  background: url(https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/home_1.jpg)
    no-repeat center;
  background-size: cover;
}
.slide-two {
  background: url(https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/home_2.jpg)
    no-repeat center;
  background-size: cover;
}
.slide-three {
  background: url(https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/home_2.jpg)
    no-repeat center;
  background-size: cover;
}
.slide-four {
  background: url(https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/home_2.jpg)
    no-repeat center;
  background-size: cover;
}
.slide-five {
  background: white;
  background-size: cover;
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