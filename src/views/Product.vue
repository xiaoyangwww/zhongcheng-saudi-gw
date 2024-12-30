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
import { getService } from "@/api/service.js";
export default {
  data() {
    return {
      loading: false,
      tabs: [
        // {
        //   label: "全品类运输服务",
        //   name: "transport",
        //   path: "/product/transport",
        // },
        // {
        //   label: "“一站式”供应链服务",
        //   name: "supplyChain",
        //   path: "/product/supplyChain",
        // },
        // {
        //   label: "主营工程物资产品",
        //   name: "mainProducts",
        //   path: "/product/mainProducts",
        // },
      ],
      routeMap: {
        transport: "全品类运输服务",
        supplyChain: "“一站式”供应链服务",
        mainProducts: "主营工程物资产品",
      },
      activeTab: "全品类运输服务",
    };
  },
  components: {
    Banner,
    Section,
  },
  created() {
    this.init();
  },
  watch: {
    // 监听路由变化，更新默认激活项
    $route(to) {
      const routeName = window.location.pathname.split("/").pop(); // 提取路由名称
      this.activeTab = this.routeMap[routeName];
    },
  },
  methods: {
    init() {
      const routeName = window.location.pathname.split("/").pop(); // 提取路由名称
      getService().then((res) => {
        res.data.forEach((item) => {
          const route = item.link.split("/").pop();
          this.routeMap[route] = item.serviceName;
          var tab = {
            id: item.id,
            label: item.serviceName,
            path: item.link,
          };
          this.tabs.push(tab);
          this.activeTab = this.routeMap[routeName];
        });
      });
    },
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