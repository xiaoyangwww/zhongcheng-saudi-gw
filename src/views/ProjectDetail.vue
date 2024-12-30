<template>
  <div class="project">
    <!-- Banner -->
    <banner
      img="https://zcts-web.oss-cn-shenzhen.aliyuncs.com/zc/88bd32b107b74abca828763843e6af98.png"
      :title="$t('projectDetail')"
    />

    <!-- Project Product Section -->
    <div class="project-product">
        <!-- 导航栏 -->
      <Section :href="'/casedetails/' + projectTypeId" :title="projectTypeName" :activeTab="$t('projectDetail')"></Section>
      <div class="project-product-content">
        <!-- Project Title -->
        <h1 class="project-title">{{ projectTitle }}</h1>

        <!-- Project Content -->
        <div class="project-description" v-html="projectContent"></div>

        <!-- Project Image List -->
        <div class="project-image-list">
          <div
            class="project-image-item"
            v-for="(img, index) in imageList"
            :key="index"
          >
            <img :src="img" alt="Project Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import Banner from "../components/Banner";
import { getProjectDetail } from "@/api/projectDetail.js";
import he from "he";
import Section from "../components/Section";
export default {
  components: {
    Banner,
    Section
  },
  data() {
    return {
      projectTypeId:null,
      projectTypeName:"",
      projectTitle: "", // 项目标题
      projectContent: "", // 项目内容，包含HTML标签
      imageList: [], // 项目案例图片列表
    };
  },
  created() {
    this.pid = this.$route.params.id;
    console.log(this.pid);
    this.loadData();
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      getProjectDetail(this.pid).then((res) => {
        console.log(res.data);
        this.projectTypeId = res.data.projectTypeId;
        this.projectTypeName = res.data.projectTypeName;
        this.projectTitle = res.data.title;
        this.projectContent = he.decode(res.data.description);
        this.imageList = res.data.imageUrl.split(",");
      });
    },
  },
};
</script>
  
  <style lang="scss">
.project {
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
      width: 1100px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 0;
    }
  }

  .project-title {
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin: 40px auto;
  }

  .project-description {
    text-align: left;
    font-size: 18px;
    line-height: 1.6;
    margin-bottom: 20px;
    white-space: pre-line; /* 保持换行符 */
  }

  .project-description p {
    // text-indent: 36px; /* 开头空两格 */
    margin: 10px 0;
  }

  .project-image-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px auto;
  }

  .project-image-item {
    // margin-bottom: 20px;
  }

  .project-image-item img {
    // width: 100%;
    width: 600px;
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
  }

  .project-image-item img:hover {
    transform: scale(1.05); /* 鼠标经过时稍微放大 */
  }
}
</style>
  