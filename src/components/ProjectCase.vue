<template>
  <div class="projectCase" ref="project">
    <div class="warp">
      <div class="title">
        <div class="quicn">项目案例</div>
        <div class="quien">SUECESSFUL CASE</div>
      </div>
      <!-- tab -->
      <div class="custom-tabs">
        <!-- Tabs Header -->
        <div class="tabs-header">
          <div
            v-for="tab in tabs"
            :key="tab"
            :class="['tab-item', { active: activeTab === tab }]"
            @click="selectTab(tab)"
          >
            {{ tab }}
          </div>
        </div>
        <!-- Tabs Content -->
        <div class="tab-content">
          <div v-if="activeTab === '物流业务'">
            <!-- Content for 物流业务 -->
            <ul class="case-item">
              <li
                v-for="(item, index) in caseList"
                :key="index"
                :class="{ selected: selectedIndex === index }"
                @click="handleSelect(index)"
                v-lazy:background-image="item.img"
              >
                <router-link
                  class="text-decoration"
                  :to="{ name: 'casedetails', params: { id: item.id } }"
                >
                  <div class="case-item-hover">
                    <p class="hover-title">{{ item.title }}</p>
                    <div class="bottom"></div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
          <div v-else-if="activeTab === '物资业务'">
            <!-- Content for 物资业务 -->
            <ul class="case-item">
              <li
                v-for="(item, index) in caseListDemo"
                :key="index"
                :class="{ selected: selectedIndex === index }"
                @click="handleSelect(index)"
                v-lazy:background-image=" item.img"
              >
                <router-link
                  class="text-decoration"
                  :to="{ name: 'casedetails', params: { id: item.id } }"
                >
                  <div class="case-item-hover">
                    <p class="hover-title">{{ item.title }}</p>
                    <div class="bottom"></div>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <ul class="case-item">
        <li
          v-for="(item, index) in caseList"
          :key="index"
          v-lazy:background-image="imgserver + item.Img"
        >
          <router-link
            class="text-decoration"
            :to="{ name: 'casedetails', params: { id: item.Id } }"
          >
            <div class="case-item-hover">
              <p class="hover-title">{{ item.Title }}</p>
              <div class="bottom"></div>
              <div class="more">
                <span>MORE</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul> -->
    </div>
    <p data-v-5aff6e50 class="chage"><span class="el-icon-bottom" style="font-size: 30px;"></span></p>
  </div>
</template>

<script>
export default {
  name: "ProjectCase",
  data() {
    return {
      caseList: [
        {id:"1",index:"1",title:"基建物流",img:"https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E5%9F%BA%E5%BB%BA%E7%89%A9%E6%B5%81.jpg"},
        {id:"2",index:"1",title:"大件物流",img:"https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E5%A4%A7%E4%BB%B6%E7%89%A9%E6%B5%81.jpg"},
        {id:"3",index:"1",title:"工厂物流",img:"https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E5%B7%A5%E5%8E%82%E7%89%A9%E6%B5%81.jpg"},
        {id:"4",index:"1",title:"农贸物流",img:"https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E5%86%9C%E8%B4%B8%E7%89%A9%E6%B5%81.jpg"},
        {id:"5",index:"1",title:"援外物流",img:"https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E6%8F%B4%E5%A4%96%E7%89%A9%E6%B5%81.jpg"},
        {id:"6",index:"1",title:"设备调遣",img:"https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E8%AE%BE%E5%A4%87%E8%B0%83%E9%81%A3.jpg"}
      ],
      caseListDemo: [
        {id:"1",index:"1",title:"城市综合体项目",img:"https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E5%9F%8E%E5%B8%82%E7%BB%BC%E5%90%88%E4%BD%93%E9%A1%B9%E7%9B%AE.png"},
        {id:"2",index:"1",title:"港口项目",img:"https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/KOT%20%E6%95%88%E6%9E%9C%E5%9B%BE.jpg"},
        {id:"3",index:"1",title:"公路桥梁项目",img:"https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E5%85%AC%E8%B7%AF%E6%A1%A5%E6%A2%81.jpg"},
        {id:"4",index:"1",title:"铁路隧道项目",img:"https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/%E9%93%81%E8%B7%AF%E9%9A%A7%E9%81%93.png"}
      ],
      tabs: ["物流业务", "物资业务"],
      activeTab: "物流业务", // Default active tab
      selectedIndex: null, // 存储选中的索引
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
  },
  mounted() {
    // this.$http
    //   .all([
    //     this.$http.get("Cases/GetCasesAll"),
    //     this.$http.get(`News?type=1&num=3`),
    //   ])
    //   .then(
    //     this.$http.spread((responseCases) => {
    //       this.caseList = responseCases.data;
    //       console.log(this.caseList);
          
    //     })
    //   );
  },
};
</script>

<style lang="scss" scoped>
.business-framework {
  background-size: cover;
  background-position: center;
  padding: 60px 20px;
}
.warp {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 40px;
}

.quicn {
  font-size: 36px;
  font-weight: bold;
  color: #1d1d1d;
}

.quien {
  font-size: 18px;
  color: #666;
  margin-top: 8px;
}

.custom-tabs {
  font-family: Arial, sans-serif;
  width: 100%;
  max-width: 1035px;
  margin: auto;
}

.tabs-header {
  display: flex;
  justify-content: center;
  //   border-bottom: 2px solid #e0e0e0;
  margin-bottom: 10px;
}
.tab-content {
  width: 1035px;
  height: 500px;
}

.tab-item {
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.3s, border-color 0.3s;
}

.tab-item.active {
  color: #024190;
  border-bottom: 3px solid #024190;
  font-weight: bold;
}

.tab-item:hover {
  color: #024190;
}

.line-separator {
  width: 100%;
  height: 2px;
  background: #e0e0e0;
  margin: 0 auto 10px auto;
}

//经典案例
.case-item {
  width: 1035px;
  height: 500px;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  li {
    width: 330px;
    height: 250px;
    list-style: none;
    position: relative;
    margin: 5px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-origin: content-box;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    // 默认黑色半透明遮罩层
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5); // 黑色半透明
      transition: opacity 0.3s ease;
      z-index: 1;
    }

    // 鼠标悬停或选中时的效果
    &:hover,
    &.selected {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

      &:before {
        opacity: 0; // 隐藏遮罩层
      }

      .case-item-hover {
        transform: translateY(-10px); // 向上移动
        opacity: 1;
        transition: all 0.4s ease-in-out;
      }

      .more {
        opacity: 1;
      }
    }

    // 文字容器，水平垂直居中
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

      .hover-title {
        height: 50px;
        color: #fff;
        font-size: 18px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
      }

      .bottom {
        border-bottom: 2px solid #fff;
        width: 60px;
        margin: 0 auto;
      }
    }
  }
}
</style>