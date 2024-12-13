<template>
  <div class="business-framework" ref="service">
    <div class="warp">
      <div class="title">
        <div class="quicn">产品与服务</div>
        <div class="quien">BUSINESS OVERVIEW</div>
      </div>
      <div class="content">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="content-item"
          :class="{ 'item-top': index % 2 === 1 }"
        >
          <img class="item-img" :src="item.image" />
          <div class="content-txt">
            <div class="content-txt-table">
              <div class="content-txt-cell">
                <img :src="item.icon" alt="" />
                <h4>{{ item.title }}</h4>
                <span>&nbsp;</span>
                <a :href="item.link">查看详情</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p data-v-5aff6e50 class="chage">
      <span class="el-icon-bottom" style="font-size: 30px"></span>
    </p>
  </div>
</template>
  
  <script>
export default {
  name: "ProductService",
  data() {
    return {
      items: [
        {
          image: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/bus_3.jpg",
          title: "国际工程物资采购",
          link: "/product/mainProducts",
          icon: require("@/assets/img/shop.png"), // 注意这里使用了require来引入本地图片
        },
        {
          image: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/bus_4.jpg",
          title: "“一站式”供应链服务",
          link: "/product/supplyChain",
          icon: require("@/assets/img/section4-icon02.png"), // 注意这里使用了require来引入本地图片
        },
        {
          image: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/bus_2.jpg",
          title: "全品类运输服务",
          link: "/product/transport",
          icon: require("../assets/img/car2.png"), // 注意这里使用了require来引入本地图片
        },
      ],
    };
  },
  props: {
    currentNavIndex: {
      type: Number,
      required: true,
    },
  },
  watch: {
    currentNavIndex(newIndex) {
      if (newIndex === 2) {
        this.$refs.service.classList.add("slide-in"); // Add animation class
      } else {
        this.$refs.service.classList.remove("slide-in"); // Remove animation class
      }
    },
  },
};
</script>
  
  <style lang="scss" scoped >
.business-framework {
  background-size: cover;
  background-position: center;
  padding: 60px 20px;
  max-height: 780px;

  .warp {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .title {
    text-align: center;
    margin-bottom: 100px;
  }

  .quicn {
    font-size: 40px;
    font-weight: bold;
    color: #1d1d1d;
  }

  .quien {
    font-size: 24px;
    color: #666;
    margin-top: 8px;
  }

  .content {
    display: flex;
    max-width: 1200px;
    max-height: 600px;
    margin-top: 60px;
  }
  .content-item {
    position: relative;
    max-width: 350px;
    height: 500px;
    margin: 0 auto 40px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    .item-img {
      width: 100%;
      height: 100%;
    }
  }
  .item-top {
    margin-top: -60px;
  }
  .content-txt {
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    height: 100%;
    padding: 0 5%;
    text-align: center;
    z-index: 3;
    overflow: hidden;
  }

  .content-txt-table {
    width: 100%;
    height: 100%;
    display: table;
    position: relative;
  }

  .content-txt-cell {
    display: table-cell;
    vertical-align: middle;
    position: relative;
  }

  .content-txt-cell img {
    width: 60px;
    margin: 20px auto 0;
    transition: transform 0.5s ease; /* Smooth transition for moving up */
  }

  .content-txt-cell h4 {
    font-size: 28px;
    margin-top: 15px;
    color: #fff;
    transition: transform 0.5s ease; /* Smooth transition for moving up */
  }

  .content-txt-cell a {
    opacity: 0;
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    width: 118px;
    height: 38px;
    line-height: 38px;
    border: 2px solid #fff;
    margin: 10% auto;
    text-align: center;
    transition: all 0.5s;
  }
  .content-txt-cell:hover::after {
    opacity: 1;
  }

  .content-txt-cell:hover img {
    transform: translateY(-30px); /* Move image up */
  }

  .content-txt-cell:hover h4 {
    transform: translateY(-30px); /* Move heading up */
  }

  .content-txt-cell:hover a {
    opacity: 1;
    transform: translateY(0);
    z-index: 3;
  }
}

// .business-framework {
//   position: relative;
//   opacity: 0; /* 初始状态为透明 */
//   transform: translateY(100%); /* 初始位置在左边 */
//   transition: opacity 1s ease-in-out, transform 1s ease-in-out;
// }

// .business-framework.slide-in {
//   opacity: 1; /* 动画完成后变为不透明 */
//   transform: translateY(0); /* 向右滑动到中心 */
// }
</style>
  