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
        <a
          :href="`/casedetails/${item.projectId}/${item.id}`"
          class="list-item-link"
        >
          <div class="item-image">
            <img :src="item.image" :alt="item.title" /> 
          </div>
          <div class="item-title" :class="{ hovered: hoveredIndex === index }">
            {{ item.title }}
          </div>
          <!-- <p class="item-text">{{ item.text }}</p> -->
          <p class="item-footer">{{ item.description }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getProjectType } from "@/api/projectType.js";
import { getProject } from "@/api/project.js";
export default {
  data() {
    return {
      hoveredIndex: null, // 用于记录当前悬停的 index
      list: [],
    };
  },
  methods: {
    handleMouseOver(index) {
      this.hoveredIndex = index;
    },
    handleMouseLeave() {
      this.hoveredIndex = null;
    },
    init(routeName) {
      getProject().then((res) => {
        var projectId;
        res.data.forEach((item) => {
          if (item.link && item.link.indexOf(routeName) !== -1) {
            projectId = item.id;
            return;
          }
        });
        getProjectType(projectId).then((res) => {
          this.list = res.data;
          console.log(res.data);
        });
      });
    },
  },
  mounted() {
    const routeName = window.location.pathname.split("/").pop(); // 提取路由名称
    this.init(routeName);
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
  // padding: 50px 0;
  padding: 50px 50px;
}

.list-item {
  width: 30%; /* 每行3个项目 */
  text-align: left; /* 左对齐 */
  box-sizing: border-box;
  padding: 10px;
  cursor: pointer; /* 显示手形光标 */
}

/* 确保整个 list-item 都是可点击的 */
.list-item-link {
  display: block;
  text-decoration: none; /* 取消链接的默认下划线 */
  color: inherit; /* 继承父元素的文本颜色 */
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
  text-align: start;
}

.item-title.hovered {
  color: #005f40; /* 鼠标悬停时标题变色 */
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
  text-align: start;
}

.list-item:hover {
  cursor: pointer;
}
</style>