<template>
  <div class="case">
    <banner
      img="https://zcts-web.oss-cn-shenzhen.aliyuncs.com/zc/a921c56273144af09fa81e702fc31913.jpg"
      :title="projectTitle"
    />
    <div class="case-product">
      <!-- 导航栏 -->
      <Section href="/case" :title="$t('projectCases')" :activeTab="projectTitle"></Section>
      <div class="case-product-content">
        <!-- 渲染从后台获取的项目描述和内容，包含HTML标签 -->
        <div v-html="projectContent"></div>

        <!-- 项目案例 -->
        <div v-if="projectCases && projectCases.length">
          <h2>{{ $t("projectCases") }}</h2>
          <ul class="case-list">
            <li
              v-for="(caseItem, index) in projectCases"
              :key="index"
              class="case-item"
            >
              <a class="case-card" :href="'/projectdetail/' + caseItem.id">
                <img :src="caseItem.imageUrl" class="case-img" />
                <div class="case-overlay">
                  <h3 class="case-title">{{ caseItem.title }}</h3>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import { getProjectTypeById } from "@/api/projectType.js";
import he from "he";
import Section from "../components/Section";
export default {
  components: {
    Banner,
    Section,
  },
  data() {
    return {
      projectTitle: "", // 项目标题
      projectContent: "", // 项目内容，包含HTML标签
      projectCases: [], // 项目案例
    };
  },
  created() {
    this.pid = this.$route.params.id;
    console.log(this.pid);
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getProjectTypeById(this.pid).then((res) => {
        // 转换 HTML 实体
        res.data.html = he.decode(res.data.html);
        console.log(res.data);
        this.projectTitle = res.data.title;
        this.projectContent = res.data.html; // 直接赋值HTML内容
        var projectCases = [];
        res.data.projectDetailPageList.forEach((item) => {
          var projectCase = {
            id: item.id,
            title: item.title,
            imageUrl: item.imageUrl.split(",")[0],
          };
          projectCases.push(projectCase);
        });
        this.projectCases = projectCases;
      });
    },
  },
};
</script>

<style lang="scss">
.case {
  width: 100%;
  height: 100%;
  background: url(https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/bg_all.jpg)
    no-repeat center;
  background-size: cover;
  font-family: "Arial", sans-serif;

  &-product {
    width: 1425px;
    margin: 0 auto;
    background-color: #fff;

    &-content {
      width: 1000px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 0;

      h2 {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
        margin-top: 40px;
        color: #333;
        line-height: 1.4;
      }

      p {
        font-size: 18px;
        color: #666;
        line-height: 1.6;
      }
      ul {
        padding-left: 0;
        list-style-type: none; /* 去除li前面的点 */

        li {
          font-size: 18px;
          margin-bottom: 10px;
          color: #555;
        }
      }

      /* 项目案例列表 */
      .case-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px; /* 卡片间距 */
        padding-left: 0;
        list-style: none;
        justify-content: space-between;
      }

      .case-item {
        width: 300px; /* 每行四个卡片，减去间距 */
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition: transform 0.3s ease;
      }

      .case-card {
        display: block;
        position: relative;
        width: 100%;
        height: 200px;
        overflow: hidden;
        border-radius: 8px;
        transition: transform 0.3s ease;
      }

      .case-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: opacity 0.3s ease;
      }

      .case-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4); /* 透明遮罩 */
        opacity: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.3s ease;
        color: #fff;
        padding: 10px;
        text-align: center;
      }

      .case-title {
        max-width: 250px;
        font-size: 18px;
        font-weight: bold;
        color: #fff;
      }

      /* 鼠标悬停时的效果 */
      .case-item:hover .case-card {
        transform: scale(1.05); /* 卡片放大 */
      }

      .case-item:hover .case-overlay {
        opacity: 1; /* 显示遮罩 */
      }

      .case-item:hover .case-img {
        opacity: 0.7; /* 图片透明度降低 */
      }
    }
  }
}
</style>