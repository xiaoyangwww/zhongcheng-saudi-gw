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
      default: require('../assets/img/service.png'),
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

  &-title {
    position: absolute;
    color: #fff;
    font-size: 45px;
    font-weight: 800;
    line-height: 300px;
    text-align: center;
    width: 100%;
  }
}
</style>