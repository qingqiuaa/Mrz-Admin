<template>
  <el-container>
    <el-main>
      <el-row>
        <!-- 新增全局数据概览模块 -->
        <el-col :span="24" class="overview-col">
          <el-card class="overview-card">
            <div class="card-header">
              <span class="card-title">全局数据概览</span>
              <div class="divider"></div>
            </div>
            <el-row>
              <el-col
                v-for="(item, index) in overview"
                :key="index"
                :span="6"
                :xs="24"
                class="overview-item"
              >
                <div class="overview-content">
                  <div class="overview-icon">
                    <i :class="item.icon" :style="{ color: item.color }"></i>
                  </div>
                  <div class="overview-info">
                    <div class="overview-title">{{ item.title }}</div>
                    <div class="overview-value">{{ item.value }}</div>
                    <div
                      :class="`trend-${item.trend}`"
                      class="overview-trend"
                    >
                      <i
                        :class="
                          item.trend === 'up'
                            ? 'el-icon-top'
                            : item.trend === 'down'
                            ? 'el-icon-bottom'
                            : 'el-icon-minus'
                        "
                      ></i>
                      <span>{{ item.trendValue }}</span>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </el-card>
        </el-col>

        <el-col
          v-for="(card, index) in cards"
          :key="index"
          :span="4"
          :xs="24"
          class="card-col"
        >
          <el-card class="dashboard-card">
            <div class="card-header">
              <div class="card-icon">
                <i :class="card.icon" :style="{ color: card.color }"></i>
              </div>
              <div class="card-title">{{ card.title }}</div>
            </div>
            <div class="card-body">
              <div class="card-value">{{ card.value }}</div>
              <div class="card-extra">{{ card.extra }}</div>
              <div class="card-description">{{ card.description }}</div>
              <el-progress :percentage="card.progress"/>
            </div>
          </el-card>
        </el-col>

        <el-col :span="14" :xs="24" class="chart-col">
          <el-card class="chart-card">
            <div class="chart-header">
              <span class="chart-title">系统访问趋势</span>
              <div class="divider"></div>
            </div>
            <div ref="demoChart1" class="chart-container"></div>
          </el-card>
        </el-col>

        <el-col :span="10" :xs="24" class="chart-col">
          <el-card class="chart-card">
            <div class="chart-header">
              <span class="chart-title">服务器资源监控</span>
              <div class="divider"></div>
            </div>
            <div ref="demoChart2" class="chart-container"></div>
          </el-card>
        </el-col>

        <el-col :span="8" :xs="24" class="chart-col">
          <el-card class="chart-card">
            <div class="chart-header">
              <span class="chart-title">系统性能与用户体验</span>
              <div class="divider"></div>
            </div>
            <div ref="demoChart3" class="chart-container"></div>
          </el-card>
        </el-col>

        <el-col :span="8" :xs="24" class="chart-col">
          <el-card class="chart-card">
            <div class="chart-header">
              <span class="chart-title">用户转化瓶颈分析</span>
              <div class="divider"></div>
            </div>
            <div ref="demoChart4" class="chart-container"></div>
          </el-card>
        </el-col>

        <el-col :span="8" :xs="24" class="chart-col">
          <el-card class="chart-card">
            <div class="chart-header">
              <span class="chart-title">用户活跃度分布</span>
              <div class="divider"></div>
            </div>
            <div ref="demoChart5" class="chart-container"></div>
          </el-card>
        </el-col>

        <el-col :span="18" :xs="24" class="message-list-col">
          <el-card class="message-card">
            <div class="card-header">
              <span class="card-title">客户最新留言</span>
              <div class="divider"></div>
            </div>
            <div class="message-list-container">
              <div class="message-list">
                <!-- 原始消息列表 -->
                <div v-for="(message, index) in messages" :key="index" class="message-item">
                  <img :src="message.avatarUrl" alt="客户头像" class="message-avatar">
                  <div class="message-content">
                    <div class="message-header">
                      <span class="message-author">{{ message.author }}</span>
                      <span class="message-time">{{ message.time }}</span>
                    </div>
                    <div class="message-text">{{ message.text }}</div>
                  </div>
                </div>

                <div v-for="(message, index) in messages" :key="index + messages.length" class="message-item">
                  <img :src="message.avatarUrl" alt="客户头像" class="message-avatar">
                  <div class="message-content">
                    <div class="message-header">
                      <span class="message-author">{{ message.author }}</span>
                      <span class="message-time">{{ message.time }}</span>
                    </div>
                    <div class="message-text">{{ message.text }}</div>
                  </div>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>

        <el-col :span="6" :xs="24" class="recent-activities-col">
          <el-card class="recent-activities-card">
            <div class="card-header">
              <span class="card-title">最近活动</span>
              <div class="divider"></div>
            </div>
            <div class="activity-list">
              <el-timeline>
                <el-timeline-item
                  v-for="(activity, index) in activities"
                  :key="index"
                  :color="activity.color"
                  :timestamp="activity.time"
                >
                  <div class="activity-content">
                    <span class="activity-type">{{ activity.type }}</span>
                    <span class="activity-description">{{ activity.description }}</span>
                  </div>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import { debounce } from 'lodash'
import {
  demoDrawChart1,
  demoDrawChart2,
  demoDrawChart3,
  demoDrawChart4,
  demoDrawChart5,
  destroyChart
} from '@/assets/js/data-charts.js'

export default {
  name: 'DashboardIndex',
  data () {
    return {
      activities: [
        {
          type: '用户登录',
          time: '2023-10-01 14:30',
          description: '管理员登录系统',
          color: '#67c23a' // 绿色
        },
        {
          type: '数据修改',
          time: '2023-10-01 15:00',
          description: '修改了用户配置',
          color: '#e6a23c' // 橙色
        },
        {
          type: '系统配置',
          time: '2023-10-01 16:15',
          description: '更新了系统参数',
          color: '#409eff' // 蓝色
        },
        {
          type: '数据删除',
          time: '2023-10-01 17:30',
          description: '删除了测试数据',
          color: '#f56c6c' // 红色
        }
      ],
      overview: [
        {
          icon: 'el-icon-s-data',
          title: '总用户数',
          value: '12,345',
          color: '#66b3ff',
          trend: 'up',
          trendValue: '+8%'
        },
        {
          icon: 'el-icon-s-order',
          title: '总订单数',
          value: '5,678',
          color: '#ff9999',
          trend: 'down',
          trendValue: '-3%'
        },
        {
          icon: 'el-icon-s-finance',
          title: '总销售额',
          value: '¥1,234,567',
          color: '#99e600',
          trend: 'up',
          trendValue: '+12%'
        },
        {
          icon: 'el-icon-s-flag',
          title: '任务完成率',
          value: '92%',
          color: '#5577ff',
          trend: 'stable',
          trendValue: '0%'
        }
      ],
      cards: [
        {
          icon: 'el-icon-user',
          title: '用户总数',
          value: '12,345',
          extra: '同比 +8%',
          description: '本月新增用户：1,250',
          color: '#66b3ff',
          progress: 75
        },
        {
          icon: 'el-icon-plus',
          title: '新注册用户',
          value: '345',
          extra: '环比 +12%',
          description: '本周新增：80',
          color: '#ff9999',
          progress: 60
        },
        {
          icon: 'el-icon-s-data',
          title: '系统访问量',
          value: '123,456',
          extra: '日均 +10%',
          description: '日均访问量：5,000',
          color: '#99e600',
          progress: 85
        },
        {
          icon: 'el-icon-s-platform',
          title: '系统运行状态',
          value: '99.99%',
          extra: '稳定运行',
          description: '最近24小时无异常',
          color: '#5577ff',
          progress: 95
        },
        {
          icon: 'el-icon-check',
          title: '任务完成数',
          value: '1,234',
          extra: '完成率 92%',
          description: '待完成任务：100',
          color: '#ff6666',
          progress: 90
        },
        {
          icon: 'el-icon-star-on',
          title: '用户活跃度',
          value: '1,500',
          extra: '环比 -5%',
          description: '上月活跃用户：1,600',
          color: '#ffcc00',
          progress: 45
        }
      ],
      messages: [
        {
          avatarUrl: require('@/assets/images/logo.png'),
          author: '程序官网',
          time: '2023-10-01 14:30',
          text: 'https://www.mrz2516.com/'
        },
        {
          avatarUrl: require('@/assets/images/logo.png'),
          author: '官方客服微信',
          time: '2023-10-02 09:15',
          text: 'Mrz_Team'
        },
        {
          avatarUrl: require('@/assets/images/logo.png'),
          author: '官方客服QQ',
          time: '2023-10-03 16:45',
          text: '3473726390'
        },
        {
          avatarUrl: require('@/assets/images/logo.png'),
          author: '官方公众号：',
          time: '2023-10-03 16:45',
          text: '敏锐者网络科技'
        },
        {
          avatarUrl: require('@/assets/images/logo.png'),
          author: '开发团队',
          time: '2023-10-03 16:45',
          text: '敏锐者网络科技'
        },
        {
          avatarUrl: require('@/assets/images/logo.png'),
          author: 'F先生',
          time: '2023-10-03 16:45',
          text: '系统的响应速度非常快，操作界面简洁明了，极大地提升了我们的工作效率，非常感谢！'
        },
        {
          avatarUrl: require('@/assets/images/logo.png'),
          author: 'G先生',
          time: '2023-10-03 16:45',
          text: '功能非常全面，尤其是数据分析模块，帮助我们更好地了解业务动态，强烈推荐！'
        },
        {
          avatarUrl: require('@/assets/images/logo.png'),
          author: 'H先生',
          time: '2023-10-03 16:45',
          text: '技术支持团队非常专业，遇到问题时能够快速响应并提供解决方案，服务态度一流！'
        }
      ]
    }
  },
  // 在 mounted 中调用
  mounted () {
    demoDrawChart1.call(this)
    demoDrawChart2.call(this)
    demoDrawChart3.call(this)
    demoDrawChart4.call(this)
    demoDrawChart5.call(this)
    this.$nextTick(() => {
      window.dispatchEvent(new Event('resize'))
    })

    // 绑定窗口大小变化事件
    window.addEventListener('resize', this.resizeChart)
  },

  // 在 beforeDestroy 中销毁
  beforeDestroy () {
    destroyChart.call(this)
    if (this.chartInstance) {
      this.chartInstance.dispose()
    }
    if (this.chartInstance2) {
      this.chartInstance2.dispose()
    }
    if (this.chartInstance3) {
      this.chartInstance3.dispose()
    }
    if (this.chartInstance4) {
      this.chartInstance4.dispose()
    }
    if (this.chartInstance5) {
      this.chartInstance5.dispose()
    }

    // 移除窗口大小变化事件
    window.removeEventListener('resize', this.resizeChart)
  },
  methods: {
    // 防抖处理窗口大小变化
    resizeChart: debounce(function () {
      if (this.chartInstance) {
        this.chartInstance.resize()
      }
      if (this.chartInstance2) {
        this.chartInstance2.resize()
      }
      if (this.chartInstance3) {
        this.chartInstance3.resize()
      }
      if (this.chartInstance4) {
        this.chartInstance4.resize()
      }
      if (this.chartInstance5) {
        this.chartInstance5.resize()
      }
    }, 200, {
      leading: false,
      trailing: true
    })
  }
}
</script>

<style lang="scss" scoped>
.recent-activities-col {
  padding: 10px;

  .recent-activities-card {
    margin-bottom: 20px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    .card-header {
      padding: 15px;

      .card-title {
        font-size: 18px;
        font-weight: 500;
        color: #333;
      }

      .divider {
        height: 2px;
        background-color: #9999ff;
        border-radius: 1px;
        margin-top: 10px;
      }
    }

    .activity-list {
      padding: 15px;

      .activity-content {
        display: flex;
        flex-direction: column;

        .activity-type {
          font-size: 14px;
          font-weight: 500;
          color: #333;
        }

        .activity-description {
          font-size: 12px;
          color: #666;
          margin-top: 5px;
        }
      }
    }
  }
}

.overview-col {
  padding: 10px;

  .overview-card {
    margin-bottom: 20px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    .card-header {
      padding: 15px;

      .card-title {
        font-size: 18px;
        font-weight: 500;
        color: #333;

      }

      .divider {
        height: 2px;
        background-color: #9999ff;
        border-radius: 1px;
        margin-top: 10px;
      }
    }

    .overview-item {
      padding: 10px;

      .overview-content {
        display: flex;
        align-items: center;

        .overview-icon {
          font-size: 40px;
          margin-right: 15px;
        }

        .overview-info {
          .overview-title {
            font-size: 16px;
            color: #666;
            margin-bottom: 5px;
          }

          .overview-value {
            font-size: 24px;
            font-weight: bold;
            color: #333;
            margin-bottom: 5px;
          }

          .overview-trend {
            font-size: 14px;
            display: flex;
            align-items: center;

            &.trend-up {
              color: #67c23a;
            }

            &.trend-down {
              color: #f56c6c;
            }

            &.trend-stable {
              color: #909399;
            }

            i {
              margin-right: 5px;
            }
          }
        }
      }
    }
  }
}

.card-col {
  padding: 10px;

  .dashboard-card {
    margin-bottom: 20px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;

    .card-header {
      display: flex;
      align-items: center;
      padding: 15px;

      .card-icon {
        font-size: 40px;
        margin-right: 10px;
      }

      .card-title {
        font-size: 18px;
        color: #333333;
        flex-grow: 1;
      }
    }

    .card-body {
      padding: 15px;
      text-align: left;

      .card-value {
        font-size: 24px;
        font-weight: bold;
        color: #333;
      }

      .card-extra {
        font-size: 14px;
        color: #666;
        margin: 5px 0;
      }

      .card-description {
        font-size: 12px;
        color: #999;
        margin-top: 5px;
      }
    }
  }
}

.chart-col {
  padding: 10px;
  margin-bottom: 20px;
}

.message-list-col {
  padding: 10px;
  margin-bottom: 20px;

  .message-card {
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    .card-header {
      display: flex;
      flex-direction: column;
      padding: 15px;

      .card-title {
        font-size: 18px;
        font-weight: 500;
        color: #333;
        margin-bottom: 10px;
      }

      .divider {
        height: 2px;
        background-color: #9999ff;
        border-radius: 1px;
      }
    }

    .message-list-container {
      height: 300px; /* 设置固定高度 */
      overflow: hidden; /* 隐藏溢出内容 */
      position: relative;

      .message-list {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        animation: scroll 15s linear infinite; /* 应用滚动动画 */

        @keyframes scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%); /* 向上滚动到复制的部分 */
          }
        }

        .message-item {
          display: flex;
          align-items: flex-start;
          margin-bottom: 16px;

          &:last-child {
            margin-bottom: 0;
          }

          .message-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            border: 2px solid #ffffff;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .message-content {
            margin-left: 12px;
            flex: 1;

            .message-header {
              display: flex;
              justify-content: space-between;
              margin-bottom: 4px;

              .message-author {
                font-weight: bold;
                color: #333;
              }

              .message-time {
                font-size: 14px;
                color: #70C4FF;
              }
            }

            .message-text {
              font-size: 14px;
              color: #666;
              line-height: 1.5;
            }
          }
        }
      }
    }
  }
}

.chart-card {
  padding: 10px 20px;
  border-radius: 10px;

  .chart-header {
    margin-bottom: 10px;

    .chart-title {
      font-size: 18px;
      font-weight: 500;
      color: #333;
      display: block;
      margin-bottom: 10px;
    }

    .divider {
      height: 2px;
      background-color: #9999ff;
      border-radius: 1px;
    }
  }

  .chart-container {
    width: 100%;
    height: 400px;
    min-height: 300px;
    transition: height 0.3s ease;

    @media (max-width: 768px) {
      height: 300px;
    }
  }
}

@media (max-width: 768px) {
  .overview-col{
    padding:0;
  }

  .card-col{
    padding:0;
  }

  .chart-col{
    padding:0;
  }

  .message-list-col{
    padding:0;
  }

  .recent-activities-col{
    padding:0;
  }
}
</style>
