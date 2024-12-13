<template>
  <div class="logistics">
    <div class="list-container">
      <div
        v-for="(item, index) in list"
        :key="item.title"
        class="list-item"
        @mouseover="handleMouseOver(index)"
        @mouseleave="handleMouseLeave(index)"
      >
        <div class="item-image">
          <img :src="item.image" alt="item image" />
        </div>
        <a
          :href="item.detailUrl"
          class="item-title"
          :class="{ hovered: hoveredIndex === index }"
        >
          {{ item.title }}
        </a>
        <!-- <p class="item-text">{{ item.text }}</p> -->
        <p class="item-footer">{{ item.footer }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hoveredIndex: null, // 用于记录当前悬停的 index
      list: [
        {
          image:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E5%9F%BA%E5%BB%BA%E7%89%A9%E6%B5%81.jpg",
          title: "基建物流",
          footer:
            "涉及大量的原材料、构配件和设备运输，通常需要特殊的运输工具和技术。",
          detailUrl: "/casedetails/1", // 详细页面的链接
        },
        {
          image:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E5%A4%A7%E4%BB%B6%E7%89%A9%E6%B5%81.jpg",
          title: "大件物流",
          footer:
            "需要专业的运输车辆和吊装设备，以及精确的路线规划和运输方案。",
          detailUrl: "/casedetails/2",
        },
        {
          image:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E5%B7%A5%E5%8E%82%E7%89%A9%E6%B5%81.jpg",
          title: "工厂物流",
          footer:
            "与生产过程紧密相关，涉及原材料的入库、存储、领用，以及半成品和成品的转运、存储和发货等，对调度灵活性和运输及时性要求非常高。",
          detailUrl: "/casedetails/1", // 详细页面的链接
        },
        {
          image:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E5%86%9C%E8%B4%B8%E7%89%A9%E6%B5%81.jpg",
          title: "农贸物流",
          footer:
            "需要考虑农产品的保鲜、防腐和季节性特点，以及农村地区的交通和基础设施状况。",
          detailUrl: "/casedetails/2",
        },
        {
          image:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E6%8F%B4%E5%A4%96%E7%89%A9%E6%B5%81.jpg",
          title: "援外物流",
          footer:
            "需要符合国际标准和规范，考虑政治、文化、气候等因素，以及跨境运输的复杂性和风险。",
          detailUrl: "/casedetails/1", // 详细页面的链接
        },
        {
          image:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E8%AE%BE%E5%A4%87%E8%B0%83%E9%81%A3.jpg",
          title: "设备调遣",
          footer: "需要专业的设备包装和加固技术，以及精确的运输计划和调度。",
          detailUrl: "/casedetails/2",
        },
        // 更多项目...
      ],
    };
  },
  methods: {
    handleMouseOver(index) {
      this.hoveredIndex = index;
    },
    handleMouseLeave() {
      this.hoveredIndex = null;
    },
  },
};
</script>


<style lang="scss" scoped>
.logistics {
}

.list-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  padding: 50px 0;
  padding-left: 50px 
}

.list-item {
  width: 30%; /* 每行3个项目 */
  text-align: left; /* 左对齐 */
  box-sizing: border-box;
  padding: 10px;
}

.item-image {
  width: 420px; /* 让图片容器宽度占满父元素 */
  height: 300px; /* 设置图片容器的高度 */
  overflow: hidden; /* 隐藏溢出部分 */
  display: inline-block; /* 保证容器自适应图片大小 */
  position: relative; /* 确保图片能够超出容器 */
}

.item-image img {
  width: 100%; /* 设置图片宽度为容器的100% */
  height: 100%; /* 设置图片高度为容器的100% */
  object-fit: cover; /* 确保图片填充容器 */
  transition: transform 0.3s ease-in-out; /* 添加过渡效果 */
}

.item-image:hover img {
  transform: scale(1.1); /* 鼠标悬停时放大图片 */
}

.item-title {
  display: block;
  font-size: 22px;
  font-weight: 550;
  color: #333;
  text-decoration: none;
  margin: 10px 0;
  transition: color 0.3s ease;
  cursor: pointer;
}

.item-title.hovered {
  color: #024190; /* 鼠标悬停时标题变色 */
  // text-decoration: underline;
}

.item-footer {
  width: 100%;
  font-size: 18px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; /* 限制为2行 */
  margin-top: 10px;
  line-height: 1.5; /* 设置行高，确保换行正常 */
}

.list-item:hover {
  cursor: pointer;
}
</style>