<template>
  <div class="us">
    <banner
      img="https://zcts-web.oss-cn-shenzhen.aliyuncs.com/zc/cd730bbcd84f4f7fa4d6f1bd20bae0a8.jfif"
      :title="$t('contactUs2')"
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
            <h2>{{ $t("contactUs") }}</h2>
            <el-form
              ref="contactForm"
              :model="form"
              :rules="rules"
              label-width="150px"
              class="contact-form"
            >
              <!-- 姓名 -->
              <el-form-item :label="$t('nickname')" prop="name">
                <el-input
                  v-model="form.name"
                  :placeholder="$t('enterYourName')"
                />
              </el-form-item>

              <!-- 电话 -->
              <el-form-item :label="$t('phone')" prop="phone">
                <el-input
                  v-model="form.phone"
                  :placeholder="$t('enterYourPhone')"
                />
              </el-form-item>

              <!-- 邮箱 -->
              <el-form-item :label="$t('email')" prop="email">
                <el-input
                  v-model="form.email"
                  :placeholder="$t('enterYourEmail')"
                />
              </el-form-item>

              <!-- 主题 -->
              <el-form-item :label="$t('subject')" prop="theme">
                <el-input
                  v-model="form.theme"
                  :placeholder="$t('enterSubject')"
                />
              </el-form-item>

              <!-- 留言 -->
              <el-form-item :label="$t('leaveMessage')" prop="leaveWord">
                <el-input
                  v-model="form.leaveWord"
                  type="textarea"
                  rows="5"
                  :placeholder="$t('enterMessageContent')"
                />
              </el-form-item>

              <!-- 提交按钮 -->
              <el-form-item>
                <el-button
                  type="primary"
                  @click="submitForm"
                  style="background-color: #31814b; border: none"
                  ><span>{{ $t("send") }}</span></el-button
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
                  <h4>{{ $t("address") }}</h4>
                  <p>{{ companyData.address }}</p>
                </div>
              </li>
              <li>
                <i class="el-icon-phone-outline"></i>
                <div>
                  <h4>{{ $t("phone") }}</h4>
                  <p>
                    {{ companyData.phone }}<br />{{ $t("mondayToFriday") }} 8:30
                    - 17:30
                  </p>
                </div>
              </li>
              <li>
                <i class="el-icon-message"></i>
                <div>
                  <h4>{{ $t("email") }}</h4>
                  <p>{{ companyData.email }}<br />{{ $t("contact") }}</p>
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
import { Loader } from "@googlemaps/js-api-loader"; // 引入谷歌地图加载器
import { getMsg } from "@/api/company.js";
import { addContactPage } from "@/api/contact.js";

export default {
  data() {
    return {
      loading: false,
      map: null,
      // 表单数据
      form: {
        name: "",
        email: "",
        phone: "",
        theme: "",
        leaveWord: "",
      },
      // 表单校验规则
      rules: {
        name: [
          {
            required: true,
            message: this.$t("enterYourName"),
            trigger: "blur",
          },
          {
            min: 2,
            max: 30,
            message: this.$t("nameLengthBetween2And30"),
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: this.$t("enterYourEmail"),
            trigger: "blur",
          },
          {
            type: "email",
            message: this.$t("enterValidEmail"),
            trigger: ["blur", "change"],
          },
        ],
        theme: [
          { required: true, message: this.$t("enterSubject"), trigger: "blur" },
        ],
        leaveWord: [
          {
            required: true,
            message: this.$t("enterMessageContent"),
            trigger: "blur",
          },
          {
            min: 10,
            message: this.$t("messageContentAtLeast10"),
            trigger: "blur",
          },
        ],
      },
      companyData: {},
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
          addContactPage(this.form).then((res) => {
            this.$message.success(this.$t("formSubmitSuccess"));
            this.form = {
              name: "",
              phone: "",
              email: "",
              theme: "",
              leaveWord: "",
            };
          });
        } else {
          this.$message.error(this.$t("completeFormBeforeSubmitting"));
          return false;
        }
      });
    },
    // 初始化谷歌地图
    async initMap() {
      const loader = new Loader({
        apiKey: "AIzaSyApJhdfSVI6BycgM8C5BY_dj9oaLquIC6Y", // 替换为你的谷歌地图 API 密钥
        version: "weekly",
        language: localStorage.getItem("locale") || "zh-CN", // 根据语言设置地图语言
      });

      try {
        await loader.load();

        // 初始化地图
        const centerPoint = {
          lat: Number(this.companyData.latitude),
          lng: Number(this.companyData.longitude),
        };

        this.map = new google.maps.Map(document.getElementById("container"), {
          center: centerPoint,
          zoom: 15, // 设置缩放级别
        });

        // 添加标记
        new google.maps.Marker({
          position: centerPoint,
          map: this.map,
          title: this.$t("currentLocation"),
        });
      } catch (error) {
        console.error("谷歌地图加载失败：", error);
      }
    },
    init() {
      getMsg().then((res) => {
        this.companyData = res.data;
        //DOM初始化完成进行地图初始化
        this.initMap();
      });
    },
  },
  mounted() {
    this.init();
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
.el-button {
  padding-top: 15px !important;
  color: #fff !important;
  font-size: 18px !important;
  font-weight: bold !important;
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
        .el-input {
          width: 100%;
        }
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
          color: #31814b;
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