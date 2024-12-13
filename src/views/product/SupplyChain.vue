<template>
  <div class="supplyChain">
    <el-row :gutter="20" class="transport-section">
      <el-col
        :span="24"
        v-for="(item, index) in transportData"
        :key="index"
        class="transport-item"
      >
        <div class="content" :class="{ reverse: index % 2 === 0 }">
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
          title: "工程物资采购、加工和供应",
          description:
            "中成深圳凭借丰富的供应商资源渠道，精心构建的供应链网络，精准控制成本，实现高效的资源配置。在物资加工环节，我们严格筛选加工厂，确保所选厂家具备完善的资质、专用的加工设备和技术人员以及充足的场地资源。同时，我们不断优化供应链管理和物资加工流程，致力于为客户提供更优质的产品和更高效的服务。",
          image: require("../../assets/img/工程.jpg"), // 替换为实际图片路径
        },
        {
          title: "全程物流服务",
          description:
            "中成深圳积极构建自有的智慧物流系统，对物流服务全流程实施严格的监管措施，旨在为客户提供全方位的货物动态跟踪服务。同时，我们与目的港的优质供应商建立了长期稳固的战略合作关系，确保能够实时在目标港口提供高效、精准的物流配送服务，满足客户的多样化需求。",
          image: require("../../assets/img/物流.jpg"), // 替换为实际图片路径
        },
        {
          title: "港口地面服务",
          description:
            "中成深圳竭诚为客户提供一站式的港口地面服务，涵盖接货、分拨、存储、包装、加固以及监装监卸等全方位港前服务。凭借丰富的工程项目物资出运经验，我们针对各类运输需求，精心制定相应地面服务标准，确保货物包装与装卸流程均严格满足运输要求，为客户提供安全、高效、专业的港口服务体验。",
          image: require("../../assets/img/港口地面.jpg"), // 替换为实际图片路径
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
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