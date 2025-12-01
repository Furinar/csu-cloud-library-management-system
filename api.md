---
title: 默认模块
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

# 默认模块

Base URLs:

# Authentication

# 登录注册

## POST register

POST /auth/register

注册用户

> Body 请求参数

```json
{
  "username": "测试用户",
  "password": "123456",
  "email": "123456@gmail.com"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 是 |none|
|» username|body|string| 是 |none|
|» password|body|string| 是 |none|
|» email|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|

## POST login

POST /auth/login

用户登录

> Body 请求参数

```json
{
  "username": "测试用户",
  "password": "123456"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 是 |none|
|» username|body|string| 是 |none|
|» password|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "token": "123.456.789",
    "id": "1",
    "username": "测试用户",
    "email": "123456@gmail.com",
    "role": "USER"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object|true|none||none|
|»» token|string|true|none||none|
|»» id|string|true|none||none|
|»» username|string|true|none||none|
|»» email|string|true|none||none|
|»» role|string|true|none||none|

## GET getUserInfo

GET /auth/me

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 否 |jwt鉴权|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "id": "1",
    "username": "测试用户",
    "email": "123456@gamil.com",
    "role": "USER"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object|true|none||none|
|»» id|string|true|none||none|
|»» username|string|true|none||none|
|»» email|string|true|none||none|
|»» role|string|true|none||none|

# 图书馆藏

## GET getBooks

GET /books

获取图书列表，查询参数中title，autor，isbn为非必需字段，其余为必需字段，后端记得判空并进行相应处理

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|currentPage|query|integer| 是 |none|
|pageSize|query|integer| 是 |none|
|title|query|string| 否 |none|
|author|query|string| 否 |none|
|isbn|query|string| 否 |none|
|Authorization|header|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "currentPage": 1,
    "pageSize": 10,
    "totalPage": 1,
    "totalCount": 1,
    "records": [
      {
        "id": "40",
        "title": "三体",
        "author": "刘慈欣",
        "category": "科幻小说",
        "coverUrl": "https://key-middle.net/",
        "totalStock": 43,
        "availableStock": 42
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object|true|none||none|
|»» currentPage|integer|true|none||none|
|»» pageSize|integer|true|none||none|
|»» totalPage|integer|true|none||none|
|»» totalCount|integer|true|none||none|
|»» records|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» title|string|true|none||none|
|»»» author|string|true|none||none|
|»»» category|string|true|none||none|
|»»» coverUrl|string|true|none||none|
|»»» totalStock|integer|true|none||none|
|»»» availableStock|integer|true|none||none|

## GET getBookById

GET /books/{bookId}

根据图书ID获取图书详细信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|bookId|path|string| 是 |none|
|Authorization|header|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "id": "66",
    "title": "书",
    "author": "无名作者",
    "isbn": "978-1-4454-5859-5",
    "publisher": "某个出版社",
    "publishDate": "2025-03-05",
    "category": "通俗小说",
    "description": "这是一本书",
    "coverUrl": "https://homely-hippodrome.info/",
    "totalStock": 59,
    "availableStock": 46,
    "averageRating": 5
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object|true|none||none|
|»» id|string|true|none||none|
|»» title|string|true|none||none|
|»» author|string|true|none||none|
|»» isbn|string|true|none||none|
|»» publisher|string|true|none||none|
|»» publishDate|string|true|none||none|
|»» category|string|true|none||none|
|»» description|string|true|none||none|
|»» coverUrl|string|true|none||none|
|»» totalStock|integer|true|none||none|
|»» availableStock|integer|true|none||none|
|»» averageRating|number|true|none||none|

# 图书馆藏/admin

## POST createBook

POST /admin/books

创建图书

> Body 请求参数

```json
{
  "title": "红楼梦",
  "author": "曹雪芹",
  "isbn": "978-1-4895-7777-1",
  "publisher": "中国人民出版社",
  "publishDate": "2001-10-14",
  "category": "通俗小说",
  "description": "这是红楼梦",
  "coverUrl": "https://negligible-validity.net/",
  "totalStock": 10
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|body|body|object| 是 |none|
|» title|body|string| 是 |none|
|» author|body|string| 是 |none|
|» isbn|body|string| 是 |none|
|» publisher|body|string| 是 |none|
|» publishDate|body|string| 是 |none|
|» category|body|string| 是 |none|
|» description|body|string| 是 |none|
|» coverUrl|body|string| 是 |none|
|» totalStock|body|integer| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "id": "20",
    "title": "红楼梦",
    "author": "曹雪芹",
    "isbn": "978-1-4895-7777-1",
    "publisher": "中国人名出版社",
    "publishDate": "2001-10-14",
    "category": "通俗小说",
    "description": "这是红楼梦",
    "coverUrl": "https://negligible-validity.net/",
    "totalStock": 10,
    "availableStock": 7,
    "averageRating": 5
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object|true|none||none|
|»» id|string|true|none||none|
|»» title|string|true|none||none|
|»» author|string|true|none||none|
|»» isbn|string|true|none||none|
|»» publisher|string|true|none||none|
|»» publishDate|string|true|none||none|
|»» category|string|true|none||none|
|»» description|string|true|none||none|
|»» coverUrl|string|true|none||none|
|»» totalStock|integer|true|none||none|
|»» availableStock|integer|true|none||none|
|»» averageRating|number|true|none||none|

## DELETE deleteBooksById

DELETE /admin/books

根据图书ID批量删除图书，可单删，也可批量删
注意：不是直接从数据库中删除，而是逻辑删除，即将is_deleted字段设为1

> Body 请求参数

```json
{
  "idList": [
    "74",
    "24"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|body|body|object| 是 |none|
|» bookIdList|body|[string]| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|

## PUT updateBookById

PUT /admin/books/{bookId}

更新图书信息

> Body 请求参数

```json
{
  "title": "三体",
  "author": "刘慈欣",
  "isbn": "978-1-372-13693-1",
  "publisher": "某出版社",
  "publishDate": "2025-06-18",
  "category": "tempor deserunt laborum",
  "description": "好看",
  "coverUrl": "https://lean-cemetery.biz/",
  "totalStock": 43
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|bookId|path|string| 是 |none|
|Authorization|header|string| 是 |none|
|body|body|object| 是 |none|
|» title|body|string| 是 |none|
|» author|body|string| 是 |none|
|» isbn|body|string| 是 |none|
|» publisher|body|string| 是 |none|
|» publishDate|body|string| 是 |none|
|» category|body|string| 是 |none|
|» description|body|string| 是 |none|
|» coverUrl|body|string| 是 |none|
|» totalStock|body|integer| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "id": "63",
    "title": "三体",
    "author": "刘慈欣",
    "isbn": "978-1-372-13693-1",
    "publisher": "某出版社",
    "publishDate": "2025-06-18",
    "category": "tempor deserunt laborum",
    "description": "好看",
    "coverUrl": "https://lean-cemetery.biz/",
    "totalStock": 43,
    "availableStock": 42,
    "averageRating": 5
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object|true|none||none|
|»» id|string|true|none||none|
|»» title|string|true|none||none|
|»» author|string|true|none||none|
|»» isbn|string|true|none||none|
|»» publisher|string|true|none||none|
|»» publishDate|string|true|none||none|
|»» category|string|true|none||none|
|»» description|string|true|none||none|
|»» coverUrl|string|true|none||none|
|»» totalStock|integer|true|none||none|
|»» availableStock|integer|true|none||none|
|»» averageRating|number|true|none||none|

# 借阅归还

## POST borrowBookById

POST /borrow

根据图书ID借阅书籍，同时需要附带借阅时长

> Body 请求参数

```json
{
  "bookId": "53",
  "borrowTime": 30
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|body|body|object| 是 |none|
|» bookId|body|string| 是 |none|
|» borrowTime|body|integer| 是 |none|

#### 枚举值

|属性|值|
|---|---|
|» borrowTime|1|
|» borrowTime|3|
|» borrowTime|7|
|» borrowTime|14|
|» borrowTime|30|
|» borrowTime|60|
|» borrowTime|90|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "id": "54",
    "bookId": "53",
    "bookTitle": "三体",
    "bookCoverUrl": "https://bare-signature.net/",
    "borrowDate": "2025-01-23",
    "dueDate": "2025-09-13",
    "returnDate": "2025-11-11",
    "status": "OVERDUE"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object|true|none||none|
|»» id|string|true|none||none|
|»» bookId|string|true|none||none|
|»» bookTitle|string|true|none||none|
|»» bookCoverUrl|string|true|none||none|
|»» borrowDate|string|true|none||none|
|»» dueDate|string|true|none||none|
|»» returnDate|string¦null|true|none||none|
|»» status|string|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|status|BORROWED|
|status|RETURNED|
|status|OVERDUE|

## POST returnBookById

POST /return

根据借阅记录ID归还图书

> Body 请求参数

```json
{
  "borrowRecordId": "31"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|body|body|object| 是 |none|
|» borrowRecordId|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "id": "65",
    "bookId": "51",
    "bookTitle": "三体",
    "bookCoverUrl": "https://subdued-pearl.com/",
    "borrowDate": "2025-10-19",
    "dueDate": "2025-11-26",
    "returnDate": "2025-11-20",
    "status": "RETURNED"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|
|»» id|string|true|none||none|
|»» bookId|string|true|none||none|
|»» bookTitle|string|true|none||none|
|»» bookCoverUrl|string|true|none||none|
|»» borrowDate|string|true|none||none|
|»» dueDate|string|true|none||none|
|»» returnDate|string¦null|true|none||none|
|»» status|string|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|status|BORROWED|
|status|RETURNED|
|status|OVERDUE|

## GET getCurrentBorrowRecords

GET /borrows/me

获取用户的当前借阅，即排除掉status为RETURNED的数据

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|currentPage|query|integer| 是 |none|
|pageSzie|query|integer| 是 |none|
|Authorization|header|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "currentPage": 1,
    "pageSize": 10,
    "totalPage": 1,
    "totalCount": 1,
    "records": [
      {
        "id": "20",
        "bookId": "98",
        "bookTitle": "三国演义",
        "bookCoverUrl": "https://sophisticated-husband.org/",
        "borrowDate": "2026-05-17",
        "dueDate": "2025-04-14",
        "returnDate": "2025-11-27",
        "status": "BORROWED"
      },
      {
        "id": "66",
        "bookId": "85",
        "bookTitle": "红楼梦",
        "bookCoverUrl": "https://stunning-translation.org/",
        "borrowDate": "2025-05-18",
        "dueDate": "2025-01-12",
        "returnDate": "2025-11-14",
        "status": "OVERDUE"
      },
      {
        "id": "69",
        "bookId": "23",
        "bookTitle": "西游记",
        "bookCoverUrl": "https://lasting-advertisement.biz/",
        "borrowDate": "2025-01-17",
        "dueDate": "2025-09-07",
        "returnDate": "2025-02-15",
        "status": "BORROWED"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|
|»» currentPage|integer|true|none||none|
|»» pageSize|integer|true|none||none|
|»» totalPage|integer|true|none||none|
|»» totalCount|integer|true|none||none|
|»» records|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» bookId|string|true|none||none|
|»»» bookTitle|string|true|none||none|
|»»» bookCoverUrl|string|true|none||none|
|»»» borrowDate|string|true|none||none|
|»»» dueDate|string|true|none||none|
|»»» returnDate|string¦null|true|none||none|
|»»» status|string|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|status|BORROWED|
|status|RETURNED|
|status|OVERDUE|

## GET getHistoryBorrowRecords

GET /borrows/history

获取历史借阅记录，即返回status为RETURNED的借阅记录

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|currentPage|query|string| 是 |none|
|pageSize|query|string| 是 |none|
|Authorization|header|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "currentPage": 1,
    "pageSize": 10,
    "totalPage": 1,
    "totalCount": 1,
    "records": [
      {
        "id": "79",
        "bookId": "86",
        "bookTitle": "三体",
        "bookCoverUrl": "https://squiggly-tenant.net/",
        "borrowDate": "2026-06-10",
        "dueDate": "2025-12-19",
        "returnDate": "2025-02-24",
        "status": "RETURNED"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|
|»» currentPage|integer|true|none||none|
|»» pageSize|integer|true|none||none|
|»» totalPage|integer|true|none||none|
|»» totalCount|integer|true|none||none|
|»» records|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» bookId|string|true|none||none|
|»»» bookTitle|string|true|none||none|
|»»» bookCoverUrl|string|true|none||none|
|»»» borrowDate|string|true|none||none|
|»»» dueDate|string|true|none||none|
|»»» returnDate|string¦null|true|none||none|
|»»» status|string|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|status|BORROWED|
|status|RETURNED|
|status|OVERDUE|

## DELETE deleteHistoryRecords

DELETE /borrows/history

批量删除历史借阅记录，既可以删除单个也可以删除多个
注意：只能删除status为RETURNED状态的记录，后端注意判断

> Body 请求参数

```json
{
  "idList": [
    "60",
    "37",
    "18"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|body|body|object| 是 |none|
|» borrowRecordIdList|body|[string]| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|

# 通知管理

## GET getNotifications

GET /notifications/me

获取用户的所有通知

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|currentPage|query|integer| 否 |none|
|pageSize|query|integer| 否 |none|
|Authorization|header|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "currentPage": 1,
    "pageSize": 10,
    "totalPage": 1,
    "totalCount": 1,
    "records": [
      {
        "id": "5",
        "title": "通知1",
        "content": "est",
        "type": "DUE_REMINDER",
        "status": "UNREAD",
        "gmtCreate": "incididunt veniam esse elit aliqua"
      },
      {
        "id": "2",
        "title": "通知2",
        "content": "est in qui aliqua",
        "type": "DUE_REMINDER",
        "status": "READ",
        "gmtCreate": "dolore consectetur dolor amet"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|
|»» currentPage|integer|true|none||none|
|»» pageSize|integer|true|none||none|
|»» totalPage|integer|true|none||none|
|»» totalCount|integer|true|none||none|
|»» records|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» title|string|true|none||none|
|»»» content|string|true|none||none|
|»»» type|string|true|none||none|
|»»» status|string|true|none||none|
|»»» gmtCreate|string|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|type|DUE_REMINDER|
|type|RESERVATION_AVAILABLE|
|type|OVERDUE_NOTICE|
|status|UNREAD|
|status|READ|

## GET getUnreadCount

GET /notifications/unread-count

获取未读消息总数

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "count": 5
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|
|»» count|integer|true|none||none|

## PUT readNotifications

PUT /notifications/read

批量设置已读通知

> Body 请求参数

```json
{
  "notificationIdList": [
    "7",
    "2"
  ]
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 否 |none|
|body|body|object| 是 |none|
|» notificationIdList|body|[string]| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|

# 评价打分

## POST createReview

POST /reviews

创建评价

> Body 请求参数

```json
{
  "bookId": "56",
  "rating": 5,
  "comment": "很好的一本书"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|body|body|object| 是 |none|
|» bookId|body|string| 是 |none|
|» rating|body|number| 是 |none|
|» comment|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "id": "24",
    "bookId": "3",
    "userId": "66",
    "username": "测试用户",
    "rating": 5,
    "comment": "很好的一本书",
    "gmtCreate": "2025-11-20"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|
|»» id|string|true|none||none|
|»» bookId|string|true|none||none|
|»» userId|string|true|none||none|
|»» username|string|true|none||none|
|»» rating|number|true|none||none|
|»» comment|string|true|none||none|
|»» gmtCreate|string|true|none||none|

## PUT updateReviewById

PUT /reviews/{reviewId}

根据评价ID修改评价

> Body 请求参数

```json
{
  "rating": 0,
  "comment": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|reviewId|path|string| 是 |none|
|Authorization|header|string| 是 |none|
|body|body|object| 是 |none|
|» rating|body|number| 是 |none|
|» comment|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "id": "42",
    "bookId": "81",
    "userId": "15",
    "username": "测试用户",
    "rating": 5,
    "comment": "elit officia",
    "gmtCreate": "et dolore"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|
|»» id|string|true|none||none|
|»» bookId|string|true|none||none|
|»» userId|string|true|none||none|
|»» username|string|true|none||none|
|»» rating|number|true|none||none|
|»» comment|string|true|none||none|
|»» gmtCreate|string|true|none||none|

## DELETE deleteReview

DELETE /review/{reviewId}

逻辑删除某条评论

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|reviewId|path|string| 是 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|

## GET getReviewsByBookId

GET /reviews/{bookId}

根据图书ID获取该书的评价列表

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|bookId|path|string| 是 |none|
|Authorization|header|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "currentPage": 1,
    "pageSize": 10,
    "totalPage": 1,
    "totalCount": 1,
    "records": [
      {
        "id": "16",
        "bookId": "63",
        "userId": "45",
        "username": "度梓玥",
        "rating": 55,
        "comment": "cillum ut ea deserunt",
        "gmtCreate": "sint ad"
      },
      {
        "id": "40",
        "bookId": "74",
        "userId": "17",
        "username": "上官国华",
        "rating": 21,
        "comment": "commodo cillum eiusmod ut consequat",
        "gmtCreate": "et ut amet"
      },
      {
        "id": "15",
        "bookId": "92",
        "userId": "76",
        "username": "用梓馨",
        "rating": 86,
        "comment": "magna qui",
        "gmtCreate": "aliqua nisi"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|
|»» currentPage|integer|true|none||none|
|»» pageSize|integer|true|none||none|
|»» totalPage|integer|true|none||none|
|»» totalCount|integer|true|none||none|
|»» records|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» bookId|string|true|none||none|
|»»» userId|string|true|none||none|
|»»» username|string|true|none||none|
|»»» rating|number|true|none||none|
|»»» comment|string|true|none||none|
|»»» gmtCreate|string|true|none||none|

# 预约图书

## POST createReservation

POST /reservation

创建预约图书的请求

> Body 请求参数

```json
{
  "bookId": "32"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|body|body|object| 是 |none|
|» bookId|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "id": "57",
    "bookId": "47",
    "bookTitle": "三体",
    "bookAuthor": "刘慈欣",
    "reservationDate": "2025-04-06",
    "status": "PENDING"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|
|»» id|string|true|none||none|
|»» bookId|string|true|none||none|
|»» bookTitle|string|true|none||none|
|»» bookAuthor|string|true|none||none|
|»» reservationDate|string|true|none||none|
|»» status|string|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|status|PENDING|
|status|AVAILABLE|
|status|FULFILLED|
|status|CANCELLED|

## GET getReservations

GET /reservation/me

获取用户的预约记录

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|currentPage|query|integer| 否 |none|
|pageSize|query|integer| 否 |none|
|Authorization|header|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "currentPage": 1,
    "pageSize": 10,
    "totalPage": 1,
    "totalCount": 3,
    "records": [
      {
        "id": "40",
        "bookId": "35",
        "bookTitle": "第一本书",
        "bookAuthor": "ea",
        "reservationDate": "2026-03-25",
        "status": "FULFILLED"
      },
      {
        "id": "56",
        "bookId": "90",
        "bookTitle": "第二本书",
        "bookAuthor": "occaecat cillum",
        "reservationDate": "2025-05-03",
        "status": "CANCELLED"
      },
      {
        "id": "99",
        "bookId": "68",
        "bookTitle": "第三本书",
        "bookAuthor": "anim",
        "reservationDate": "2026-02-14",
        "status": "FULFILLED"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|
|»» currentPage|integer|true|none||none|
|»» pageSize|integer|true|none||none|
|»» totalPage|integer|true|none||none|
|»» totalCount|integer|true|none||none|
|»» records|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» bookId|string|true|none||none|
|»»» bookTitle|string|true|none||none|
|»»» bookAuthor|string|true|none||none|
|»»» reservationDate|string|true|none||none|
|»»» status|string|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|status|PENDING|
|status|AVAILABLE|
|status|FULFILLED|
|status|CANCELLED|

## PUT cancelReservation

PUT /reservation/cancel

取消预约记录
注意：只有status不为CANCELLER的预约记录才能被删除，后端注意判断

> Body 请求参数

```json
{
  "reservationId": "71"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|Authorization|header|string| 是 |none|
|body|body|object| 是 |none|
|» reservationId|body|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": null
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|

# 预约图书/admin

## GET getAllReservations

GET /admin/reservation

获取所有未被取消的预约信息

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|currentPage|query|string| 是 |none|
|pageSize|query|string| 是 |none|
|Authorization|header|string| 是 |none|

> 返回示例

> 200 Response

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {
    "currentPage": 1,
    "pageSize": 10,
    "totalPage": 1,
    "totalCount": 1,
    "records": [
      {
        "id": "89",
        "userId": "17",
        "bookId": "58",
        "bookTitle": "第一本书",
        "bookAuthor": "123",
        "reservationDate": "2026-07-02",
        "status": "FULFILLED"
      },
      {
        "id": "21",
        "userId": "66",
        "bookId": "62",
        "bookTitle": "第二本书",
        "bookAuthor": "Excepteur in",
        "reservationDate": "2025-09-22",
        "status": "PENDING"
      },
      {
        "id": "11",
        "userId": "43",
        "bookId": "41",
        "bookTitle": "第三本书",
        "bookAuthor": "pariatur id aute",
        "reservationDate": "2025-12-01",
        "status": "PENDING"
      }
    ]
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|none|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» code|integer|true|none||none|
|» msg|string|true|none||none|
|» data|object¦null|true|none||none|
|»» currentPage|integer|true|none||none|
|»» pageSize|integer|true|none||none|
|»» totalPage|integer|true|none||none|
|»» totalCount|integer|true|none||none|
|»» records|[object]|true|none||none|
|»»» id|string|true|none||none|
|»»» userId|string|true|none||none|
|»»» bookId|string|true|none||none|
|»»» bookTitle|string|true|none||none|
|»»» bookAuthor|string|true|none||none|
|»»» reservationDate|string|true|none||none|
|»»» status|string|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|status|PENDING|
|status|AVAILABLE|
|status|FULFILLED|
|status|CANCELLED|

# 数据模型

<h2 id="tocS_ApiResponse">ApiResponse</h2>

<a id="schemaapiresponse"></a>
<a id="schema_ApiResponse"></a>
<a id="tocSapiresponse"></a>
<a id="tocsapiresponse"></a>

```json
{
  "code": 200,
  "msg": "请求成功",
  "data": {}
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|code|integer|true|none||none|
|msg|string|true|none||none|
|data|object¦null|true|none||none|

<h2 id="tocS_PageResponse">PageResponse</h2>

<a id="schemapageresponse"></a>
<a id="schema_PageResponse"></a>
<a id="tocSpageresponse"></a>
<a id="tocspageresponse"></a>

```json
{
  "currentPage": 1,
  "pageSize": 10,
  "totalPage": 1,
  "totalCount": 1,
  "records": [
    {}
  ]
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|currentPage|integer|true|none||none|
|pageSize|integer|true|none||none|
|totalPage|integer|true|none||none|
|totalCount|integer|true|none||none|
|records|[object]|true|none||none|

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
|username|string|true|none||none|
|password|string|true|none||none|
|email|string|true|none||none|

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
|username|string|true|none||none|
|password|string|true|none||none|

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
  "role": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|true|none||none|
|username|string|true|none||none|
|email|string|true|none||none|
|role|string|true|none||none|

<h2 id="tocS_LoginVO">LoginVO</h2>

<a id="schemaloginvo"></a>
<a id="schema_LoginVO"></a>
<a id="tocSloginvo"></a>
<a id="tocsloginvo"></a>

```json
{
  "token": "string",
  "id": "string",
  "username": "string",
  "email": "string",
  "role": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|token|string|true|none||none|
|id|string|true|none||none|
|username|string|true|none||none|
|email|string|true|none||none|
|role|string|true|none||none|

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
  "publishDate": "string",
  "category": "string",
  "description": "string",
  "coverUrl": "string",
  "totalStock": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|title|string|true|none||none|
|author|string|true|none||none|
|isbn|string|true|none||none|
|publisher|string|true|none||none|
|publishDate|string|true|none||none|
|category|string|true|none||none|
|description|string|true|none||none|
|coverUrl|string|true|none||none|
|totalStock|integer|true|none||none|

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
  "publishDate": "string",
  "category": "string",
  "description": "string",
  "coverUrl": "string",
  "totalStock": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|title|string|true|none||none|
|author|string|true|none||none|
|isbn|string|true|none||none|
|publisher|string|true|none||none|
|publishDate|string|true|none||none|
|category|string|true|none||none|
|description|string|true|none||none|
|coverUrl|string|true|none||none|
|totalStock|integer|true|none||none|

<h2 id="tocS_BookBriefVO">BookBriefVO</h2>

<a id="schemabookbriefvo"></a>
<a id="schema_BookBriefVO"></a>
<a id="tocSbookbriefvo"></a>
<a id="tocsbookbriefvo"></a>

```json
{
  "id": "string",
  "title": "string",
  "author": "string",
  "category": "string",
  "coverUrl": "string",
  "totalStock": 0,
  "availableStock": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|true|none||none|
|title|string|true|none||none|
|author|string|true|none||none|
|category|string|true|none||none|
|coverUrl|string|true|none||none|
|totalStock|integer|true|none||none|
|availableStock|integer|true|none||none|

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
  "publishDate": "string",
  "category": "string",
  "description": "string",
  "coverUrl": "string",
  "totalStock": 0,
  "availableStock": 0,
  "averageRating": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|true|none||none|
|title|string|true|none||none|
|author|string|true|none||none|
|isbn|string|true|none||none|
|publisher|string|true|none||none|
|publishDate|string|true|none||none|
|category|string|true|none||none|
|description|string|true|none||none|
|coverUrl|string|true|none||none|
|totalStock|integer|true|none||none|
|availableStock|integer|true|none||none|
|averageRating|number|true|none||none|

<h2 id="tocS_BorrowRequestDTO">BorrowRequestDTO</h2>

<a id="schemaborrowrequestdto"></a>
<a id="schema_BorrowRequestDTO"></a>
<a id="tocSborrowrequestdto"></a>
<a id="tocsborrowrequestdto"></a>

```json
{
  "bookId": "string",
  "borrowTime": 1
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|bookId|string|true|none||none|
|borrowTime|integer|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|borrowTime|1|
|borrowTime|3|
|borrowTime|7|
|borrowTime|14|
|borrowTime|30|
|borrowTime|60|
|borrowTime|90|

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
|borrowRecordId|string|true|none||none|

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
  "borrowDate": "string",
  "dueDate": "string",
  "returnDate": "string",
  "status": "BORROWED"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|true|none||none|
|bookId|string|true|none||none|
|bookTitle|string|true|none||none|
|bookCoverUrl|string|true|none||none|
|borrowDate|string|true|none||none|
|dueDate|string|true|none||none|
|returnDate|string¦null|true|none||none|
|status|string|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|status|BORROWED|
|status|RETURNED|
|status|OVERDUE|

<h2 id="tocS_ReservationRequestDTO">ReservationRequestDTO</h2>

<a id="schemareservationrequestdto"></a>
<a id="schema_ReservationRequestDTO"></a>
<a id="tocSreservationrequestdto"></a>
<a id="tocsreservationrequestdto"></a>

```json
{
  "bookId": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|bookId|string|true|none||none|

<h2 id="tocS_ReservationVO">ReservationVO</h2>

<a id="schemareservationvo"></a>
<a id="schema_ReservationVO"></a>
<a id="tocSreservationvo"></a>
<a id="tocsreservationvo"></a>

```json
{
  "id": "string",
  "bookId": "string",
  "bookTitle": "string",
  "bookAuthor": "string",
  "reservationDate": "string",
  "status": "PENDING"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|true|none||none|
|bookId|string|true|none||none|
|bookTitle|string|true|none||none|
|bookAuthor|string|true|none||none|
|reservationDate|string|true|none||none|
|status|string|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|status|PENDING|
|status|AVAILABLE|
|status|FULFILLED|
|status|CANCELLED|

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
|bookIdList|[string]|true|none||none|

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
|borrowRecordIdList|[string]|true|none||none|

<h2 id="tocS_ReservationCancelDTO">ReservationCancelDTO</h2>

<a id="schemareservationcanceldto"></a>
<a id="schema_ReservationCancelDTO"></a>
<a id="tocSreservationcanceldto"></a>
<a id="tocsreservationcanceldto"></a>

```json
{
  "reservationId": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|reservationId|string|true|none||none|

<h2 id="tocS_ReservationDetailVO">ReservationDetailVO</h2>

<a id="schemareservationdetailvo"></a>
<a id="schema_ReservationDetailVO"></a>
<a id="tocSreservationdetailvo"></a>
<a id="tocsreservationdetailvo"></a>

```json
{
  "id": "string",
  "userId": "string",
  "bookId": "string",
  "bookTitle": "string",
  "bookAuthor": "string",
  "reservationDate": "string",
  "status": "PENDING"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|true|none||none|
|userId|string|true|none||none|
|bookId|string|true|none||none|
|bookTitle|string|true|none||none|
|bookAuthor|string|true|none||none|
|reservationDate|string|true|none||none|
|status|string|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|status|PENDING|
|status|AVAILABLE|
|status|FULFILLED|
|status|CANCELLED|

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
  "type": "DUE_REMINDER",
  "status": "UNREAD",
  "gmtCreate": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|true|none||none|
|title|string|true|none||none|
|content|string|true|none||none|
|type|string|true|none||none|
|status|string|true|none||none|
|gmtCreate|string|true|none||none|

#### 枚举值

|属性|值|
|---|---|
|type|DUE_REMINDER|
|type|RESERVATION_AVAILABLE|
|type|OVERDUE_NOTICE|
|status|UNREAD|
|status|READ|

<h2 id="tocS_UnreadCountVO">UnreadCountVO</h2>

<a id="schemaunreadcountvo"></a>
<a id="schema_UnreadCountVO"></a>
<a id="tocSunreadcountvo"></a>
<a id="tocsunreadcountvo"></a>

```json
{
  "count": 0
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|count|integer|true|none||none|

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
|notificationIdList|[string]|true|none||none|

<h2 id="tocS_ReviewCreateDTO">ReviewCreateDTO</h2>

<a id="schemareviewcreatedto"></a>
<a id="schema_ReviewCreateDTO"></a>
<a id="tocSreviewcreatedto"></a>
<a id="tocsreviewcreatedto"></a>

```json
{
  "bookId": "string",
  "rating": 0,
  "comment": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|bookId|string|true|none||none|
|rating|number|true|none||none|
|comment|string|true|none||none|

<h2 id="tocS_ReviewUpdateDTO">ReviewUpdateDTO</h2>

<a id="schemareviewupdatedto"></a>
<a id="schema_ReviewUpdateDTO"></a>
<a id="tocSreviewupdatedto"></a>
<a id="tocsreviewupdatedto"></a>

```json
{
  "rating": 0,
  "comment": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|rating|number|true|none||none|
|comment|string|true|none||none|

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
  "rating": 0,
  "comment": "string",
  "gmtCreate": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|id|string|true|none||none|
|bookId|string|true|none||none|
|userId|string|true|none||none|
|username|string|true|none||none|
|rating|number|true|none||none|
|comment|string|true|none||none|
|gmtCreate|string|true|none||none|

