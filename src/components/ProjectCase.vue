<template>
  <div class="projectCase" ref="project">
    <div class="warp">
      <!-- 标题 -->
      <div class="saudi_case_tt">
        <div class="saudien">{{ $t("projectCases") }}</div>
      </div>
      <!-- tab -->
      <div class="custom-tabs">
        <!-- Tabs Header 标签头部 -->
        <div class="tabs-header">
          <!-- 动态生成标签头部，使用 v-for 循环遍历后端数据中的 tabs -->
          <div
            v-for="tab in tabs"
            :key="tab.id"
            :class="['tab-item', { active: activeTab === tab.name }]"
            @click="selectTab(tab.name)"
          >
            {{ tab.name }}
            <!-- 显示标签名称 -->
          </div>
        </div>

        <!-- Tabs Content 标签内容 -->
        <div class="tab-content">
          <!-- 循环遍历所有标签，检查当前选中的标签，显示对应内容 -->
          <div v-for="tab in tabs" :key="tab.id">
            <!-- 如果当前标签是选中的标签，则显示对应的内容 -->
            <div v-if="activeTab === tab.name">
              <!-- 循环渲染当前标签下的所有项目类型 -->
              <ul class="case-item">
                <li
                  v-for="(item, index) in tab.projectTypes"
                  :key="item.id"
                  :class="{ selected: selectedIndex === index }"
                  @click="handleSelect(index)"
                  v-lazy:background-image="item.imageUrl"
                >
                  <!-- 使用 router-link 来创建导航链接 -->
                  <router-link
                    class="text-decoration"
                    :to="`/casedetails/${tab.id}/${item.id}`"
                  >
                    <div class="case-item-hover">
                      <!-- 显示项目的标题，若标题为空，则显示 '暂无标题' -->
                      <p class="hover-title">{{ item.title || "暂无标题" }}</p>
                      <div class="bottom"></div>
                    </div>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <p data-v-5aff6e50 class="chage"><span class="el-icon-bottom" style="font-size: 30px;"></span></p> -->
  </div>
</template>

<script>
import { getProject } from "@/api/project.js";
export default {
  name: "ProjectCase",
  data() {
    return {
      activeTab: "物流业务", // 默认选中的标签，初始为“物流业务”
      selectedIndex: null, // 记录当前选中的项目索引
      tabs: [],
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
      if (newIndex === 3) {
        // this.$refs.service.classList.add("slide-in"); // Add animation class
      } else {
        // this.$refs.service.classList.remove("slide-in"); // Remove animation class
      }
    },
  },
  methods: {
    selectTab(tab) {
      this.activeTab = tab;
    },
    handleSelect(index) {
      this.selectedIndex = index;
    },
    init() {
      getProject().then((response) => {
        this.tabs = response.data;
        this.activeTab = this.tabs[0].name;
        console.log(response);
      });
    },
  },
  mounted() {
    this.init(); // 组件挂载时获取图片
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins";

/* 启用 rem 转换 */
@include use-rem(true);

.projectCase {
  max-height: px2rem(900);
}

.business-framework {
  background-size: cover;
  background-position: center;
  padding: px2rem(60) px2rem(20);
  margin-top: px2rem(60);
}

.warp {
  max-width: px2rem(1200);
  margin: 0 auto;
  padding: px2rem(20);
}

// 标题
.saudi_case_tt {
  text-align: center;
  margin-bottom: px2rem(40);
  .saudien {
    font-size: px2rem(40);
    font-weight: bold;
    color: #16a085;
  }
}

.custom-tabs {
  width: 100%;
  max-width: px2rem(1200);
  margin: auto;
}

.tabs-header {
  display: flex;
  justify-content: center;
  margin-bottom: px2rem(10);
}

.tab-content {
  width: px2rem(1200);
  height: px2rem(500);
}

.tab-item {
  padding: px2rem(10) px2rem(20);
  cursor: pointer;
  font-size: px2rem(20);
  transition: color 0.3s, border-color 0.3s;
}

.tab-item.active {
  color: #16a085;
  border-bottom: px2rem(3) solid #16a085;
  font-weight: bold;
}

.line-separator {
  width: 100%;
  height: px2rem(2);
  background: #e0e0e0;
  margin: 0 auto px2rem(10) auto;
}

// 经典案例
.case-item {
  width: px2rem(1200);
  height: px2rem(600);
  overflow: hidden;
  margin: 0 px2rem(35);
  margin-top: px2rem(30);
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  li {
    width: px2rem(360);
    height: px2rem(250);
    position: relative;
    margin: px2rem(5);
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    &:hover,
    &.selected {
      transform: translateY(px2rem(-3));
      box-shadow: 0 px2rem(5) px2rem(15) rgba(0, 0, 0, 0.2);

      &:before {
        opacity: 0;
      }

      .case-item-hover {
        transform: translateY(px2rem(-10));
        opacity: 1;
        transition: all 0.4s ease-in-out;
      }
    }

    .case-item-hover {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      opacity: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      transition: opacity 0.3s ease;
      z-index: 2;
      justify-content: flex-start;
      padding-top: 30%;

      .hover-title {
        color: #fff;
        font-size: px2rem(24);
        font-weight: bold;
        text-align: center;
        width: 100%;
        padding: px2rem(15) px2rem(10);
        box-sizing: border-box;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: px2rem(-2 * 24); // 基于字体大小计算
        line-height: 1.5em;
      }

      .bottom {
        border-bottom: px2rem(2) solid #fff;
        width: px2rem(60);
        margin: 0 auto;
      }
    }
  }
}
</style>