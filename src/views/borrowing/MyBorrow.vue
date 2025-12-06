<template>
  <div class="my-borrow-container">
    <el-card class="common-card">
      <div v-if="viewType === 'current'">
        <div class="card-header">
          <h3>当前借阅</h3>
        </div>
        <el-table :data="tableData" v-loading="loading" style="width: 100%">
          <el-table-column label="图书信息" width="300">
            <template #default="{ row }">
              <div class="book-info">
                <img :src="row.bookCoverUrl" alt="" class="book-cover" />
                <div class="book-text">
                  <div class="title">{{ row.bookTitle }}</div>
                  <!-- <div class="author">{{ row.author }}</div> -->
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="borrowDate" label="借阅日期" width="120" />
          <el-table-column prop="dueDate" label="应还日期" width="120">
            <template #default="{ row }">
              <span :class="{ 'overdue': isOverdue(row.dueDate) }">{{ row.dueDate }}</span>
            </template>
          </el-table-column>
          <el-table-column label="状态" width="100">
            <template #default="{ row }">
               <el-tag :type="row.status === 'OVERDUE' || isOverdue(row.dueDate) ? 'danger' : 'primary'">
                 {{ row.status === 'OVERDUE' || isOverdue(row.dueDate) ? '已逾期' : '借阅中' }}
               </el-tag>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template #default="{ row }">
              <el-button size="small" type="primary" @click="handleRenew(row)" :disabled="row.status === 'OVERDUE' || isOverdue(row.dueDate)">续借</el-button>
              <el-button size="small" type="success" @click="handleReturn(row)">归还申请</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div v-else>
        <div class="card-header">
          <h3>借阅历史</h3>
        </div>
        <el-table :data="tableData" v-loading="loading" style="width: 100%">
           <el-table-column label="图书信息" width="300">
            <template #default="{ row }">
              <div class="book-info">
                <img :src="row.bookCoverUrl" alt="" class="book-cover" />
                <div class="book-text">
                  <div class="title">{{ row.bookTitle }}</div>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="borrowDate" label="借阅日期" width="120" />
          <el-table-column prop="returnDate" label="归还日期" width="120" />
          <el-table-column label="状态" width="100">
            <template #default="{ row }">
              <el-tag type="info">已归还</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';
import { getCurrentBorrows, getHistoryBorrows } from '@/api/borrow';
import { useAuthStore } from '@/stores/auth';
import type { BorrowRecord } from '@/types/borrow';

const route = useRoute();
const loading = ref(false);
const tableData = ref<BorrowRecord[]>([]);
const authStore = useAuthStore();

// Mock Data
const mockCurrentBorrows: BorrowRecord[] = [
  {
    id: '1',
    bookId: '101',
    bookTitle: '深入浅出Vue.js',
    bookCoverUrl: 'https://via.placeholder.com/150', // Placeholder image
    borrowDate: '2023-10-01',
    dueDate: '2023-11-01',
    status: 'BORROWED'
  },
  {
    id: '2',
    bookId: '102',
    bookTitle: 'JavaScript高级程序设计',
    bookCoverUrl: 'https://via.placeholder.com/150',
    borrowDate: '2023-09-15',
    dueDate: '2023-10-15',
    status: 'OVERDUE' // Example of overdue book
  }
];

const mockHistoryBorrows: BorrowRecord[] = [
  {
    id: '3',
    bookId: '103',
    bookTitle: 'HTTP权威指南',
    bookCoverUrl: 'https://via.placeholder.com/150',
    borrowDate: '2023-01-10',
    dueDate: '2023-02-10',
    returnDate: '2023-02-05',
    status: 'RETURNED'
  },
  {
    id: '4',
    bookId: '104',
    bookTitle: '算法导论',
    bookCoverUrl: 'https://via.placeholder.com/150',
    borrowDate: '2023-03-01',
    dueDate: '2023-04-01',
    returnDate: '2023-03-28',
    status: 'RETURNED'
  }
];

// Determine view type based on route path
const viewType = computed(() => {
  return route.path.includes('history') ? 'history' : 'current';
});

const fetchData = async () => {
  // if (!authStore.isAuthenticated) return; // Allow viewing without auth for UI testing if needed, but keeping it is safer
  loading.value = true;
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));

    if (viewType.value === 'current') {
      // res = await getCurrentBorrows(currentPage, pageSize);
      tableData.value = mockCurrentBorrows;
    } else {
      // res = await getHistoryBorrows(currentPage, pageSize);
      tableData.value = mockHistoryBorrows;
    }
  } catch (error) {
    console.error('Failed to fetch borrow records:', error);
    ElMessage.error('获取借阅记录失败');
  } finally {
    loading.value = false;
  }
};

const isOverdue = (dueDate: string) => {
  return new Date(dueDate) < new Date();
};

const handleRenew = (row: BorrowRecord) => {
  ElMessageBox.confirm('确定要续借这本书吗？续借期限为15天。', '续借确认').then(() => {
    ElMessage.success('续借成功');
    // Mock update - In real app, call API here
  });
};

const handleReturn = (row: BorrowRecord) => {
  ElMessageBox.confirm('确定要申请归还这本书吗？', '归还确认').then(() => {
    ElMessage.success('归还申请已提交，请等待管理员确认');
    // Call return API
  });
};

onMounted(() => {
  fetchData();
});

// Re-fetch when route changes (e.g. current -> history)
watch(() => route.path, () => {
  fetchData();
});
</script>

<style scoped lang="scss">
.my-borrow-container {
  .card-header {
    margin-bottom: 20px;
    h3 {
      margin: 0;
      font-size: 18px;
      color: #333;
      border-left: 4px solid #165C91;
      padding-left: 12px;
    }
  }

  .book-info {
    display: flex;
    align-items: center;
    
    .book-cover {
      width: 40px;
      height: 56px;
      object-fit: cover;
      margin-right: 10px;
      border-radius: 4px;
    }
    
    .title {
      font-weight: 500;
      color: #333;
    }
    
    .author {
      font-size: 12px;
      color: #999;
    }
  }
  
  .overdue {
    color: #F56C6C;
    font-weight: bold;
  }
}
</style>
