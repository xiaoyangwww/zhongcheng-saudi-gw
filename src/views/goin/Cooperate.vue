<template>
  <!-- 合作伙伴模块 -->
  <div class="content-partner">
    <div class="top">
      <h3>合作伙伴</h3>
      <p>PARTNERS</p>
    </div>
    <div class="partner-section">
      <h4>合作客户 </h4>
      <ul class="partner-list">
        <li v-for="client in clients" :key="client.id">
          <img :src="client.logo" :alt="client.name" />
        </li>
      </ul>
    </div>
    <div class="partner-section">
      <h4>材料物资合作方 </h4>
      <ul class="partner-list">
        <li v-for="supplier in materialSuppliers" :key="supplier.id">
          <img :src="supplier.logo" :alt="supplier.name" />
        </li>
      </ul>
    </div>
    <div class="partner-section">
      <h4>物流合作方</h4>
      <ul class="partner-list">
        <li v-for="logistics in logisticsSuppliers" :key="logistics.id">
          <img :src="logistics.logo" :alt="logistics.name" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clients: [
        {
          id: 1,
          name: "Client 1",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_1.png",
        },
        {
          id: 2,
          name: "Client 2",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_2.png",
        },
        {
          id: 3,
          name: "Client 3",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_3.png",
        },
        {
          id: 4,
          name: "Client 4",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_4.png",
        },
        {
          id: 5,
          name: "Client 5",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_5.png",
        },
        {
          id: 6,
          name: "Client 6",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_6.png",
        },
        {
          id: 7,
          name: "Client 7",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_7.png",
        },
        {
          id: 8,
          name: "Client 8",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_8.png",
        },
        {
          id: 9,
          name: "Client 9",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_9.png",
        },
        {
          id: 10,
          name: "Client 10",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_10.png",
        },
        {
          id: 11,
          name: "Client 11",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_11.png",
        },
        {
          id: 12,
          name: "Client 10",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_12.png",
        },
        {
          id: 13,
          name: "Client 10",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_13.png",
        },
        {
          id: 14,
          name: "Client 10",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kh_14.png",
        },
        {
          id: 15,
          name: "Client 10",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/kg_15.png",
        },
      ],
      materialSuppliers: [
        {
          id: 1,
          name: "Supplier 1",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_1.png",
        },
        {
          id: 2,
          name: "Supplier 2",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_2.png",
        },
        {
          id: 3,
          name: "Supplier 3",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_3.png",
        },
        {
          id: 4,
          name: "Supplier 4",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_4.png",
        },
        {
          id: 5,
          name: "Supplier 5",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_5.png",
        },
        {
          id: 6,
          name: "Supplier 6",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_6.png",
        },
        {
          id: 7,
          name: "Supplier 7",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_7.png",
        },
        {
          id: 8,
          name: "Supplier 8",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_8.png",
        },
        {
          id: 9,
          name: "Supplier 9",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_9.png",
        },
        {
          id: 10,
          name: "Supplier 10",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_10.png",
        },
        {
          id: 11,
          name: "Supplier 10",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_11.png",
        },
        {
          id: 12,
          name: "Supplier 10",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_12.png",
        },
        {
          id: 13,
          name: "Supplier 10",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_13.png",
        },
        {
          id: 14,
          name: "Supplier 10",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_14.png",
        },
        {
          id: 15,
          name: "Supplier 10",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_15.png",
        },
        {
          id: 16,
          name: "Supplier 10",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/cl_16.png",
        },
        
      ],
      logisticsSuppliers: [
        {
          id: 1,
          name: "Logistics 1",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/CMA.png",
        },
        {
          id: 2,
          name: "Logistics 2",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/COSCO.png",
        },
        {
          id: 3,
          name: "Logistics 3",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/HL.png",
        },
        {
          id: 4,
          name: "Logistics 4",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/MAERSK.png",
        },
        {
          id: 5,
          name: "Logistics 5",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/PIL.png",
        },
        {
          id: 6,
          name: "Logistics 6",
          logo: "https://zcts-web.oss-cn-shenzhen.aliyuncs.com/imgPartner/ZIM.png",
        },
      ],
    };
  },
};
</script>



<style lang="scss" scoped>
//合作伙伴
.content-partner {
  padding: 60px 0;
  animation: moveUp 0.8s ease-out forwards;

  .top {
    h3,
    p {
      text-align: left;
      font-size: 26px;
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

  .partner-section {
    margin-top: 40px;

    h4 {
      font-size: 24px;
      color: #024190;
      margin-bottom: 20px;
      text-align: left;
      margin-left: 120px;
    }

    .partner-list {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      margin: 0 120px;

      li {
        flex: 0 0 20%; /* Adjust width */
        text-align: center;
        padding: 15px;
        box-sizing: border-box;

        img {
          max-width: 100%;
          height: auto;
          border: 1px solid #eaeaea;
          border-radius: 8px;
          transition: transform 0.3s;
        }

        img:hover {
          transform: scale(1.05);
        }
      }
    }
  }
}
</style>