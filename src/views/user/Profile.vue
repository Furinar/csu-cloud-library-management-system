<template>
  <div class="profile-container">
    <el-card class="common-card profile-card">
      <template #header>
        <div class="card-header">
          <span>个人信息管理</span>
        </div>
      </template>
      
      <el-form :model="form" label-width="100px" ref="formRef" :rules="rules">
        <el-form-item label="头像">
          <el-avatar :size="80" :src="form.avatar" />
        </el-form-item>
        
        <el-form-item label="账号" prop="username">
          <el-input v-model="form.username" disabled />
        </el-form-item>
        
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name" />
        </el-form-item>
        
        <el-form-item label="角色" prop="role">
          <el-tag>{{ form.role === 'admin' ? '管理员' : '普通用户' }}</el-tag>
        </el-form-item>
        
        <el-form-item label="注册时间">
          <span>{{ form.registerDate }}</span>
        </el-form-item>
        
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="form.phone" placeholder="请输入手机号" />
        </el-form-item>
        
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" placeholder="请输入邮箱" />
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="handleSave" :loading="saving">保存修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import { useAuthStore } from '@/stores/auth';

const authStore = useAuthStore();
const formRef = ref();
const saving = ref(false);

const form = reactive({
  username: '',
  name: '',
  role: '',
  registerDate: '',
  phone: '',
  email: '',
  avatar: ''
});

const rules = {
  name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
  phone: [{ pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }],
  email: [{ type: 'email', message: '请输入正确的邮箱', trigger: 'blur' }]
};

onMounted(() => {
  if (authStore.user) {
    Object.assign(form, authStore.user);
  }
});

const handleSave = async () => {
  saving.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Mock API
    ElMessage.success('保存成功');
    // Update store if needed
    if (authStore.user) {
       authStore.user.name = form.name;
       // ... others
    }
  } catch (error) {
    ElMessage.error('保存失败');
  } finally {
    saving.value = false;
  }
};
</script>

<style scoped lang="scss">
.profile-container {
  max-width: 800px;
  margin: 0 auto;
  
  .profile-card {
    .card-header {
      font-weight: 600;
    }
  }
}
</style>
