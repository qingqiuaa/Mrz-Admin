<template>
  <el-container>
    <el-main>
      <el-row>
        <!-- 基础表单 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">基础表格</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-table :data="tableData" class="mrz-table">
                <el-table-column align="center" label="ID" min-width="80" prop="id"/>
                <el-table-column align="center" label="样式名" min-width="150" prop="name"/>
                <el-table-column align="center" label="样式效果" min-width="150" prop="content"/>
              </el-table>
            </div>
          </el-card>
        </el-col>

        <!-- 带悬停表格 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">带Hover表格</span>
              <span
                class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-table :data="hoverTableData" class="mrz-table mrz-hover">
                <el-table-column align="center" label="ID" min-width="80" prop="id"/>
                <el-table-column align="center" label="样式名" min-width="200" prop="name"/>
                <el-table-column align="center" label="悬停颜色" min-width="200">
                  <template v-slot="scope">
                    <div :style="{ backgroundColor: scope.row.content }">
                      {{ scope.row.content }}
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>

        <!-- 带斑马纹的表格 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">带斑马纹表格</span>
              <span
                class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-table :data="stripeTableData" class="mrz-table" stripe>
                <el-table-column align="center" label="ID" min-width="80" prop="id"/>
                <el-table-column align="center" label="样式名" min-width="200" prop="name"/>
                <el-table-column align="center" label="斑马纹颜色" min-width="200">
                  <template v-slot="scope">
                    <div :style="{ backgroundColor: scope.row.content1 }">
                      {{ scope.row.content1 }}
                    </div>
                  </template>
                </el-table-column>
                <el-table-column align="center" label="悬停颜色" min-width="200">
                  <template v-slot="scope">
                    <div :style="{ backgroundColor: scope.row.content2 }">
                      {{ scope.row.content2 }}
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>

        <!-- 带边框表格 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">带边框表格</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-table :data="borderTableData" border class="mrz-table">
                <el-table-column align="center" label="ID" min-width="80" prop="id"/>
                <el-table-column align="center" label="样式名" min-width="200" prop="name"/>
                <el-table-column align="center" label="颜色" min-width="200">
                  <template v-slot="scope">
                    <div :style="{ backgroundColor: scope.row.content }">
                      {{ scope.row.content }}
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>

        <!-- 带行高调整表格 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">带行高调整表格</span>
              <span class="mrz-card-subtitle"></span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-table :data="rowHeightTableData" class="mrz-table  mrz-height-small">
                <el-table-column align="center" label="ID" min-width="80" prop="id"/>
                <el-table-column align="center" label="样式名" min-width="150" prop="name"/>
                <el-table-column align="center" label="行高高度" min-width="150" prop="content"/>
              </el-table>
            </div>
          </el-card>
        </el-col>

        <!-- 红色综合表格 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">红色综合表格</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-table :data="tableData" class="mrz-table mrz-hover-red mrz-striped-red mrz-border-default-red" stripe>
                <el-table-column align="center" label="ID" min-width="80" prop="id"/>
                <el-table-column align="center" label="样式名" min-width="150" prop="name"/>
                <el-table-column align="center" label="行高高度" min-width="150" prop="content"/>
              </el-table>
            </div>
          </el-card>
        </el-col>

        <!-- 绿色综合表格 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">绿色综合表格</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-table :data="tableData" class="mrz-table mrz-hover-green mrz-striped-green mrz-border-default-green"
                        stripe>
                <el-table-column align="center" label="ID" min-width="80" prop="id"/>
                <el-table-column align="center" label="样式名" min-width="150" prop="name"/>
                <el-table-column align="center" label="行高高度" min-width="150" prop="content"/>
              </el-table>
            </div>
          </el-card>
        </el-col>

        <!-- 蓝色综合表格 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">蓝色综合表格</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-table :data="tableData" class="mrz-table mrz-hover-blue mrz-striped-blue mrz-border-default-blue"
                        stripe>
                <el-table-column align="center" label="ID" min-width="80" prop="id"/>
                <el-table-column align="center" label="样式名" min-width="150" prop="name"/>
                <el-table-column align="center" label="行高高度" min-width="150" prop="content"/>
              </el-table>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'BasicTable',
  data () {
    return {
      tableData: [
        {
          id: 1,
          name: 'mrz-table',
          content: 'mrz表格基础'
        },
        {
          id: 2,
          name: 'mrz-hover-{}',
          content: '表格悬停样式'
        },
        {
          id: 3,
          name: 'mrz-striped-{}',
          content: '表格斑马纹样式'
        },
        {
          id: 4,
          name: 'mrz-border-{}',
          content: '表格边框样式'
        },
        {
          id: 5,
          name: 'mrz-height-{}',
          content: '表格行高样式'
        }
      ],

      hoverTableData: [
        {
          id: 1,
          name: 'mrz-hover',
          content: '#F5F7FA'
        },
        {
          id: 2,
          name: 'mrz-hover-red',
          content: '#ffaaaa'
        },
        {
          id: 3,
          name: 'mrz-hover-green',
          content: '#aaffaa'
        },
        {
          id: 4,
          name: 'mrz-hover-blue',
          content: '#aaaaff'
        }
      ],

      stripeTableData: [
        {
          id: 1,
          name: 'mrz-stripe-red',
          content1: '#ffdddd',
          content2: '#ffc8c8'
        },
        {
          id: 2,
          name: 'mrz-stripe-green',
          content1: '#ddffdd',
          content2: '#c8ffc8'
        },
        {
          id: 3,
          name: 'mrz-stripe-blue',
          content1: '#ddddff',
          content2: '#c8c8ff'
        }
      ],

      borderTableData: [
        {
          id: 1,
          name: 'mrz-border-small-red',
          content: '#ff8888'
        },
        {
          id: 2,
          name: 'mrz-border-small-green',
          content: '#88ff88'
        },
        {
          id: 3,
          name: 'mrz-border-small-blue',
          content: '#8888ff'
        },
        {
          id: 4,
          name: 'mrz-border-normal-red',
          content: '#ff8888'
        },
        {
          id: 5,
          name: 'mrz-border-normal-green',
          content: '#88ff88'
        },
        {
          id: 6,
          name: 'mrz-border-normal-blue',
          content: '#8888ff'
        },
        {
          id: 7,
          name: 'mrz-border-large-red',
          content: '#ff8888'
        },
        {
          id: 8,
          name: 'mrz-border-large-green',
          content: '#88ff88'
        },
        {
          id: 9,
          name: 'mrz-border-large-blue',
          content: '#8888ff'
        }
      ],

      rowHeightTableData: [
        {
          id: 1,
          name: 'mrz-height-default',
          content: '行高高度0'
        },
        {
          id: 2,
          name: 'mrz-height-small',
          content: '行高高度6px'
        },
        {
          id: 3,
          name: 'mrz-height-normal',
          content: '行高高度24px'
        },
        {
          id: 4,
          name: 'mrz-height-large',
          content: '行高高度36px'
        }
      ]
    }
  }
}
</script>
