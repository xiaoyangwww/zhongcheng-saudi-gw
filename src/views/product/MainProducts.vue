<template>
  <div class="mainProducts">
    <div class="container">
      <div class="left-container">
        <div class="product-list">
          <ul>
            <li
              v-for="(item, index) in productData"
              :key="index"
              @click="showProductsByType(item)"
              :class="{ 'active-item': currentType === item.title }"
            >
              {{ item.title }}
            </li>
          </ul>
        </div>
      </div>
      <div class="right-container">
        <div class="product-header">
          <div class="product-list-header">
            <p>{{ $t('qayimatAlmuntajat') }}</p>
          </div>
          <ul class="product-list-content">
            <li v-for="(category, index) in currentCategories" :key="index">
              {{ category.title }}
            </li>
          </ul>
        </div>
        <div class="product-grid">
          <div
            v-show="item.image"
            class="product-item"
            v-for="(item, index) in currentProducts"
            :key="index"
            @mouseover="hover(index)"
            @mouseleave="leave(index)"
          >
            <el-image
              :src="item.image"
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
        </div>
      </div>
    </div>
    <el-backtop target=".mainProducts" :bottom="50" :right="50"></el-backtop>
  </div>
</template>

<script>
import { getServiceDetail } from "@/api/serviceDetail.js";
import { getService } from "@/api/service.js";
import { handleTree } from "@/utils/ruoyi.js";
export default {
  data() {
    return {
      hoverIndex: null,
      productData: [],
      currentProducts: [],
      currentCategories: [],
      currentType: null,
    };
  },
  methods: {
    hover(index) {
      this.hoverIndex = index;
    },
    leave() {
      this.hoverIndex = null;
    },
    init() {
      if (this.productData.length > 0) {
        this.currentType = this.productData[0].title;
        this.showProductsByType(this.productData[0]);
      }
    },
    showProductsByType(item) {
      this.currentType = item.title;
      this.currentCategories = item.children;
      this.currentProducts = item.children;
    },
    initData() {
      const routeName = window.location.pathname.split("/").pop(); // 提取路由名称
      var typeId;
      getService().then((res) => {
        res.data.forEach((item) => {
          if (item.link && item.link.includes(routeName)) {
            typeId = item.id;
          }
        });
        getServiceDetail(typeId).then((res) => {
          // this.list = res.data;
          this.productData = handleTree(res.data, "id", "parentId");
          // console.log(res.data);
          this.init();
        });
      });
    },
  },
  mounted() {
    this.initData();
  },
};
</script>

<style lang="scss" scoped>
.mainProducts {
  display: flex;
  justify-content: center;
  opacity: 0;
  margin-top: 50px;
  width: 100%;
  padding-bottom: 20px;
  animation: fadeInUp 1s ease forwards;

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
  max-width: 1200px;
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
        text-align: left;

        &:hover,
        &.active-item {
          color: #12876b;
          background-color: #e0e0e0;
          font-size: 18px;
          font-weight: bold;
        }
      }
    }
  }
}

.right-container {
  width: 80%;
  padding: 20px;
  animation: slideInRight 1s ease forwards;

  @keyframes slideInRight {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }

  .product-header {
    align-items: center;
    margin-bottom: 20px;

    .product-list-header {
      p {
        font-size: 24px;
        color: #16a085;
        font-weight: bold;
      }
      margin-bottom: 20px;
    }

    .product-list-content {
      text-align: left;
      display: flex;
      flex-wrap: wrap;
      gap: 15px;
      padding: 0;
      margin-bottom: 20px;

      li {
        
        font-size: 16px;
        color: #16a085;
        background-color: #f0f0f0;
        padding: 5px 15px;
        border-radius: 15px;
        list-style-type: none;
      }
    }
  }

  .product-grid {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    .product-item {
      position: relative;
      overflow: hidden;
      margin: 10px;
      width: calc(33.333% - 20px);
      height: 300px;

      .product-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
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
        transition: transform 0.5s ease-out, opacity 0.5s ease-out;
        padding: 10px;
        box-sizing: border-box;

        &.active {
          opacity: 1;
          transform: translateX(0);
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
  }

  @media (max-width: 768px) {
    .product-grid .product-item {
      width: calc(50% - 20px);
    }
  }

  @media (max-width: 480px) {
    .product-grid .product-item {
      width: calc(100% - 20px);
    }
  }
}
</style>