<template>
  <div class="us">
    <banner
      img="https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/bg_us.jpg"
      title="联系我们"
    />
    <div class="us-section" v-loading="loading">
      <div class="us-section-content">
        <div class="map">
          <div id="container"></div>
        </div>
        <!-- 地图 -->

        <!-- 输入框 -->
        <div class="contact-us">
          <!-- 左侧：表单 -->
          <div class="form-container">
            <h2>联系我们</h2>
            <el-form
              ref="contactForm"
              :model="form"
              :rules="rules"
              label-width="100px"
              class="contact-form"
            >
              <!-- 姓名 -->
              <el-form-item label="姓名" prop="name">
                <el-input v-model="form.name" placeholder="请输入您的姓名" />
              </el-form-item>

              <!-- 邮箱 -->
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" placeholder="请输入您的邮箱" />
              </el-form-item>

              <!-- 主题 -->
              <el-form-item label="主题" prop="subject">
                <el-input v-model="form.subject" placeholder="请输入主题" />
              </el-form-item>

              <!-- 留言 -->
              <el-form-item label="留言" prop="message">
                <el-input
                  v-model="form.message"
                  type="textarea"
                  rows="5"
                  placeholder="请输入留言内容"
                />
              </el-form-item>

              <!-- 提交按钮 -->
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm"
                  style="background-color: #024190; border: none"
                  >发送</el-button
                >
              </el-form-item>
            </el-form>
          </div>

          <!-- 右侧：联系信息 -->
          <div class="contact-info">
            <ul>
              <li>
                <i class="el-icon-location-outline"></i>
                <div>
                  <h4>地址</h4>
                  <p>深圳市南山区蛇口太子路18号海景广场24楼B座</p>
                </div>
              </li>
              <li>
                <i class="el-icon-phone-outline"></i>
                <div>
                  <h4>电话</h4>
                  <p>020-83480566<br />周一至周五 8:30 - 17:30</p>
                </div>
              </li>
              <li>
                <i class="el-icon-message"></i>
                <div>
                  <h4>邮箱</h4>
                  <p>support@17sucai.com<br />随时发送您的咨询！</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  <script>
import Banner from "../components/Banner";
//引入缺德地图
import AMapLoader from "@amap/amap-jsapi-loader";
window._AMapSecurityConfig = {
  securityJsCode: "ddc0d41368b22a4ec0f846887ba2d8a2", //你的安全密钥
};
export default {
  data() {
    return {
      loading: false,
      map: null,
      // 表单数据
      form: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
      // 表单校验规则
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          {
            min: 2,
            max: 30,
            message: "姓名长度在 2 到 30 个字符",
            trigger: "blur",
          },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          {
            type: "email",
            message: "请输入有效的邮箱地址",
            trigger: ["blur", "change"],
          },
        ],
        subject: [{ required: true, message: "请输入主题", trigger: "blur" }],
        message: [
          { required: true, message: "请输入留言内容", trigger: "blur" },
          { min: 10, message: "留言内容至少 10 个字符", trigger: "blur" },
        ],
      },
    };
  },
  components: {
    Banner,
  },
  methods: {
    // 提交表单
    submitForm() {
      this.$refs.contactForm.validate((valid) => {
        if (valid) {
          this.$message.success("表单提交成功！");
        } else {
          this.$message.error("请完善表单信息后提交");
          return false;
        }
      });
    },
    initMap() {
      // 使用 AMapLoader 加载高德地图
      AMapLoader.load({
        key: "f7a1a6c0ce21a1c6f9f21d49b0803808", // 申请好的 Web 端开发者 Key
        version: "2.0", // 指定要加载的 JSAPI 的版本
        plugins: [], // 需要使用的插件列表
      })
        .then((AMap) => {
          // 初始化地图
          const centerPoint = [113.914581, 22.482987]; // 地图中心点坐标
          this.map = new AMap.Map("container", {
            viewMode: "3D", // 是否为 3D 地图模式
            zoom: 15, // 初始化地图级别（放大地图）
            center: centerPoint, // 初始化地图中心点位置
          });

          // 创建图标标识
          const marker = new AMap.Marker({
            position: centerPoint, // 标识的坐标
            title: "当前位置", // 鼠标悬停显示的提示信息
            icon: new AMap.Icon({
              size: new AMap.Size(25, 34), // 图标尺寸
              image: "https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png", // 图标的图片地址
              imageSize: new AMap.Size(25, 34), // 图标大小
            }),
          });

          // 添加标识到地图
          this.map.add(marker);
        })
        .catch((e) => {
          console.error("地图加载失败：", e);
        });
    },
  },

  mounted() {
    //DOM初始化完成进行地图初始化
    this.initMap();
  },
};
</script>
  
<style lang="scss" scoped>
.us {
  width: 100%;
  height: 100%;
  background: url(https://zcts-web.oss-cn-shenzhen.aliyuncs.com/img2/bg_all.jpg)
    no-repeat center;
  background-size: cover;
  &-section {
    width: 100%;

    &-content {
      width: 1425px;
      margin: 0 auto;
      background-color: #fff;
    }
  }
}
.map {
  margin: 50px 100px;
}

#container {
  width: 1250px;
  height: 600px;
}
.contact-us {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  //   background-color: #f9f9f9;

  .form-container {
    width: 60%;
    h2 {
      font-size: 30px;
      margin-bottom: 15px;
      margin-left: 58px;
    }

    .contact-form {
      max-width: 600px;

      .el-form-item {
        margin-bottom: 20px;

        .el-input {
          width: 100%;
        }
      }

      .el-button {
        margin-top: 10px;
      }
    }
  }

  .contact-info {
    width: 35%;
    // background-color: #fff;
    padding: 20px;

    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        display: flex;
        align-items: flex-start;
        margin-bottom: 20px;

        &:last-child {
          margin-bottom: 0;
        }

        i {
          font-size: 42px;
          margin-right: 10px;
          color: #024190;
        }

        h4 {
          margin: 0 0 5px;
          font-size: 30px;
          font-weight: bold;
        }

        p {
          margin: 0;
          font-size: 20px;
          line-height: 1.5;
          color: #666;
        }
      }
    }
  }
}
</style>