# 中南云图书管理系统 (CSU Cloud Library Management System)

这是一个基于 Spring Boot 3 和 Vue 3 开发的前后端分离图书馆借阅管理系统。本项目为中南大学计科 Java 一班实训任务第一组作品。

## 📚 项目简介

本项目旨在提供一个高效、易用的图书馆管理解决方案，涵盖了从图书管理、借阅流程到用户权限控制的全方位功能。系统采用现代化的技术栈，界面友好，功能完善。

## 🛠 技术栈

### 前端 (Frontend)

- **核心框架**: Vue 3 + TypeScript
- **构建工具**: Vite 5
- **UI 组件库**: Element Plus
- **路由管理**: Vue Router 4
- **状态管理**: Pinia
- **HTTP 客户端**: Axios
- **图表库**: ECharts

### 后端 (Backend)

- **核心框架**: Spring Boot 3.5.7
- **ORM 框架**: MyBatis-Plus / MyBatis 3.5.7
- **安全框架**: Spring Security
- **数据库**: MySQL / MariaDB
- **工具库**: Lombok, Hutool
- **JDK 版本**: JDK 21

### 部署与运维 (DevOps)

- **构建工具**: Maven 3
- **接口测试**: Apifox
- **版本控制**: Git

## ✨ 功能模块详解

```
├── 用户认证与权限模块
│   ├── 用户登录（含身份验证）
│   ├── 注销登录
│   ├── 密码重置
│   └── 角色权限控制（管理员/普通用户区分）
├── 个人中心模块
│   ├── 个人信息管理
│   ├── 我的借阅（当前借阅未归还图书）
│   ├── 借阅历史（已完成的借阅记录查询）
│   └── 消息通知查看
├── 图书资源管理模块
│   ├── 新书推荐（最新上架TOP5展示）
│   ├── 图书查询（条件查询、分页展示、检索）
│   ├── 新增图书（管理员权限）
│   ├── 编辑图书（管理员权限，仅可借阅状态）
│   ├── 图书编目与库存管理
│   └── 图书基础配置（分类、状态等）
├── 借阅流程管理模块
│   ├── 图书借阅（含归还时间校验）
│   ├── 归还申请（用户发起）
│   ├── 归还确认（管理员权限）
│   ├── 续借
│   ├── 逾期处理
│   └── 借阅记录生成（归还确认后自动记录）
├── 系统管理模块
│   ├── 用户管理（管理员维护用户信息）
│   ├── 操作日志记录
│   ├── 系统消息推送
│   └── 系统基础设置
└── 数据统计与报表模块
    ├── 统计仪表盘（可视化展示）
    ├── 图书统计（总藏书量、分类统计、热门TOP10）
    ├── 用户统计（注册用户数、活跃用户数、借阅排行）
    ├── 借阅统计（月度/年度借阅量、逾期率、归还率）
    └── 明细统计查询
```

## 📂 目录结构

```
code/
├── library_borrowing_backend/     # 后端项目根目录
│   └── library_borrowing_backend/ # Spring Boot 源码
├── library_borrowing_frontend/    # 前端项目根目录
│   └── csu-cloud-library-management-system-main/ # Vue 源码
└── docs/                          # 项目文档
```

## 🚀 快速开始

### 1. 环境准备

- **Java**: JDK 21
- **Node.js**: v20.19.0 或更高版本
- **Database**: MySQL 8.0+ 或 MariaDB
- **Maven**: 3.x

### 2. 数据库配置

1.  创建数据库 `library_borrowing`。
2.  执行初始化 SQL 脚本，脚本位于后端目录：
    `code/library_borrowing_backend/library_borrowing_backend/src/main/resources/sql/init.sql`
    (以及其他相关 sql 文件如 `book.sql`, `borrow_record.sql` 等，视 `init.sql` 是否包含完整结构而定)。
3.  修改后端数据库连接配置：
    打开(创建) `code/library_borrowing_backend/library_borrowing_backend/src/main/resources/application-local.properties`
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/library_borrowing?serverTimezone=UTC
    spring.datasource.username=root  # 修改为你的数据库用户名
    spring.datasource.password=your_password # 修改为你的数据库密码
    ```

### 3. 启动后端

进入后端项目目录：

```bash
cd code/library_borrowing_backend/library_borrowing_backend
```

使用 Maven 运行：

```bash
mvn spring-boot:run
```

后端服务默认启动在端口 **8081**。

### 4. 启动前端

进入前端项目目录：

```bash
cd code/library_borrowing_frontend/csu-cloud-library-management-system-main
```

安装依赖：

```bash
npm install
```

启动开发服务器：

```bash
npm run dev
```

访问地址通常为 `http://localhost:5173`。

## 📝 默认配置说明

- **后端端口**: 8081
- **数据库名**: library_borrowing
- **JWT 密钥**: 在 `application-local.properties` 中配置。
