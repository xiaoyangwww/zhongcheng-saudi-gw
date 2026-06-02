<template>
  <!-- 合作伙伴模块 -->
  <div class="content-partner">
    <div class="title">
      <div class="top">
        <h3>{{ $t("partners") }}</h3>
        <div class="underline"></div>
      </div>
    </div>

    <div v-for="partner in partnerList" :key="partner.id">
      <div class="partner-section">
        <!-- 渲染合作伙伴名称 -->
        <h4>{{ partner.name }}</h4>

        <ul class="partner-list">
          <!-- 遍历合作伙伴的子项 -->
          <li v-for="client in partner.children" :key="client.id">
            <!-- 添加图片容器 -->
            <div class="img-container">
              <img :src="client.image" :alt="client.name" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { listPartner } from "@/api/partner.js";
import { handleTree } from "@/utils/ruoyi.js";
export default {
  data() {
    return {
      partnerList: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      listPartner(null).then((response) => {
        this.partnerList = handleTree(response.data, "id", "parentId");
        console.log(this.partnerList);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
//合作伙伴
.content-partner {
  padding: 60px 0;
  animation: moveUp 0.8s ease-out forwards;

  .title {
    padding: 0 100px;
  }

  .partner-section {
    margin-top: 40px;

    h4 {
      font-size: 24px;
      color: #16a085;
      margin-bottom: 20px;
      padding: 0 130px;
      text-align: start; // 使用逻辑属性替代left/right
      // margin-inline-start: 120px; // 替代margin-left
    }

    .partner-list {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      margin: 0 120px;

      li {
        flex: 0 0 20%; /* Adjust width */
        text-align: center;
        padding: 15px;
        box-sizing: border-box;

        .img-container {
          width: 100%;
          height: 120px; /* 固定高度 */
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px;
          background: #f1f1f1;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          overflow: hidden;

          img {
            max-width: 100%;
            max-height: 100%;
            object-fit: contain;
            transition: transform 0.3s;
          }
        }

        &:hover img {
          transform: scale(1.05);
        }
      }
    }
  }
}

// RTL 特定样式
[dir="rtl"] {
  .content-partner {
    .partner-section {
      h4 {
        // 阿拉伯语可能需要更大的右边距
        margin-inline-end: 120px;
        margin-inline-start: 0;
      }

      // .partner-list {
      //   // 保持图片列表从左到右排列，但整体容器右对齐
      //   margin-inline: 0 120px;
      //   justify-content: flex-end;
      // }
    }
  }
}
</style>