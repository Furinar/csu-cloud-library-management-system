# API 开发与使用指南

本文档旨在帮助开发者（包括新手）快速掌握如何在本项目中添加和使用 API 接口。本项目使用了 `axios` 进行 HTTP 请求的封装，并结合 TypeScript 提供类型提示。

## 1. 核心概念

在前端与后端交互时，我们通常遵循以下步骤：
1.  **定义类型 (Type/Interface)**: 告诉代码后端返回的数据长什么样。
2.  **编写 API 函数**: 封装具体的请求逻辑（URL、方法、参数）。
3.  **在组件中调用**: 获取数据并渲染到页面上。

## 2. 目录结构

所有的 API 相关文件都存放在 `src/api` 目录下，建议按照功能模块进行分类：

```
src/
├── api/
│   ├── auth.ts         # 认证相关接口 (登录, 注册, 用户信息)
│   ├── book.ts         # 图书管理接口 (查询, 详情, 推荐)
│   ├── borrow.ts       # 借阅管理接口
│   ├── notification.ts # 消息通知接口
│   └── ...
├── types/              # TypeScript 类型定义
│   ├── user.ts
│   ├── book.ts
│   └── ...
└── utils/
    └── request.ts      # Axios 请求实例封装 (已配置拦截器)
```

## 3. 如何新增一个接口 (手把手教程)

假设我们需要新增一个 **"获取热门图书列表"** 的接口。

### 第一步：定义数据类型

在 `src/types/book.ts` 中定义后端返回的数据结构。如果文件不存在，可以新建一个。

```typescript
// src/types/book.ts

// 定义单本图书的结构
export interface Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  isbn: string;
  price: number;
  description: string;
}

// 定义分页响应结构 (如果是分页接口)
export interface PageResult<T> {
  records: T[];      // 数据列表
  total: number;     // 总条数
  size: number;      // 每页大小
  current: number;   // 当前页
}
```

### 第二步：编写 API 函数

在 `src/api/book.ts` 中引入 `request` 工具和刚才定义的类型，然后编写函数。

```typescript
// src/api/book.ts
import request from '@/utils/request'; // 引入封装好的 axios 实例
import type { Book, PageResult } from '@/types/book'; // 引入类型

/**
 * 获取热门图书列表
 * 请求方法: GET
 * 请求路径: /books/hot
 * @param limit 限制返回数量
 */
export function getHotBooks(limit: number = 10) {
  return request<any, Book[]>({ // <any, Book[]> 表示返回的数据是 Book 数组
    url: '/books/hot',
    method: 'get',
    params: { limit } // GET 请求参数放在 params 中
  });
}

/**
 * 示例：添加图书 (POST 请求)
 * @param data 图书表单数据
 */
export function addBook(data: Partial<Book>) {
  return request<any, void>({
    url: '/books',
    method: 'post',
    data // POST/PUT 请求参数放在 data 中
  });
}
```

**注意**：`request` 函数接受两个泛型参数 `request<T, R>`：
- `T`: 响应体的外层结构（通常在拦截器处理后不需要关心，写 `any` 即可）。
- `R`: **最重要**，是你实际拿到的数据类型。例如返回图书列表就是 `Book[]`。

### 第三步：在 Vue 组件中使用

在 `.vue` 文件中引入并调用。

```vue
<template>
  <div>
    <h2>热门图书</h2>
    <ul v-if="!loading">
      <li v-for="book in bookList" :key="book.id">
        {{ book.title }} - {{ book.author }}
      </li>
    </ul>
    <div v-else>加载中...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getHotBooks } from '@/api/book'; // 引入 API 函数
import type { Book } from '@/types/book'; // 引入类型

const bookList = ref<Book[]>([]); // 定义响应式变量存储数据
const loading = ref(false);

// 获取数据的函数
const fetchData = async () => {
  loading.value = true;
  try {
    // await 等待请求完成，直接拿到 result (即 Book[])
    const result = await getHotBooks(5); 
    bookList.value = result;
  } catch (error) {
    console.error("获取失败:", error);
  } finally {
    loading.value = false;
  }
};

// 组件挂载时调用
onMounted(() => {
  fetchData();
});
</script>
```

## 4. `request.ts` 详解 (进阶)

位于 `src/utils/request.ts` 的文件是我们与后端通信的桥梁。

### 它做了什么？

1.  **基础配置**: 设置了 `baseURL` (如 `/api`) 和超时时间。
2.  **请求拦截 (Request Interceptor)**:
    -   每次请求前，自动从 `localStorage` 获取 `token` 并添加到请求头 `Authorization` 中。
    -   这样你就不需要每次手动传 token 了。
3.  **响应拦截 (Response Interceptor)**:
    -   **脱壳处理**: 后端通常返回 `{ code: 200, msg: "success", data: [...] }`。拦截器会自动判断 `code === 200`，并直接返回 `data` 部分。
    -   **错误处理**: 如果 `code !== 200` (如 401, 500)，拦截器会自动弹出 `ElMessage` 错误提示，并抛出 Promise 异常，方便你在组件中 `catch`。

### 环境变量

在根目录的 `.env` 文件中配置 API 地址：

```ini
# .env
VITE_API_URL=http://localhost:8080/api
```

## 5. 常见问题 Q&A

**Q: 为什么我的请求参数没发出去？**
A: 检查 GET 请求是否使用了 `params`，POST/PUT 请求是否使用了 `data`。

**Q: 接口报 404 Not Found？**
A: 
1. 检查 `src/utils/request.ts` 中的 `baseURL` 是否正确。
2. 检查 API 函数中的 `url` 拼写是否正确。
3. 确保后端服务已启动。

**Q: 为什么 response 里面拿不到 code？**
A: 因为拦截器已经处理过了，返回给你的直接是 `data` 内容。如果你需要完整的 response，需要修改 `request.ts` 的拦截器逻辑。

**Q: 如何传递路径参数 (如 /books/123)？**
A: 使用模板字符串拼接：
```typescript
export function getBookDetail(id: number) {
  return request({
    url: `/books/${id}`, // 注意这里是反引号
    method: 'get'
  });
}
```
