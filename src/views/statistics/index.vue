<template>
  <div class="statistics-container">
    <h2 class="page-title">数据统计与报表</h2>
    
    <el-row :gutter="20" class="chart-row">
      <el-col :span="12">
        <el-card class="common-card">
          <template #header>
            <div class="card-header">借阅量趋势 (2023)</div>
          </template>
          <div ref="borrowTrendChart" class="chart-container"></div>
        </el-card>
      </el-col>
      
      <el-col :span="12">
        <el-card class="common-card">
          <template #header>
             <div class="card-header">图书分类占比</div>
          </template>
          <div ref="categoryChart" class="chart-container"></div>
        </el-card>
      </el-col>
    </el-row>
    
    <el-row :gutter="20" class="chart-row">
       <el-col :span="24">
        <el-card class="common-card">
          <template #header>
             <div class="card-header">热门图书 TOP 10</div>
          </template>
          <el-table :data="topBooks" style="width: 100%">
            <el-table-column type="index" label="排名" width="80" />
            <el-table-column prop="title" label="书名" />
            <el-table-column prop="author" label="作者" />
            <el-table-column prop="borrowCount" label="借阅次数" width="120" />
          </el-table>
        </el-card>
       </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import * as echarts from 'echarts';

const borrowTrendChart = ref<HTMLElement>();
const categoryChart = ref<HTMLElement>();
let myBorrowChart: echarts.ECharts | null = null;
let myCategoryChart: echarts.ECharts | null = null;

const topBooks = [
  { title: '深入浅出Vue.js', author: '刘博文', borrowCount: 156 },
  { title: 'JavaScript高级程序设计', author: 'Matt Frisbie', borrowCount: 142 },
  { title: '三体', author: '刘慈欣', borrowCount: 128 },
  { title: '活着', author: '余华', borrowCount: 98 },
  { title: '百年孤独', author: '加西亚·马尔克斯', borrowCount: 85 },
  { title: '解忧杂货店', author: '东野圭吾', borrowCount: 76 },
  { title: '红楼梦', author: '曹雪芹', borrowCount: 72 },
  { title: '围城', author: '钱钟书', borrowCount: 65 },
  { title: '追风筝的人', author: '卡勒德·胡赛尼', borrowCount: 60 },
  { title: '小王子', author: '安托万', borrowCount: 55 },
];

const initCharts = () => {
  if (borrowTrendChart.value) {
    myBorrowChart = echarts.init(borrowTrendChart.value);
    myBorrowChart.setOption({
      tooltip: {
        trigger: 'axis'
      },
      xAxis: {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 132, 101, 134, 90, 230, 210, 180, 150, 200, 160, 190],
          type: 'line',
          smooth: true,
          color: '#165C91',
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: 'rgba(22, 92, 145, 0.5)' },
              { offset: 1, color: 'rgba(22, 92, 145, 0.05)' }
            ])
          }
        }
      ]
    });
  }

  if (categoryChart.value) {
    myCategoryChart = echarts.init(categoryChart.value);
    myCategoryChart.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        left: 'left'
      },
      series: [
        {
          name: '图书分类',
          type: 'pie',
          radius: '70%',
          data: [
            { value: 1048, name: '计算机/编程' },
            { value: 735, name: '文学/小说' },
            { value: 580, name: '历史/传记' },
            { value: 484, name: '经济/管理' },
            { value: 300, name: '其他' }
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    });
  }
};

const resizeCharts = () => {
  myBorrowChart?.resize();
  myCategoryChart?.resize();
};

onMounted(() => {
  initCharts();
  window.addEventListener('resize', resizeCharts);
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeCharts);
  myBorrowChart?.dispose();
  myCategoryChart?.dispose();
});
</script>

<style scoped lang="scss">
.statistics-container {
  .page-title {
    margin-bottom: 20px;
    color: #333;
    font-weight: 600;
  }
  
  .chart-row {
    margin-bottom: 20px;
  }
  
  .chart-container {
    height: 350px;
  }
}
</style>
