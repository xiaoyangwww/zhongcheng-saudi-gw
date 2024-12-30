<template>
  <div class="case">
    <banner
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
import { getProject } from "@/api/project.js";
export default {
  data() {
    return {
      loading: false,
      tabs: [
        // {
        //   label: "物流业务", // 修改为 物流业务
        //   name: "logistics",
        //   path: "/case/logistics",
        // },
        // {
        //   label: "物资业务", // 修改为 物资业务
        //   name: "materials",
        //   path: "/case/materials",
        // },
      ],

      routeMap: {
        logistics: "物流业务", // 对应 物流业务
        materials: "物资业务", // 对应 物资业务
      },

      activeTab: "物流业务", // 默认为 物流业务
    };
  },
  components: {
    Banner,
    Section,
  },
  created() {
    this.init();
  },
  // mounted() {
  //   const routeName = window.location.pathname.split("/").pop(); // 提取路由名称
  //   this.activeTab = this.routeMap[routeName];
  // },
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
      getProject().then((res) => {
        console.log(res.data);
        
        res.data.forEach((item) => {
          const route = item.link.split("/").pop();
          this.routeMap[route] = item.name;
          var tab = {
            id:item.id,
            label:item.name,
            path:item.link
          }
          this.tabs.push(tab);
          this.activeTab = this.routeMap[routeName];
        });
      });
    },
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