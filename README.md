# Mrz-Admin

#### 介绍
Mrz-Admin 是基于 Vue2 的后台管理框架。借 Vue2 响应式与组件化优势，可打造交互流畅的后台界面。框架含丰富组件和实用工具，覆盖表格、表单、权限管理等功能模块，大幅提升开发效率。它遵循简洁易用原则，代码结构佳、易维护，便于二次开发与功能扩展，无论是小型项目速建，还是大型系统搭建，都能提供有力支持。 

#### 软件架构
软件架构说明

#### 安装教程

1.  克隆项目
    git clone https://gitee.com/dengzhihao666/mrz-admin.git
2.  进入项目目录 cd mrz-admin
3.  安装依赖 npm install
4.  启动项目 npm run serve

# 按钮模块

mrz-admin提供了基于elementUI修改的自定义样式,
分为基础按钮与禁用基础按钮、朴素按钮与禁用朴素按钮、基础圆角按钮与禁用基础圆角按钮、朴素圆角按钮与禁用朴素圆角按钮。

## 基础按钮使用方法:

使用自定义样式mrz-btn添加到<el-button>

范例代码:
````html
<el-button class="mrz-btn">按钮</el-button>
````

色调样式:
````
mrz-btn-primary 主要色调样式
mrz-btn-success 成功色调样式
mrz-btn-info 消息色调样式
mrz-btn-warning 警告色调样式
mrz-bin-danger 危险色调样式
````

## 禁用按钮使用方法:

在mrz-btn自定义样式中添加同级mrz-disabled样式

范例代码:
````html
<el-button class="mrz-btn mrz-disabled">按钮</el-button>
````

## 朴素按钮使用方法:

在mrz-btn自定义样式中添加同级mrz-plain样式

范例代码:
````html
<el-button class="mrz-btn mrz-plain">按钮</el-button>
````

## 圆角按钮使用方法:

在mrz-btn自定义样式中添加同级mrz-rounded样式

范例代码:
````html
<el-button class="mrz-btn mrz-rounded">按钮</el-button>
````

### 禁用圆角按钮
````html
<el-button class="mrz-btn mrz-rounded mrz-disabled">按钮</el-button>
````

### 朴素圆角按钮
````html
<el-button class="mrz-btn mrz-rounded mrz-plain">按钮</el-button>
````

### 禁用朴素圆角按钮
````html
<el-button class="mrz-btn mrz-rounded mrz-plain mrz-disabled">按钮</el-button>
````

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

#### 特技
1.  使用 Readme\_XXX.md 来支持不同的语言，例如 Readme\_en.md, Readme\_zh.md
2.  Gitee 官方博客 [blog.gitee.com](https://blog.gitee.com)
3.  你可以 [https://gitee.com/explore](https://gitee.com/explore) 这个地址来了解 Gitee 上的优秀开源项目
4.  [GVP](https://gitee.com/gvp) 全称是 Gitee 最有价值开源项目，是综合评定出的优秀开源项目
5.  Gitee 官方提供的使用手册 [https://gitee.com/help](https://gitee.com/help)
6.  Gitee 封面人物是一档用来展示 Gitee 会员风采的栏目 [https://gitee.com/gitee-stars/](https://gitee.com/gitee-stars/)
