<template>
  <div class="intro">
    <div class="content-summary">
      <div class="summary-left">
        <p class="title">公司简介</p>
        <p class="eTitle">ABOUT US</p>
        <p class="content">
          中成国际运输深圳有限公司，自2005年7月6日成立以来，作为中成国际运输有限公司在华南口岸的重要分支，历经近二十载稳健发展，已在工程项目服务领域建立起卓越的品牌影响力。
          我们始终秉持“聚焦客户需求，服务成就价值”的核心使命，在全球范围内为客户提供一站式供应链解决方案和优质服务，帮助客户促进业务增长和价值提升。
          我们以前瞻性的创新精神和坚持不懈的奋斗精神，凭借在工程项目领域丰富的采购和贸易经验、以及全类型物流运输服务经验，为客户提供量身定制的全方位供应链服务方案。
          目前，中成深圳旗下拥有1家分公司和3家子公司，在海外设立了9个直管驻点。我们始终与国家对外发展战略紧密相连，助力中国企业在海外工程项目中拓展业务、提升竞争力。
          展望未来，我们将继续秉承使命，不断追求卓越，为客户提供更加专业、优质、高效的服务，与客户携手共创美好未来。
        </p>
        <section class="statistics">
          <!-- <h2>聚焦客户需求 服务成就价值</h2> -->
          <div class="stats-container">
            <div class="stat-item">
              <span class="stat-number" data-target="40">0</span
              ><span class="unit">年</span>
              <p>深耕工程项目领域</p>
            </div>
            <div class="stat-item">
              <span class="stat-number" data-target="500">0</span
              ><span class="unit">+</span>
              <p>服务项目</p>
            </div>
            <div class="stat-item">
              <span class="stat-number" data-target="100">0</span
              ><span class="unit">+</span>
              <p>业务足迹遍及国家/地区</p>
            </div>
          </div>
        </section>
      </div>
      <div class="summary-right">
        <img src="https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/company_2.jpg" alt />
      </div>
    </div>
    <!-- <el-divider class="el-divider-active">
      <i class="el-icon-arrow-down el-icon-arrow-down-active"></i>
    </el-divider> -->
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    const counters = document.querySelectorAll(".stat-number");
    counters.forEach((counter) => {
      const updateCounter = () => {
        const target = +counter.dataset.target;
        const count = +counter.innerText;
        const increment = Math.ceil(target / 50); // 控制递增速度

        if (count < target) {
          counter.innerText = count + increment;
          setTimeout(updateCounter, 40);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
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
    .title {
      font-size: 25px;
      color: #024190;
      font-weight: bold;
    }
    .eTitle {
      font-size: 17px;
      color: #024190;
      padding: 20px 0;
    }
    .content {
      color: #000;
      font-size: 16px;
      text-indent: 25px;
      line-height: 30px;
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
            color: #024190; // 黄色数字
          }

          .unit {
            font-size: 18px;
            font-weight: bold;
            margin-left: 5px;
            color: #000;
          }

          p {
            margin-top: 10px;
            font-size: 16px;
          }
        }
      }
    }
  }

  .summary-right {
    width: 400px;
    height: 500px;
    margin-top: 20px;
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
      width: 400px;
      height: 500px;
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