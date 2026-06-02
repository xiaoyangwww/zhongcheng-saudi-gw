<template>
  <div class="history">
    <!-- 发展历程 -->
    <div class="content-course">
      <div class="top">
        <h3>{{ $t("historyAndEvolution") }}</h3>
        <div class="underline"></div>
      </div>
      <div class="timeline">
        <div class="timeline-line"></div>
        <div class="timeline-events">
          <div
            class="timeline-event"
            v-for="(event, index) in courseList"
            :key="index"
            :class="{ left: index % 2 === 0, right: index % 2 !== 0 }"
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="event-content">
              <p class="event-year">{{ event.year }}</p>
              <p class="event-description">{{ event.content }}</p>
            </div>
            <!-- 指向三角形 -->
            <!-- <div
              :class="{
                line_first_bom: index % 2 === 1,
                'line-first': index % 2 === 0,
              }"
            ></div> -->
            <!-- 圆点 -->
            <div
              :class="{
                event_round_left: index % 2 === 1,
                event_round_right: index % 2 === 0,
              }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getHistory } from "@/api/history.js";
export default {
  data() {
    return {
      courseList: [],
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      getHistory().then((response) => {
        this.courseList = response.data;
        this.courseList.forEach((item) => {
          if (item.year === "未来蓝图") {
            // 从 localStorage 获取语言
            const lang = localStorage.getItem("language");

            // 根据语言修改文本
            if (lang === "en") {
              item.year = "Future Blueprint";
            } else if (lang === "sa") {
              item.year = "المخطط المستقبلي";
            }
            // 如果是 'zh' 或 其他值，不变
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
// 全局变量
$primary-color: #16a085;
$secondary-color: #f9f9f9;
$accent-color: #eb1313;
// 发展历程
.content-course {
  padding: 80px 0;
  animation: moveUp 0.8s ease-out forwards;

  .top {
    h3,
    p {
      text-align: center;
      font-size: 25px;
      color: $primary-color;
      font-weight: bold;
      padding: 10px 0;
      margin: 0;
    }

    h3 {
      font-size: 36px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }

    p {
      font-size: 17px;
      font-weight: normal;
    }

    .underline {
      width: 80px;
      height: 3px;
      background-color: $primary-color;
      margin: 10px auto;
    }
  }

  .timeline {
    position: relative;
    width: 90%;
    max-width: 1200px;
    margin: 50px auto;

    .timeline-line {
      position: absolute;
      width: 4px;
      height: 100%;
      background-color: rgba($primary-color, 0.5);
      box-shadow: 0 0 10px rgba($primary-color, 0.3);
      
      &:dir(ltr) {
        left: 50%;
        transform: translateX(-50%);
      }
      &:dir(rtl) {
        right: 50%;
        transform: translateX(50%);
      }
    }

    .timeline-events {
      position: relative;
      padding: 20px 0;

      .timeline-event {
        width: 45%;
        margin-bottom: 60px;
        position: relative;
        opacity: 0;
        animation: fadeInSlide 0.8s ease-out forwards;

        &:dir(ltr) {
          &.left {
            left: 0;
            text-align: left;
            .event-year {
              text-align: right;
            }
          }

          &.right {
            left: 55%;
            text-align: left;
          }
        }

        &:dir(rtl) {
          &.left {
            right: 0;
            text-align: right;
            .event-year {
              text-align: left;
            }
          }

          &.right {
            right: 55%;
            text-align: right;
          }
        }

        .event-content {
          background-color: $secondary-color;
          border: 2px solid $primary-color;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;

          &:hover {
            transform: scale(1.02);
          }

          .event-year {
            font-size: 20px;
            color: $primary-color;
            font-weight: bold;
            margin-bottom: 15px;
          }

          .event-description {
            padding-left: 5px;
            font-size: 18px;
            color: #333;
            line-height: 1.6;
          }
        }

        .event_round_left,
        .event_round_right {
          position: absolute;
          top: 38%;
          width: 30px;
          height: 30px;
          background-color: $primary-color;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba($primary-color, 0.5);
          transition: transform 0.3s ease, background-color 0.3s ease;

          &:hover {
            transform: scale(1.1);
            background-color: $accent-color;
          }

          &:dir(ltr) {
            &.event_round_left {
              left: -14.1%;
            }
            &.event_round_right {
              left: 108%;
            }
          }
          &:dir(rtl) {
            &.event_round_left {
              right: -14.1%;
            }
            &.event_round_right {
              right: 108%;
            }
          }
        }
      }
    }
  }
}

// 动画关键帧
@keyframes moveUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInSlide {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// RTL 特定动画
[dir="rtl"] {
  @keyframes fadeInSlide {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
}
</style>