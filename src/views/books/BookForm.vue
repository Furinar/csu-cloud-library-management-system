<template>
  <div class="book-form-container">
    <el-card class="common-card">
      <template #header>
        <div class="card-header">
          <span>{{ isEdit ? '编辑图书' : '新增图书' }}</span>
        </div>
      </template>
      
      <el-form :model="form" ref="formRef" label-width="100px" :rules="rules">
        <el-form-item label="书名" prop="title">
          <el-input v-model="form.title" />
        </el-form-item>
        
        <el-form-item label="作者" prop="author">
          <el-input v-model="form.author" />
        </el-form-item>
        
        <el-form-item label="ISBN" prop="isbn">
          <el-input v-model="form.isbn" :disabled="isEdit" />
        </el-form-item>
        
        <el-form-item label="出版社" prop="publisher">
           <el-input v-model="form.publisher" />
        </el-form-item>
        
        <el-form-item label="分类" prop="category">
          <el-select v-model="form.category" placeholder="请选择分类">
            <el-option label="计算机/编程" value="计算机/编程" />
            <el-option label="文学/小说" value="文学/小说" />
            <el-option label="历史/传记" value="历史/传记" />
          </el-select>
        </el-form-item>
        
        <el-form-item label="库存" prop="totalStock">
          <el-input-number v-model="form.totalStock" :min="1" />
        </el-form-item>
        
        <el-form-item label="存放位置" prop="location">
          <el-input v-model="form.location" />
        </el-form-item>
        
        <el-form-item label="封面URL" prop="cover">
          <el-input v-model="form.cover" />
        </el-form-item>
        
        <el-form-item label="简介" prop="intro">
          <el-input v-model="form.intro" type="textarea" :rows="4" />
        </el-form-item>
        
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
          <el-button @click="$router.back()">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import { getBookById } from '@/api/book';

const route = useRoute();
const router = useRouter();
const formRef = ref();
const isEdit = computed(() => !!route.params.id);

const form = reactive({
  title: '',
  author: '',
  isbn: '',
  publisher: '',
  category: '',
  totalStock: 10,
  location: '',
  cover: '',
  intro: ''
});

const rules = {
  title: [{ required: true, message: '请输入书名', trigger: 'blur' }],
  isbn: [{ required: true, message: '请输入ISBN', trigger: 'blur' }],
  category: [{ required: true, message: '请选择分类', trigger: 'change' }]
};

onMounted(async () => {
  if (isEdit.value) {
    // Load book data
    const book = await getBookById(route.params.id as string);
    if (book) {
      Object.assign(form, book);
    }
  }
});

const handleSubmit = async () => {
  if (!formRef.value) return;
  await formRef.value.validate((valid: boolean) => {
    if (valid) {
      ElMessage.success(isEdit.value ? '更新成功' : '创建成功');
      router.push('/dashboard'); // Or book list
    }
  });
};
</script>

<style scoped lang="scss">
.book-form-container {
  max-width: 800px;
  margin: 0 auto;
}
</style>

