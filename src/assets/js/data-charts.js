export const demoDrawChart1 = function () {
  if (!this.$refs.demoChart1) return

  const chart = this.$echarts.init(this.$refs.demoChart1)

  const option = {
    color: ['#66b3ff', '#99e600'],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderColor: '#ddd',
      textStyle: { color: '#333' },
      formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}',
      extraCssText: 'box-shadow: 0 2px 8px rgba(0,0,0,0.1)'
    },
    grid: {
      left: '8%',
      right: '8%',
      bottom: '18%',
      top: '20%',
      containLabel: true
    },
    legend: {
      data: ['访问量', '用户量'],
      bottom: 0,
      itemGap: 20,
      textStyle: {
        color: '#666',
        fontSize: 12
      }
    },
    xAxis: {
      type: 'category',
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: { lineStyle: { color: '#eee' } },
      axisTick: { show: false },
      axisLabel: {
        color: '#999',
        interval: 0,
        rotate: 45
      }
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: '#f5f5f5' } },
      axisLabel: { color: '#999' }
    },
    series: [
      {
        name: '访问量',
        type: 'line',
        data: [120, 200, 150, 80, 240, 180, 300],
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 }
      },
      {
        name: '用户量',
        type: 'line',
        data: [80, 150, 100, 200, 120, 250, 180],
        smooth: true,
        symbol: 'circle',
        symbolSize: 8,
        lineStyle: { width: 3 }
      }
    ]
  }

  chart.setOption(option)
  this.chartInstance = chart

  // 延迟强制重绘
  setTimeout(() => {
    chart.resize()
  }, 200)

  // 移动端特殊处理
  window.addEventListener('resize', this.resizeChart)
}

export const demoDrawChart2 = function () {
  if (!this.$refs.demoChart2) return

  const chart = this.$echarts.init(this.$refs.demoChart2)

  const option = {
    color: ['#66b3ff', '#99e600'], // 使用与第一个图表一致的配色
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderColor: '#ddd',
      textStyle: { color: '#333' },
      formatter: '{b}<br/>{a0}: {c0}<br/>{a1}: {c1}',
      extraCssText: 'box-shadow: 0 2px 8px rgba(0,0,0,0.1)'
    },
    grid: {
      left: '8%',
      right: '8%',
      bottom: '18%',
      top: '20%',
      containLabel: true
    },
    legend: {
      data: ['CPU 使用率 (%)', '内存使用率 (%)'],
      bottom: 0,
      itemGap: 20,
      textStyle: {
        color: '#666',
        fontSize: 12
      }
    },
    xAxis: {
      type: 'category',
      data: ['服务器A', '服务器B', '服务器C', '服务器D', '服务器E'],
      axisLine: { lineStyle: { color: '#eee' } },
      axisTick: { show: false },
      axisLabel: {
        color: '#999',
        interval: 0,
        rotate: 45
      }
    },
    yAxis: {
      type: 'value',
      splitLine: { lineStyle: { color: '#f5f5f5' } },
      axisLabel: { color: '#999' }
    },
    series: [
      {
        name: 'CPU 使用率 (%)',
        type: 'bar',
        barWidth: '30%',
        data: [75, 80, 65, 90, 70],
        itemStyle: {
          borderRadius: [5, 5, 0, 0] // 圆角效果
        }
      },
      {
        name: '内存使用率 (%)',
        type: 'bar',
        barWidth: '30%',
        data: [60, 70, 85, 75, 80],
        itemStyle: {
          borderRadius: [5, 5, 0, 0] // 圆角效果
        }
      }
    ]
  }

  chart.setOption(option)
  this.chartInstance2 = chart

  // 延迟强制重绘
  setTimeout(() => {
    chart.resize()
  }, 200)

  // 移动端特殊处理
  window.addEventListener('resize', this.resizeChart)
}

export const demoDrawChart3 = function () {
  if (!this.$refs.demoChart3) return

  const chart = this.$echarts.init(this.$refs.demoChart3)

  const option = {
    color: ['#66b3ff', '#99e600'], // 使用与前面图表一致的配色
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderColor: '#ddd',
      textStyle: { color: '#333' },
      formatter: '{a}<br/>{b}: {c}'
    },
    radar: {
      indicator: [
        { name: '响应时间 (ms)', max: 1000 },
        { name: '吞吐量 (req/s)', max: 500 },
        { name: 'CPU 使用率 (%)', max: 100 },
        { name: '内存使用率 (%)', max: 100 },
        { name: '用户满意度 (%)', max: 100 }
      ],
      splitArea: {
        areaStyle: {
          color: ['rgba(255,255,255,0.2)', 'rgba(200,200,200,0.1)']
        }
      },
      axisLine: { lineStyle: { color: '#acacac' } },
      splitLine: { lineStyle: { color: '#eee' } }
    },
    series: [
      {
        name: '系统性能与用户体验',
        type: 'radar',
        data: [
          {
            value: [800, 450, 75, 60, 90],
            name: '当前状态',
            itemStyle: { color: '#66b3ff' }
          },
          {
            value: [600, 400, 50, 40, 80],
            name: '目标状态',
            itemStyle: { color: '#99e600' }
          }
        ],
        areaStyle: {
          opacity: 0.3
        }
      }
    ]
  }

  chart.setOption(option)
  this.chartInstance3 = chart

  // 延迟强制重绘
  setTimeout(() => {
    chart.resize()
  }, 200)

  // 移动端特殊处理
  window.addEventListener('resize', this.resizeChart)
}

export const demoDrawChart4 = function () {
  if (!this.$refs.demoChart4) return

  const chart = this.$echarts.init(this.$refs.demoChart4)

  const option = {
    color: ['#66b3ff', '#99e600', '#ff6666', '#ffcc00'], // 使用一致的配色
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderColor: '#ddd',
      textStyle: { color: '#333' },
      formatter: '{b}<br/>{a}: {c}%'
    },
    grid: {
      left: '10%',
      right: '10%',
      bottom: '20%',
      top: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: {
        color: '#999',
        fontSize: 12,
        formatter: '{value}%'
      }
    },
    yAxis: {
      type: 'category',
      data: ['访问页面', '填写信息', '验证邮箱', '完成注册'],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: '#666',
        fontSize: 12
      }
    },
    series: [
      {
        name: '用户注册流程',
        type: 'bar',
        barWidth: '40%',
        data: [100, 80, 60, 40],
        label: {
          show: true,
          position: 'right',
          color: '#333',
          fontSize: 12,
          formatter: '{c}%'
        },
        itemStyle: {
          borderRadius: [0, 5, 5, 0] // 圆角效果
        }
      }
    ]
  }

  chart.setOption(option)
  this.chartInstance4 = chart

  // 延迟强制重绘
  setTimeout(() => {
    chart.resize()
  }, 200)

  // 移动端特殊处理
  window.addEventListener('resize', this.resizeChart)
}

export const demoDrawChart5 = function () {
  if (!this.$refs.demoChart5) return

  const chart = this.$echarts.init(this.$refs.demoChart5)

  const option = {
    color: ['#66b3ff', '#99e600', '#ff6666', '#ffcc00'], // 使用一致的配色
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(255,255,255,0.9)',
      borderColor: '#ddd',
      textStyle: { color: '#333' },
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      orient: 'horizontal', // 水平排列
      bottom: 10, // 放置在图表底部
      itemGap: 20, // 标签间距
      textStyle: {
        color: '#666',
        fontSize: 12
      }
    },
    series: [
      {
        name: '用户活跃度分布',
        type: 'pie',
        radius: ['40%', '60%'], // 内外半径
        center: ['50%', '40%'], // 图表位置上移，留出底部空间给标签
        avoidLabelOverlap: false,
        label: {
          show: false, // 不显示内部标签
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 16,
            fontWeight: 'bold',
            formatter: '{b}\n{d}%'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 40, name: '高活跃用户' },
          { value: 30, name: '中活跃用户' },
          { value: 20, name: '低活跃用户' },
          { value: 10, name: '流失用户' }
        ]
      }
    ]
  }

  chart.setOption(option)
  this.chartInstance5 = chart

  // 延迟强制重绘
  setTimeout(() => {
    chart.resize()
  }, 200)

  // 移动端特殊处理
  window.addEventListener('resize', this.resizeChart)
}

export const destroyChart = function () {
  if (this.chartInstance) {
    this.chartInstance.dispose()
    this.chartInstance = null
  }
  if (this.chartInstance2) {
    this.chartInstance2.dispose()
    this.chartInstance2 = null
  }
  if (this.chartInstance3) {
    this.chartInstance3.dispose()
    this.chartInstance3 = null
  }
  if (this.chartInstance4) {
    this.chartInstance4.dispose()
    this.chartInstance4 = null
  }
  if (this.chartInstance5) {
    this.chartInstance5.dispose()
    this.chartInstance5 = null
  }
}
