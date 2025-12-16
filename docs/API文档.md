---
title: CSU Cloud Library Management System API
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.30"

---

# CSU Cloud Library Management System API

API documentation for the CSU Cloud Library Management System.

Base URLs:

# Authentication

# Admin Book

## POST createBook

POST /admin/book

管理员新增图书

> Body 请求参数

```json
{
  "title": "string",
  "author": "string",
  "isbn": "string",
  "publisher": "string",
  "publishDate": "2019-08-24",
  "category": "string",
  "description": "string",
  "coverUrl": "string",
  "totalStock": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[BookCreateDTO](#schemabookcreatedto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "title": "string",
    "publisher": "string",
    "author": "string",
    "category": "string",
    "description": "string",
    "publishDate": "2019-08-24",
    "coverUrl": "string",
    "totalStock": 0,
    "availableStock": 0
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseBookBriefVO](#schemaapiresponsebookbriefvo)|

## DELETE deleteBooksById

DELETE /admin/book

管理员批量删除图书

> Body 请求参数

```json
{
  "bookIdList": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[BooksDeleteDTO](#schemabooksdeletedto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseVoid](#schemaapiresponsevoid)|

## PUT updateBookById

PUT /admin/book/{bookId}

管理员更新图书信息

> Body 请求参数

```json
{
  "title": "string",
  "author": "string",
  "isbn": "string",
  "publisher": "string",
  "publishDate": "2019-08-24",
  "category": "string",
  "description": "string",
  "coverUrl": "string",
  "totalStock": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|bookId|path|string| 是 |none|
|body|body|[BookUpdateDTO](#schemabookupdatedto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "title": "string",
    "author": "string",
    "isbn": "string",
    "publisher": "string",
    "publishDate": "2019-08-24",
    "category": "string",
    "description": "string",
    "coverUrl": "string",
    "totalStock": 0,
    "availableStock": 0,
    "averageRating": 0.1
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseBookDetailVO](#schemaapiresponsebookdetailvo)|

## GET getAllBooksCount

GET /admin/book/count

获取图书总数统计

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": "string",
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseString](#schemaapiresponsestring)|

# Book

## GET getBooks

GET /book

分页获取图书列表 (支持搜索)

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|currentPage|query|integer(int64)| 是 |none|
|pageSize|query|integer(int64)| 是 |none|
|title|query|string| 否 |none|
|author|query|string| 否 |none|
|isbn|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "currentPage": 0,
    "pageSize": 0,
    "totalPage": 0,
    "totalCount": 0,
    "recordsCount": 0,
    "records": [
      {
        "id": "string",
        "title": "string",
        "publisher": "string",
        "author": "string",
        "category": "string",
        "description": "string",
        "publishDate": "2019-08-24",
        "coverUrl": "string",
        "totalStock": 0,
        "availableStock": 0
      }
    ]
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponsePageResponseBookBriefVO](#schemaapiresponsepageresponsebookbriefvo)|

## POST [NEW] addBook

POST /book

新增图书 (普通用户/管理员)

> Body 请求参数

```json
{
  "title": "string",
  "author": "string",
  "isbn": "string",
  "publisher": "string",
  "publishDate": "2019-08-24",
  "category": "string",
  "description": "string",
  "coverUrl": "string",
  "totalStock": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[BookCreateDTO](#schemabookcreatedto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "title": "string",
    "publisher": "string",
    "author": "string",
    "category": "string",
    "description": "string",
    "publishDate": "2019-08-24",
    "coverUrl": "string",
    "totalStock": 0,
    "availableStock": 0
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseBookBriefVO](#schemaapiresponsebookbriefvo)|

## GET getBookById

GET /book/{bookId}

获取图书详情

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|bookId|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "title": "string",
    "author": "string",
    "isbn": "string",
    "publisher": "string",
    "publishDate": "2019-08-24",
    "category": "string",
    "description": "string",
    "coverUrl": "string",
    "totalStock": 0,
    "availableStock": 0,
    "averageRating": 0.1
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseBookDetailVO](#schemaapiresponsebookdetailvo)|

## PUT [NEW] updateBook

PUT /book/{bookId}

更新图书信息

> Body 请求参数

```json
{
  "title": "string",
  "author": "string",
  "isbn": "string",
  "publisher": "string",
  "publishDate": "2019-08-24",
  "category": "string",
  "description": "string",
  "coverUrl": "string",
  "totalStock": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|bookId|path|string| 是 |none|
|body|body|[BookUpdateDTO](#schemabookupdatedto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "title": "string",
    "author": "string",
    "isbn": "string",
    "publisher": "string",
    "publishDate": "2019-08-24",
    "category": "string",
    "description": "string",
    "coverUrl": "string",
    "totalStock": 0,
    "availableStock": 0,
    "averageRating": 0.1
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseBookDetailVO](#schemaapiresponsebookdetailvo)|

## DELETE deleteBook

DELETE /book/{bookId}

删除单本图书

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|bookId|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseVoid](#schemaapiresponsevoid)|

## GET getTop10Books

GET /book/get/top10

获取热门图书 Top 10

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": "string",
      "title": "string",
      "author": "string",
      "isbn": "string",
      "publisher": "string",
      "publishDate": "2019-08-24",
      "category": "string",
      "description": "string",
      "coverUrl": "string",
      "totalStock": 0,
      "availableStock": 0,
      "averageRating": 0.1
    }
  ],
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseListBookDetailVO](#schemaapiresponselistbookdetailvo)|

## GET [NEW] getRecommendBooks

GET /book/recommend

获取推荐图书

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|count|query|integer| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": "string",
      "title": "string",
      "publisher": "string",
      "author": "string",
      "category": "string",
      "description": "string",
      "publishDate": "2019-08-24",
      "coverUrl": "string",
      "totalStock": 0,
      "availableStock": 0
    }
  ],
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseListBookBriefVO](#schemaapiresponselistbookbriefvo)|

# User

## POST login

POST /user/login

用户登录

> Body 请求参数

```json
{
  "username": "string",
  "password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[UserLoginDTO](#schemauserlogindto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "token": "string",
    "userInfo": {
      "id": "string",
      "username": "string",
      "email": "string",
      "role": "string",
      "isDeleted": 0
    }
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseLoginVO](#schemaapiresponseloginvo)|

## POST register

POST /user/register

用户注册

> Body 请求参数

```json
{
  "username": "string",
  "password": "string",
  "email": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[UserRegisterDTO](#schemauserregisterdto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "userName": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "email": "string",
    "role": "string"
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseRegisterVO](#schemaapiresponseregistervo)|

## GET info

GET /user/info

获取当前用户信息

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "username": "string",
    "email": "string",
    "role": "string",
    "isDeleted": 0
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseUserVO](#schemaapiresponseuservo)|

## GET [NEW] listUsers

GET /user/list

分页获取用户列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|currentPage|query|integer(int64)| 否 |none|
|pageSize|query|integer(int64)| 否 |none|
|keyword|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "currentPage": 0,
    "pageSize": 0,
    "totalPage": 0,
    "totalCount": 0,
    "recordsCount": 0,
    "records": [
      {
        "id": "string",
        "username": "string",
        "email": "string",
        "role": "string",
        "isDeleted": 0
      }
    ]
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponsePageResponseUserVO](#schemaapiresponsepageresponseuservo)|

## PUT [NEW] updateUserStatus

PUT /user/status/{id}

更新用户状态

> Body 请求参数

```json
{
  "status": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|id|path|integer(int64)| 是 |none|
|body|body|[UserStatusDTO](#schemauserstatusdto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseVoid](#schemaapiresponsevoid)|

## PUT [NEW] updatePassword

PUT /user/password

修改密码

> Body 请求参数

```json
{
  "oldPassword": "string",
  "newPassword": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[UserPasswordDTO](#schemauserpassworddto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseVoid](#schemaapiresponsevoid)|

## PUT [NEW] updateProfile

PUT /user/profile

更新个人资料

> Body 请求参数

```json
{
  "email": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[UserProfileDTO](#schemauserprofiledto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseVoid](#schemaapiresponsevoid)|

## POST [NEW] resetPassword

POST /user/reset-password

重置密码

> Body 请求参数

```json
{
  "email": "string",
  "newPassword": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[UserResetPasswordDTO](#schemauserresetpassworddto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseVoid](#schemaapiresponsevoid)|

# Admin User

## GET getAllUsersCount

GET /admin/user/count

获取用户总数统计

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": "string",
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseString](#schemaapiresponsestring)|

## PUT [NEW] updateUserStatus

PUT /admin/user/{userId}/status

管理员更新用户状态

> Body 请求参数

```json
{
  "status": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userId|path|integer(int64)| 是 |none|
|body|body|[UserStatusDTO](#schemauserstatusdto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseVoid](#schemaapiresponsevoid)|

# Borrow Record

## POST borrowBookById

POST /borrow

借阅图书

> Body 请求参数

```json
{
  "bookId": "string",
  "borrowTime": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[BorrowRequestDTO](#schemaborrowrequestdto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "bookId": "string",
    "bookTitle": "string",
    "bookCoverUrl": "string",
    "userId": "string",
    "userName": "string",
    "borrowDate": "2019-08-24T14:15:22Z",
    "dueDate": "2019-08-24T14:15:22Z",
    "returnDate": "2019-08-24T14:15:22Z",
    "status": "string"
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseBorrowRecordVO](#schemaapiresponseborrowrecordvo)|

## POST returnBookByBorrowId

POST /borrow/return

归还图书

> Body 请求参数

```json
{
  "borrowRecordId": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[ReturnRequestDTO](#schemareturnrequestdto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "bookId": "string",
    "bookTitle": "string",
    "bookCoverUrl": "string",
    "userId": "string",
    "userName": "string",
    "borrowDate": "2019-08-24T14:15:22Z",
    "dueDate": "2019-08-24T14:15:22Z",
    "returnDate": "2019-08-24T14:15:22Z",
    "status": "string"
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseBorrowRecordVO](#schemaapiresponseborrowrecordvo)|

## GET getCurrentBorrowRecords

GET /borrow/me

获取当前借阅记录 (未还/逾期)

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|currentPage|query|integer(int64)| 是 |none|
|pageSize|query|integer(int64)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "currentPage": 0,
    "pageSize": 0,
    "totalPage": 0,
    "totalCount": 0,
    "recordsCount": 0,
    "records": [
      {
        "id": "string",
        "bookId": "string",
        "bookTitle": "string",
        "bookCoverUrl": "string",
        "userId": "string",
        "userName": "string",
        "borrowDate": "2019-08-24T14:15:22Z",
        "dueDate": "2019-08-24T14:15:22Z",
        "returnDate": "2019-08-24T14:15:22Z",
        "status": "string"
      }
    ]
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponsePageResponseBorrowRecordVO](#schemaapiresponsepageresponseborrowrecordvo)|

## GET getHistoryBorrowRecords

GET /borrow/history

获取历史借阅记录 (已还)

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|currentPage|query|integer(int64)| 是 |none|
|pageSize|query|integer(int64)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "currentPage": 0,
    "pageSize": 0,
    "totalPage": 0,
    "totalCount": 0,
    "recordsCount": 0,
    "records": [
      {
        "id": "string",
        "bookId": "string",
        "bookTitle": "string",
        "bookCoverUrl": "string",
        "userId": "string",
        "userName": "string",
        "borrowDate": "2019-08-24T14:15:22Z",
        "dueDate": "2019-08-24T14:15:22Z",
        "returnDate": "2019-08-24T14:15:22Z",
        "status": "string"
      }
    ]
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponsePageResponseBorrowRecordVO](#schemaapiresponsepageresponseborrowrecordvo)|

## DELETE deleteHistoryRecords

DELETE /borrow/history

删除历史借阅记录

> Body 请求参数

```json
{
  "borrowRecordIdList": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[HistoryRecordsDeleteDTO](#schemahistoryrecordsdeletedto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseVoid](#schemaapiresponsevoid)|

# Admin Borrow Record

## POST [NEW] confirmReturn

POST /admin/borrow/return/confirm

管理员确认还书

> Body 请求参数

```json
{
  "borrowRecordId": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[ReturnRequestDTO](#schemareturnrequestdto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "bookId": "string",
    "bookTitle": "string",
    "bookCoverUrl": "string",
    "userId": "string",
    "userName": "string",
    "borrowDate": "2019-08-24T14:15:22Z",
    "dueDate": "2019-08-24T14:15:22Z",
    "returnDate": "2019-08-24T14:15:22Z",
    "status": "string"
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseBorrowRecordVO](#schemaapiresponseborrowrecordvo)|

## GET getAllBorrowRecords

GET /admin/borrow

管理员分页获取所有借阅记录

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|currentPage|query|integer(int64)| 是 |none|
|pageSize|query|integer(int64)| 是 |none|
|bookTitle|query|string| 否 |none|
|status|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "currentPage": 0,
    "pageSize": 0,
    "totalPage": 0,
    "totalCount": 0,
    "recordsCount": 0,
    "records": [
      {
        "id": "string",
        "bookId": "string",
        "bookTitle": "string",
        "bookCoverUrl": "string",
        "userId": "string",
        "userName": "string",
        "borrowDate": "2019-08-24T14:15:22Z",
        "dueDate": "2019-08-24T14:15:22Z",
        "returnDate": "2019-08-24T14:15:22Z",
        "status": "string"
      }
    ]
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponsePageResponseBorrowRecordVO](#schemaapiresponsepageresponseborrowrecordvo)|

## GET getAllRecordsCount

GET /admin/borrow/count

获取借阅记录总数统计

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": "string",
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseString](#schemaapiresponsestring)|

## GET getOverdueRate

GET /admin/borrow/overdue-rate

获取逾期率统计

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": "string",
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseString](#schemaapiresponsestring)|

## GET getReturnedRate

GET /admin/borrow/returned-rate

获取归还率统计

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": "string",
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseString](#schemaapiresponsestring)|

# Notification

## GET getNotifications

GET /notification/me

获取我的通知列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|currentPage|query|integer(int64)| 是 |none|
|pageSize|query|integer(int64)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "currentPage": 0,
    "pageSize": 0,
    "totalPage": 0,
    "totalCount": 0,
    "recordsCount": 0,
    "records": [
      {
        "id": "string",
        "title": "string",
        "content": "string",
        "type": "string",
        "status": "string",
        "gmtCreate": "2019-08-24T14:15:22Z",
        "userName": "string"
      }
    ]
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponsePageResponseNotificationVO](#schemaapiresponsepageresponsenotificationvo)|

## GET getUnreadCount

GET /notification/unread-count

获取未读通知数量

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": "string",
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseString](#schemaapiresponsestring)|

## PUT readNotifications

PUT /notification/read

批量标记通知为已读

> Body 请求参数

```json
{
  "notificationIdList": [
    "string"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[ReadNotificationsDTO](#schemareadnotificationsdto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseVoid](#schemaapiresponsevoid)|

# Admin Notification

## GET [NEW] getAllNotifications

GET /admin/notification/list

管理员获取所有通知

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|currentPage|query|integer(int64)| 是 |none|
|pageSize|query|integer(int64)| 是 |none|
|keyword|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "currentPage": 0,
    "pageSize": 0,
    "totalPage": 0,
    "totalCount": 0,
    "recordsCount": 0,
    "records": [
      {
        "id": "string",
        "title": "string",
        "content": "string",
        "type": "string",
        "status": "string",
        "gmtCreate": "2019-08-24T14:15:22Z",
        "userName": "string"
      }
    ]
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponsePageResponseNotificationVO](#schemaapiresponsepageresponsenotificationvo)|

## POST pushNotification2All

POST /admin/notification/push-all

推送通知给所有用户

> Body 请求参数

```json
{
  "title": "string",
  "content": "string",
  "type": "string",
  "status": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[NotificationPushDTO](#schemanotificationpushdto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseVoid](#schemaapiresponsevoid)|

## POST pushNotification2User

POST /admin/notification/push/{userName}

推送通知给指定用户

> Body 请求参数

```json
{
  "title": "string",
  "content": "string",
  "type": "string",
  "status": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|userName|path|string| 是 |none|
|body|body|[NotificationPushDTO](#schemanotificationpushdto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseVoid](#schemaapiresponsevoid)|

# Review

## POST createReview

POST /review

发表评价

> Body 请求参数

```json
{
  "bookId": "string",
  "rating": 0.1,
  "comment": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|[ReviewCreateDTO](#schemareviewcreatedto)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "bookId": "string",
    "userId": "string",
    "username": "string",
    "rating": 0.1,
    "comment": "string",
    "gmtCreate": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseReviewVO](#schemaapiresponsereviewvo)|

## DELETE deleteReview

DELETE /review/{reviewId}

删除评价

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|reviewId|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseVoid](#schemaapiresponsevoid)|

## GET getReviewsByBookId

GET /review/{bookId}

获取指定图书的评价列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|bookId|path|string| 是 |none|
|currentPage|query|integer(int64)| 是 |none|
|pageSize|query|integer(int64)| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "currentPage": 0,
    "pageSize": 0,
    "totalPage": 0,
    "totalCount": 0,
    "recordsCount": 0,
    "records": [
      {
        "id": "string",
        "bookId": "string",
        "userId": "string",
        "username": "string",
        "rating": 0.1,
        "comment": "string",
        "gmtCreate": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponsePageResponseReviewVO](#schemaapiresponsepageresponsereviewvo)|

# Admin Review

## DELETE deleteAppointedReview

DELETE /admin/review/{reviewId}

管理员删除指定评价

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|reviewId|path|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Successful operation|[ApiResponseVoid](#schemaapiresponsevoid)|

# 数据模型

<h2 id="tocS_BookCreateDTO">BookCreateDTO</h2>

<a id="schemabookcreatedto"></a>
<a id="schema_BookCreateDTO"></a>
<a id="tocSbookcreatedto"></a>
<a id="tocsbookcreatedto"></a>

```json
{
  "title": "string",
  "author": "string",
  "isbn": "string",
  "publisher": "string",
  "publishDate": "2019-08-24",
  "category": "string",
  "description": "string",
  "coverUrl": "string",
  "totalStock": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|title|string|false|none||none|
|author|string|false|none||none|
|isbn|string|false|none||none|
|publisher|string|false|none||none|
|publishDate|string(date)|false|none||none|
|category|string|false|none||none|
|description|string|false|none||none|
|coverUrl|string|false|none||none|
|totalStock|integer|false|none||none|

<h2 id="tocS_BookUpdateDTO">BookUpdateDTO</h2>

<a id="schemabookupdatedto"></a>
<a id="schema_BookUpdateDTO"></a>
<a id="tocSbookupdatedto"></a>
<a id="tocsbookupdatedto"></a>

```json
{
  "title": "string",
  "author": "string",
  "isbn": "string",
  "publisher": "string",
  "publishDate": "2019-08-24",
  "category": "string",
  "description": "string",
  "coverUrl": "string",
  "totalStock": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|title|string|false|none||none|
|author|string|false|none||none|
|isbn|string|false|none||none|
|publisher|string|false|none||none|
|publishDate|string(date)|false|none||none|
|category|string|false|none||none|
|description|string|false|none||none|
|coverUrl|string|false|none||none|
|totalStock|integer|false|none||none|

<h2 id="tocS_BooksDeleteDTO">BooksDeleteDTO</h2>

<a id="schemabooksdeletedto"></a>
<a id="schema_BooksDeleteDTO"></a>
<a id="tocSbooksdeletedto"></a>
<a id="tocsbooksdeletedto"></a>

```json
{
  "bookIdList": [
    "string"
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|bookIdList|[string]|false|none||none|

<h2 id="tocS_BorrowRequestDTO">BorrowRequestDTO</h2>

<a id="schemaborrowrequestdto"></a>
<a id="schema_BorrowRequestDTO"></a>
<a id="tocSborrowrequestdto"></a>
<a id="tocsborrowrequestdto"></a>

```json
{
  "bookId": "string",
  "borrowTime": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|bookId|string|false|none||none|
|borrowTime|integer|false|none||1, 3, 7, 14, 30, 60, 90|

<h2 id="tocS_HistoryRecordsDeleteDTO">HistoryRecordsDeleteDTO</h2>

<a id="schemahistoryrecordsdeletedto"></a>
<a id="schema_HistoryRecordsDeleteDTO"></a>
<a id="tocShistoryrecordsdeletedto"></a>
<a id="tocshistoryrecordsdeletedto"></a>

```json
{
  "borrowRecordIdList": [
    "string"
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|borrowRecordIdList|[string]|false|none||none|

<h2 id="tocS_NotificationPushDTO">NotificationPushDTO</h2>

<a id="schemanotificationpushdto"></a>
<a id="schema_NotificationPushDTO"></a>
<a id="tocSnotificationpushdto"></a>
<a id="tocsnotificationpushdto"></a>

```json
{
  "title": "string",
  "content": "string",
  "type": "string",
  "status": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|title|string|false|none||none|
|content|string|false|none||none|
|type|string|false|none||COMMON, DUE_REMINDER, OVERDUE_NOTICE|
|status|string|false|none||UNREAD, READ|

<h2 id="tocS_ReadNotificationsDTO">ReadNotificationsDTO</h2>

<a id="schemareadnotificationsdto"></a>
<a id="schema_ReadNotificationsDTO"></a>
<a id="tocSreadnotificationsdto"></a>
<a id="tocsreadnotificationsdto"></a>

```json
{
  "notificationIdList": [
    "string"
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|notificationIdList|[string]|false|none||none|

<h2 id="tocS_ReturnRequestDTO">ReturnRequestDTO</h2>

<a id="schemareturnrequestdto"></a>
<a id="schema_ReturnRequestDTO"></a>
<a id="tocSreturnrequestdto"></a>
<a id="tocsreturnrequestdto"></a>

```json
{
  "borrowRecordId": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|borrowRecordId|string|false|none||none|

<h2 id="tocS_ReviewCreateDTO">ReviewCreateDTO</h2>

<a id="schemareviewcreatedto"></a>
<a id="schema_ReviewCreateDTO"></a>
<a id="tocSreviewcreatedto"></a>
<a id="tocsreviewcreatedto"></a>

```json
{
  "bookId": "string",
  "rating": 0.1,
  "comment": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|bookId|string|false|none||none|
|rating|number(double)|false|none||none|
|comment|string|false|none||none|

<h2 id="tocS_UserLoginDTO">UserLoginDTO</h2>

<a id="schemauserlogindto"></a>
<a id="schema_UserLoginDTO"></a>
<a id="tocSuserlogindto"></a>
<a id="tocsuserlogindto"></a>

```json
{
  "username": "string",
  "password": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|username|string|false|none||none|
|password|string|false|none||none|

<h2 id="tocS_UserRegisterDTO">UserRegisterDTO</h2>

<a id="schemauserregisterdto"></a>
<a id="schema_UserRegisterDTO"></a>
<a id="tocSuserregisterdto"></a>
<a id="tocsuserregisterdto"></a>

```json
{
  "username": "string",
  "password": "string",
  "email": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|username|string|false|none||none|
|password|string|false|none||none|
|email|string|false|none||none|

<h2 id="tocS_UserStatusDTO">UserStatusDTO</h2>

<a id="schemauserstatusdto"></a>
<a id="schema_UserStatusDTO"></a>
<a id="tocSuserstatusdto"></a>
<a id="tocsuserstatusdto"></a>

```json
{
  "status": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|status|integer|false|none||none|

<h2 id="tocS_UserPasswordDTO">UserPasswordDTO</h2>

<a id="schemauserpassworddto"></a>
<a id="schema_UserPasswordDTO"></a>
<a id="tocSuserpassworddto"></a>
<a id="tocsuserpassworddto"></a>

```json
{
  "oldPassword": "string",
  "newPassword": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|oldPassword|string|false|none||none|
|newPassword|string|false|none||none|

<h2 id="tocS_UserProfileDTO">UserProfileDTO</h2>

<a id="schemauserprofiledto"></a>
<a id="schema_UserProfileDTO"></a>
<a id="tocSuserprofiledto"></a>
<a id="tocsuserprofiledto"></a>

```json
{
  "email": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|email|string|false|none||none|

<h2 id="tocS_UserResetPasswordDTO">UserResetPasswordDTO</h2>

<a id="schemauserresetpassworddto"></a>
<a id="schema_UserResetPasswordDTO"></a>
<a id="tocSuserresetpassworddto"></a>
<a id="tocsuserresetpassworddto"></a>

```json
{
  "email": "string",
  "newPassword": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|email|string|false|none||none|
|newPassword|string|false|none||none|

<h2 id="tocS_BookBriefVO">BookBriefVO</h2>

<a id="schemabookbriefvo"></a>
<a id="schema_BookBriefVO"></a>
<a id="tocSbookbriefvo"></a>
<a id="tocsbookbriefvo"></a>

```json
{
  "id": "string",
  "title": "string",
  "publisher": "string",
  "author": "string",
  "category": "string",
  "description": "string",
  "publishDate": "2019-08-24",
  "coverUrl": "string",
  "totalStock": 0,
  "availableStock": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|title|string|false|none||none|
|publisher|string|false|none||none|
|author|string|false|none||none|
|category|string|false|none||none|
|description|string|false|none||none|
|publishDate|string(date)|false|none||none|
|coverUrl|string|false|none||none|
|totalStock|integer|false|none||none|
|availableStock|integer|false|none||none|

<h2 id="tocS_BookDetailVO">BookDetailVO</h2>

<a id="schemabookdetailvo"></a>
<a id="schema_BookDetailVO"></a>
<a id="tocSbookdetailvo"></a>
<a id="tocsbookdetailvo"></a>

```json
{
  "id": "string",
  "title": "string",
  "author": "string",
  "isbn": "string",
  "publisher": "string",
  "publishDate": "2019-08-24",
  "category": "string",
  "description": "string",
  "coverUrl": "string",
  "totalStock": 0,
  "availableStock": 0,
  "averageRating": 0.1
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|title|string|false|none||none|
|author|string|false|none||none|
|isbn|string|false|none||none|
|publisher|string|false|none||none|
|publishDate|string(date)|false|none||none|
|category|string|false|none||none|
|description|string|false|none||none|
|coverUrl|string|false|none||none|
|totalStock|integer|false|none||none|
|availableStock|integer|false|none||none|
|averageRating|number(double)|false|none||none|

<h2 id="tocS_BorrowRecordVO">BorrowRecordVO</h2>

<a id="schemaborrowrecordvo"></a>
<a id="schema_BorrowRecordVO"></a>
<a id="tocSborrowrecordvo"></a>
<a id="tocsborrowrecordvo"></a>

```json
{
  "id": "string",
  "bookId": "string",
  "bookTitle": "string",
  "bookCoverUrl": "string",
  "userId": "string",
  "userName": "string",
  "borrowDate": "2019-08-24T14:15:22Z",
  "dueDate": "2019-08-24T14:15:22Z",
  "returnDate": "2019-08-24T14:15:22Z",
  "status": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|bookId|string|false|none||none|
|bookTitle|string|false|none||none|
|bookCoverUrl|string|false|none||none|
|userId|string|false|none||none|
|userName|string|false|none||none|
|borrowDate|string(date-time)|false|none||none|
|dueDate|string(date-time)|false|none||none|
|returnDate|string(date-time)|false|none||none|
|status|string|false|none||none|

<h2 id="tocS_LoginVO">LoginVO</h2>

<a id="schemaloginvo"></a>
<a id="schema_LoginVO"></a>
<a id="tocSloginvo"></a>
<a id="tocsloginvo"></a>

```json
{
  "token": "string",
  "userInfo": {
    "id": "string",
    "username": "string",
    "email": "string",
    "role": "string",
    "isDeleted": 0
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|token|string|false|none||none|
|userInfo|[UserVO](#schemauservo)|false|none||none|

<h2 id="tocS_NotificationVO">NotificationVO</h2>

<a id="schemanotificationvo"></a>
<a id="schema_NotificationVO"></a>
<a id="tocSnotificationvo"></a>
<a id="tocsnotificationvo"></a>

```json
{
  "id": "string",
  "title": "string",
  "content": "string",
  "type": "string",
  "status": "string",
  "gmtCreate": "2019-08-24T14:15:22Z",
  "userName": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|title|string|false|none||none|
|content|string|false|none||none|
|type|string|false|none||none|
|status|string|false|none||none|
|gmtCreate|string(date-time)|false|none||none|
|userName|string|false|none||none|

<h2 id="tocS_RegisterVO">RegisterVO</h2>

<a id="schemaregistervo"></a>
<a id="schema_RegisterVO"></a>
<a id="tocSregistervo"></a>
<a id="tocsregistervo"></a>

```json
{
  "id": "string",
  "userName": "string",
  "createTime": "2019-08-24T14:15:22Z",
  "email": "string",
  "role": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|userName|string|false|none||none|
|createTime|string(date-time)|false|none||none|
|email|string|false|none||none|
|role|string|false|none||none|

<h2 id="tocS_ReviewVO">ReviewVO</h2>

<a id="schemareviewvo"></a>
<a id="schema_ReviewVO"></a>
<a id="tocSreviewvo"></a>
<a id="tocsreviewvo"></a>

```json
{
  "id": "string",
  "bookId": "string",
  "userId": "string",
  "username": "string",
  "rating": 0.1,
  "comment": "string",
  "gmtCreate": "2019-08-24T14:15:22Z"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|bookId|string|false|none||none|
|userId|string|false|none||none|
|username|string|false|none||none|
|rating|number(double)|false|none||none|
|comment|string|false|none||none|
|gmtCreate|string(date-time)|false|none||none|

<h2 id="tocS_UserVO">UserVO</h2>

<a id="schemauservo"></a>
<a id="schema_UserVO"></a>
<a id="tocSuservo"></a>
<a id="tocsuservo"></a>

```json
{
  "id": "string",
  "username": "string",
  "email": "string",
  "role": "string",
  "isDeleted": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|false|none||none|
|username|string|false|none||none|
|email|string|false|none||none|
|role|string|false|none||none|
|isDeleted|integer|false|none||none|

<h2 id="tocS_ApiResponseVoid">ApiResponseVoid</h2>

<a id="schemaapiresponsevoid"></a>
<a id="schema_ApiResponseVoid"></a>
<a id="tocSapiresponsevoid"></a>
<a id="tocsapiresponsevoid"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {},
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|object¦null|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_ApiResponseString">ApiResponseString</h2>

<a id="schemaapiresponsestring"></a>
<a id="schema_ApiResponseString"></a>
<a id="tocSapiresponsestring"></a>
<a id="tocsapiresponsestring"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": "string",
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|string|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_ApiResponseBookBriefVO">ApiResponseBookBriefVO</h2>

<a id="schemaapiresponsebookbriefvo"></a>
<a id="schema_ApiResponseBookBriefVO"></a>
<a id="tocSapiresponsebookbriefvo"></a>
<a id="tocsapiresponsebookbriefvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "title": "string",
    "publisher": "string",
    "author": "string",
    "category": "string",
    "description": "string",
    "publishDate": "2019-08-24",
    "coverUrl": "string",
    "totalStock": 0,
    "availableStock": 0
  },
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[BookBriefVO](#schemabookbriefvo)|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_ApiResponseBookDetailVO">ApiResponseBookDetailVO</h2>

<a id="schemaapiresponsebookdetailvo"></a>
<a id="schema_ApiResponseBookDetailVO"></a>
<a id="tocSapiresponsebookdetailvo"></a>
<a id="tocsapiresponsebookdetailvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "title": "string",
    "author": "string",
    "isbn": "string",
    "publisher": "string",
    "publishDate": "2019-08-24",
    "category": "string",
    "description": "string",
    "coverUrl": "string",
    "totalStock": 0,
    "availableStock": 0,
    "averageRating": 0.1
  },
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[BookDetailVO](#schemabookdetailvo)|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_ApiResponseListBookDetailVO">ApiResponseListBookDetailVO</h2>

<a id="schemaapiresponselistbookdetailvo"></a>
<a id="schema_ApiResponseListBookDetailVO"></a>
<a id="tocSapiresponselistbookdetailvo"></a>
<a id="tocsapiresponselistbookdetailvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": "string",
      "title": "string",
      "author": "string",
      "isbn": "string",
      "publisher": "string",
      "publishDate": "2019-08-24",
      "category": "string",
      "description": "string",
      "coverUrl": "string",
      "totalStock": 0,
      "availableStock": 0,
      "averageRating": 0.1
    }
  ],
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[[BookDetailVO](#schemabookdetailvo)]|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_ApiResponseListBookBriefVO">ApiResponseListBookBriefVO</h2>

<a id="schemaapiresponselistbookbriefvo"></a>
<a id="schema_ApiResponseListBookBriefVO"></a>
<a id="tocSapiresponselistbookbriefvo"></a>
<a id="tocsapiresponselistbookbriefvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": [
    {
      "id": "string",
      "title": "string",
      "publisher": "string",
      "author": "string",
      "category": "string",
      "description": "string",
      "publishDate": "2019-08-24",
      "coverUrl": "string",
      "totalStock": 0,
      "availableStock": 0
    }
  ],
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[[BookBriefVO](#schemabookbriefvo)]|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_ApiResponseLoginVO">ApiResponseLoginVO</h2>

<a id="schemaapiresponseloginvo"></a>
<a id="schema_ApiResponseLoginVO"></a>
<a id="tocSapiresponseloginvo"></a>
<a id="tocsapiresponseloginvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "token": "string",
    "userInfo": {
      "id": "string",
      "username": "string",
      "email": "string",
      "role": "string",
      "isDeleted": 0
    }
  },
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[LoginVO](#schemaloginvo)|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_ApiResponseRegisterVO">ApiResponseRegisterVO</h2>

<a id="schemaapiresponseregistervo"></a>
<a id="schema_ApiResponseRegisterVO"></a>
<a id="tocSapiresponseregistervo"></a>
<a id="tocsapiresponseregistervo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "userName": "string",
    "createTime": "2019-08-24T14:15:22Z",
    "email": "string",
    "role": "string"
  },
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[RegisterVO](#schemaregistervo)|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_ApiResponseUserVO">ApiResponseUserVO</h2>

<a id="schemaapiresponseuservo"></a>
<a id="schema_ApiResponseUserVO"></a>
<a id="tocSapiresponseuservo"></a>
<a id="tocsapiresponseuservo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "username": "string",
    "email": "string",
    "role": "string",
    "isDeleted": 0
  },
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[UserVO](#schemauservo)|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_ApiResponseBorrowRecordVO">ApiResponseBorrowRecordVO</h2>

<a id="schemaapiresponseborrowrecordvo"></a>
<a id="schema_ApiResponseBorrowRecordVO"></a>
<a id="tocSapiresponseborrowrecordvo"></a>
<a id="tocsapiresponseborrowrecordvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "bookId": "string",
    "bookTitle": "string",
    "bookCoverUrl": "string",
    "userId": "string",
    "userName": "string",
    "borrowDate": "2019-08-24T14:15:22Z",
    "dueDate": "2019-08-24T14:15:22Z",
    "returnDate": "2019-08-24T14:15:22Z",
    "status": "string"
  },
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[BorrowRecordVO](#schemaborrowrecordvo)|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_ApiResponseReviewVO">ApiResponseReviewVO</h2>

<a id="schemaapiresponsereviewvo"></a>
<a id="schema_ApiResponseReviewVO"></a>
<a id="tocSapiresponsereviewvo"></a>
<a id="tocsapiresponsereviewvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "id": "string",
    "bookId": "string",
    "userId": "string",
    "username": "string",
    "rating": 0.1,
    "comment": "string",
    "gmtCreate": "2019-08-24T14:15:22Z"
  },
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[ReviewVO](#schemareviewvo)|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_PageResponseBookBriefVO">PageResponseBookBriefVO</h2>

<a id="schemapageresponsebookbriefvo"></a>
<a id="schema_PageResponseBookBriefVO"></a>
<a id="tocSpageresponsebookbriefvo"></a>
<a id="tocspageresponsebookbriefvo"></a>

```json
{
  "currentPage": 0,
  "pageSize": 0,
  "totalPage": 0,
  "totalCount": 0,
  "recordsCount": 0,
  "records": [
    {
      "id": "string",
      "title": "string",
      "publisher": "string",
      "author": "string",
      "category": "string",
      "description": "string",
      "publishDate": "2019-08-24",
      "coverUrl": "string",
      "totalStock": 0,
      "availableStock": 0
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|currentPage|integer(int64)|false|none||none|
|pageSize|integer(int64)|false|none||none|
|totalPage|integer(int64)|false|none||none|
|totalCount|integer(int64)|false|none||none|
|recordsCount|integer(int64)|false|none||none|
|records|[[BookBriefVO](#schemabookbriefvo)]|false|none||none|

<h2 id="tocS_ApiResponsePageResponseBookBriefVO">ApiResponsePageResponseBookBriefVO</h2>

<a id="schemaapiresponsepageresponsebookbriefvo"></a>
<a id="schema_ApiResponsePageResponseBookBriefVO"></a>
<a id="tocSapiresponsepageresponsebookbriefvo"></a>
<a id="tocsapiresponsepageresponsebookbriefvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "currentPage": 0,
    "pageSize": 0,
    "totalPage": 0,
    "totalCount": 0,
    "recordsCount": 0,
    "records": [
      {
        "id": "string",
        "title": "string",
        "publisher": "string",
        "author": "string",
        "category": "string",
        "description": "string",
        "publishDate": "2019-08-24",
        "coverUrl": "string",
        "totalStock": 0,
        "availableStock": 0
      }
    ]
  },
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[PageResponseBookBriefVO](#schemapageresponsebookbriefvo)|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_PageResponseUserVO">PageResponseUserVO</h2>

<a id="schemapageresponseuservo"></a>
<a id="schema_PageResponseUserVO"></a>
<a id="tocSpageresponseuservo"></a>
<a id="tocspageresponseuservo"></a>

```json
{
  "currentPage": 0,
  "pageSize": 0,
  "totalPage": 0,
  "totalCount": 0,
  "recordsCount": 0,
  "records": [
    {
      "id": "string",
      "username": "string",
      "email": "string",
      "role": "string",
      "isDeleted": 0
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|currentPage|integer(int64)|false|none||none|
|pageSize|integer(int64)|false|none||none|
|totalPage|integer(int64)|false|none||none|
|totalCount|integer(int64)|false|none||none|
|recordsCount|integer(int64)|false|none||none|
|records|[[UserVO](#schemauservo)]|false|none||none|

<h2 id="tocS_ApiResponsePageResponseUserVO">ApiResponsePageResponseUserVO</h2>

<a id="schemaapiresponsepageresponseuservo"></a>
<a id="schema_ApiResponsePageResponseUserVO"></a>
<a id="tocSapiresponsepageresponseuservo"></a>
<a id="tocsapiresponsepageresponseuservo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "currentPage": 0,
    "pageSize": 0,
    "totalPage": 0,
    "totalCount": 0,
    "recordsCount": 0,
    "records": [
      {
        "id": "string",
        "username": "string",
        "email": "string",
        "role": "string",
        "isDeleted": 0
      }
    ]
  },
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[PageResponseUserVO](#schemapageresponseuservo)|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_PageResponseBorrowRecordVO">PageResponseBorrowRecordVO</h2>

<a id="schemapageresponseborrowrecordvo"></a>
<a id="schema_PageResponseBorrowRecordVO"></a>
<a id="tocSpageresponseborrowrecordvo"></a>
<a id="tocspageresponseborrowrecordvo"></a>

```json
{
  "currentPage": 0,
  "pageSize": 0,
  "totalPage": 0,
  "totalCount": 0,
  "recordsCount": 0,
  "records": [
    {
      "id": "string",
      "bookId": "string",
      "bookTitle": "string",
      "bookCoverUrl": "string",
      "userId": "string",
      "userName": "string",
      "borrowDate": "2019-08-24T14:15:22Z",
      "dueDate": "2019-08-24T14:15:22Z",
      "returnDate": "2019-08-24T14:15:22Z",
      "status": "string"
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|currentPage|integer(int64)|false|none||none|
|pageSize|integer(int64)|false|none||none|
|totalPage|integer(int64)|false|none||none|
|totalCount|integer(int64)|false|none||none|
|recordsCount|integer(int64)|false|none||none|
|records|[[BorrowRecordVO](#schemaborrowrecordvo)]|false|none||none|

<h2 id="tocS_ApiResponsePageResponseBorrowRecordVO">ApiResponsePageResponseBorrowRecordVO</h2>

<a id="schemaapiresponsepageresponseborrowrecordvo"></a>
<a id="schema_ApiResponsePageResponseBorrowRecordVO"></a>
<a id="tocSapiresponsepageresponseborrowrecordvo"></a>
<a id="tocsapiresponsepageresponseborrowrecordvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "currentPage": 0,
    "pageSize": 0,
    "totalPage": 0,
    "totalCount": 0,
    "recordsCount": 0,
    "records": [
      {
        "id": "string",
        "bookId": "string",
        "bookTitle": "string",
        "bookCoverUrl": "string",
        "userId": "string",
        "userName": "string",
        "borrowDate": "2019-08-24T14:15:22Z",
        "dueDate": "2019-08-24T14:15:22Z",
        "returnDate": "2019-08-24T14:15:22Z",
        "status": "string"
      }
    ]
  },
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[PageResponseBorrowRecordVO](#schemapageresponseborrowrecordvo)|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_PageResponseNotificationVO">PageResponseNotificationVO</h2>

<a id="schemapageresponsenotificationvo"></a>
<a id="schema_PageResponseNotificationVO"></a>
<a id="tocSpageresponsenotificationvo"></a>
<a id="tocspageresponsenotificationvo"></a>

```json
{
  "currentPage": 0,
  "pageSize": 0,
  "totalPage": 0,
  "totalCount": 0,
  "recordsCount": 0,
  "records": [
    {
      "id": "string",
      "title": "string",
      "content": "string",
      "type": "string",
      "status": "string",
      "gmtCreate": "2019-08-24T14:15:22Z",
      "userName": "string"
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|currentPage|integer(int64)|false|none||none|
|pageSize|integer(int64)|false|none||none|
|totalPage|integer(int64)|false|none||none|
|totalCount|integer(int64)|false|none||none|
|recordsCount|integer(int64)|false|none||none|
|records|[[NotificationVO](#schemanotificationvo)]|false|none||none|

<h2 id="tocS_ApiResponsePageResponseNotificationVO">ApiResponsePageResponseNotificationVO</h2>

<a id="schemaapiresponsepageresponsenotificationvo"></a>
<a id="schema_ApiResponsePageResponseNotificationVO"></a>
<a id="tocSapiresponsepageresponsenotificationvo"></a>
<a id="tocsapiresponsepageresponsenotificationvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "currentPage": 0,
    "pageSize": 0,
    "totalPage": 0,
    "totalCount": 0,
    "recordsCount": 0,
    "records": [
      {
        "id": "string",
        "title": "string",
        "content": "string",
        "type": "string",
        "status": "string",
        "gmtCreate": "2019-08-24T14:15:22Z",
        "userName": "string"
      }
    ]
  },
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[PageResponseNotificationVO](#schemapageresponsenotificationvo)|false|none||none|
|timestamp|integer(int64)|false|none||none|

<h2 id="tocS_PageResponseReviewVO">PageResponseReviewVO</h2>

<a id="schemapageresponsereviewvo"></a>
<a id="schema_PageResponseReviewVO"></a>
<a id="tocSpageresponsereviewvo"></a>
<a id="tocspageresponsereviewvo"></a>

```json
{
  "currentPage": 0,
  "pageSize": 0,
  "totalPage": 0,
  "totalCount": 0,
  "recordsCount": 0,
  "records": [
    {
      "id": "string",
      "bookId": "string",
      "userId": "string",
      "username": "string",
      "rating": 0.1,
      "comment": "string",
      "gmtCreate": "2019-08-24T14:15:22Z"
    }
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|currentPage|integer(int64)|false|none||none|
|pageSize|integer(int64)|false|none||none|
|totalPage|integer(int64)|false|none||none|
|totalCount|integer(int64)|false|none||none|
|recordsCount|integer(int64)|false|none||none|
|records|[[ReviewVO](#schemareviewvo)]|false|none||none|

<h2 id="tocS_ApiResponsePageResponseReviewVO">ApiResponsePageResponseReviewVO</h2>

<a id="schemaapiresponsepageresponsereviewvo"></a>
<a id="schema_ApiResponsePageResponseReviewVO"></a>
<a id="tocSapiresponsepageresponsereviewvo"></a>
<a id="tocsapiresponsepageresponsereviewvo"></a>

```json
{
  "code": 0,
  "message": "string",
  "data": {
    "currentPage": 0,
    "pageSize": 0,
    "totalPage": 0,
    "totalCount": 0,
    "recordsCount": 0,
    "records": [
      {
        "id": "string",
        "bookId": "string",
        "userId": "string",
        "username": "string",
        "rating": 0.1,
        "comment": "string",
        "gmtCreate": "2019-08-24T14:15:22Z"
      }
    ]
  },
  "timestamp": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|false|none||none|
|message|string|false|none||none|
|data|[PageResponseReviewVO](#schemapageresponsereviewvo)|false|none||none|
|timestamp|integer(int64)|false|none||none|

