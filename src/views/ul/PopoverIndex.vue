<template>
  <el-container>
    <el-main>
      <div>
        <el-row>
          <!-- 基础对话框 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">基础对话框</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-button class="mrz-btn" @click="dialogVisible1 = true">点击打开对话框</el-button>

                <el-dialog
                  title="这是对话框的标题"
                  :visible.sync="dialogVisible1"
                  custom-class="mrz-dialog mrz-w1">
                  <span class="mrz-dialog-content">这是对话框的文本内容</span>
                  <div class="mrz-btn-group mrz-align-right">
                    <el-button class="mrz-btn" @click="dialogVisible1 = false">取 消</el-button>
                    <el-button class="mrz-btn-primary" @click="dialogVisible1 = false">确 定</el-button>
                  </div>
                </el-dialog>
              </div>
            </el-card>
          </el-col>

          <!-- 居中对话框 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">居中对话框</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <el-button class="mrz-btn" @click="dialogVisible2 = true">居中打开对话框</el-button>

                <el-dialog
                  title="这是对话框的标题"
                  :visible.sync="dialogVisible2"
                  custom-class="mrz-dialog"
                  center>
                  <div class="mrz-dialog-content">这是对话框的文本内容</div>
                  <div class="mrz-dialog-button mrz-align-center">
                    <el-button class="mrz-btn" @click="dialogVisible2 = false">取 消</el-button>
                    <el-button class="mrz-btn-primary" @click="dialogVisible2 = false">确 定</el-button>
                  </div>
                </el-dialog>
              </div>
            </el-card>
          </el-col>

          <!-- 弹出框风格1 -->
          <el-col :span="24" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">弹出框风格1</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-popover
                    placement="left"
                    title="标题"
                    width="200"
                    popper-class="mrz-popper-1"
                    content="这是弹出框的文本内容">
                    <el-button class="mrz-btn" slot="reference">默认(click) 基础风弹出</el-button>
                  </el-popover>

                  <el-popover
                    placement="bottom"
                    title="标题"
                    width="200"
                    trigger="hover"
                    popper-class="mrz-popper-1 mrz-success"
                    content="这是弹出框的文本内容">
                    <el-button class="mrz-btn" slot="reference">hover 成功风弹出</el-button>
                  </el-popover>

                  <el-popover
                    placement="top"
                    title="标题"
                    width="200"
                    trigger="click"
                    popper-class="mrz-popper-1 mrz-info"
                    content="这是弹出框的文本内容">
                    <el-button class="mrz-btn" slot="reference">click 消息风弹出</el-button>
                  </el-popover>

                  <el-popover
                    placement="bottom"
                    title="标题"
                    width="200"
                    trigger="focus"
                    popper-class="mrz-popper-1 mrz-warning"
                    content="这是弹出框的文本内容">
                    <el-button class="mrz-btn" slot="reference">focus 警告风弹出</el-button>
                  </el-popover>

                  <el-popover
                    placement="right"
                    title="标题"
                    width="200"
                    trigger="manual"
                    v-model="visible1"
                    popper-class="mrz-popper-1 mrz-danger"
                    content="这是弹出框的文本内容">
                    <el-button class="mrz-btn" slot="reference" @click="visible1 = !visible1">手动激活 错误风弹出
                    </el-button>
                  </el-popover>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 弹出框风格2 -->
          <el-col :span="24" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">弹出框风格2</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-popover
                    placement="left"
                    title="标题"
                    width="200"
                    popper-class="mrz-popper-2"
                    content="这是弹出框的文本内容">
                    <el-button class="mrz-btn" slot="reference">默认(click) 基础风弹出</el-button>
                  </el-popover>

                  <el-popover
                    placement="bottom"
                    title="标题"
                    width="200"
                    trigger="hover"
                    popper-class="mrz-popper-2 mrz-success"
                    content="这是弹出框的文本内容">
                    <el-button class="mrz-btn" slot="reference">hover 成功风弹出</el-button>
                  </el-popover>

                  <el-popover
                    placement="top"
                    title="标题"
                    width="200"
                    trigger="click"
                    popper-class="mrz-popper-2 mrz-info"
                    content="这是弹出框的文本内容">
                    <el-button class="mrz-btn" slot="reference">click 消息风弹出</el-button>
                  </el-popover>

                  <el-popover
                    placement="bottom"
                    title="标题"
                    width="200"
                    trigger="focus"
                    popper-class="mrz-popper-2 mrz-warning"
                    content="这是弹出框的文本内容">
                    <el-button class="mrz-btn" slot="reference">focus 警告风弹出</el-button>
                  </el-popover>

                  <el-popover
                    placement="right"
                    title="标题"
                    width="200"
                    trigger="manual"
                    v-model="visible2"
                    popper-class="mrz-popper-2 mrz-danger"
                    content="这是弹出框的文本内容">
                    <el-button class="mrz-btn" slot="reference" @click="visible2 = !visible2">手动激活 错误风弹出
                    </el-button>
                  </el-popover>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 确认框风格1 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">确认框风格1</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-popconfirm
                    confirm-button-text="确认"
                    cancel-button-text="取消"
                    popper-class="mrz-confirm-1"
                    icon="el-icon-info"
                    title="这是确认框的文本内容">
                    <el-button class="mrz-btn" slot="reference">基础确认框</el-button>
                  </el-popconfirm>

                  <el-popconfirm
                    confirm-button-text="确认"
                    cancel-button-text="取消"
                    popper-class="mrz-confirm-1 mrz-success"
                    icon="el-icon-success"
                    title="这是确认框的文本内容">
                    <el-button class="mrz-btn" slot="reference">成功确认框</el-button>
                  </el-popconfirm>

                  <el-popconfirm
                    confirm-button-text="确认"
                    cancel-button-text="取消"
                    popper-class="mrz-confirm-1 mrz-info"
                    icon="el-icon-info"
                    title="这是确认框的文本内容">
                    <el-button class="mrz-btn" slot="reference">消息确认框</el-button>
                  </el-popconfirm>

                  <el-popconfirm
                    confirm-button-text="确认"
                    cancel-button-text="取消"
                    popper-class="mrz-confirm-1 mrz-warning"
                    icon="el-icon-warning"
                    title="这是确认框的文本内容">
                    <el-button class="mrz-btn" slot="reference">警告确认框</el-button>
                  </el-popconfirm>

                  <el-popconfirm
                    confirm-button-text="确认"
                    cancel-button-text="取消"
                    popper-class="mrz-confirm-1 mrz-danger"
                    icon="el-icon-error"
                    title="这是确认框的文本内容">
                    <el-button class="mrz-btn" slot="reference">错误确认框</el-button>
                  </el-popconfirm>
                </div>
              </div>
            </el-card>
          </el-col>

          <!-- 确认框风格2 -->
          <el-col :span="12" :xs="24" class="mrz-overview-col">
            <el-card class="mrz-overview-card">
              <div class="mrz-card-header">
                <span class="mrz-card-title">确认框风格2</span>
                <span class="mrz-card-subtitle"></span>
                <div class="mrz-divider"></div>
              </div>
              <div class="mrz-card-body">
                <div class="mrz-btn-group">
                  <el-popconfirm
                    confirm-button-text="确认"
                    cancel-button-text="取消"
                    popper-class="mrz-confirm-2"
                    icon="el-icon-info"
                    title="这是确认框的文本内容">
                    <el-button class="mrz-btn" slot="reference">基础确认框</el-button>
                  </el-popconfirm>

                  <el-popconfirm
                    confirm-button-text="确认"
                    cancel-button-text="取消"
                    popper-class="mrz-confirm-2 mrz-success"
                    icon="el-icon-success"
                    title="这是确认框的文本内容">
                    <el-button class="mrz-btn" slot="reference">成功确认框</el-button>
                  </el-popconfirm>

                  <el-popconfirm
                    confirm-button-text="确认"
                    cancel-button-text="取消"
                    popper-class="mrz-confirm-2 mrz-info"
                    icon="el-icon-info"
                    title="这是确认框的文本内容">
                    <el-button class="mrz-btn" slot="reference">消息确认框</el-button>
                  </el-popconfirm>

                  <el-popconfirm
                    confirm-button-text="确认"
                    cancel-button-text="取消"
                    popper-class="mrz-confirm-2 mrz-warning"
                    icon="el-icon-warning"
                    title="这是确认框的文本内容">
                    <el-button class="mrz-btn" slot="reference">警告确认框</el-button>
                  </el-popconfirm>

                  <el-popconfirm
                    confirm-button-text="确认"
                    cancel-button-text="取消"
                    popper-class="mrz-confirm-2 mrz-danger"
                    icon="el-icon-error"
                    title="这是确认框的文本内容">
                    <el-button class="mrz-btn" slot="reference">错误确认框</el-button>
                  </el-popconfirm>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'PopoverIndex',
  data () {
    return {
      dialogVisible1: false,
      dialogVisible2: false,
      visible1: false,
      visible2: false
    }
  },
  methods: {}
}
</script>
