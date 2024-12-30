<template>
  <div class="banner">
    <div
      class="mm"
      :style="{
        backgroundImage: `url(${img})`,
      }"
    ></div>
    <div class="banner-img">
      <img :src="img" />
    </div>
    <div class="banner-title">
      <p>{{ title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    title: {
      type: String,
      default: "",
    },
    img: {
      type: String,
      default: require("../assets/img/breadcrumb.jpg"),
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 400px;
  display: flex;
  position: relative;
  overflow: hidden;
  background-color: #fff;

  .mm {
    position: absolute;
    width: 100%;
    height: 400px;
    padding: 10px;
    margin: -10px;
    filter: blur(10px);
    // background-image: url(../assets/img/about_us.jpg);
    background-position: center;
    background-size: 100%;
  }

  img {
    position: absolute;
    width: 1425px;
    height: 100%;
    left: 50%;
    transform: translate(-50%, 0);
  }

  // /* 使用 ::after 伪元素添加遮罩 */
  // &::after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
  //   background-color: rgba(0, 0, 0, 0.1); /* 0.1透明黑色遮罩 */
  //   z-index: 1; /* 确保遮罩在图片上层 */
  // }

  &-title {
    position: absolute;
    color: #fff;
    font-size: 60px;
    font-weight: 800;
    line-height: 300px;
    text-align: center;
    width: 100%;
    z-index: 2;

    /* 添加文字边框效果 */
    text-shadow: -1px -1px 0 #727171, 1px -1px 0 #727171, -1px 1px 0 #727171,
      1px 1px 0 #727171; /* 黑色边框 */
  }
}
</style>