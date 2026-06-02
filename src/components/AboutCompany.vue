<template>
  <div class="saudi-homebox" ref="about">
    <div class="saudi-warp">
      <!-- 标题 -->
      <div class="saudi_home_tt" ref="title">
        <div class="saudien">{{ $t("aboutUs") }}</div>
      </div>
      <!-- 公司简介 -->
      <div class="saudi-single">
        <div class="about">
          <div class="about-img-container">
            <img class="about-img" :src="about.url" alt="Ocean Harmony" />
          </div>
          <div class="about-text">
            <h4>{{ about.title }}</h4>
            <p v-html="about.content"></p>
            <a href="/goin" class="primary-button">{{
              $t("aboutOceanHarmony")
            }}</a>
          </div>
        </div>
      </div>
      <!-- 底部导航 -->
      <div class="box-bom">
        <ul class="ul ULLIST">
          <li class="li">
            <a href="/goin/brand" class="saudilibox">
              <pre class="sauditt">{{ $t("brandStory") }}</pre>
              <div class="saudinum icon-zcpinpaigushi"></div>
            </a>
          </li>
          <li class="li">
            <a href="/goin/culture" class="saudilibox">
              <pre class="sauditt">{{ $t("corporateCulture") }}</pre>
              <div class="saudinum icon-zcqiyewenhua"></div>
            </a>
          </li>
          <li class="li">
            <a href="/goin/history" class="saudilibox">
              <pre class="sauditt">{{ $t("developmentHistory") }}</pre>
              <div class="saudinum icon-zctongji"></div>
            </a>
          </li>
          <li class="li">
            <a href="/goin/cooperate" class="saudilibox">
              <pre class="sauditt">{{ $t("partners") }}</pre>
              <div class="saudinum icon-zchezuohuoban"></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- <p class="chage">
      <span class="el-icon-bottom" style="font-size: 30px"></span>
    </p> -->
  </div>
</template>

  <script>
import { getAbout } from "@/api/about.js";
import he from "he";
export default {
  name: "AboutCompany",
  data() {
    return {
      about: {},
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
      if (newIndex === 1) {
        this.$refs.about.classList.add("slide-in"); // Add animation class
      } else {
        this.$refs.about.classList.remove("slide-in"); // Remove animation class
      }
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getAbout().then((res) => {
        this.about = res.data;
        console.log(this.about);
        // 转换 HTML 实体
        this.about.content = he.decode(res.data.content);
      });
    },
  },
};
</script>
  
<style lang="scss" scoped>
@import "@/assets/scss/mixins";

/* 启用 rem 转换 */
@include use-rem(true);

// 主背景
.saudi-homebox {
  padding: px2rem(60) px2rem(20);
  max-height: px2rem(780);
}

// 容器
.saudi-warp {
  max-width: px2rem(1200);
  margin: 0 auto;
  padding: px2rem(20);
}

// 标题
.saudi_home_tt {
  text-align: center;
  margin-bottom: px2rem(60);
  .saudien {
    font-size: px2rem(40);
    font-weight: bold;
    color: #16a085;
  }
}

// 公司简介
.saudi-single {
  max-width: px2rem(1200);
  margin: 0 auto px2rem(40);
  background-color: white;
  box-shadow: 0 px2rem(4) px2rem(12) rgba(0, 0, 0, 0.1);
  border-radius: px2rem(10);
  overflow: hidden;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(px2rem(-5));
  }
}

.about {
  display: flex;
  align-items: flex-start;
  gap: px2rem(20);
  padding: px2rem(20);

  .about-img-container {
    width: px2rem(400);
    height: px2rem(416);
    overflow: hidden;
    border-radius: px2rem(10);

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: transform 0.3s ease;
    }
  }

  .about-text {
    flex: 1;
    h4 {
      font-size: px2rem(24);
      color: #16a085;
      margin-bottom: px2rem(20);
    }
    p {
      font-size: px2rem(18);
      line-height: 2;
      color: #333;
      margin-bottom: px2rem(15);
      display: -webkit-box;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
      overflow: hidden;
      max-height: px2rem(17 * 18); // 基于行高和行数计算
    }

    .primary-button {
      display: inline-block;
      padding: px2rem(10) px2rem(20);
      background-color: #16a085;
      color: white;
      border-radius: px2rem(5);
      font-size: px2rem(20);
      text-decoration: none;
      transition: background-color 0.3s;
      &:hover {
        background-color: #128874;
      }
    }
  }
}

// 底部导航
.box-bom {
  max-width: px2rem(1200);
  margin: 0 auto;
  .ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    gap: px2rem(20);
    .li {
      flex: 1;
      background-color: white;
      border-radius: px2rem(10);
      box-shadow: 0 px2rem(4) px2rem(12) rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
      &:hover {
        transform: translateY(px2rem(-5));
      }
      .saudilibox {
        display: block;
        padding: px2rem(20);
        text-decoration: none;
        color: #16a085;
        text-align: center;
        .sauditt {
          font-family: inherit !important;
          font-size: px2rem(18);
          font-weight: bold;
          margin-bottom: px2rem(10);
        }
        .saudinum {
          font-size: px2rem(40);
          color: #d4af37;
        }
      }
    }
  }
}
</style>