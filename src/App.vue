<template>
  <div id="app">
    <el-container>
      <el-header>
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

        <el-menu
          :default-active="defaultActive"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          :router="router"
          style="margin-top: 1px"
        >
          <el-menu-item index="/">首页</el-menu-item>
          <el-menu-item index="/goin">关于我们</el-menu-item>
          <el-menu-item index="/product">产品服务</el-menu-item>
          <el-menu-item index="/case">项目案例</el-menu-item>
          <el-menu-item index="/us">联系我们</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
      <div class="footer">
        <div class="footer-content">
          <ul class="content-nav">
            <li>
              <p>关于中成</p>
              <span>发展历程</span>
              <span>企业文化</span>
              <span>国内网络</span>
              <span>海外网络</span>
            </li>
            <li>
              <p>产品与服务</p>
              <span>国际工程物资采购</span>
              <span>“一站式”供应链服务</span>
              <span>全品类运输服务</span>
            </li>
            <li>
              <p>项目案例</p>
              <span>物流业务</span>
              <span>物资业务</span>
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
            <span
              >粤ICP备18093725号 | 版权所有© 中成国际运输深圳有限公司© 2024
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
      window.console.log(this.isShow);
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

.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 0.305rem !important;
  width: 90%;
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
}
.el-main {
  padding: 0 !important;
}

.footer {
  width: 100%;
  // height: 225px;
  overflow: hidden;
  background-color: #024190;

  &-content {
    width: 1400px;
    margin: 0 auto;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-between;

    .content-nav {
      display: flex;
      justify-content: space-around;

      li {
        display: flex;
        flex-direction: column;
        padding: 0 20px;
        align-items: flex-start;

        p {
          font-size: 18px;
          color: #f7f7f7;
          padding: 10px 0;
          font-weight: bold;
        }

        span {
          color: #f7f7f7;
          font-weight: 300;
          padding: 5px 0;
          font-size: 12px;
        }
      }
    }
    .wx-br {
      width: 10px;
      height: 100px;
      border-left: 1px solid #999999;
      margin-top: 20px;
    }
    .wx {
      display: flex;
      justify-self: center;
      align-items: center;
    }

    .wx-code {
      display: block;
      color: #fff;
      font-size: 16px;
    }

    .wx-text {
      display: block;
      color: #fff;
      font-size: 12px;
      margin-top: 5px;
    }

    .wx-img {
      width: 80px;
      height: 80px;
    }

    img {
      width: 170px;
      height: 170px;
      padding: 10px;
    }
  }

  .info {
    width: 100%;
    height: 35px;
    padding: 10px 20px;
    font-size: 12px;
    color: #666;
    background-color: #f8f8f8;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);

    .copyright {
      display: inline-flex;
      align-items: center;
      gap: 5px;

      img {
        width: 16px;
        height: 16px;
      }

      span {
        font-size: 12px;
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
        gap: 10px;

        a {
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
  margin-top: 80px;
  text-align: center;
  font-weight: 300;
  font-family: Microsoft YaHei, Lantinghei SC, Open Sans, Arial,
    Hiragino Sans GB, STHeiti, WenQuanYi Micro Hei, SimSun, sans-serif;
  letter-spacing: 12px;
  text-indent: 12px;
  color: #000000;
  animation: colorText-change 5s ease-out infinite, nudgeText-data-v-5aff6e40 5s ease-out infinite;
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
</style>
