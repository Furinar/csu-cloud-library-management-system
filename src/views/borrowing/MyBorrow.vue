<template>
  <div class="my-borrow-container">
    <el-card class="common-card">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="当前借阅" name="current">
          <el-table :data="currentBorrows" v-loading="loading" style="width: 100%">
            <el-table-column label="图书信息" width="300">
              <template #default="{ row }">
                <div class="book-info">
                  <img :src="row.book.cover" alt="" class="book-cover" />
                  <div class="book-text">
                    <div class="title">{{ row.book.title }}</div>
                    <div class="author">{{ row.book.author }}</div>
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
                 <el-tag :type="isOverdue(row.dueDate) ? 'danger' : 'primary'">
                   {{ isOverdue(row.dueDate) ? '已逾期' : '借阅中' }}
                 </el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template #default="{ row }">
                <el-button size="small" type="primary" @click="handleRenew(row)" :disabled="isOverdue(row.dueDate)">续借</el-button>
                <el-button size="small" type="success" @click="handleReturn(row)">归还申请</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>

        <el-tab-pane label="借阅历史" name="history">
          <el-table :data="historyBorrows" v-loading="loading" style="width: 100%">
             <el-table-column label="图书信息" width="300">
              <template #default="{ row }">
                <div class="book-info">
                  <img :src="row.book.cover" alt="" class="book-cover" />
                  <div class="book-text">
                    <div class="title">{{ row.book.title }}</div>
                    <div class="author">{{ row.book.author }}</div>
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
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { ElMessage, ElMessageBox } from 'element-plus';
import { getMyBorrows } from '@/api/borrow';
import { useAuthStore } from '@/stores/auth';
import type { BorrowRecord } from '@/types/borrow';

const activeTab = ref('current');
const loading = ref(false);
const allBorrows = ref<BorrowRecord[]>([]);
const authStore = useAuthStore();

const currentBorrows = computed(() => allBorrows.value.filter(b => b.status === 'borrowing' || b.status === 'overdue'));
const historyBorrows = computed(() => allBorrows.value.filter(b => b.status === 'returned'));

const fetchData = async () => {
  if (!authStore.user) return;
  loading.value = true;
  try {
    allBorrows.value = await getMyBorrows(authStore.user.id);
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
    // Mock update
    row.dueDate = '2023-06-15'; // Simplified
  });
};

const handleReturn = (row: BorrowRecord) => {
  ElMessageBox.confirm('确定要申请归还这本书吗？', '归还确认').then(() => {
    ElMessage.success('归还申请已提交，请等待管理员确认');
  });
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped lang="scss">
.my-borrow-container {
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

