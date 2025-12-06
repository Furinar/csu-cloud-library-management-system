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
          <el-upload
            class="avatar-uploader"
            action="#"
            :show-file-list="false"
            :auto-upload="false"
            :on-change="handleAvatarChange"
            :before-upload="beforeAvatarUpload"
          >
            <div v-if="form.avatar" class="avatar-wrapper">
              <el-avatar :size="80" :src="form.avatar" />
              <div class="avatar-mask">
                <el-icon><Plus /></el-icon>
                <span>更换头像</span>
              </div>
            </div>
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </el-upload>
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
import { Plus } from '@element-plus/icons-vue';
import type { UploadProps, UploadFile } from 'element-plus';
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
    // Ensure mock avatar if none exists
    if (!form.avatar) {
        form.avatar = 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png';
    }
  }
});

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type !== 'image/jpeg' && rawFile.type !== 'image/png') {
    ElMessage.error('头像必须是 JPG 或 PNG 格式!');
    return false;
  }
  if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('头像大小不能超过 2MB!');
    return false;
  }
  return true;
};

const handleAvatarChange = (uploadFile: UploadFile) => {
  if (!uploadFile.raw) return;
  
  const isValid = beforeAvatarUpload(uploadFile.raw);
  if (!isValid) return;

  // Mock upload: read file as data URL
  const reader = new FileReader();
  reader.readAsDataURL(uploadFile.raw);
  reader.onload = () => {
    form.avatar = reader.result as string;
    ElMessage.success('头像上传成功（模拟）');
  };
};

const handleSave = async () => {
  saving.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Mock API
    ElMessage.success('保存成功');
    // Update store if needed
    if (authStore.user) {
       authStore.user.name = form.name;
       authStore.user.phone = form.phone;
       authStore.user.email = form.email;
       // authStore.user.avatar = form.avatar; // Add avatar to user type if needed, or just assume it's there
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
  
  .avatar-uploader {
    display: inline-block;
    
    :deep(.el-upload) {
      border: 1px dashed var(--el-border-color);
      border-radius: 50%; // Circular upload area
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: var(--el-transition-duration-fast);
      
      &:hover {
        border-color: var(--el-color-primary);
      }
    }
    
    .avatar-wrapper {
      position: relative;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      
      .el-avatar {
        display: block;
        width: 100%;
        height: 100%;
      }
      
      .avatar-mask {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s;
        font-size: 12px;
        
        .el-icon {
          font-size: 20px;
          margin-bottom: 4px;
        }
      }
      
      &:hover .avatar-mask {
        opacity: 1;
      }
    }
    
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 80px;
      height: 80px;
      text-align: center;
      line-height: 80px;
      border: 1px dashed #d9d9d9;
      border-radius: 50%;
    }
  }
}
</style>
