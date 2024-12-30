<template>
  <div class="overseas">
    <div class="top">
      <h3>{{$t('overseasNetwork')}}</h3>
      <div class="underline"></div>
      <div class="border"></div>
    </div>
    <div class="w-map-content map-branch">
      <div class="w-map-module">
        <div v-for="(item, index) in titles" :key="index">
          <div v-html="item.title"> </div>
        </div>
        <!-- <p class="w-map-title">
          中成深圳，当前已在海外设立<span class="w-map-top">&nbsp;9&nbsp;</span
          >个直管驻点
        </p>
        <p class="w-map-title-btm">
          深耕非洲和东南亚地区超过<span class="w-map-top">&nbsp;14&nbsp;</span
          >年
        </p> -->
        <div class="w-map-content-info">
          <div class="w-branch-map-l">
            <div class="w-map-content-box">
              <img
                class="w-map-content-box-img"
                src="https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/world_map.png"
                alt=""
              />
              <span
                v-for="city in cities"
                :key="city.index"
                class="w-map-dot cur"
                :class="{
                  [city.index]: city.index !== '',
                }"
                :data-id="city.index"
                :value="city.name"
              >
                {{ city.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../../assets/css/world_map.css";
import { getOverseas,getOverseasTitleMsg } from "@/api/overseas.js";
export default {
  data() {
    return {
      cities: [
        {
          id: "laos",
          name: "老挝",
        },
        {
          id: "saudi-arabia",
          name: "沙特阿拉伯",
        },
        {
          id: "kenya",
          name: "肯尼亚",
        },
        {
          id: "sri-lanka",
          name: "斯里兰卡",
        },
        {
          id: "myanmar",
          name: "缅甸",
        },
        {
          id: "cambodia",
          name: "柬埔寨",
        },
        {
          id: "cameroon",
          name: "喀麦隆",
        },
        {
          id: "namibia",
          name: "纳米比亚",
        },
        {
          id: "malaysia",
          name: "马来西亚",
        },
      ],
      titles:[]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getOverseas().then((res) => {
        this.cities = res.data;
        console.log(res.data);
      });
      getOverseasTitleMsg().then((res) => {
        this.titles = res.data.overseasList;
        console.log(res.data);
      });
    },
  }
};
</script>

<style lang="scss">
.overseas {
  margin-top: 50px;
  animation: moveUp 0.8s ease-out forwards;
}


.w-map-top {
  font-size: 50px;
  color: #024190;
  font-weight: bold;
}
</style>