<template>
  <div id="app">
    <el-container>
      <el-header class="fixed-header" style="width: 100%">
        <a href="/" class="logo-container">
          <img
            class="logo"
            src="./assets/img/logo.png"
            alt="中成国际运输深圳有限公司"
          />
          <div class="text-container">
            <span class="company-text">中成国际运输深圳有限公司</span>
            <span class="english-text">ZCTS SHENZHEN CO., LTD.</span>
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
            :router="router"
          >
            <el-menu-item index="/">首页</el-menu-item>
            <el-submenu index="/goin" popper-class="open">
              <template slot="title">关于我们</template>
              <el-menu-item index="/goin/intro">公司简介</el-menu-item>
              <el-menu-item index="/goin/history">发展历程</el-menu-item>
              <el-menu-item index="/goin/culture">企业文化</el-menu-item>
              <el-menu-item index="/goin/honor">资质荣誉</el-menu-item>
              <el-menu-item index="/goin/cooperate">合作伙伴</el-menu-item>
              <el-menu-item index="/goin/domestic">国内网络</el-menu-item>
              <el-menu-item index="/goin/overseas">海外网络</el-menu-item>
            </el-submenu>
            <el-submenu index="/product" popper-class="open">
              <template slot="title">产品与服务</template>
              <el-menu-item index="/product/transport"
                >全品类运输服务</el-menu-item
              >
              <el-menu-item index="/product/supplyChain"
                >“一站式”供应链服务</el-menu-item
              >
              <el-menu-item index="/product/mainProducts"
                >主营工程物资产品</el-menu-item
              >
            </el-submenu>
            <el-submenu index="/case" popper-class="open">
              <template slot="title">项目案例</template>
              <el-menu-item index="/case/logistics">物流业务</el-menu-item>
              <el-menu-item index="/case/materials">物资业务</el-menu-item>
            </el-submenu>
            <el-menu-item index="/us">联系我们</el-menu-item>
          </el-menu>
          <!-- 国际化 -->
          <el-dropdown
            trigger="click"
            class="international"
            @command="handleSetLanguage"
          >
            <el-button type="text">
              <!-- 使用 Element UI 内置的语言图标 -->
              <i class="icon-zczhongyingwen"></i>
              <!-- 这里你可以使用你想要的图标 -->
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item
                :disabled="language === 'zh_CN'"
                command="zh_CN"
              >
                中文
              </el-dropdown-item>
              <el-dropdown-item
                :disabled="language === 'en_US'"
                command="en_US"
              >
                English
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <!-- 菜单 -->
      </el-header>

      <el-main>
        <router-view />
      </el-main>
      <div class="footer">
        <div class="footer-content">
          <ul class="content-nav">
            <li>
              <p>关于中成</p>
              <router-link to="/goin/history">发展历程</router-link>
              <router-link to="/goin/culture">企业文化</router-link>
              <router-link to="/goin/domestic">国内网络</router-link>
              <router-link to="/goin/overseas">海外网络</router-link>
            </li>
            <li>
              <p>产品与服务</p>
              <router-link to="/product/mainProducts"
                >主营工程物资产品</router-link
              >
              <router-link to="/product/supplyChain"
                >“一站式”供应链服务</router-link
              >
              <router-link to="/product/transport">全品类运输服务</router-link>
            </li>
            <li>
              <p>项目案例</p>
              <router-link to="/case/logistics">物流业务</router-link>
              <router-link to="/case/materials">物资业务</router-link>
            </li>
            <li>
              <p>联系我们</p>
              <span>邮箱：kejianlml@163.com</span>
              <span>电话：020-83480566</span>
              <span>地址：深圳市南山区蛇口太子路18号海景广场24楼B座</span>
            </li>
          </ul>
          <div class="wx-br"></div>
          <div class="wx">
            <div>
              <span class="wx-code">微信公众号二维码 </span>
              <span class="wx-text">扫一扫关注我们</span>
            </div>
            <img class="wx-img" src="./assets/img/code.png" alt />
          </div>
        </div>
        <div class="info">
          <div class="footer-info">
            <span>
              <a
                href="https://www.complant.com/gtzcjt/index.htm"
                target="_blank"
                rel="noopener noreferrer"
              >
                中成集团
              </a>
              |
              <a
                href="http://www.com-trans.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                中成运输
              </a>
            </span>
          </div>
          <div class="copyright">
            <img src="../src/assets/img/ga_icon.png" alt="公安图标" />
            <span>
              粤ICP备18093725号 | 版权所有© 中成国际运输深圳有限公司© 2024
              中成国际运输深圳有限公司
            </span>
          </div>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      router: true,
      defaultActive: this.$route.path,
      isShow: false,
      language: "zh_CN",
    };
  },
  watch: {
    // 监听路由变化，更新默认激活项
    $route(to) {
      this.defaultActive = to.path;
    },
  },
  methods: {
    handleSelect(key) {
      this.isShow = true;
      this.defaultActive = key; // 更新默认激活项
    },
    handleSetLanguage(value) {
      console.log(value);
      this.language = value;
      this.$i18n.locale = value;
      this.$message({ message: "设置语言成功", type: "success" });
      // this.$store.dispatch("app/setLanguage", value);
      // changeLanguage(value).then((response) => {
      //   window.location.reload();
      // });
    },
  },
};
</script>

<style lang="scss">
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
  background-color: #fff; /* 背景色 */
  // box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
}

.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 61px !important;
  min-width: 1485px !important;
  max-width: 1985px !important;
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
      width: 200px;
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
      padding-top: 3px;
      font-size: 14px;
      color: #888; /* 文字颜色 */
    }
  }

  .el-menu-demo {
    margin-top: 1px;
    margin-right: 50px;
  }
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

// 国际化
.international {
  display: flex;
  align-items: center;
  margin-right: 20px;
  i {
    font-size: 24px;
  }
}

.el-button {
  padding-top: 20px !important;
  font-size: 16px;
  color: #024190 !important;
}

.footer {
  width: 100%;
  overflow: hidden;
  background-color: #024190;

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
          font-size: 22px; /* 增大字体 */
          color: #f7f7f7;
          padding: 15px 0;
          font-weight: bold;
        }

        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 8px 0;
          font-size: 18px; /* 增大字体 */
        }

        a {
          color: #f7f7f7;
          font-weight: 300;
          padding: 8px 0;
          font-size: 18px; /* 增大字体 */
          text-decoration: none;

          &:hover {
            color: #a8aaad; /* 鼠标悬停颜色 */
          }
        }
      }
    }

    .wx-br {
      width: 10px;
      height: 150px; /* 增加高度 */
      border-left: 1px solid #999999;
      margin-top: 20px;
    }

    .wx {
      display: flex;
      // flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 15px;

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
        width: 100px; /* 增大图片尺寸 */
        height: 100px;
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
    height: 50px; /* 增加高度 */
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

      span {
        font-size: 14px; /* 增大字体 */
        color: #666;
      }
    }

    .footer-info {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;

      span {
        display: flex;
        align-items: center;
        gap: 15px; /* 增大间距 */

        a {
          font-size: 14px; /* 增大字体 */
          color: #999;
          text-decoration: none;

          &:hover {
            color: rgb(0, 0, 0);
          }
        }
      }
    }
  }
}

.mousep[data-v-5aff6e40] {
  text-align: center;
  font-weight: 300;
  font-family: Microsoft YaHei, Lantinghei SC, Open Sans, Arial,
    Hiragino Sans GB, STHeiti, WenQuanYi Micro Hei, SimSun, sans-serif;
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
  font-family: Microsoft YaHei, Lantinghei SC, Open Sans, Arial,
    Hiragino Sans GB, STHeiti, WenQuanYi Micro Hei, SimSun, sans-serif;
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
</style>
