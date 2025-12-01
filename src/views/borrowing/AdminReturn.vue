<template>
  <div class="admin-return-container">
    <el-card class="common-card">
      <div class="toolbar">
        <el-input v-model="searchKeyword" placeholder="输入用户账号或ISBN..." style="width: 300px;">
          <template #append>
             <el-button @click="handleSearch"><el-icon><Search /></el-icon></el-button>
          </template>
        </el-input>
      </div>
      
      <el-table :data="returnRequests" style="width: 100%; margin-top: 20px;">
        <el-table-column prop="user.name" label="借阅人" />
        <el-table-column prop="book.title" label="图书" />
        <el-table-column prop="borrowDate" label="借阅日期" />
        <el-table-column prop="dueDate" label="应还日期" />
        <el-table-column label="状态">
          <template #default>
            <el-tag type="warning">待归还确认</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="{ row }">
            <el-button type="success" size="small" @click="handleConfirm(row)">确认归还</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

const searchKeyword = ref('');
const returnRequests = ref([
  {
    id: '1',
    user: { name: '张三' },
    book: { title: '三体' },
    borrowDate: '2023-05-01',
    dueDate: '2023-06-01'
  }
]);

const handleSearch = () => {
  // Mock search
};

const handleConfirm = (row: any) => {
  ElMessage.success('归还确认成功');
  returnRequests.value = returnRequests.value.filter(item => item.id !== row.id);
};
</script>

