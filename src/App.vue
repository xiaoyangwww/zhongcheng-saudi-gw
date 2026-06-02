<template>
  <div id="app">
    <el-container>
      <el-header class="fixed-header" style="width: 100%">
        <a href="/" class="logo-container">
          <img class="logo" src="./assets/img/logo2.png" />
          <div class="text-container">
            <span class="company-text">شركة التناغم المحيطي التجارية</span>
            <span class="english-text">Ocean Harmony Trade Co., Ltd</span>
          </div>
        </a>
        <div
          style="
            display: flex;
            justify-content: space-between;
            align-content: center;
          "
        >
          <el-menu
            :default-active="defaultActive"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            :router="true"
          >
            <!-- 遍历菜单数据 -->
            <el-menu-item
              v-for="menu in filteredMenus"
              :key="menu.id"
              :index="menu.path"
              v-if="!menu.children || menu.children.length === 0"
            >
              {{ menu.name }}
            </el-menu-item>

            <!-- 有子菜单的情况 -->
            <el-submenu v-else :index="menu.path" popper-class="open">
              <template slot="title">
                {{ menu.name }}
              </template>
              <!-- 遍历子菜单 -->
              <el-menu-item
                v-for="child in menu.children"
                :key="child.id"
                :index="child.path"
              >
                {{ child.name }}
              </el-menu-item>
            </el-submenu>
          </el-menu>

          <!-- 国际化语言选择器 - 沙特风格 -->
          <div class="language-selector">
            <button class="language-trigger" @click="toggleLanguageDropdown">
              <span class="current-language">
                {{
                  language === "zh"
                    ? "简体中文"
                    : language === "en"
                    ? "English"
                    : "العَرَبِيَّة"
                }}
              </span>
              <span class="language-icon">▼</span>
            </button>

            <div class="language-dropdown" v-show="showLanguageDropdown">
              <div
                class="language-option"
                :class="{ active: language === 'zh' }"
                @click="changeLanguage('zh')"
              >
                <span class="language-flag">🇨🇳</span>
                <span class="language-text">简体中文</span>
              </div>

              <div
                class="language-option"
                :class="{ active: language === 'en' }"
                @click="changeLanguage('en')"
              >
                <span class="language-flag">🇬🇧</span>
                <span class="language-text">English</span>
              </div>

              <div
                class="language-option"
                :class="{ active: language === 'sa' }"
                @click="changeLanguage('sa')"
              >
                <span class="language-flag">🇸🇦</span>
                <span class="language-text">العَرَبِيَّة</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 菜单 -->
      </el-header>

      <el-main>
        <router-view />
      </el-main>

      <div class="footer">
        <div class="footer-content">
          <ul class="content-nav">
            <!-- 动态渲染常规菜单项 -->
            <template v-if="Array.isArray(filteredMenus)">
              <li
                v-for="(menu, index) in filteredMenus"
                :key="menu.id"
                v-show="menu.path !== '/us' && menu.path !== '/'"
                :class="{
                  'li-left1': index === 1,
                  'li-left2': index === 2,
                  'li-left3': index > 2,
                }"
              >
                <p>{{ menu.name }}</p>
                <!-- 有子菜单时渲染子项 -->
                <template v-if="menu.children && menu.children.length">
                  <router-link
                    v-for="child in menu.children"
                    :key="child.id"
                    :to="child.path"
                  >
                    {{ child.name }}
                  </router-link>
                </template>
              </li>
            </template>

            <!-- 特殊处理「联系我们」 -->
            <li
              v-if="
                Array.isArray(filteredMenus) &&
                filteredMenus.find((item) => item.path === '/us')
              "
              style="margin-left: -30px"
            >
              <p>{{ $t("contactUs") }}</p>
              <div style="display: flex">
                <span class="contact-email">{{ $t("email") }}：</span>
                <span class="contact-text">{{ companyData.email }}</span>
              </div>
              <div style="display: flex">
                <span class="contact-phone">{{ $t("phone") }}：</span>
                <span class="contact-text">{{ companyData.phone }}</span>
              </div>
              <div style="display: flex">
                <span class="contact-address">{{ $t("address") }}：</span>
                <span class="contact-text">
                  {{ companyData.address }}
                </span>
              </div>
              <!-- <div style="display: flex">
                <span class="contact-WHATSAPP">{{ $t("WHATSAPP") }}：</span>
                <span class="contact-text">
                  <img src="./assets/img/wx.png" alt="" />
                </span>
              </div> -->
            </li>
          </ul>
          <div class="wx-br"></div>
          <div class="wx">
            <!-- <div>
              <span class="wx-code">{{ $t("weChatQRCode") }} </span>
              <span class="wx-text">{{ $t("scanToFollowUs") }}</span>
            </div> -->
            <img
              class="wx-img"
              src="https://zcts-web.oss-cn-shenzhen.aliyuncs.com/zc/3da7fec37e2940b395b38cada1089470.png"
              alt
            />
          </div>
        </div>
        <div class="info">
          <div class="copyright">
            <span>
              <!-- <a href="http://beian.miit.gov.cn/" target="_blank"></a> -->
              {{ $t("copyright") }} © {{ $t("companyName") }} © 2025
            </span>
          </div>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
import i18n from "@/i18n";
import { getMsg } from "@/api/company.js";
import { listMenu } from "@/api/menu.js";
import { handleTree } from "@/utils/ruoyi.js";

export default {
  data() {
    return {
      router: true,
      defaultActive: this.$route.path,
      isShow: false,
      language: this.$i18n.locale,
      companyData: {},
      filteredMenus: {},
      showLanguageDropdown: false,
    };
  },
  watch: {
    // 监听路由变化，更新默认激活项
    $route(to) {
      this.defaultActive = to.path;
    },
  },
  methods: {
    toggleLanguageDropdown() {
      this.showLanguageDropdown = !this.showLanguageDropdown;
    },
    changeLanguage(value) {
      console.log(value);
      this.language = value;
      this.showLanguageDropdown = false;
      i18n.locale = value;
      localStorage.setItem("language", value); //在localStorage中存入设置
      this.$message({ message: "设置语言成功", type: "success" });
      window.location.reload(); // 刷新页面
    },
    handleSelect(key) {
      this.isShow = true;
      this.defaultActive = key; // 更新默认激活项
    },
    init() {
      getMsg().then((res) => {
        this.companyData = res.data;
        console.log(res.data);
      });
      listMenu(null).then((response) => {
        this.filteredMenus = handleTree(response.data, "id", "parentId");
        console.log("menu===", this.filteredMenus);
      });
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss">
/* 定义字体 */
@font-face {
  font-family: "Alibaba_PuHuiTi";
  src: url("https://zcts-web.oss-cn-shenzhen.aliyuncs.com/zc/font/AlibabaPuHuiTi/Alibaba_PuHuiTi_2.0_55_Regular_55_Regular.ttf")
    format("truetype");
  // font-weight: 300;
  font-display: swap;
}

* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  margin-top: 30px; /* 根据导航栏高度调整页面内容的顶部间距 */
  a {
    text-decoration: none;
  }
}

#app {
  /* 应用样式 */
  font-family: "Alibaba_PuHuiTi", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999; /* 确保导航栏在最前 */
  background-color: #ffffff; /* 背景色 */
  // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 61px !important;
  min-width: 1485px !important;
  // max-width: 1985px !important;
  // margin: 0 auto;
  //background-color: #fff;

  // .logo {
  //   width: 280px;
  //   padding: 10px;
  //   img {
  //     width: 345px;
  //     line-height: 50px;
  //   }
  // }
  .logo-container {
    display: flex;
    align-items: center;
    gap: 20px; /* 控制图片与文本之间的间距 */
    .logo {
      width: 100px;
      line-height: 50px;
    }
    .text-container {
      display: flex;
      flex-direction: column;
    }

    .company-text {
      font-size: 20px;
      font-weight: bold;
      color: #000; /* 文字颜色 */
    }

    .english-text {
      padding-top: 4px;
      font-size: 18px;
      color: #888; /* 文字颜色 */
    }
  }

  .el-menu-demo {
    margin-top: 1px;
    margin-right: 50px;
  }
}

.el-menu .el-menu-item.is-active,
.el-menu .el-submenu.is-active > .el-submenu__title {
  background-color: #16a085 !important;
  color: #fff !important;
}

/* 去掉菜单项底部的下划线 */
.el-menu .el-menu-item,
.el-menu .el-submenu__title {
  border-bottom: none !important;
}
.el-menu-item {
  font-size: 18px !important;
}

.el-submenu__title {
  font-size: 18px !important;
}

.el-main {
  padding: 0 !important;
}

.open {
  margin-top: 24px;
}

.el-button {
  padding-top: 20px !important;
  font-size: 16px;
  color: #16a085 !important;
}

.footer {
  width: 100%;
  overflow: hidden;
  background-color: #16a085;

  &-content {
    width: 1470px;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 20px;
    display: flex;
    justify-content: space-between;

    .content-nav {
      display: flex;
      justify-content: space-around;

      li {
        display: flex;
        flex-direction: column;
        padding: 0 30px;
        align-items: flex-start;

        p {
          width: 260px;
          font-size: 20px; /* 增大字体 */
          color: #f7f7f7;
          padding: 15px 0;
          font-weight: bold;
        }

        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 8px 0;
          font-size: 16px; /* 增大字体 */
        }

        a {
          width: 260px;
          color: #f7f7f7;
          font-weight: 300;
          padding: 8px 0;
          font-size: 16px; /* 增大字体 */
          text-decoration: none;

          &:hover {
            color: #a8aaad; /* 鼠标悬停颜色 */
          }
        }
      }
    }

    .wx-br {
      width: 10px;
      height: 350px; /* 增加高度 */
      border-left: 1px solid #999999;
      margin-top: 40px;
      margin-right: 20px;
    }

    .wx {
      display: flex;
      // flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 35px;

      .wx-code {
        display: block;
        color: #fff;
        font-size: 18px; /* 增大字体 */
      }

      .wx-text {
        display: block;
        color: #fff;
        font-size: 14px; /* 增大字体 */
        margin-top: 10px;
      }

      .wx-img {
        width: 300px; /* 增大图片尺寸 */
        height: 300px;
      }
    }

    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
  }

  .info {
    width: 100%;
    height: 30px; /* 增加高度 */
    padding: 5px;
    font-size: 14px; /* 增大字体 */
    color: #666;
    background-color: #f8f8f8;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

    .copyright {
      display: inline-flex;
      align-items: center;
      gap: 10px; /* 增大间距 */

      img {
        width: 20px; /* 增大图标 */
        height: 20px;
      }
      a {
        color: #666;
      }
      a:hover {
        color: #16a085;
      }

      span {
        font-size: 14px; /* 增大字体 */
        color: #666;
      }
    }

    .footer-info {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 5px;

      span {
        display: flex;
        align-items: center;
        gap: 15px; /* 增大间距 */

        a {
          font-size: 14px; /* 增大字体 */
          color: #999;
          text-decoration: none;

          &:hover {
            color: #16a085;
          }
        }
      }
    }
  }
}

.mousep[data-v-5aff6e40] {
  text-align: center;
  font-weight: 300;
  letter-spacing: 12px;
  text-indent: 12px;
  color: #fff;
  animation: colorText-data-v-5aff6e40 5s ease-out infinite,
    nudgeText-data-v-5aff6e40 5s ease-out infinite;
}

@keyframes colorText-data-v-5aff6e40 {
  21% {
    color: hsla(0, 0%, 100%, 0);
  }
  30% {
    color: #fff;
  }
  51% {
    color: hsla(0, 0%, 100%, 0);
  }
  60% {
    color: #fff;
  }
  81% {
    color: hsla(0, 0%, 100%, 0);
  }
  90% {
    color: #fff;
  }
}

@keyframes nudgeText-data-v-5aff6e40 {
  0% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(2px);
  }
  30% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2px);
  }
  60% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(2px);
  }

  90% {
    transform: translateY(0);
  }
}

.chage[data-v-5aff6e50] {
  margin-top: 0px;
  text-align: center;
  font-weight: 300;
  letter-spacing: 12px;
  text-indent: 12px;
  color: #000000;
  animation: colorText-change 5s ease-out infinite,
    nudgeText-data-v-5aff6e40 5s ease-out infinite;
}

@keyframes colorText-change {
  21% {
    color: hsla(0, 0%, 100%, 0);
  }
  30% {
    color: #000000;
  }
  51% {
    color: hsla(0, 0%, 100%, 0);
  }
  60% {
    color: #000000;
  }
  81% {
    color: hsla(0, 0%, 100%, 0);
  }
  90% {
    color: #000000;
  }
}

@keyframes moveUp {
  from {
    opacity: 0; // 初始透明度为 0
    transform: translateY(40px); // 初始位置向下偏移 20px
  }
  to {
    opacity: 1; // 最终透明度为 1
    transform: translateY(0); // 回到原始位置
  }
}

// // 关于我们模块标题
.top {
  position: relative;
  margin-bottom: 40px;

  h3 {
    text-align: start; /* 自动适应方向 */
    font-size: 30px;
    color: #16a085;
    font-weight: bold;
    padding: 10px 0;
    margin-inline-start: 0; /* 逻辑属性 */
  }

  .underline {
    width: 100px;
    height: 4px;
    margin-top: 5px;
    border-radius: 2px;
    animation: expand 1s ease-out;

    /* 根据方向改变渐变 */
    &:dir(ltr) {
      background: linear-gradient(90deg, #16a085, #b6e6c6);
    }
    &:dir(rtl) {
      background: linear-gradient(90deg, #b6e6c6, #16a085);
    }

    margin-inline-start: 0px; /* 逻辑属性 */
  }
}

/* 横线扩展动画 */
@keyframes expand {
  from {
    width: 0;
  }
  to {
    width: 100px;
  }
}

// 首页标题样式
.quicn {
  font-size: 40px;
  font-weight: bold;
  color: #1d1d1d;
}

.quien {
  font-size: 40px;
  font-weight: bold;
  color: #000000;
  display: inline-block; /* 保证标题在同一行显示 */
  position: relative; /* 为伪元素提供定位上下文 */
}

.quien::after {
  content: ""; /* 创建伪元素 */
  position: absolute; /* 绝对定位 */
  left: 0; /* 定位到文字左侧 */
  bottom: -10px; /* 定位到底部并稍微向下偏移 */
  width: 100%; /* 伪元素宽度与文本宽度一致 */
  height: 4px; /* 下划线的高度 */
  background-color: #16a085; /* 下划线颜色与标题一致 */
  transition: all 0.3s ease; /* 添加过渡效果 */
}

.el-form-item__label {
  font-size: 18px !important;
}
.contact-text {
}
.li-left1 {
  margin-left: 0px; /* 或其他左对齐样式 */
}
.li-left2 {
  margin-left: -60px; /* 或其他左对齐样式 */
}
.li-left3 {
  margin-left: -20px; /* 或其他左对齐样式 */
}
// RTL 特定样式
[dir="rtl"] {
  .li-left1 {
    margin-left: -80px; /* 或其他左对齐样式 */
  }
  .li-left2 {
    margin-left: -20px; /* 或其他左对齐样式 */
  }
  .li-left3 {
    margin-left: -10px; /* 或其他左对齐样式 */
  }
}

.contact-title {
  text-align: left;
  display: block;
  width: 50px;
}
.contact-text {
  display: block;
  width: 250px;
}

/* 语言选择器 - 沙特风格 */
.language-selector {
  margin-right: 10px;
  margin-top: 15px;
  position: relative;
  display: inline-block;
}

.language-trigger {
  background-color: #16a085; /* 沙特国旗绿色 */
  color: white;
  border: 1px solid #16a085;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 120px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.language-trigger:hover {
  background-color: #16a085;
}

.language-icon {
  margin-left: 8px;
  font-size: 12px;
}

.language-dropdown {
  position: absolute;
  top: 70%;
  left: 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  min-width: 160px;
  margin-top: 5px;
}

.language-option {
  padding: 10px 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
}

.language-option:hover {
  background-color: #f5f5f5;
}

.language-option.active {
  background-color: #16a085;
  color: white;
}

.language-flag {
  margin: 0 10px;
  font-size: 18px;
}

.language-text {
  flex-grow: 1;
}

/* 沙特风格的阿拉伯语特殊处理 */
.language-option:last-child {
  // direction: rtl; /* 阿拉伯语从右到左 */
  // text-align: right;
}

/* 动画效果 */
.language-dropdown {
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
