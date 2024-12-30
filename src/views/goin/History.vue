<template>
  <div class="history">
    <!-- 发展历程 -->
    <div class="content-course">
      <div class="top">
        <h3>{{ $t('historyAndEvolution') }}</h3>
        <div class="underline"></div>
      </div>
      <div class="course-time">
        <swiper v-bind:options="swiperOption" ref="mySwiper">
          <swiper-slide v-for="(item, index) in courseList" :key="index">
            <div class="time-show">
              <div
                class="time-show-item"
                v-for="(courseOne, one) in item"
                :key="one"
              >
                <!-- 顶部装饰 -->
                <div
                  class="item-top"
                  :class="{ 'order-top': one % 2 === 1 }"
                ></div>

                <!-- 分割线 -->
                <el-divider>
                  <i class="el-icon-mobile-phone"></i>
                </el-divider>

                <!-- 底部内容 -->
                <div class="item-bottom" :class="{ order: one % 2 === 1 }">
                  <div class="item-bottom-content">
                    <img :src="courseOne.image" alt="" />
                    <p class="p1">{{ courseOne.content }}</p>
                    <p class="p2">{{ courseOne.year }}</p>
                    <!-- 指向三角形 -->
                    <div
                      :class="{
                        line_first_bom: one % 2 === 1,
                        'line-first': one % 2 === 0,
                      }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>

          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { getHistory } from "@/api/history.js";
export default {
  components: {
    swiper,
    swiperSlide,
  },
  data() {
    return {
      courseList: [
        [
          {
            id: 10,
            year: "1959年",
            content:
              "经周恩来总理批准而设立，作为中国政府的专门机构，统一组织实施国家对外经济技术援助项目。对外使用COMPLANT作为统一的品牌标识。",
            image: "",
          },
          {
            Id: 11,
            Year: "1993年",
            Content:
              "上正式更名中国成套设备进出口（集团）总公司，经国务院批准改组为综合型外贸企业集团。",
            img: "",
          },
          {
            Id: 12,
            Year: "1993年",
            Content:
              "伴随集团总公司改组，集团总公司的运输部成立全民所有制运输企业，负责运输业务板块。",
            img: "",
          },
        ],
        [
          {
            Id: 14,
            Year: "2000年",
            Content:
              "集团总公司对运输公司和其地方运输子公司统一改制，其中运输公司成立为内部职工持股的有限责任公司。",
            img: "",
          },
          {
            Id: 15,
            Year: "2001-2003年",
            Content:
              "分别完成天津、上海、大连、广州、山东、湖北、云南、丹东等分公司的改制及更名注册工作。",
            img: "",
          },
          {
            Id: 17,
            Year: "2005年",
            Content:
              "运输公司将深圳分公司、广州分公司注销并进行资产重组，成立中成国际运输深圳有限公司。作为其在华南口岸的服务窗口，提供国际工程项目综合服务。",
            img: "",
          },
        ],
        [
          {
            Id: 18,
            Year: "2006年",
            Content: "中成深圳成立广州分公司，作为物流板块的操作中心。",
            img: "",
          },
          {
            Id: 16,
            Year: "2009年",
            Content:
              "集团总公司整体并入国家开发投资公司，成为国投集团的全资子公司。",
            img: "",
          },
          {
            Id: 18,
            Year: "2017年",
            Content: "完成改制，更名为中国成套设备进出口集团有限公司。",
            img: "",
          },
        ],
        [
          {
            Id: 18,
            Year: "2020年",
            Content:
              "中成深圳成立全资子公司-中成（广东）供应链管理有限公司，作为物资采购和供应中心。",
            img: "",
          },
          {
            Id: 19,
            Year: "2022年",
            Content:
              "中成深圳成立全资子公司-广东中成物流科技有限公司，以信息化为基础，全面升级工程项目物流综合服务。",
            img: "",
          },
          {
            Id: 20,
            Year: "2022年",
            Content:
              "中成深圳投资成立广东中州实业发展有限公司，提供专业的管材定制化生产销售服务。",
            img: "",
          },
        ],
      ],
      swiperOption: {
        speed: 1000, // 设置过渡持续时间为 1000 毫秒（1 秒）
        effect: "slide", // 使用 'slide'（滑动）效果，'fade'（淡入淡出）或者 'cube'（立方体）等效果也可以
        easing: "ease-in-out", // 设置缓动函数，使过渡更加平滑
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getHistory().then((response) => {
        this.courseList = response.data;
        const chunkedArray = Array.from(
          { length: Math.ceil(this.courseList.length / 3) }, // 计算总共需要多少组
          (v, i) => this.courseList.slice(i * 3, i * 3 + 3) // 每组取三个元素
        );
        console.log(chunkedArray);
        this.courseList = chunkedArray;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
//发展历程
.content-course {
  padding: 50px 0;
  animation: moveUp 0.8s ease-out forwards;

  .course-time {
    width: 100%;
    height: 1000px;
    margin: 20px auto;
    background: url(https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/his_bg.jpg)
      no-repeat center;
    background-size: cover;

    .swiper-container {
      width: 90%;
      height: 100%;
    }

    .time-show {
      width: 90%;
      height: 100%;
      margin: 0 auto;
      display: flex;

      .time-show-item {
        width: 550px;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;

        .item-top,
        .item-bottom {
          height: 550px;
        }

        .item-bottom {
          .item-bottom-content {
            position: relative;
            margin-top: 50px;
            border-radius: 15px;
            box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25); /* 边框阴影 */
            display: flex; /* 使用 flex 布局 */
            flex-direction: column; /* 垂直排列内容 */
            justify-content: center; /* 垂直居中 */
            align-items: center; /* 水平居中 */
            background-color: #f9f9f9; /* 背景色，增强视觉效果 */
            padding: 20px; /* 内边距 */

            img {
              width: 300px;
              height: 180px;
              border-radius: 15px; /* 圆角 */
              margin-bottom: 10px; /* 图片与文字的间距 */
              object-fit: cover; /* 确保图片比例合适 */
              border: 3px solid #1667a0; /* 图片外边框 */
            }

            .p1 {
              font-size: 16px;
              color: #333; /* 深灰色字体 */
              line-height: 1.5; /* 行间距 */
              margin: 5px 0; /* 间距控制 */
              // max-width: 200px; /* 限制文字宽度与图片宽度一致 */
              // word-wrap: break-word; /* 自动换行 */
              // overflow: hidden; /* 超出部分隐藏 */
            }

            .p2 {
              margin-bottom: 10px;
              font-weight: bold; /* 加粗年份文字 */
              font-size: 18px;
              color: #1667a0; /* 高亮颜色 */
            }

            .line-first {
              position: absolute;
              top: -10px;
              left: 45%;
              width: 20px; /* 正方形大小 */
              height: 20px;
              background-color: #f9f9f9; /* 三角形颜色 */
              margin: 0 auto;
              transform: rotate(45deg); /* 旋转45度 */
            }
            .line_first_bom {
              position: absolute;
              width: 20px; /* 正方形大小 */
              height: 20px;
              background-color: #f9f9f9; /* 三角形颜色 */
              margin: 0 auto;
              transform: rotate(45deg); /* 旋转45度 */
              bottom: -10px;
              left: 47%;
            }
          }
        }
      }
    }
  }
}

.top {
  h3,
  p {
    text-align: left;
    font-size: 25px;
    color: #024190;
    font-weight: bold;
    padding: 10px 0;
    margin-left: 120px;
  }

  h3 {
    font-size: 30px;
  }

  p {
    font-size: 17px;
    font-weight: normal;
  }
}

.order {
  order: -1;
}

.order-top {
  order: 1;
}

.el-divider--horizontal {
  margin: 1px 0;
}

.el-divider {
  background-color: #024190;
  height: 3px;

  .el-icon-mobile-phone:before {
    content: none !important;
  }

  .el-divider__text {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    padding: 0;
    color: #fff;
    border: 2px solid #024190;
  }

  &-active {
    background-color: #024190;
  }
}
</style>