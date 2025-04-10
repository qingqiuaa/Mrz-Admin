<template>
  <el-container>
    <el-main>
      <el-row>
        <!-- 单文件上传 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">单文件上传</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-upload
                action="#"
                :auto-upload="false"
                :limit="1"
              >
                <el-button size="small" type="primary">上传文件</el-button>
                <div slot="tip" class="el-upload__tip">只能上传一个文件</div>
              </el-upload>
            </div>
          </el-card>
        </el-col>

        <!-- 多文件上传 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">多文件上传</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-upload
                action="#"
                :auto-upload="false"
              >
                <el-button size="small" type="primary">上传文件</el-button>
                <div slot="tip" class="el-upload__tip">可以上传多个文件</div>
              </el-upload>
            </div>
          </el-card>
        </el-col>

        <!-- 图片上传 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">图片上传</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-upload
                action="#"
                list-type="picture-card"
                :auto-upload="false"
                :limit="1"
                accept="image/*"
              >
                <i class="el-icon-plus"></i>
                <div slot="tip" class="el-upload__tip">
                  点击上传图片，支持JPG/PNG格式
                </div>
              </el-upload>
            </div>
          </el-card>
        </el-col>

        <!-- 拖拽上传 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">拖拽上传</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-upload
                class="mrz-upload"
                action="#"
                :auto-upload="false"
                drag
                multiple
              >
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">
                  将文件拖到此处，或 <em>点击上传</em>
                </div>
                <div slot="tip" class="el-upload__tip">
                  支持多个文件上传
                </div>
              </el-upload>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
