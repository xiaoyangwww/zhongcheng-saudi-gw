<template>
  <div class="qui-homebox" ref="about">
    <div class="qui-warp">
      <!-- 标题 -->
      <div class="qui_home_tt" ref="title">
        <div class="quicn">关于我们</div>
        <div class="quien">ABOUT US</div>
      </div>
      <!-- 公司简介 -->
      <div class="qui-single">
        <div class="about">
          <div class="about-img-container">
            <img
              class="about-img"
              src="https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img/company.jpg"
            />
          </div>
          <div class="about-text">
            <h4>公司简介</h4>
            <p>
              <strong>中成国际运输深圳有限公司</strong
              >（简称中成深圳）成立于2005年，隶属于中成国际运输有限公司（简称中成运输），中成运输隶属于
              <a
                href="https://www.complant.com/gtzcjt/index.htm"
                target="_blank"
                ><span style="color: #054391"
                  ><span style="text-align: justify"
                    ><strong>中国成套设备进出口集团有限公司</strong></span
                  ></span
                ></a
              >（简称中成集团）。
            </p>

            <p>
              中成深圳传承了中成运输优良的服务理念，一直以“<strong>聚集客户需求，服务成就价值</strong>”为使命，致力于成为领航全球的“一站式”工程项目专业供应链服务商。经过多年的锐意创新和积极奋进，中成深圳已通过丰富的内贸和国际贸易经验、全类型的物流配送服务，成功构建出高效运作的现代国际供应链服务体系。
            </p>

            <p>
              时至今日，中成深圳凭借“一带一路”海外工程项目领域中积累和开发的众多优质供应商资源，为大型基建企业提供全程供应链解决方案，在业内树立了良好的品牌形象和服务口碑。
            </p>

            <!-- <a href="/goin" class="qui_mm_all2">了解中成 ></a> -->
            <a cla href="/goin" class="primary-button qui_mm_all2">了解中成</a>
          </div>
        </div>
      </div>
      <div class="box-bom">
        <ul class="ul ULLIST">
          <li class="li">
            <a href="/goin/development" class="quilibox">
              <pre class="quitt">发展历程</pre>
              <div class="quinum icon-zctongji"></div>
            </a>
          </li>
          <li class="li">
            <a href="/goin/culture" class="quilibox">
              <pre class="quitt">企业文化</pre>
              <div class="quinum icon-zcqiyewenhua"></div>
            </a>
          </li>
          <li class="li">
            <a href="/goin/domestic-network" class="quilibox">
              <pre class="quitt">国内网络</pre>
              <div class="quinum icon-zcwangluo"></div>
            </a>
          </li>
          <li class="li">
            <a href="/goin/overseas-network" class="quilibox">
              <pre class="quitt">海外网络</pre>
              <div class="quinum icon-zcshenjing"></div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <p data-v-5aff6e50 class="chage" ><span class="el-icon-bottom" style="font-size: 30px;"></span></p>
  </div>
</template>

  <script>
export default {
  name: "AboutCompany",
  data() {
    return {};
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
};
</script>
  
  <style lang="scss" scoped>
// 关于中成
.qui-homebox {
  background-size: cover;
  background-position: center;
  padding: 60px 20px;
}
// .qui-homebox {
//   position: relative;
//   opacity: 0; /* 初始状态为透明 */
//   transform: translateX(-100%); /* 初始位置在左边 */
//   transition: opacity 1s ease-in-out, transform 1s ease-in-out;
// }

// .qui-homebox.slide-in {
//   opacity: 1; /* 动画完成后变为不透明 */
//   transform: translateX(0); /* 向右滑动到中心 */
// }

.qui-warp {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.qui_home_tt {
  text-align: center;
  margin-bottom: 40px;
}

.quicn {
  font-size: 36px;
  font-weight: bold;
  color: #1d1d1d;
}

.quien {
  font-size: 18px;
  color: #666;
  margin-top: 8px;
}

.qui-single {
  max-width: 1200px;
  margin: 0 auto 40px;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.qui-single {
  transition: transform 0.3s ease; /* 添加平滑过渡动画 */
}

.qui-single:hover {
  transform: translateY(-5px); /* 鼠标悬停时模块向上移动5px */
}
// 文字部分
.about {
  display: flex;
  align-items: flex-start; /* 使文字和图片在垂直方向对齐 */
  gap: 20px; /* 设置图片与文字之间的间距 */
  .about-img {
    width: 100%; /* 设置图片的初始宽度 */
    height: 100%;
    transition: transform 0.3s ease-in-out; /* 设置过渡效果 */
  }

  .about-img:hover {
    transform: scale(1.3); /* 鼠标悬停时放大图片 */
  }

  .about-text {
    position: relative;
    max-width: 700px; /* 控制文字块的最大宽度，可以根据需要调整 */
    height: 416px;
    margin-left: 20px;

    h4 {
      margin: 15px 0;
    }
    p {
      font-size: 14px;
      line-height: 1.6;
      margin: 0 0 20px;
      text-indent: 2em;
      text-align: justify;
    }
    .primary-button {
      position: absolute;
      right: 15px;
      bottom: 50px;
      display: inline-block;
      text-decoration: none;
      padding: 6px 12px;
      background-color: #024190;
      color: white;
      border-radius: 15px;
      font-size: 12px;
      text-align: center;
    }
  }
  .about-img-container {
    width: 400px;
    height: 416px;
    overflow: hidden; /* 隐藏溢出部分 */
    display: inline-block; /* 保证容器自适应图片大小 */
  }

  .qui_mm_all2 {
    display: inline-block;
    font-size: 16px;
    transition: background-color 0.3s;
    position: absolute;
    color: #054391;
    bottom: 45px;
    right: 10px;
  }
}

.box-bom {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;

  .ul {
    max-width: 1200px;
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 73px;
  }

  .li {
    background-color: white;
    padding: 15px 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    flex: 1;
    min-width: 205px;
    text-align: center;
    transition: transform 0.3s ease-in-out; /* 添加过渡效果 */
  }

  .li:hover {
    transform: translateY(-3px); /* 悬停时上移 3px */
  }

  .quilibox {
    padding: 10px;
    display: block;
    text-decoration: none;
    color: inherit; /* 继承父元素颜色 */
  }

  .quitt {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
    font-family: "Microsoft YaHei";
  }

  .quinum {
    margin: 5px 0;
    font-size: 50px;
  }

  .quilibox:hover {
    color: #024190;
  }
}
</style>
  