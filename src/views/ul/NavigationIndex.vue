<template>
  <el-container>
    <el-main>
      <el-row>
        <!-- 基础面包屑 -->
        <el-col :span="12" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">基础面包屑</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-breadcrumb class="mrz-breadcrumb" separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="#">一级目录</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="#">二级目录</a></el-breadcrumb-item>
                <el-breadcrumb-item>当前页面</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </el-card>
        </el-col>

        <!-- 图标面包屑 -->
        <el-col :span="12" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">图标面包屑</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-breadcrumb class="mrz-breadcrumb" separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="#">一级目录</a></el-breadcrumb-item>
                <el-breadcrumb-item><a href="#">二级目录</a></el-breadcrumb-item>
                <el-breadcrumb-item>当前页面</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </el-card>
        </el-col>

        <!-- 页头 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">页头</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-page-header class="mrz-page-header" content="当前页面"></el-page-header>
            </div>
          </el-card>
        </el-col>

        <!-- 基础标签页 -->
        <el-col :span="8" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">基础标签页</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-tabs class="mrz-tab" v-model="tabs1">
                <el-tab-pane label="标签1">标签1</el-tab-pane>
                <el-tab-pane label="标签2">标签2</el-tab-pane>
                <el-tab-pane label="标签3">标签3</el-tab-pane>
                <el-tab-pane label="标签4">标签4</el-tab-pane>
              </el-tabs>
            </div>
          </el-card>
        </el-col>

        <!-- 选项卡标签页 -->
        <el-col :span="8" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">选项卡标签页</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-tabs class="mrz-tab" type="card" v-model="tabs2">
                <el-tab-pane label="标签1">标签1</el-tab-pane>
                <el-tab-pane label="标签2">标签2</el-tab-pane>
                <el-tab-pane label="标签3">标签3</el-tab-pane>
                <el-tab-pane label="标签4">标签4</el-tab-pane>
              </el-tabs>
            </div>
          </el-card>
        </el-col>

        <!-- 卡片化标签页 -->
        <el-col :span="8" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">卡片化标签页</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-tabs class="mrz-tab" type="border-card" v-model="tabs2">
                <el-tab-pane label="标签1">标签1</el-tab-pane>
                <el-tab-pane label="标签2">标签2</el-tab-pane>
                <el-tab-pane label="标签3">标签3</el-tab-pane>
                <el-tab-pane label="标签4">标签4</el-tab-pane>
              </el-tabs>
            </div>
          </el-card>
        </el-col>

        <!-- 基础折叠面板 -->
        <el-col :span="8" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">基础折叠面板</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-collapse v-model="collapse1">
                <el-collapse-item title="折叠1" name="1">
                  <div>这是折叠面板的文本内容</div>
                </el-collapse-item>
                <el-collapse-item title="折叠2" name="2">
                  <div>这是折叠面板的文本内容</div>
                </el-collapse-item>
                <el-collapse-item title="折叠3" name="3">
                  <div>这是折叠面板的文本内容</div>
                </el-collapse-item>
                <el-collapse-item title="折叠4" name="4">
                  <div>这是折叠面板的文本内容</div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-card>
        </el-col>

        <!-- 手风琴折叠面板 -->
        <el-col :span="8" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">手风琴折叠面板</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-collapse v-model="collapse2" accordion>
                <el-collapse-item title="折叠1" name="1">
                  <div>这是折叠面板的文本内容</div>
                </el-collapse-item>
                <el-collapse-item title="折叠2" name="2">
                  <div>这是折叠面板的文本内容</div>
                </el-collapse-item>
                <el-collapse-item title="折叠3" name="3">
                  <div>这是折叠面板的文本内容</div>
                </el-collapse-item>
                <el-collapse-item title="折叠4" name="4">
                  <div>这是折叠面板的文本内容</div>
                </el-collapse-item>
              </el-collapse>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'NavigationIndex',
  data () {
    return {
      tabs1: '',
      tabs2: '',
      collapse1: ['1'],
      collapse2: '1'
    }
  }
}
</script>
