<template>
  <div class="user-list-container">
    <el-card class="common-card">
      <div class="toolbar">
        <el-input v-model="searchKeyword" placeholder="搜索用户..." style="width: 300px;" clearable @clear="handleSearch">
          <template #append>
            <el-button @click="handleSearch"><el-icon><Search /></el-icon></el-button>
          </template>
        </el-input>
        <el-button type="primary" @click="handleAddUser">添加用户</el-button>
      </div>
      
      <el-table :data="users" v-loading="loading" style="width: 100%; margin-top: 20px;">
        <el-table-column prop="username" label="账号" />
        <el-table-column prop="name" label="姓名" />
        <el-table-column prop="role" label="角色">
          <template #default="{ row }">
            <el-tag :type="row.role === 'admin' ? 'danger' : 'info'">{{ row.role === 'admin' ? '管理员' : '普通用户' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="状态">
           <template #default="{ row }">
            <el-tag :type="row.status === 'active' ? 'success' : 'danger'">{{ row.status === 'active' ? '正常' : '禁用' }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="registerDate" label="注册时间" />
        <el-table-column label="操作" width="200">
          <template #default="{ row }">
            <el-button size="small" @click="handleEdit(row)">编辑</el-button>
            <el-button 
              size="small" 
              :type="row.status === 'active' ? 'danger' : 'success'"
              @click="handleToggleStatus(row)"
            >
              {{ row.status === 'active' ? '禁用' : '启用' }}
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      
      <div class="pagination">
        <el-pagination layout="total, prev, pager, next" :total="100" />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Search } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
import type { User } from '@/types/user';

const loading = ref(false);
const users = ref<User[]>([]);
const searchKeyword = ref('');

const mockUsers: User[] = [
  { id: '1', username: 'admin', name: '管理员', role: 'admin', status: 'active', registerDate: '2023-01-01' },
  { id: '2', username: 'user', name: '普通用户', role: 'user', status: 'active', registerDate: '2023-02-01' },
  { id: '3', username: 'test', name: '测试用户', role: 'user', status: 'banned', registerDate: '2023-03-01' },
];

const handleSearch = () => {
  loading.value = true;
  setTimeout(() => {
    users.value = mockUsers.filter(u => u.username.includes(searchKeyword.value) || u.name.includes(searchKeyword.value));
    loading.value = false;
  }, 300);
};

const handleAddUser = () => {
  ElMessage.info('功能开发中');
};

const handleEdit = (row: User) => {
  ElMessage.info(`编辑用户: ${row.username}`);
};

const handleToggleStatus = (row: User) => {
  row.status = row.status === 'active' ? 'banned' : 'active';
  ElMessage.success('状态已更新');
};

onMounted(() => {
  handleSearch();
});
</script>

<style scoped lang="scss">
.user-list-container {
  .toolbar {
    display: flex;
    justify-content: space-between;
  }
  .pagination {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
