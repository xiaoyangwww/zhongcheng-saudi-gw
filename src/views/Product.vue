<template>
  <div class="product">
    <banner
      img="https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/bg_service.png"
      :title="$t('productsAndServices')"
    />
    <div class="product-content" v-loading="loading">
      <!-- 导航栏 -->
      <Section
        :tabs="tabs"
        :routeMap="routeMap"
        :activeTab="activeTab"
        href="/product"
        :title="$t('productsAndServices')"
      ></Section>
      <router-view />
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
      debugger;
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
      const res = await routeListMenu("/product/");
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
.product {
  width: 100%;
  height: 100%;
  background-color: #f1f1f1;
  background: url(https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/bg_all.jpg)
    no-repeat center;
  background-size: cover;
}

.product-content {
  width: 1425px;
  margin: 0 auto;
  background-color: #fff;
}
</style>