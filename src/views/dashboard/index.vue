<template>
  <div class="dashboard-container">
    <!-- Admin Stats -->
    <el-row :gutter="20" v-if="isAdmin" class="stats-row">
      <el-col :span="6" v-for="(item, index) in statsCards" :key="index">
        <el-card shadow="hover" class="stats-card">
          <div class="stats-content">
            <div class="stats-icon" :style="{ backgroundColor: item.color }">
              <el-icon><component :is="item.icon" /></el-icon>
            </div>
            <div class="stats-info">
              <div class="stats-value">{{ item.value }}</div>
              <div class="stats-label">{{ item.label }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <!-- Search Section -->
    <div class="search-section">
      <h2 class="section-title">图书检索</h2>
      <div class="search-box">
        <el-input
          v-model="searchKeyword"
          placeholder="请输入书名、作者或ISBN进行搜索..."
          class="main-search-input"
          size="large"
          @keyup.enter="handleSearch"
        >
          <template #prefix>
            <el-icon><Search /></el-icon>
          </template>
          <template #append>
            <el-button type="primary" @click="handleSearch">搜索</el-button>
          </template>
        </el-input>
      </div>
    </div>

    <!-- Main Content Grid -->
    <el-row :gutter="20" class="main-content-row">
      <!-- Left Column: New Books & Top 10 -->
      <el-col :span="16">
        <!-- New Books -->
        <div class="section-block">
          <div class="section-header">
            <h2 class="section-title">新书推荐</h2>
            <el-link type="primary" @click="$router.push('/books/recommend')">更多 <el-icon><ArrowRight /></el-icon></el-link>
          </div>
          
          <el-row :gutter="15" v-loading="loading">
            <el-col :span="8" v-for="book in recommendBooks" :key="book.id">
              <div class="book-card small" @click="goToDetail(book.id)">
                <div class="book-cover">
                  <img :src="book.coverUrl" :alt="book.title" />
                </div>
                <div class="book-info">
                  <h3 class="book-title" :title="book.title">{{ book.title }}</h3>
                  <p class="book-author">{{ book.author }}</p>
                  <el-tag size="small" class="book-tag">{{ book.category }}</el-tag>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>

        <!-- Top 10 Popular -->
         <div class="section-block" style="margin-top: 30px;">
          <div class="section-header">
            <h2 class="section-title">热门图书 TOP 10</h2>
          </div>
          <el-card shadow="never" class="common-card">
             <el-table :data="topBooks" stripe style="width: 100%" size="small">
              <el-table-column type="index" label="排名" width="60">
                 <template #default="{ $index }">
                    <span class="rank-num" :class="'rank-' + ($index + 1)">{{ $index + 1 }}</span>
                 </template>
              </el-table-column>
              <el-table-column prop="title" label="书名" show-overflow-tooltip />
              <el-table-column prop="author" label="作者" show-overflow-tooltip />
              <el-table-column prop="borrowCount" label="热度" width="100" align="right">
                 <template #default="{ row }">
                   <span class="hot-score"><el-icon><Star /></el-icon> {{ row.borrowCount }}</span>
                 </template>
              </el-table-column>
            </el-table>
          </el-card>
        </div>
      </el-col>

      <!-- Right Column: Charts -->
      <el-col :span="8">
        <!-- Category Chart -->
        <el-card class="common-card chart-card">
          <template #header>
             <div class="card-header">图书分类占比</div>
          </template>
          <div ref="categoryChart" class="chart-container"></div>
        </el-card>
        
         <!-- System Notice (Optional, using space) -->
         <el-card class="common-card" style="margin-top: 20px;">
            <template #header>
               <div class="card-header">系统公告</div>
            </template>
            <ul class="notice-list">
               <li><span class="dot"></span>欢迎使用中南云图书管理系统</li>
               <li><span class="dot"></span>图书馆即将进行年度盘点</li>
               <li><span class="dot"></span>请各位读者按时归还图书</li>
            </ul>
         </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Search, User, Collection, Notebook, Odometer, ArrowRight, Star } from '@element-plus/icons-vue';
import { useAuthStore } from '@/stores/auth';
import { getRecommendBooks } from '@/api/book';
import type { Book } from '@/types/book';
import * as echarts from 'echarts';

const router = useRouter();
const authStore = useAuthStore();
const isAdmin = computed(() => authStore.isAdmin);

const searchKeyword = ref('');
const recommendBooks = ref<Book[]>([]);
const loading = ref(false);
const categoryChart = ref<HTMLElement>();
let myCategoryChart: echarts.ECharts | null = null;

const statsCards = [
  { label: '总藏书量', value: '12,580', icon: 'Collection', color: '#409EFF' },
  { label: '注册用户', value: '3,200', icon: 'User', color: '#67C23A' },
  { label: '当前借阅', value: '856', icon: 'Notebook', color: '#E6A23C' },
  { label: '今日访问', value: '1,205', icon: 'Odometer', color: '#F56C6C' },
];

const topBooks = ref([
  // Fallback data or empty if fetched from API
]);

const initChart = () => {
  if (categoryChart.value) {
    myCategoryChart = echarts.init(categoryChart.value);
    myCategoryChart.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        orient: 'horizontal',
        bottom: 'bottom',
        icon: 'circle',
        itemWidth: 8,
        itemHeight: 8
      },
      series: [
        {
          name: '图书分类',
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['50%', '45%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 14,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '计算机', itemStyle: { color: '#165C91' } },
            { value: 735, name: '文学', itemStyle: { color: '#409EFF' } },
            { value: 580, name: '历史', itemStyle: { color: '#67C23A' } },
            { value: 484, name: '经济', itemStyle: { color: '#E6A23C' } },
            { value: 300, name: '其他', itemStyle: { color: '#909399' } }
          ]
        }
      ]
    });
  }
};

onMounted(async () => {
  loading.value = true;
  try {
    // API call to get recommended books
    const res = await getRecommendBooks();
    recommendBooks.value = res.slice(0, 3);
    // You might also want to fetch topBooks and stats from API here
    initChart();
    window.addEventListener('resize', () => myCategoryChart?.resize());
  } catch (e) {
    console.error(e)
  } finally {
    loading.value = false;
  }
});

onUnmounted(() => {
  window.removeEventListener('resize', () => myCategoryChart?.resize());
  myCategoryChart?.dispose();
});

const handleSearch = () => {
  if (searchKeyword.value.trim()) {
    router.push({ path: '/books/search', query: { keyword: searchKeyword.value } });
  }
};

const goToDetail = (id: string) => {
  router.push(`/books/detail/${id}`);
};

const formatDate = (dateStr: string) => {
  return dateStr; 
};
</script>

<style scoped lang="scss">
.dashboard-container {
  max-width: 1200px;
  margin: 0 auto;
}

.stats-row {
  margin-bottom: 30px;
}

.stats-card {
  border: none;
  transition: all 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  }
  
  .stats-content {
    display: flex;
    align-items: center;
    
    .stats-icon {
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 15px;
      color: #fff;
      font-size: 24px;
    }
    
    .stats-info {
      .stats-value {
        font-size: 24px;
        font-weight: bold;
        color: #333;
        line-height: 1.2;
      }
      .stats-label {
        font-size: 14px;
        color: #999;
        margin-top: 5px;
      }
    }
  }
}

.search-section {
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  margin-bottom: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  
  .section-title {
    margin-bottom: 20px;
    color: #333;
    font-weight: 600;
  }
  
  .search-box {
    max-width: 600px;
    margin: 0 auto;
  }
}

.section-block {
  margin-bottom: 20px;
  
  .section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    
    .section-title {
      font-size: 18px;
      font-weight: 600;
      color: #333;
      margin: 0;
      border-left: 4px solid #165C91;
      padding-left: 12px;
    }
  }
}

.book-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid transparent;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1);
    border-color: #165C91;
  }
  
  &.small {
     display: flex;
     flex-direction: column;
     
    .book-cover {
      height: 160px; 
      width: 100%;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .book-info {
      padding: 10px;
      
      .book-title {
        font-size: 14px;
        font-weight: 600;
        color: #333;
        margin: 0 0 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .book-author {
        font-size: 12px;
        color: #666;
        margin: 0 0 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}

.chart-container {
  height: 300px;
}

.rank-num {
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #f0f2f5;
  color: #666;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  
  &.rank-1 { background: #F56C6C; color: #fff; }
  &.rank-2 { background: #E6A23C; color: #fff; }
  &.rank-3 { background: #409EFF; color: #fff; }
}

.hot-score {
  color: #F56C6C;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  font-weight: 500;
}

.main-search-input {
  :deep(.el-input-group__append) {
    background-color: #165C91;
    color: #fff;
    border-color: #165C91;
    
    &:hover {
      background-color: #124E7C;
    }
  }
}

.notice-list {
  list-style: none;
  padding: 0;
  margin: 0;
  
  li {
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #f0f0f0;
    color: #606266;
    font-size: 14px;
    
    &:last-child {
      border-bottom: none;
    }
    
    .dot {
      width: 6px;
      height: 6px;
      background: #165C91;
      border-radius: 50%;
      margin-right: 10px;
    }
  }
}
</style>
