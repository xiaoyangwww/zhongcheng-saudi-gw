<template>
  <div class="case">
    <Banner
      img="https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/bg_project.png"
      :title="$t('projectCases')"
    />
    <div class="case-section" v-loading="loading">
      <div class="case-section-content">
        <!-- 导航栏 -->
        <Section
          :tabs="tabs"
          :routeMap="routeMap"
          :activeTab="activeTab"
          href="/case"
          :title="$t('projectCases')"
        ></Section>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner";
import Section from "../components/Section";
import { routeListMenu } from "@/api/menu.js";

export default {
  data() {
    return {
      loading: false,
      tabs: [],
      routeMap: {},
      activeTab: "",
    };
  },
  components: {
    Banner,
    Section,
  },
  methods: {
    generateRouteMap(menuData) {
      debugger
      const routeMap = {};
      menuData.forEach((item) => {
        const routeName = item.path.split("/").pop();
        routeMap[routeName] = item.name;
      });
      return routeMap;
    },

    setActiveTab() {
      const routeName = this.$route.path.split("/").pop();
      this.activeTab =
        this.routeMap[routeName] ||
        (this.tabs.length > 0 ? this.tabs[0].name : "") ||
        "";
    },
  },
  watch: {
    $route() {
      this.setActiveTab();
    },
  },
  async mounted() {
    this.loading = true;
    try {
      const res = await routeListMenu("/case/");
      this.tabs = res.data.map((item) => ({
        label: item.name,
        name: item.name,
        path: item.path,
      }));

      this.routeMap = this.generateRouteMap(res.data);
      this.setActiveTab();
    } catch (error) {
      console.error("获取菜单失败:", error);
    } finally {
      this.loading = false;
    }
  },
};
</script>

 <style lang="scss" scoped>
.case {
  width: 100%;
  height: 100%;
  background: url(https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/bg_all.jpg)
    no-repeat center;
  background-size: cover;

  .case-section {
    width: 100%;

    .case-section-content {
      width: 1425px;
      margin: 0 auto;
      background-color: #fff;
    }
  }
}
</style>