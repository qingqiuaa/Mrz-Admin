<template>
  <el-container>
    <el-main>
      <el-row>
        <!-- 数据表格1 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">数据表格1</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-block-section mrz-input-group">
                <el-input v-model="searchValue1" placeholder="请输入内容" class="mrz-input mrz-fixed-6" clearable>
                  <template #append>
                    <el-button class="mrz-input-button">搜索</el-button>
                  </template>
                </el-input>
              </div>

              <el-table
                class="mrz-table mrz-hover"
                :data="tableData"
                border
                style="margin-top: 20px;"
              >
                <el-table-column
                  prop="id"
                  label="ID"
                  width="100"
                  align="center"
                  sortable
                />
                <el-table-column
                  label="头像"
                  width="100"
                  align="center"
                  sortable
                >
                  <template slot-scope="scope">
                    <div class="mrz-avatar-cell">
                      <el-popover
                        placement="right"
                        trigger="click"
                        class="mrz-avatar-popover"
                      >
                        <img :src="scope.row.avatar"/>
                        <template #reference>
                          <img
                            :src="scope.row.avatar"
                            class="mrz-avatar-img"
                          />
                        </template>
                      </el-popover>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="username"
                  label="用户名"
                  align="center"
                  sortable
                />
                <el-table-column
                  prop="password"
                  label="密码"
                  align="center"
                  sortable
                >
                </el-table-column>
                <el-table-column
                  prop="email"
                  label="邮箱"
                  align="center"
                  sortable
                />

                <el-table-column prop="status" label="状态" align="center" sortable>
                  <template slot-scope="scope">
                    <el-tag :class="getStatusClass1(scope.row.status)">
                      {{ scope.row.status }}
                    </el-tag>
                  </template>
                </el-table-column>

                <el-table-column
                  label="操作"
                  width="200"
                  align="center"
                  sortable
                >
                  <template>
                    <div class="mrz-btn-center-group">
                      <el-button class="mrz-btn-primary">编辑</el-button>
                      <el-button class="mrz-btn-danger">删除</el-button>
                    </div>
                  </template>
                </el-table-column>
              </el-table>

              <div class="mrz-bottom-container" style="margin-top: 20px;">
                <div class="mrz-left-pagination">
                  <span>每页显示</span>
                  <el-select v-model="selectedValue1" style="width: 100px; margin: 0 10px;">
                    <el-option label="10" value="10"/>
                    <el-option label="20" value="20"/>
                    <el-option label="30" value="30"/>
                    <el-option label="50" value="50"/>
                  </el-select>
                  <span>条</span>
                </div>
                <div class="mrz-right-pagination">
                  <el-pagination
                    :current-page="1"
                    :page-size="10"
                    :total="999"
                    layout="total, prev, pager, next, jumper"
                    class="mrz-paging-noborder"
                  />
                </div>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 数据表格2 -->
        <el-col :span="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">数据表格2</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-block-section mrz-input-group">
                <el-input v-model="searchValue2" placeholder="请输入内容" class="mrz-input mrz-fixed-6" clearable>
                  <template #prepend>
                    <el-button class="mrz-input-button">搜索</el-button>
                  </template>
                </el-input>
              </div>

              <el-table
                class="mrz-table mrz-hover"
                :data="tableData"
                border
                style="margin-top: 20px;"
              >
                <el-table-column
                  prop="id"
                  label="ID"
                  width="100"
                  align="center"
                  sortable
                />
                <el-table-column
                  label="头像"
                  width="100"
                  align="center"
                  sortable
                >
                  <template slot-scope="scope">
                    <div class="mrz-avatar-cell">
                      <el-popover
                        placement="right"
                        trigger="click"
                        class="mrz-avatar-popover"
                      >
                        <img :src="scope.row.avatar"/>
                        <template #reference>
                          <img
                            :src="scope.row.avatar"
                            class="mrz-avatar-img"
                          />
                        </template>
                      </el-popover>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="username"
                  label="用户名"
                  align="center"
                  sortable
                />
                <el-table-column
                  prop="password"
                  label="密码"
                  align="center"
                  sortable
                >
                </el-table-column>
                <el-table-column
                  prop="email"
                  label="邮箱"
                  align="center"
                  sortable
                />

                <el-table-column prop="status" label="状态" align="center" sortable>
                  <template slot-scope="scope">
                    <span :class="getStatusClass2(scope.row.status)"></span>
                    {{ scope.row.status }}
                  </template>
                </el-table-column>

                <el-table-column
                  label="操作"
                  width="200"
                  align="center"
                  sortable
                >
                  <template>
                    <el-dropdown>
                      <el-button class="mrz-btn-primary">
                        操作
                        <i class="el-icon-arrow-down el-icon--right"></i>
                      </el-button>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>编辑</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </template>
                </el-table-column>
              </el-table>

              <div class="mrz-bottom-container" style="margin-top: 20px;">
                <div class="mrz-left-pagination">
                  <span>每页显示</span>
                  <el-select v-model="selectedValue1" style="width: 100px; margin: 0 10px;">
                    <el-option label="10" value="10"/>
                    <el-option label="20" value="20"/>
                    <el-option label="30" value="30"/>
                    <el-option label="50" value="50"/>
                  </el-select>
                  <span>条</span>
                </div>
                <div class="mrz-right-pagination">
                  <el-pagination
                    :current-page="1"
                    :page-size="10"
                    :total="999"
                    layout="total, prev, pager, next, jumper"
                    class="mrz-paging-noborder"
                  />
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'DataTable',
  data () {
    return {
      searchValue1: '',
      searchValue2: '',
      selectedValue1: '10',
      selectedValue2: '10',
      tableData: [
        {
          id: 1,
          avatar: require('@/assets/images/logo.png'),
          username: 'mrzAdmin1',
          password: '123456',
          email: 'admin1@example.com',
          status: '状态1'
        },
        {
          id: 2,
          avatar: require('@/assets/images/logo.png'),
          username: 'mrzAdmin2',
          password: '123456',
          email: 'admin2@example.com',
          status: '状态2'
        },
        {
          id: 3,
          avatar: require('@/assets/images/logo.png'),
          username: 'mrzAdmin3',
          password: '123456',
          email: 'admin3@example.com',
          status: '状态3'
        },
        {
          id: 4,
          avatar: require('@/assets/images/logo.png'),
          username: 'mrzAdmin4',
          password: '123456',
          email: 'admin4@example.com',
          status: '状态4'
        },
        {
          id: 5,
          avatar: require('@/assets/images/logo.png'),
          username: 'mrzAdmin5',
          password: '123456',
          email: 'admin5@example.com',
          status: '状态5'
        }
      ]
    }
  },
  methods: {
    getStatusClass1 (status) {
      const map = {
        状态1: 'mrz-tag-1',
        状态2: 'mrz-tag-1 mrz-success',
        状态3: 'mrz-tag-1 mrz-info',
        状态4: 'mrz-tag-1 mrz-warning',
        状态5: 'mrz-tag-1 mrz-danger'
      }
      return map[status] || ''
    },
    getStatusClass2 (status) {
      const map = {
        状态1: 'mrz-dot',
        状态2: 'mrz-dot mrz-success',
        状态3: 'mrz-dot mrz-info',
        状态4: 'mrz-dot mrz-warning',
        状态5: 'mrz-dot mrz-danger'
      }
      return map[status] || ''
    }
  }
}
</script>
