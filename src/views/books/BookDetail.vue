<template>
  <div class="book-detail-container" v-loading="loading">
    <div v-if="book" class="detail-card common-card">
      <div class="book-header">
        <div class="cover-wrapper">
          <img :src="book.cover" :alt="book.title" />
        </div>
        <div class="info-wrapper">
          <h1 class="book-title">{{ book.title }}</h1>
          <div class="book-meta-grid">
            <div class="meta-item"><span class="label">作者：</span>{{ book.author }}</div>
            <div class="meta-item"><span class="label">ISBN：</span>{{ book.isbn }}</div>
            <div class="meta-item"><span class="label">出版社：</span>{{ book.publisher }}</div>
            <div class="meta-item"><span class="label">出版日期：</span>{{ book.publishDate }}</div>
            <div class="meta-item"><span class="label">分类：</span>{{ book.category }}</div>
            <div class="meta-item"><span class="label">存放位置：</span>{{ book.location }}</div>
          </div>
          
          <div class="stock-info">
            <div class="stock-item">
              <div class="num">{{ book.availableStock }}</div>
              <div class="txt">可借数量</div>
            </div>
            <div class="stock-divider"></div>
            <div class="stock-item">
              <div class="num">{{ book.totalStock }}</div>
              <div class="txt">馆藏总量</div>
            </div>
          </div>
          
          <div class="action-area">
            <el-button 
              type="primary" 
              size="large" 
              :disabled="book.availableStock <= 0 || book.status !== 'available'"
              @click="handleBorrow"
            >
              {{ book.availableStock > 0 ? '立即借阅' : '暂时缺货' }}
            </el-button>
            <el-button size="large" @click="handleFavorite">收藏</el-button>
          </div>
        </div>
      </div>
      
      <el-divider />
      
      <div class="book-intro">
        <h3>内容简介</h3>
        <p>{{ book.intro }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { ElMessage, ElMessageBox } from 'element-plus';
import { getBookById } from '@/api/book';
import { borrowBook } from '@/api/borrow';
import { useAuthStore } from '@/stores/auth';
import type { Book } from '@/types/book';

const route = useRoute();
const router = useRouter();
const authStore = useAuthStore();

const loading = ref(false);
const book = ref<Book | undefined>(undefined);

onMounted(async () => {
  const id = route.params.id as string;
  if (id) {
    loading.value = true;
    try {
      book.value = await getBookById(id);
    } finally {
      loading.value = false;
    }
  }
});

const handleBorrow = () => {
  if (!authStore.isAuthenticated) {
    ElMessage.warning('请先登录');
    router.push('/auth/login');
    return;
  }

  ElMessageBox.confirm(
    '确认借阅这本书吗？借阅期限为30天。',
    '借阅确认',
    {
      confirmButtonText: '确认借阅',
      cancelButtonText: '取消',
      type: 'info',
    }
  ).then(async () => {
    try {
      if (book.value && authStore.user) {
        await borrowBook(authStore.user.id, book.value.id);
        ElMessage.success('借阅成功！请前往个人中心查看。');
        // Refresh book info to update stock (mock)
        if(book.value.availableStock > 0) book.value.availableStock--;
      }
    } catch (error: any) {
      ElMessage.error(error.message || '借阅失败');
    }
  });
};

const handleFavorite = () => {
  ElMessage.success('已加入收藏');
};
</script>

<style scoped lang="scss">
.book-detail-container {
  max-width: 1000px;
  margin: 0 auto;
  
  .detail-card {
    min-height: 500px;
  }
  
  .book-header {
    display: flex;
    gap: 40px;
    
    @media (max-width: 768px) {
      flex-direction: column;
    }
    
    .cover-wrapper {
      width: 260px;
      flex-shrink: 0;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      
      img {
        width: 100%;
        display: block;
      }
    }
    
    .info-wrapper {
      flex: 1;
      
      .book-title {
        font-size: 28px;
        color: #333;
        margin: 0 0 20px;
      }
      
      .book-meta-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin-bottom: 30px;
        
        .meta-item {
          color: #333;
          font-size: 14px;
          
          .label {
            color: #999;
            display: inline-block;
            width: 70px;
          }
        }
      }
      
      .stock-info {
        display: flex;
        background: #f9f9f9;
        padding: 20px;
        border-radius: 8px;
        margin-bottom: 30px;
        width: fit-content;
        
        .stock-item {
          text-align: center;
          padding: 0 20px;
          
          .num {
            font-size: 24px;
            font-weight: bold;
            color: #165C91;
          }
          .txt {
            font-size: 12px;
            color: #666;
            margin-top: 5px;
          }
        }
        
        .stock-divider {
          width: 1px;
          background: #e0e0e0;
        }
      }
      
      .action-area {
        display: flex;
        gap: 15px;
      }
    }
  }
  
  .book-intro {
    padding-top: 10px;
    
    h3 {
      font-size: 18px;
      color: #333;
      margin-bottom: 15px;
      border-left: 4px solid #165C91;
      padding-left: 10px;
    }
    
    p {
      font-size: 14px;
      color: #666;
      line-height: 1.8;
      text-align: justify;
    }
  }
}
</style>
