<template>
  <div class="SupplyChain">
    <div class="container">
      <!-- 左侧一级标题列表 -->
      <div class="left-container">
        <div class="product-list">
          <ul>
            <li
              v-for="(service, index) in logisticsServices"
              :key="index"
              @click="showProductsByType(service)"
              :class="{ 'active-item': currentService === service }"
            >
              {{ service.title }}
            </li>
          </ul>
        </div>
      </div>
      <!-- 右侧内容展示区域 -->
      <div class="right-container">
        <!-- 右上方展示服务类型的内容 -->
        <div class="product-header">
          <div class="product-list-header">
            <p>{{ currentService ? currentService.content : "" }}</p>
          </div>
        </div>
        <!-- 右下方展示二级标题下的内容和图片 -->
        <div class="product-grid">
          <div
            class="product-item"
            v-for="(secondaryService, index) in currentSecondaryServices"
            :key="index"
            @mouseover="hover(index)"
            @mouseleave="leave(index)"
          >
            <div class="product-desc">
              <strong>{{ secondaryService.title }}：</strong>
              {{ secondaryService.content }}
            </div>
            <!-- 图片展示区域 -->
            <div class="image-container" v-if="secondaryService.image">
              <el-image
                v-for="(img, imgIndex) in getImageArray(secondaryService.image)"
                :key="imgIndex"
                :src="img"
                class="product-img"
                fit="cover"
                lazy
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { getServiceDetail } from "@/api/serviceDetail.js";
import { getService } from "@/api/service.js";
import { handleTree } from "@/utils/ruoyi.js";

export default {
  data() {
    return {
      logisticsServices: [],
      hoverIndex: null,
      currentService: null,
      currentSecondaryServices: [],
    };
  },
  methods: {
    getImageArray(imageStr) {
      if (!imageStr) return [];
      return imageStr.split(",").filter((img) => img.trim() !== "");
    },
    hover(index) {
      this.hoverIndex = index;
    },
    leave() {
      this.hoverIndex = null;
    },
    showProductsByType(service) {
      this.currentService = service;
      this.currentSecondaryServices = service.children;
    },
    init() {
      const routeName = window.location.pathname.split("/").pop(); // 提取路由名称
      console.log(routeName);
      var typeId;
      getService().then((res) => {
        console.log(res.data);
        res.data.forEach((item) => {
          if (item.link && item.link.includes(routeName)) {
            typeId = item.id;
          }
        });
        getServiceDetail(typeId).then((res) => {
          this.logisticsServices = handleTree(res.data, "id", "parentId");
          // 默认展示第一个服务
          if (this.logisticsServices.length > 0) {
            this.currentService = this.logisticsServices[0];
            this.currentSecondaryServices = this.logisticsServices[0].children;
          }
        });
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>
  
<style lang="scss" scoped>
.SupplyChain {
  display: flex;
  justify-content: center;
  opacity: 0; /* 初始透明 */
  margin-top: 50px;
  width: 100%;
  padding-bottom: 20px;
  animation: fadeInUp 1s ease forwards; /* 动画定义 */

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.container {
  display: flex;
  width: 100%;
  max-width: 1200px; /* 限制容器最大宽度 */
}

.left-container {
  width: 20%;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  // animation: slideInLeft 1s ease forwards;

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .product-list {
    ul {
      list-style-type: none;
      padding: 0;

      li {
        font-size: 18px;
        color: #16a085;
        padding: 10px 10px;
        cursor: pointer;
        transition: color 0.3s ease;
        text-align: left; /* 文字居中 */

        &:hover,
        &.active-item {
          color: #12876b;
          background-color: #e0e0e0; /* 选中时改变背景色 */
          font-size: 18px; /* 选中时字体变大 */
          font-weight: bold;
        }
      }
    }
  }
}

.right-container {
  width: 80%;
  padding: 20px;
  // animation: slideInRight 1s ease forwards;

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .product-header {
    margin-bottom: 30px;

    .product-list-header {
      p {
        font-size: 24px;
        color: #16a085;
        font-weight: bold;
      }
    }
  }

  .product-grid {
    margin: -10px; /* 负外边距用于抵消产品项的外边距 */

    .product-item {
      position: relative;
      // overflow: hidden;
      margin: 10px;
      // height: 350px; /* 减小图片高度 */

      .product-desc {
        color: black;
        margin-bottom: 10px;
        font-size: 20px;
        line-height: 1.5;
      }

      .product-img {
        width: 500px;
        height: 400px;
        object-fit: cover;
        transition: transform 0.3s ease; /* 平滑过渡 */
      }
    }
  }
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px; /* 图片间距 */
  margin-top: 10px;
  width: 1100px;

  .product-img {
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.01);
    }
  }
}
</style>    