<template>
  <div class="overseas">
    <div class="top">
      <h3>海外网络</h3>
      <p>OVERSEAS</p>
      <div class="border"></div>
    </div>
    <div class="w-map-content map-branch">
      <div class="w-map-module">
        <p class="w-map-title-1">
          中成深圳，当前已在海外设立<span class="w-map-top">&nbsp;9&nbsp;</span
          >个直管驻点
        </p>
        <p class="w-map-title">
          深耕非洲和东南亚地区超过<span class="w-map-top">&nbsp;14&nbsp;</span
          >年
        </p>
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
                :key="city.id"
                class="w-map-dot cur"
                :class="{
                  [city.id]: city.id !== '',
                }"
                :data-id="city.id"
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
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.overseas {
  margin-top: 50px;
  animation: moveUp 0.8s ease-out forwards;
}

.top {
  h3,
  p {
    text-align: left !important;
    font-size: 25px;
    color: #024190;
    font-weight: bold;
    margin-left: 120px;
  }

  h3 {
    font-size: 30px;
  }

  p {
    font-size: 17px;
    font-weight: normal;
    margin-top: 20px;
  }
}

.w-map-top {
  font-size: 50px;
  color: #024190;
  font-weight: bold;
}
</style>