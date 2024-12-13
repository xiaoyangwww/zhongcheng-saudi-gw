<template>
  <!-- 全品类运输服务 -->
  <div class="transport">
    <el-row :gutter="20" class="transport-section">
      <el-col
        :span="24"
        v-for="(item, index) in transportData"
        :key="index"
        class="transport-item"
      >
        <div class="content" :class="{ reverse: index % 2 !== 0 }">
          <div class="text-content">
            <div class="text">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
          <img :src="item.image" alt="运输方式" class="transport-image" />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transportData: [
        {
          title: "海洋运输",
          description:
            "在海洋运输方面，无论是大型设备的整体运输，还是小型货物的拼箱配送，我们均能提供高效、可靠的解决方案。我们拥有丰富的经验和专业的技术，" +
            "提供灵活的集装箱整箱和拼箱服务，以满足不同规模和需求的货物运输。此外，我们还拥有专业的件杂货船和半潜船运输能力，能够应对各种复杂和特殊的货物类型，确保货物安全、顺利地到达目的地。",
          image: require("../../assets/img/ocean.jpg"), // 替换为实际图片路径
        },
        {
          title: "陆路运输",
          description:
            "在陆路运输领域，我们提供多样化的运输方式，包括集装箱卡车、厢式车、平板车以及铁路运输等。无论您的货物需要长途运输还是短途配送，我们都能为客户提供高效、便捷、安全、稳定的陆路运输服务。",
          image: require("../../assets/img/land.jpg"), // 替换为实际图片路径
        },
        {
          title: "航空运输",
          description:
            "在航空运输服务方面，我们提供包括空运、国际快递、包舱、包机等服务。无论是紧急货物还是高价值货物，我们都能通过航空运输及时、准确、安全地送达目的地。",
          image: require("../../assets/img/aviation.jpg"), // 替换为实际图片路径
        },
      ],
    };
  },
};
</script>


<style scoped lang="scss">
.transport-section {
  opacity: 0; // 初始透明
  animation: fadeInUp 1s ease forwards; // 动画定义

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

.transport-item {
  margin: 50px 0;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  &.reverse {
    flex-direction: row-reverse; // 奇数时反转图片和文字位置
  }
}

.transport-image {
  width: 60%;
  max-width: 600px;
  height: 400px;
  margin: 0 20px;
  border-radius: 10px;
  transition: transform 0.3s ease; // 图片放大效果

  &:hover {
    transform: scale(1.05); // 鼠标悬停图片放大
  }
}

.text-content {
  width: 40%;

  .text {
    max-width: 500px;
    padding-left: 30px;
    h3 {
      font-size: 22px;
      font-weight: bold;
      color: #024190;
    }

    p {
      margin-top: 20px;
      text-indent: 2em; // 首行缩进两格
      line-height: 2; // 设置行高为 1.5 倍字体大小
      font-size: 18px;
      color: #666;
    }
  }
}
</style>
