# API 使用文档

本项目已配置为按照 `api.md` 中描述的方式与后端 API 进行通信。

## 配置

API 的基础 URL 在 `src/utils/request.ts` 中配置。
默认为 `/api`。您可以通过在 `.env` 文件中设置 `VITE_API_URL` 来覆盖此设置。

```typescript
// src/utils/request.ts
const service = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  // ...
});
```

## API 模块

API 函数按领域组织在 `src/api/` 目录下。

### 认证 (`src/api/auth.ts`)

| 函数          | 接口                  | 描述             |
| ------------- | --------------------- | ---------------- |
| `login`       | `POST /auth/login`    | 用户登录         |
| `register`    | `POST /auth/register` | 用户注册         |
| `getUserInfo` | `GET /auth/me`        | 获取当前用户信息 |
| `logout`      | 仅客户端              | 清除令牌         |

### 图书 (`src/api/book.ts`)

| 函数                | 接口                        | 描述                  |
| ------------------- | --------------------------- | --------------------- |
| `getBooks`          | `GET /books`                | 获取分页图书列表      |
| `getBookById`       | `GET /books/{bookId}`       | 获取图书详情          |
| `createBook`        | `POST /admin/books`         | 创建新图书 (管理员)   |
| `updateBook`        | `PUT /admin/books/{bookId}` | 更新图书信息 (管理员) |
| `deleteBooks`       | `DELETE /admin/books`       | 删除图书 (管理员)     |
| `getRecommendBooks` | `GET /books` (模拟)         | 获取推荐图书          |

### 借阅 (`src/api/borrow.ts`)

| 函数                   | 接口                      | 描述             |
| ---------------------- | ------------------------- | ---------------- |
| `borrowBook`           | `POST /borrow`            | 借阅图书         |
| `returnBook`           | `POST /return`            | 归还图书         |
| `getCurrentBorrows`    | `GET /borrows/me`         | 获取当前借阅列表 |
| `getHistoryBorrows`    | `GET /borrows/history`    | 获取借阅历史     |
| `deleteHistoryRecords` | `DELETE /borrows/history` | 删除历史记录     |

### 通知 (`src/api/notification.ts`)

| 函数                | 接口                              | 描述           |
| ------------------- | --------------------------------- | -------------- |
| `getNotifications`  | `GET /notifications/me`           | 获取用户通知   |
| `getUnreadCount`    | `GET /notifications/unread-count` | 获取未读数量   |
| `readNotifications` | `PUT /notifications/read`         | 标记通知为已读 |

### 评价 (`src/api/review.ts`)

| 函数                 | 接口                        | 描述         |
| -------------------- | --------------------------- | ------------ |
| `createReview`       | `POST /reviews`             | 发布评价     |
| `getReviewsByBookId` | `GET /reviews/{bookId}`     | 获取图书评价 |
| `deleteReview`       | `DELETE /review/{reviewId}` | 删除评价     |

### 预约 (`src/api/reservation.ts`)

| 函数                 | 接口                      | 描述                  |
| -------------------- | ------------------------- | --------------------- |
| `createReservation`  | `POST /reservation`       | 预约图书              |
| `getMyReservations`  | `GET /reservation/me`     | 获取用户预约          |
| `cancelReservation`  | `PUT /reservation/cancel` | 取消预约              |
| `getAllReservations` | `GET /admin/reservation`  | 获取所有预约 (管理员) |

## 使用示例

```typescript
import { getBooks } from "@/api/book";

const fetchBooks = async () => {
  try {
    const res = await getBooks({ currentPage: 1, pageSize: 10, title: "Vue" });
    console.log(res.records);
  } catch (error) {
    console.error(error);
  }
};
```
