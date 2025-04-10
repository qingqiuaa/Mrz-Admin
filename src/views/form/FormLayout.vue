<template>
  <el-container>
    <el-main>
      <el-row>
        <!-- 基础表单 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">基础表单</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-form>
                <el-form-item>
                  <label class="mrz-label-block">用户名</label>
                  <el-input v-model="textInput1" placeholder="请输入用户名" class="mrz-input mrz-fixed-6"
                            clearable></el-input>
                </el-form-item>

                <el-form-item>
                  <label class="mrz-label-block">密码</label>
                  <el-input v-model="pwdInput1" placeholder="请输入密码" type="password" class="mrz-input mrz-fixed-6"
                            clearable></el-input>
                </el-form-item>

                <el-form-item>
                  <label class="mrz-label-block">性别</label>
                  <el-select v-model="selectInput1" placeholder="请选择性别" class="mrz-input mrz-fixed-6" clearable>
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>

                <el-form-item>
                  <label class="mrz-label-block">出生日期</label>
                  <el-date-picker
                    v-model="dateInput1"
                    type="date"
                    placeholder="请选择出生日期"
                    class="mrz-input mrz-fixed-6"
                  ></el-date-picker>
                </el-form-item>

                <el-form-item>
                  <div class="mrz-btn-group">
                    <el-button class="mrz-btn-primary">提交</el-button>
                    <el-button class="mrz-btn">重置</el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>

        <!-- 水平表单 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">水平表单</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-form>
                <el-form-item>
                  <label class="mrz-label-inline">邮箱</label>
                  <el-input v-model="email1" placeholder="请输入邮箱" type="email" class="mrz-input mrz-fixed-6"
                            clearable></el-input>
                </el-form-item>

                <el-form-item>
                  <label class="mrz-label-inline">密码</label>
                  <el-input v-model="pwdInput2" placeholder="请输入密码" type="password" class="mrz-input mrz-fixed-6"
                            clearable></el-input>
                </el-form-item>

                <el-form-item>
                  <label class="mrz-label-inline">再次输入密码</label>
                  <el-input v-model="pwdInput3" placeholder="请输入密码" type="password" class="mrz-input mrz-fixed-6"
                            clearable></el-input>
                </el-form-item>

                <el-form-item>
                  <div class="mrz-btn-group">
                    <el-button class="mrz-btn-primary">提交</el-button>
                    <el-button class="mrz-btn">重置</el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>

        <!-- 横向表单 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">横向表单</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-form>
                <div class="mrz-inline-container">
                  <el-form-item>
                    <el-input v-model="email2" placeholder="请输入邮箱" type="email" class="mrz-input mrz-fixed-6"
                              clearable></el-input>
                  </el-form-item>

                  <el-form-item>
                    <el-input v-model="pwdInput4" placeholder="请输入密码" type="password" class="mrz-input mrz-fixed-6"
                              clearable></el-input>
                  </el-form-item>

                  <el-form-item>
                    <el-button class="mrz-btn-primary">提交</el-button>
                  </el-form-item>
                </div>

                <div class="mrz-inline-container">
                  <el-form-item>
                    <label class="mrz-label-inline">用户名</label>
                    <el-input v-model="textInput2" placeholder="请输入用户名" type="email" class="mrz-input mrz-fixed-6"
                              clearable></el-input>
                  </el-form-item>

                  <el-form-item>
                    <label class="mrz-label-inline">密码</label>
                    <el-input v-model="pwdInput5" placeholder="请输入密码" type="password" class="mrz-input mrz-fixed-6"
                              clearable></el-input>
                  </el-form-item>

                  <el-form-item>
                    <el-button class="mrz-btn-primary">提交</el-button>
                  </el-form-item>
                </div>
              </el-form>
            </div>
          </el-card>
        </el-col>

        <!-- 综合表单 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">综合表单</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <el-form>
                <div class="mrz-inline-container">
                  <el-form-item>
                    <label class="mrz-label-inline">用户名</label>
                    <el-input v-model="textInput3" placeholder="请输入用户名" class="mrz-input mrz-fixed-6"
                              clearable></el-input>
                  </el-form-item>

                  <el-form-item>
                    <label class="mrz-label-inline">密码</label>
                    <el-input v-model="pwdInput6" placeholder="请输入密码" type="password" class="mrz-input mrz-fixed-6"
                              clearable></el-input>
                  </el-form-item>
                </div>

                <div class="mrz-inline-container">
                  <el-form-item>
                    <label class="mrz-label-block">邮箱</label>
                    <el-input v-model="email3" placeholder="请输入邮箱" type="email" class="mrz-input mrz-fixed-6"
                              clearable></el-input>
                  </el-form-item>

                  <el-form-item>
                    <label class="mrz-label-block">家庭地址</label>
                    <el-input v-model="textInput4" placeholder="家庭地址" class="mrz-input mrz-fixed-6"
                              clearable></el-input>
                  </el-form-item>
                </div>

                <el-form-item>
                  <label class="mrz-label-block">性别</label>
                  <div class="mrz-inline-section">
                    <el-radio v-model="radioValue" label="1" class="mrz-radio">男</el-radio>
                    <el-radio v-model="radioValue" label="2" class="mrz-radio">女</el-radio>
                  </div>
                </el-form-item>

                <el-form-item>
                  <div class="mrz-btn-group">
                    <el-button class="mrz-btn-primary">提交</el-button>
                    <el-button class="mrz-btn">重置</el-button>
                  </div>
                </el-form-item>
              </el-form>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'FormLayout',
  data () {
    return {
      textInput1: '',
      textInput2: '',
      textInput3: '',
      textInput4: '',
      pwdInput1: '',
      pwdInput2: '',
      pwdInput3: '',
      pwdInput4: '',
      pwdInput5: '',
      pwdInput6: '',
      email1: '',
      email2: '',
      email3: '',
      radioValue: '',
      selectInput1: '',
      dateInput1: '',
      options: [{
        value: '男',
        label: '男'
      }, {
        value: '女',
        label: '女'
      }]
    }
  },
  methods: {

  }
}
</script>
