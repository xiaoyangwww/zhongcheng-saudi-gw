<template>
  <div class="go-in">
    <banner
      img="https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/about_us.jpg"
      title="关于我们"
    />
    <div class="section" v-loading="loading">
      <div class="section-content">
        <!-- 导航栏 -->
        <Section
          :tabs="tabs"
          :routeMap="routeMap"
          :activeTab="activeTab"
          href="/goin"
          title="关于我们"
        ></Section>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Section from "../components/Section";
export default {
  components: {
    Banner,
    swiper,
    swiperSlide,
    Section,
  },
  data() {
    return {
      tabs: [
        { label: "公司简介", name: "intro", path: "/goin/intro" },
        { label: "发展历程", name: "history", path: "/goin/history" },
        { label: "企业文化", name: "culture", path: "/goin/culture" },
        { label: "资质荣誉", name: "honor", path: "/goin/honor" },
        { label: "合作伙伴", name: "cooperate", path: "/goin/cooperate" },
        { label: "国内网络", name: "domestic", path: "/goin/domestic" },
        { label: "海外网络", name: "overseas", path: "/goin/overseas" },
      ],
      routeMap: {
        // 路由名称和中文名称映射
        intro: "公司简介",
        history: "发展历程",
        culture: "企业文化",
        honor: "资质荣誉",
        cooperate: "合作伙伴",
        domestic: "国内网络",
        overseas: "海外网络",
      },
      activeTab: "公司简介",
      loading: false,
      honorList: [],
      partnerImg: [],
      courseList: [],
      teamItem: [],
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      dialogTableVisible: false,
      dialogUrl: "",
      dialogTitle: "",
    };
  },
  methods: {},
  created() {
    const routeName = window.location.pathname.split("/").pop(); // 提取路由名称
    this.activeTab = this.routeMap[routeName];
  },
  watch: {
    // 监听路由变化，更新默认激活项
    $route(to) {
      const routeName = window.location.pathname.split("/").pop(); // 提取路由名称
      this.activeTab = this.routeMap[routeName];
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.go-in {
  width: 100%;
  height: 100%;
  // background-color: #f1f1f1;
  background: url(https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/bg_all.jpg) no-repeat center;
  background-size: cover;
  position: relative;
  overflow: hidden;
  .section {
    width: 100%;
    &-content {
      width: 1425px;
      margin: 0 auto;
      background-color: #fff;
    }
  }
}


</style>