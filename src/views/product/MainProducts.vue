<template>
  <div class="mainProducts">
    <div class="title">
      <p>{{ $t("mainTilte") }}：</p>
    </div>
    <!-- 产品清单 -->
    <div class="product-list">
      <ul>
        <li v-for="(product, index) in productList" :key="index">
          {{ product }}
        </li>
      </ul>
    </div>
    <el-row :gutter="20" class="product-container">
      <!-- 循环展示每个产品 -->
      <el-col :span="8" v-for="(item, index) in products" :key="index">
        <div
          class="product-item"
          @mouseover="hover(index)"
          @mouseleave="leave(index)"
        >
          <!-- 使用 el-image 进行懒加载 -->
          <el-image
            :src="item.imageUrl"
            :alt="item.title"
            class="product-img"
            fit="cover"
            lazy
          />
          <div :class="['overlay', { active: hoverIndex === index }]">
            <h3>{{ item.title }}</h3>
            <div class="custom-line"></div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import { getServiceDetail } from "@/api/serviceDetail.js";
export default {
  data() {
    return {
      hoverIndex: null, // 用于标记当前悬停的产品
      // products: [
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/safe.jpg",
      //     title: "安全体验馆",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/material.jpg",
      //     title: "周转材料",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/machinery.jpg",
      //     title: "工程机械及配件",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/hardware.jpg",
      //     title: "五金劳保",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/goods.jpg",
      //     title: "生活物资",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/electrical.jpg",
      //     title: "电气设备",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/drainage.jpg",
      //     title: "给排水材料",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/fire_fighting.jpg",
      //     title: "安全与消防器材",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/steels.jpg",
      //     title: "钢材铸铁",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/grease.jpg",
      //     title: "油脂化工",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/road.jpg",
      //     title: "道路设施",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/decoration.jpg",
      //     title: "装饰材料",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/ground_material.jpg",
      //     title: "地材",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/earth.jpg",
      //     title: "混泥土水泥制品",
      //   },
      //   {
      //     img: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/excavator.png",
      //     title: "土工材料",
      //   },
      // ],
      productList: [],
      products: [],
    };
  },
  methods: {
    hover(index) {
      this.hoverIndex = index; // 鼠标悬停时更新 hoverIndex
    },
    leave() {
      this.hoverIndex = null; // 鼠标离开时重置 hoverIndex
    },
    getAllProductName() {
      this.products.forEach((product) => {
        this.productList.push(product.title);
      });
    },
    init(routeName) {
      getServiceDetail(routeName).then((res) => {
        this.products = res.data;
        console.log(res.data);
        this.getAllProductName();
      });
    },
  },
  mounted() {
    const serviceId = window.location.pathname.split("/").pop(); // 提取路由名称
    this.init(serviceId);
  },
};
</script>
<style lang="scss" scoped>
.mainProducts {
  opacity: 0; // 初始透明
  margin-top: 50px;
  width: 100%;
  padding-bottom: 20px;
  animation: fadeInUp 1s ease forwards; // 动画定义

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.title {
  p {
    font-size: 22px;
    color: #024190;
    font-weight: bold;
    padding: 20px 60px;
  }
}

.product-container {
  width: 1300px;
  margin-top: 20px;
  margin-left: 80px !important;
  // margin-bottom: 20px;
}

.product-list {
  margin-left: 130px;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap; /* 允许换行 */
    gap: 10px; /* 设置每个项目之间的间距 */

    li {
      font-size: 18px;
      color: #024190;
      width: 15%;
    }
  }
}

.product-item {
  position: relative;
  overflow: hidden;
  margin: 20px 20px;
  width: 400px;
  height: 400px;

  .product-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease; // 平滑过渡
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transform: translateX(100%);
    transition: transform 0.5s ease-out, opacity 0.5s ease-out; // 动画效果
    padding: 10px;
    box-sizing: border-box;

    &.active {
      opacity: 1;
      transform: translateX(0); // 激活时遮罩从右向左出现
    }

    h3 {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .custom-line {
      width: 60%;
      height: 2px;
      background-color: #fff;
      margin-top: 10px;
    }
  }
}

@media (max-width: 768px) {
  .el-col {
    flex: 0 0 50%; // 小屏幕上每行显示两个产品
  }
}

@media (max-width: 480px) {
  .el-col {
    flex: 0 0 100%; // 超小屏幕上每行显示一个产品
  }
}
</style>