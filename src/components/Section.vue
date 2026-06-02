<template>
  <!-- 导航栏 -->
  <div class="section-title">
    <div class="tabs-header">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-item', { active: currentTab === tab.label }]"
        @click="selectTab(tab.path)"
      >
        {{ tab.label }}
      </div>
    </div>
    <div class="location">
      <a href="/">{{ $t("home") }}</a
      ><em> &gt; </em><a :href="href">{{ title }}</a> <em> &gt; </em
      ><span>{{ currentTab }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    tabs: {
      type: Array,
      default: () => [],
    },
    routeMap: {
      type: Object,
      default: () => {},
    },
    activeTab: {
      type: String,
      default: "",
    },
    href: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentTab: this.activeTab, // 将 prop 的值初始化到 data
    };
  },
  methods: {
    selectTab(path) {
      this.$router.push(path); // 路由跳转
      const routeName = path.split("/").pop(); // 提取路由名称
      this.currentTab = this.routeMap[routeName]; // 映射到中文名称
    },
  },
  watch: {
    activeTab(newVal) {
      this.currentTab = newVal; // 父组件更新时同步到本地状态
    },
  },
};
</script>

<style lang="scss" scoped>
.section-title {
  width: 1385px;
  height: 80px;
  background: #ffffff;
  display: flex;
  justify-content: space-between; // 使 tabs 和 location 分别在左右两边
  align-items: center; // 垂直居中对齐
  border-bottom: 1px solid #eeeeee; // 整个标题下方添加边框

  .tabs-header {
    width: 67%;
    display: flex;
  }

  .tab-item {
    height: 80px;
    max-width: 320px;
    padding: 0 12px;
    cursor: pointer;
    font-size: 18px;
    transition: color 0.3s, border-color 0.3s;
    text-align: center; // Tab 内容居中
    /* 关键属性：Flex 居中 */
    display: flex;
    align-items: center; /* 垂直居中 */
    justify-content: center; /* 水平居中 */
    &.active {
      color: #16a085;
      background-color: #16a085;
      border-bottom: 3px solid #16a085; // 选中 tab 底部显示下划线
      font-weight: bold;
      color: #ffffff;
    }

    // &:hover {
    //   color: #16A085; // 鼠标悬停时的颜色
    // }
  }

  .location {
    display: flex;
    justify-content: flex-end; // 使面包屑导航靠右
    width: 36%; // 控制宽度
    text-align: right;
    font-size: 16px;
    align-items: center; // 垂直居中

    a {
      display: inline-block;
      color: #7e7c7c;
      text-decoration: none;

      &:hover {
        color: #16a085; // 鼠标悬停时的颜色
      }
    }

    em {
      display: inline-block;
      font-style: normal;
      margin: 0 10px;
    }

    span {
      display: inline-block;
      color: #ccc;
    }

    > a:first-of-type {
      display: inline-block;
      background: url(../assets/img/home_icon.png) no-repeat left center;
      background-size: 20px 20px;
      padding-left: 35px; // 给首页链接添加图标的左侧内边距
    }
  }
}
</style>