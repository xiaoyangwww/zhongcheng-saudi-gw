<template>
  <div class="domestic">
    <div class="top">
      <h3>{{ $t("domesticNetwork") }}</h3>
      <div class="underline"></div>
      <div class="border"></div>
    </div>
    <div class="map-content map-branch">
      <div class="map-module">
        <div v-for="(item, index) in titles" :key="index">
          <div v-html="item.title"></div>
        </div>
        <!-- <p class="map-title">
          国内<span class="map-top">&nbsp;13&nbsp;</span
          >家公司覆盖全国沿线主要港口城市
        </p> -->
        <div class="map-content-info">
          <div class="branch-map-l">
            <div class="map-content-box">
              <img
                class="map-content-box-img"
                src="https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/map-bj.png"
              />
              <span
                v-for="city in cities"
                :key="city.id"
                class="map-dot"
                :class="{
                  cur: city.selected,
                  [city.id]: city.id !== '',
                }"
                :data-id="city.id"
                :value="city.name"
                @mouseover="handleMouseOver(city.id)"
                @click="handleCityClick(city)"
              >
                {{ city.name }}
              </span>
            </div>

            <!-- 分公司信息弹窗 -->
            <div
              v-for="city in cities"
              :key="'company-' + city.id"
              :id="'company_' + city.id"
              class="branch-map-data"
              :class="'city-' + city.id"
              v-show="city.visible"
            >
              <div class="branch-map-data-title">
                <p>{{ city.name }}</p>
              </div>
              <div class="branch-map-data-info">
                <div
                  class="data-branch"
                  v-for="company in city.domesticCompanyPageList"
                  :key="company.companyName"
                >
                  <a href="#" target="_blank">
                    <p class="data-name">{{ company.companyName }}</p>
                  </a>
                  <p>{{ $t("address") }}： {{ company.address }}</p>
                  <p>{{ $t("phone") }}：{{ company.phone }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/css/map.css";
import { getDomesticCity, getDomesticTitleMsg } from "@/api/domesticCity.js";
export default {
  data() {
    return {
      cities: [
        {
          id: "shanghai",
          name: "上海",
          selected: false,
          visible: false,
          companyList: [
            {
              companyName: "中成(上海)国际物流有限公司",
              address: "上海市中山西路1279弄5号楼",
              phone: "021-8899999999",
            },
          ],
        },
        {
          id: "liaoning",
          name: "大连",
          selected: false,
          visible: false,
          companyList: [
            {
              companyName: "中成国际运输(大连)有限公司",
              address: "辽宁中山西路1279弄5号楼",
              phone: "021-8899999999",
            },
          ],
        },
        {
          id: "beijing",
          name: "北京",
          selected: false,
          visible: false,
          companyList: [
            {
              companyName: "中成国际运输有限公司(总公司)",
              address: "北京市朝阳区广渠路首享科技大厦19层",
              phone: "010－99887777",
            },
            {
              companyName: "中成运国际贸易(北京)有限公司",
              address: "北京市朝阳区广渠路首享科技大厦19层",
              phone: "010－99887777",
            },
          ],
        },
        {
          id: "guangdong",
          name: "广东",
          selected: false,
          visible: false,
          companyList: [
            {
              companyName: "中成国际运输深圳有限公司广州分公司",
              address: "广州市越秀区广州大道中289号南方日报",
              phone: "18688864252",
            },
            {
              companyName: "中成(广东)供应链管理有限公司",
              address: "广州市越秀区广州大道中289号南方日报",
              phone: "18688864252",
            },
            {
              companyName: "广东中成物流科技有限公司",
              address: "广州市越秀区广州大道中289号南方日报",
              phone: "18688864252",
            },
            {
              companyName: "广东中州实业发展有限公司",
              address: "广州市越秀区广州大道中289号南方日报",
              phone: "18688864252",
            },
          ],
        },
        {
          id: "shenzhen",
          name: "深圳",
          selected: false,
          visible: false,
          companyList: [
            {
              companyName: "中成国际运输深圳有限公司",
              address: "广州市越秀区广州大道中289号南方日报",
              phone: "18688864252",
            },
          ],
        },
        {
          id: "yunnan",
          name: "昆明",
          selected: false,
          visible: false,
          companyList: [
            {
              companyName: "奥嵊物流(云南)有限公司",
              address: "昆明市青年路389号志远大厦副楼（志远新天地）5楼E座",
              phone: "0871-66349955",
            },
          ],
        },
        {
          id: "tianjin",
          name: "天津",
          selected: false,
          visible: false,
          companyList: [
            {
              companyName: "奥维国际物流(天津)有限公司",
              address: "昆明市青年路389号志远大厦副楼（志远新天地）5楼E座",
              phone: "0871-66349955",
            },
          ],
        },
        {
          id: "hubei",
          name: "武汉",
          selected: false,
          visible: false,
          companyList: [
            {
              companyName: "中成国际运输有限公司湖北分公司",
              address: "昆明市青年路389号志远大厦副楼（志远新天地）5楼E座",
              phone: "0871-66349955",
            },
          ],
        },
        {
          id: "shandong",
          name: "青岛",
          selected: false,
          visible: false,
          companyList: [
            {
              companyName: "中成国际运输山东有限公司",
              address: "昆明市青年路389号志远大厦副楼（志远新天地）5楼E座",
              phone: "0871-66349955",
            },
          ],
        },
      ],
      titles: [],
    };
  },
  methods: {
    // 处理鼠标悬停事件
    handleMouseOver(id) {
      const city = this.cities.find((city) => city.id === id);
      city.selected = true;
      // city.visible = true;
      this.resetOtherCities(city.id);
    },

    // 处理点击事件
    handleCityClick(city) {
      this.cities.forEach((c) => {
        c.visible = false;
        c.selected = false;
      });
      city.visible = true;
      city.selected = true;
    },
    // 处理点击其他地方隐藏信息
    handleDocumentClick(event) {
      const clickedInside = event.target.closest(".map-content-box");
      if (!clickedInside) {
        this.cities.forEach((city) => {
          city.visible = false;
          city.selected = false;
        });
      }
    },
    // 重置其他城市的选择状态
    resetOtherCities(selectedId) {
      this.cities.forEach((city) => {
        if (city.id !== selectedId) {
          city.selected = false;
          // city.visible = false;
        }
      });
    },
  },
  mounted() {
    getDomesticCity(null).then((res) => {
      this.cities = res.data;
      this.cities.forEach((item) => {
        item.selected = item.selected == 0 ? false : true;
        item.visible = item.visible == 0 ? false : true;
      });
      console.log(res);
    });
    getDomesticTitleMsg().then((res) => {
      this.titles = res.data.domesticList;
      console.log(res.data);
    });
    // 默认显示上海
    const defaultCity = this.cities.find((city) => city.id === "guangdong");
    defaultCity.selected = true;
    defaultCity.visible = true;
    // 在点击页面其他地方时隐藏弹窗
    document.addEventListener("click", this.handleDocumentClick);
  },
  destroyed() {
    // 组件销毁时移除事件监听
    document.removeEventListener("click", this.handleDocumentClick);
  },
};
</script>

<style lang="scss">
.domestic {
  margin-top: 50px;
  animation: moveUp 0.8s ease-out forwards;
}

.map-top {
  font-size: 50px;
  color: #16A085;
  font-weight: bold;
}
</style>
