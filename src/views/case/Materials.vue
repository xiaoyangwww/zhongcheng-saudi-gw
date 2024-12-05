<template>
  <div class="materials">
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
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E5%9F%8E%E5%B8%82%E7%BB%BC%E5%90%88%E4%BD%93%E9%A1%B9%E7%9B%AE.png",
          title: "城市综合体项目",
          footer:
            "涉及大量的原材料、构配件和设备运输，通常需要特殊的运输工具和技术。",
          detailUrl: "/project/1", // 详细页面的链接
        },
        {
          image:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/KOT%20%E6%95%88%E6%9E%9C%E5%9B%BE.jpg",
          title: "港口项目",
          footer:
            "需要专业的运输车辆和吊装设备，以及精确的路线规划和运输方案。",
          detailUrl: "/project/2",
        },
        {
          image:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E5%85%AC%E8%B7%AF%E6%A1%A5%E6%A2%81.jpg",
          title: "公路桥梁项目",
          footer:
            "与生产过程紧密相关，涉及原材料的入库、存储、领用，以及半成品和成品的转运、存储和发货等，对调度灵活性和运输及时性要求非常高。",
          detailUrl: "/project/1", // 详细页面的链接
        },
        {
          image:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E9%93%81%E8%B7%AF%E9%9A%A7%E9%81%93.png",
          title: "铁路隧道项目",
          footer:
            "需要考虑农产品的保鲜、防腐和季节性特点，以及农村地区的交通和基础设施状况。",
          detailUrl: "/project/2",
        },
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
.materials {
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