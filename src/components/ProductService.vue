<template>
  <div class="business-framework" ref="service">
    <div class="warp">
      <!-- 标题 -->
      <div class="saudi_service_tt">
        <div class="saudien">{{ $t("productsAndServices") }}</div>
      </div>
      <div class="content">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="content-item"
          :class="{ 'item-top': index % 2 === 1 }"
        >
          <img class="item-img" :src="item.imageUrl" />
          <div class="content-txt">
            <div class="content-txt-table">
              <div class="content-txt-cell">
                <img :src="item.iconUrl" alt="" />
                <h4>{{ item.serviceName }}</h4>
                <span>&nbsp;</span>
                <a :href="item.link"> {{ $t("ViewDetails") }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import { getService } from "@/api/service.js";
export default {
  name: "ProductService",
  data() {
    return {
      items: [],
    };
  },
  props: {
    currentNavIndex: {
      type: Number,
      required: true,
    },
  },
  watch: {
    currentNavIndex(newIndex) {
      if (newIndex === 2) {
        this.$refs.service.classList.add("slide-in"); // Add animation class
      } else {
        this.$refs.service.classList.remove("slide-in"); // Remove animation class
      }
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getService().then((res) => {
        this.items = res.data;
        console.log(this.items);
      });
    },
  },
};
</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/mixins";

/* 启用 rem 转换 */
@include use-rem(true);

.business-framework {
  background-size: cover;
  background-position: center;
  padding: px2rem(60) px2rem(20);
  max-height: px2rem(780);

  .warp {
    max-width: px2rem(1250);
    margin: 0 auto;
    padding: px2rem(20);
  }

  .title {
    text-align: center;
    margin-bottom: px2rem(120);
  }

  // 标题
  .saudi_service_tt {
    text-align: center;
    margin-bottom: px2rem(120);
    .saudien {
      font-size: px2rem(40);
      font-weight: bold;
      color: #16a085;
    }
  }

  .content {
    display: flex;
    max-width: px2rem(1800);
    max-height: px2rem(600);
    margin-top: px2rem(60);
  }

  .content-item {
    position: relative;
    max-width: px2rem(350);
    height: px2rem(500);
    margin: 0 auto px2rem(40);
    box-shadow: 0 px2rem(2) px2rem(8) rgba(0, 0, 0, 0.1);
    .item-img {
      width: 100%;
      height: 100%;
    }
  }

  .item-top {
    margin-top: px2rem(-60);
  }

  .content-txt {
    position: absolute;
    top: 0;
    left: 0;
    width: 90%;
    height: 100%;
    padding: 0 5%;
    text-align: center;
    z-index: 3;
    overflow: hidden;
  }

  .content-txt-table {
    width: 100%;
    height: 100%;
    display: table;
    position: relative;
  }

  .content-txt-cell {
    display: table-cell;
    vertical-align: middle;
    position: relative;
  }

  .content-txt-cell img {
    width: px2rem(60);
    margin: px2rem(20) auto 0;
    transition: transform 0.5s ease;
  }

  .content-txt-cell h4 {
    font-size: px2rem(28);
    margin-top: px2rem(15);
    color: #fff;
    transition: transform 0.5s ease;
  }

  .content-txt-cell a {
    opacity: 0;
    display: block;
    font-size: px2rem(18);
    font-weight: bold;
    color: #fff;
    width: px2rem(118);
    height: px2rem(38);
    line-height: px2rem(38);
    border: px2rem(2) solid #fff;
    margin: 10% auto;
    text-align: center;
    transition: all 0.5s;
  }

  .content-txt-cell:hover::after {
    opacity: 1;
  }

  .content-txt-cell:hover img {
    transform: translateY(px2rem(-30));
  }

  .content-txt-cell:hover h4 {
    transform: translateY(px2rem(-30));
  }

  .content-txt-cell:hover a {
    opacity: 1;
    transform: translateY(0);
    z-index: 3;
  }
}

// .business-framework {
//   position: relative;
//   opacity: 0; /* 初始状态为透明 */
//   transform: translateY(100%); /* 初始位置在左边 */
//   transition: opacity 1s ease-in-out, transform 1s ease-in-out;
// }

// .business-framework.slide-in {
//   opacity: 1; /* 动画完成后变为不透明 */
//   transform: translateY(0); /* 向右滑动到中心 */
// }
</style>
  