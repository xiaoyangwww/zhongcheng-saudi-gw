<template>
  <div class="go-in">
    <banner
      img="https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/about_us.jpg"
      :title="$t('aboutUs')"
    />
    <div class="section" v-loading="loading">
      <div class="section-content">
        <!-- 导航栏 -->
        <Section
          :tabs="tabs"
          :routeMap="routeMap"
          :activeTab="activeTab"
          href="/goin"
          :title="$t('aboutUs')"
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
import { routeListMenu } from "@/api/menu.js";
export default {
  components: {
    Banner,
    swiper,
    swiperSlide,
    Section,
  },
  data() {
    return {
      tabs: [], // 初始为空，稍后根据语言动态设置
      routeMap: {}, // 初始为空，稍后根据语言动态设置
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
  methods: {
    // 可根据需要添加方法
  },
  created() {
    const currentLang = localStorage.getItem("language") || "zh"; // 获取当前语言，默认是中文

    // 根据当前语言设置 tabs 和 routeMap
    if (currentLang === "zh") {
      this.routeMap = {
        intro: "公司简介",
        history: "发展历程",
        culture: "企业文化",
        honor: "资质荣誉",
        cooperate: "合作伙伴",
        domestic: "国内网络",
        overseas: "海外网络",
      };
    } else if (currentLang === "en") {
      this.routeMap = {
        intro: "Introduction",
        history: "History",
        culture: "Culture",
        honor: "Honor",
        cooperate: "Partner",
        domestic: "Domestic Network",
        overseas: "Overseas Network",
      };
    }

    // 根据当前路由路径设置激活的标签
    const routeName = window.location.pathname.split("/").pop(); // 提取路由名称
    this.activeTab = this.routeMap[routeName] || "公司简介"; // 默认激活公司简介
  },
  watch: {
    // 监听路由变化，更新默认激活项
    $route(to) {
      const routeName = window.location.pathname.split("/").pop(); // 提取路由名称
      this.activeTab = this.routeMap[routeName];
    },
  },
  mounted() {
    routeListMenu('/goin/').then(res => {
      console.log(res.data);
      res.data.forEach(item => {
        var obj = {
          label:item.name,
          name:item.name,
          path:item.path
        }
        this.tabs.push(obj);
      })
    })
  }
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
  background: url(https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/bg_all.jpg)
    no-repeat center;
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