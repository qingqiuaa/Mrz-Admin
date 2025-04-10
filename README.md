# Mrz-Admin

#### 介绍
Mrz-Admin 是一个后台前端解决方案，它基于 vue2 和 Element-ui实现。提供了基于ElementUI修改的自定义样式。借 Vue2 响应式与组件化优势，可打造交互流畅的后台界面。 框架含丰富组件和实用工具，覆盖表格、表单等功能模块，大幅提升开发效率。 它遵循简洁易用原则，代码结构佳、易维护，便于二次开发与功能扩展， 无论是小型项目速建，还是大型系统搭建，都能提供有力支持。 

# 🚀 MRZ-Admin 安装指南
## 📋 完整安装流程
```bash
# 1. 克隆项目
git clone https://gitee.com/dengzhihao666/mrz-admin.git

# 2. 进入项目目录
cd mrz-admin

# 3. 安装依赖
npm install

# 4. 启动项目
npm run serve
```
## 🛠 常用命令速查
```bash
# 开发命令
npm run serve    # 启动开发服务器
npm run build    # 生产环境打包
npm run lint     # 代码规范检查
# 依赖管理
npm install      # 安装依赖
npm update       # 更新依赖
```

## 🌈 项目结构

```
mrz-admin/
├── public/
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── css/                                
│   │   ├── js/                                 
│   │   └── json/                               
│   ├── components/
│   ├── views/                                  
│   │   ├── chart/                              # 图表模块
│   │   ├── dashboard/                          # 仪表板模块
│   │   ├── form/                               # 表单模块
│   │   ├── icon/                               # 图标模块
│   │   ├── layout/                             # 项目布局模块
│   │   ├── starter/                            # 空白模块
│   │   ├── system/                             # 系统页模块
│   │   ├── table/                              # 表格模块
│   ├── App.vue
│   └── main.js
├── package.json                                # 项目配置                           
├── vue.config.js                               # Vue Cli可选配置文件
├── tsconfig.json                               # TS项目配置文件
├── package-lock.json
├── .editorconfig
├── .gitignore
├── README.md 
└── README.en.md                                  
```
