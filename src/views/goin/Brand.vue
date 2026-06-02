<template>
  <div class="intro">
    <div class="content-summary">
      <div class="summary-left">
        <div class="top">
          <h3 class="title-left">{{ $t("brandStory") }}</h3>
          <div class="underline title-left"></div>
        </div>
        <p class="content" v-html="companyProfile.introduction">
        </p>
        <section class="statistics">
          <!-- <h2>聚焦客户需求 服务成就价值</h2> -->
          <div class="stats-container">
            <div
              class="stat-item"
              v-for="(item, index) in companyProfile.features"
              :key="index"
            >
              <span class="stat-number"> {{ item.currentCount }}</span
              ><span class="unit">+</span>
              <p>{{ item.title }}</p>
            </div>
          </div>
        </section>
      </div>
      <div class="summary-right">
        <img :src="companyProfile.imageUrl" alt />
      </div>
    </div>
    <!-- <el-divider class="el-divider-active">
        <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
      </el-divider> -->
  </div>
</template>
  
  <script>
import { getCompanyProfile } from "@/api/company.js";
export default {
  data() {
    return {
      companyProfile: {},
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getCompanyProfile().then((res) => {
        res.data.features.forEach((i) => {
          i.currentCount = 0;
        });
        this.companyProfile = res.data;
        console.log(this.companyProfile);
        this.comput();
      });
    },
    // 计算递增的数字
    comput() {
      // 遍历每个统计项，初始化 currentCount 并进行递增
      this.companyProfile.features.forEach((item) => {
        this.$set(item, "currentCount", 0); // 初始化 currentCount 为 0
        const target = item.count; // 获取目标值
        const increment = Math.ceil(target / 50); // 控制递增速度

        // 定义递增函数
        const updateCounter = () => {
          if (item.currentCount < target) {
            item.currentCount += increment;
            setTimeout(updateCounter, 40); // 控制递增速度
          } else {
            item.currentCount = target; // 达到目标时停止递增
          }
        };

        // 开始递增
        updateCounter();
      });
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.content-summary {
  //height: 500px;
  display: flex;
  justify-content: space-around;
  padding: 80px 0;
  animation: moveUp 0.8s ease-out forwards;

  .summary-left {
    width: 600px;

    .title-left {
      margin-left: 0;
    }
    .content {
      color: #666;
      font-size: 18px;
      // text-indent: 25px;
      line-height: 2;
    }

    .statistics {
      margin-top: 20px;
      text-align: center;
      background-color: #e8f4f6;
      padding: 20px;

      h2 {
        font-size: 18px;
        margin-bottom: 20px;
      }

      .stats-container {
        display: flex;
        justify-content: space-around;

        .stat-item {
          text-align: center;

          .stat-number {
            font-size: 36px;
            font-weight: bold;
            color: #16A085; // 黄色数字
          }

          .unit {
            font-size: 18px;
            font-weight: bold;
            margin-left: 5px;
            color: #000;
          }

          p {
            max-width: 200px;
            margin-top: 10px;
            font-size: 16px;
          }
        }
      }
    }
  }

  .summary-right {
    width: 450px;
    height: 400px;
    margin-top: 113px;
    // margin-right: 20px;
    text-align: center;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05); // 放大效果
      // box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3); // 阴影
    }

    img {
      width: 450px;
      height: 350px;
      // margin-top: 20px;
      transition: transform 0.3s ease; // 图片放大效果

      &:hover {
        transform: scale(1.1); // 鼠标悬停图片放大
      }
    }
  }
}

.el-divider-active {
  background-color: #3c6088;
}
</style>