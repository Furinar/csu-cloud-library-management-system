<template>
  <div class="messages-container">
    <el-card class="common-card">
      <template #header>
        <div class="card-header">
          <span>消息通知</span>
          <el-button text type="primary" @click="markAllRead">全部已读</el-button>
        </div>
      </template>

      <el-tabs v-model="activeTab">
        <el-tab-pane label="系统通知" name="system">
          <el-empty v-if="systemMessages.length === 0" description="暂无系统通知" />
          <div v-else class="message-list">
            <div v-for="msg in systemMessages" :key="msg.id" class="message-item" :class="{ unread: !msg.read }">
              <div class="icon-box system">
                <el-icon><Bell /></el-icon>
              </div>
              <div class="content">
                <div class="title">{{ msg.title }}</div>
                <div class="time">{{ msg.time }}</div>
                <div class="desc">{{ msg.content }}</div>
              </div>
              <el-button v-if="!msg.read" size="small" circle icon="Check" @click="markRead(msg)" />
            </div>
          </div>
        </el-tab-pane>
        
        <el-tab-pane label="借阅提醒" name="borrow">
           <el-empty v-if="borrowMessages.length === 0" description="暂无借阅提醒" />
           <div v-else class="message-list">
            <div v-for="msg in borrowMessages" :key="msg.id" class="message-item" :class="{ unread: !msg.read }">
              <div class="icon-box borrow">
                <el-icon><Notebook /></el-icon>
              </div>
              <div class="content">
                <div class="title">{{ msg.title }}</div>
                <div class="time">{{ msg.time }}</div>
                <div class="desc">{{ msg.content }}</div>
              </div>
            </div>
           </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Bell, Notebook, Check } from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';

const activeTab = ref('system');

interface Message {
  id: number;
  title: string;
  content: string;
  time: string;
  read: boolean;
}

const systemMessages = ref<Message[]>([
  { id: 1, title: '系统维护通知', content: '系统将于今晚 24:00 进行例行维护，预计耗时 2 小时。', time: '2023-12-01 10:00', read: false },
  { id: 2, title: '欢迎新同学', content: '热烈欢迎 2023 级新同学加入中南云图书大家庭！', time: '2023-09-01 09:00', read: true },
]);

const borrowMessages = ref<Message[]>([
  { id: 3, title: '借阅即将到期', content: '您借阅的《深入浅出Vue.js》将于 3 天后到期，请及时归还或续借。', time: '2023-11-28 14:30', read: false },
]);

const markRead = (msg: Message) => {
  msg.read = true;
  ElMessage.success('已标记为已读');
};

const markAllRead = () => {
  systemMessages.value.forEach(m => m.read = true);
  borrowMessages.value.forEach(m => m.read = true);
  ElMessage.success('全部已读');
};
</script>

<style scoped lang="scss">
.messages-container {
  max-width: 800px;
  margin: 0 auto;
  
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .message-item {
    display: flex;
    padding: 15px;
    border-radius: 8px;
    background: #f9f9f9;
    margin-bottom: 10px;
    transition: all 0.3s;
    align-items: flex-start;
    
    &.unread {
      background: #fff;
      border: 1px solid #e6f0f8;
      box-shadow: 0 2px 8px rgba(22, 92, 145, 0.1);
      
      .title {
        font-weight: 600;
        color: #165C91;
      }
    }
    
    .icon-box {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
      flex-shrink: 0;
      
      &.system { background: #e1f3d8; color: #67C23A; }
      &.borrow { background: #fdf6ec; color: #E6A23C; }
    }
    
    .content {
      flex: 1;
      
      .title {
        font-size: 16px;
        margin-bottom: 5px;
        color: #333;
      }
      
      .time {
        font-size: 12px;
        color: #999;
        margin-bottom: 8px;
      }
      
      .desc {
        font-size: 14px;
        color: #666;
        line-height: 1.5;
      }
    }
  }
}
</style>

