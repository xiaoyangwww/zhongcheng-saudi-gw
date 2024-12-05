<template>
  <div class="culture">
    <div class="top">
      <h3>企业文化</h3>
      <p>COMTRANS CULTURE</p>
      <div class="border"></div>
      <div class="timeline"></div>
    </div>
    <!-- <section class="enterprise-culture">
      <div class="culture-content">
        <div class="culture-item" v-for="(item, index) in cultureData" :key="index">
          <h3>{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </section> -->

    <div id="c2-about-us-valuenotion">
      <div class="card-container">
        <div
          class="card-item"
          v-for="(card, index) in cards"
          :key="index"
          @mouseover="hoverCard(index)"
          @mouseleave="leaveCard(index)"
          :class="{ active: hoveredIndex === index }"
        >
          <embed class="title-en" :src="card.embedImg" type="image/svg+xml" />
          <p class="title">{{ card.title }}</p>
          <i class="el-icon-s-opportunity icon" aria-hidden="true"></i>
          <div>
            <span v-for="(text, i) in card.texts" :key="i" class="content"
              >{{ text }}<br
            /></span>
          </div>
          <img
            :src="hoveredIndex === index ? card.hoverImage : card.defaultImage"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "使命",
          embedImg:
            "http://www.chinacreator.com/hnkc/img/pages/aboutUs/c2-about-us-card-mission.svg",
          texts: ["聚焦客户需求 服务成就价值"],
          defaultImage:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag1.png",
          hoverImage:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag1-hover.png",
        },
        {
          title: "愿景",
          embedImg:
            "http://www.chinacreator.com/hnkc/img/pages/aboutUs/c2-about-us-card-vision.svg",
          texts: ["领航全球工程项目综合服务商"],
          defaultImage:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag2.png",
          hoverImage:
            "	https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag2-hover.png",
        },
        {
          title: "核心价值观",
          embedImg:
            "http://www.chinacreator.com/hnkc/img/pages/aboutUs/c2-about-us-card-value.svg",
          texts: [
            "以客户为中心，务实、精进、",
            "创新；",
            "以奋斗者为本，诚信、担当、",
            "共赢。"
          ],
          defaultImage:
            "	https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag3.png",
          hoverImage:
            "	https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag3-hover.png",
        },

        {
          title: "经营理念",
          embedImg:
            "http://www.chinacreator.com/hnkc/img/pages/aboutUs/c2-about-us-card-mission.svg",
          texts: ["服务为本创效益，", "奋斗为本求发展，", "诚信为本现共赢。"],
          defaultImage:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag1.png",
          hoverImage:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag1-hover.png",
        },
        {
          title: "服务理念",
          embedImg:
            "http://www.chinacreator.com/hnkc/img/pages/aboutUs/c2-about-us-card-vision.svg",
          texts: ["至诚至信的完美服务", "超出预期的客户满意"],
          defaultImage:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag2.png",
          hoverImage:
            "	https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag2-hover.png",
        },
        {
          title: "质量理念",
          embedImg:
            "http://www.chinacreator.com/hnkc/img/pages/aboutUs/c2-about-us-card-value.svg",
          texts: ["规范管理、高效服务、","安全及时、打造品牌。"],
          defaultImage:
            "	https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag3.png",
          hoverImage:
            "	https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag3-hover.png",
        },
        {
          title: "市场理念",
          embedImg:
            "http://www.chinacreator.com/hnkc/img/pages/aboutUs/c2-about-us-card-mission.svg",
          texts: ["今天的质量是明天的市场，", "企业的信誉是无限的市场"],
          defaultImage:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag1.png",
          hoverImage:
            "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/card-tag1-hover.png",
        },
      ],
      hoveredIndex: null,
    };
  },
  methods: {
    hoverCard(index) {
      this.hoveredIndex = index;
    },
    leaveCard() {
      this.hoveredIndex = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.culture {
  margin-top: 60px;
  animation: moveUp 0.8s ease-out forwards;
}

.top {
  h3,
  p {
    text-align: left;
    font-size: 25px;
    color: #024190;
    font-weight: bold;
    padding: 10px 0;
    margin-left: 120px;
  }

  h3 {
    font-size: 30px;
  }

  p {
    font-size: 17px;
    font-weight: normal;
  }
}

// .enterprise-culture {
//   padding: 50px 20px;
//   text-align: center;
//   background: url('../../assets/img/home_3.jpg') no-repeat center;

//   .culture-content {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 20px;

//     .culture-item {
//       width: 300px;
//       padding: 20px;
//       background: rgb(255, 255, 255);
//       color: #000000;
//       border-radius: 10px;
//       box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
//       transition: transform 0.3s ease;

//       &:hover {
//         transform: translateY(-10px);
//       }

//       h3 {
//         font-size: 20px;
//         margin-bottom: 10px;
//         color: #024190;
//       }

//       p {
//         font-size: 16px;
//         line-height: 1.8;
//       }
//     }
//   }
// }

#c2-about-us-valuenotion {
  padding-left: 5%;
  padding-right: 5%;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #f6f6f6;
  min-height: 266.67px;
  position: relative;
  cursor: pointer;
  padding-top: 66.67px;
  padding-bottom: 66.67px;
  background-color: #f6f6f6;
  box-sizing: border-box;
}

#c2-about-us-valuenotion > .card-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

.card-item {
  margin-top: 26.67px;
  background-color: #fff;
  width: 500px;
  height: 550px;
  border-radius: 10.67px;
  width: 30%;
  box-sizing: border-box;
  color: #000000;
  font-size: 40px;
  font-weight: bold;
  line-height: 53.33px;
  padding: 42.67px 24px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  /* 添加平滑过渡效果 */
  transform: scale(1);
  /* 默认大小 */
}

#c2-about-us-valuenotion > .card-container > .card-item > .title-en {
  margin-bottom: 45px;
  display: block;
  z-index: -1;
  width: 214.056px;
  /* SVG宽度 */
  height: 47.208px;
  /* SVG高度 */
}

.content {
  font-size: 24px;
}

.card-item:hover {
  transform: scale(1.05);
  /* 鼠标悬停时放大效果 */
  background-color: #024190;
  /* 背景变深色 */
  color: #fff;
  /* 字体颜色变白 */
}

.card-item > i {
  color: #024190;
  transition: color 0.3s ease;
  /* SVG颜色过渡 */
}

.card-item:hover > i {
  color: #ff9900;
  /* 悬停时SVG变白 */
}

.card-item > img {
  position: absolute;
  width: 254px;
  height: 254px;
  right: -10%;
  bottom: -40px;
  transition: opacity 0.3s ease;
  /* 图片透明度过渡 */
}

.card-item:hover > img:last-of-type {
  display: block;
  /* 切换为悬停图片 */
}

.icon {
  width: 25px;
  height: 25px;
  font-size: 26.67px;
  vertical-align: -2.4px;
  fill: currentColor;
  overflow: hidden;
  transition: transform 0.3s ease, color 0.3s ease;
  /* 增加颜色和缩放过渡 */
}

.icon:hover {
  transform: scale(1.2);
  color: yellow;
  /* 悬停时图标稍微变大 */
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translate3d(0, 160px, 0);
  }

  100% {
    opacity: 1;
    transform: translateZ(0);
  }
}

@keyframes slideInUp {
  0% {
    transform: translate3d(0, 160px, 0);
    visibility: visible;
  }

  100% {
    transform: translateZ(0);
  }
}

.wow.animate__fadeInUp {
  animation: fadeInUp 1s ease;
}

.wow.animate__slideInUp {
  animation: slideInUp 1s ease;
}

p {
  margin: 16px 0;
}
</style>