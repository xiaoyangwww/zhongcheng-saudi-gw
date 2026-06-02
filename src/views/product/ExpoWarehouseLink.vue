<template>
  <div class="ExpoWarehouseLink">
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
// 模拟从后端获取的数据
// const logisticsServices = [
//   {
//     id: 1,
//     title: "运输服务",
//     content: "提供多种运输方式，满足不同类型货物的国际运输需求：",
//     children: [
//       {
//         id: 11,
//         title: "海运集装箱",
//         content:
//           "提供包括跨国调遣在内的整箱FCL和拼箱LCL服务，包括订舱、仓储、装柜、加固、拖车、报关、单证缮制、货物跟踪等环节在内，适用于标准化货物的大批量运输。",
//         image:
//           "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/zc/97ade3bcfa984cb0877a3aea92f9fc45.jpg",
//       },
//       {
//         id: 12,
//         title: "海运散杂船",
//         content:
//           "提供包括跨国调遣在内的租船订舱、港口地面服务（包括理货、短倒、苫盖、报关）、单证缮制、货物跟踪等服务，适用于大宗商品、超尺寸设备和非标准货物的专业运输。",
//         image:
//           "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/zc/97ade3bcfa984cb0877a3aea92f9fc45.jpg",
//       },
//       {
//         id: 13,
//         title: "半潜驳",
//         content: "针对大型超重设备（如海上平台或船舶）提供专用船舶运输服务。",
//         image:
//           "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/zc/7c0137b8b13e4f9db47caef6168a6f2f.jpg",
//       },
//       {
//         id: 14,
//         title: "空运",
//         content:
//           "面向时效性要求高的货物运输，提供点对点快速空运服务，包括订舱、报关、单证缮制及货物跟踪服务等。",
//         image:
//           "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/zc/97ade3bcfa984cb0877a3aea92f9fc45.jpg",
//       },
//       {
//         id: 15,
//         title: "陆运",
//         content:
//           "跨境公路运输及铁路运输，提供包括约车、装卸、加固、报关、单证缮制及货物跟踪等服务，适用于区域性物流需求。",
//         image:
//           "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/zc/97ade3bcfa984cb0877a3aea92f9fc45.jpg",
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: "进口清关派送",
//     content: "为进口货物提供清关及本地配送服务，确保货物顺利交付：",
//     children: [
//       {
//         id: 21,
//         title: "清关服务",
//         content:
//           "提供货物在沙特当地的进出口报关、关税计算、代办SABER认证等清关操作服务，确保合规运输。",
//         image: "",
//       },
//       {
//         id: 22,
//         title: "派送服务",
//         content: `提供货物从沙特各港口或仓库到最终收货人的"最终一公里"配送服务。`,
//         image: "",
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: "其他附加服务",
//     content: "为货物运输过程中的特殊需求提供附加服务，保障运输安全和效率：",
//     children: [
//       {
//         id: 31,
//         title: "保险服务",
//         content:
//           "提供货物运输全程的保险代买服务，减少运输中带来的货损导致的经济损失风险。",
//         image: "",
//       },
//       {
//         id: 32,
//         title: "包装服务",
//         content:
//           "针对不同货物类型提供专业包装解决方案，降低货物运输过程中的货损风险。",
//         image: "",
//       },
//       {
//         id: 33,
//         title: "监装配载",
//         content:
//           "提供货物装载、加固和监装服务，包括配柜、配车、驳船及大船配载，并出具监装报告。",
//         image: "",
//       },
//     ],
//   },
// ];

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
  created() {
    this.init();
  },
};
</script>
  
<style lang="scss" scoped>
.ExpoWarehouseLink {
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