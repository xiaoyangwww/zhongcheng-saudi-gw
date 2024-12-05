<template>
  <div class="honor">
    <!-- 公司荣誉 -->
    <div class="content-honor">
      <div class="top">
        <h3>公司荣誉</h3>
        <p>HONOR</p>
        <div class="border"></div>
      </div>
      <!-- <p>点击图片查看大图:preview-src-list="previewList"</p> -->
      <ul class="honor-show">
        <li v-for="(honor, index) in honorList" :key="index">
          <el-image
            :src="imgserver + honor.Img"
            
            class="honor-img"
            :z-index="2000"
            fit="contain"
          >
            <div slot="placeholder" class="image-slot">
              加载中<span class="dot">...</span>
            </div>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      honorList: [
        {
          Id: 31,
          Img: "/imagestore/2023/1129/41241f6c-a926-4407-97b0-b12511ee9f59.jpg",
          Remark: "高新技术企业证书",
          CreateTime: "2023-11-29T13:34:39.59",
        },
        {
          Id: 41,
          Img: "/imagestore/2023/1129/77aad3b1-4907-4a7e-a8fc-912d982133bf.jpg",
          Remark: "会员证书",
          CreateTime: "2023-11-29T13:34:04.613",
        },
        {
          Id: 40,
          Img: "/imagestore/2023/1129/5689b5f6-2ef7-4408-adfc-a1562736888f.jpg",
          Remark: "企业优胜奖",
          CreateTime: "2023-11-29T13:33:31.717",
        },
        {
          Id: 39,
          Img: "/imagestore/2023/1129/d61bf915-a361-4160-bcab-ee1e27cbd447.jpg",
          Remark: "合同信用等级认定证书",
          CreateTime: "2023-11-29T13:31:36.34",
        },
        {
          Id: 37,
          Img: "/imagestore/2023/1129/f6871384-d4b8-4b5e-b020-db7cd57c9886.jpg",
          Remark: "汕头市建设工程优质奖证书",
          CreateTime: "2023-11-29T13:28:48.807",
        },
        {
          Id: 36,
          Img: "/imagestore/2020/0605/16024bde-6f13-4c48-afae-76b73f485cae.jpg",
          Remark: "高新成果转化证书",
          CreateTime: "2020-06-05T21:22:10.94",
        },
        {
          Id: 28,
          Img: "/imagestore/2019/0718/2603939b-833f-426a-9352-1f08fccec51c.jpg",
          Remark: "建筑工程监理服务系统V1.0 软著证书",
          CreateTime: "2019-07-18T16:39:18.197",
        },
        {
          Id: 27,
          Img: "/imagestore/2019/0718/dd60cc71-3bfe-4a59-a7bf-03375358dd2a.jpg",
          Remark: "建筑建理工作任务发布系统V1.0 软著证书",
          CreateTime: "2019-07-18T16:37:20.32",
        },
        {
          Id: 26,
          Img: "/imagestore/2018/0516/3e58a57c-0921-4284-bb70-888ea3dc3f0a.png",
          Remark: "工程预算处理软件V1.0 软著证书",
          CreateTime: "2018-07-06T11:27:15.56",
        },
      ],
    };
  },
  computed: {
    previewList() {
      return this.honorList.map((honor) => this.imgserver + honor.Img);
    },
  },
};
</script>

<style lang="scss" scoped>
.honor {
  animation: moveUp 0.8s ease-out forwards;
}

.top {
  h3,
  p {
    text-align: left !important;
    font-size: 25px;
    color: #024190;
    font-weight: bold;
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

// 公司荣誉
.content-honor {
  padding: 60px 20px;

  .honor-show {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 30px;
    justify-items: center;

    li {
      position: relative;
      width: 100%;
      border: 2px solid #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
      }

      .honor-img {
        width: 100%;
        height: 100%;
        transition: transform 0.3s ease;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  p {
    text-align: center;
    color: #3c6088;
    margin-top: 20px;
    font-size: 16px;
  }
}
</style>
