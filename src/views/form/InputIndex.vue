<template>
  <el-container>
    <el-main>
      <el-row>
        <!-- 输入 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">常用输入框</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-inline-container">
                <!-- 基础输入框 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">基础输入框</label>
                  <el-input v-model="textInput" placeholder="请输入内容" class="mrz-input mrz-fixed-6"
                            clearable></el-input>
                </div>

                <!-- 密码输入框 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">密码输入框</label>
                  <el-input v-model="pwdInput" placeholder="请输入密码" type="password" class="mrz-input mrz-fixed-6"
                            clearable></el-input>
                </div>

                <!-- 邮箱输入框 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">邮箱输入框</label>
                  <el-input v-model="emailInput" placeholder="请输入邮箱" type="email"
                            class="mrz-input mrz-fixed-6" clearable></el-input>
                </div>

                <!-- 数字输入框 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">数字输入框</label>
                  <el-input-number
                    v-model="numberInput"
                    :min="0"
                    :max="100"
                    :step="1"
                    placeholder="请输入数字"
                    class="mrz-input mrz-fixed-6"
                  ></el-input-number>
                </div>

                <!-- 禁用输入框 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">禁用输入框</label>
                  <el-input placeholder="请输入内容" class="mrz-input mrz-fixed-6"
                            disabled></el-input>
                </div>

                <!-- 基础选择器 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">基础选择器</label>
                  <el-select v-model="selectInput" placeholder="请选择" class="mrz-input mrz-fixed-6" clearable>
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </div>

                <!-- 年月日选择器 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">年月日选择器</label>
                  <el-date-picker
                    v-model="dateInput"
                    type="date"
                    placeholder="请选择年月日"
                    class="mrz-input mrz-fixed-6"
                  ></el-date-picker>
                </div>

                <!-- 年月选择器 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">年月选择器</label>
                  <el-date-picker
                    v-model="monthInput"
                    type="month"
                    placeholder="请选择年月"
                    class="mrz-input mrz-fixed-6"
                  ></el-date-picker>
                </div>

                <!-- 时间选择器 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">时间选择器</label>
                  <el-time-picker
                    v-model="timeInput"
                    placeholder="请选择时间"
                    class="mrz-input mrz-fixed-6"
                  ></el-time-picker>
                </div>

                <!-- 年周选择器 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">年周选择器</label>
                  <el-date-picker
                    v-model="weekInput"
                    type="week"
                    format="YYYY 第 WW 周"
                    placeholder="请选择年周"
                    class="mrz-input mrz-fixed-6"
                  ></el-date-picker>
                </div>

                <!-- 颜色选择器 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">颜色选择器</label>
                  <el-color-picker
                    v-model="colorInput"
                    class="mrz-input mrz-fixed-6"
                    :predefine="predefineColors"
                  ></el-color-picker>
                </div>

                <!-- 级联选择器 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">级联选择器</label>
                  <el-cascader
                    v-model="cascaderInput"
                    :options="cascaderOptions"
                    placeholder="请选择"
                    class="mrz-input mrz-fixed-6"
                    clearable
                  >
                  </el-cascader>
                </div>

                <!-- 基础文本域 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">基础文本域</label>
                  <el-input
                    v-model="textareaInput"
                    type="textarea"
                    placeholder="请输入内容"
                    class="mrz-input mrz-fixed-20"
                    :rows="4"
                    clearable
                  ></el-input>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 输入掩码 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">输入掩码</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-inline-container">
                <!-- 日期掩码 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">日期掩码</label>
                  <el-input v-model="dataValue1" placeholder="DD/MM/YYYY" class="mrz-input mrz-fixed-6"
                            v-mask="'##/##/####'" clearable></el-input>
                </div>

                <!-- 时间掩码 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">时间掩码</label>
                  <el-input v-model="dataValue2" placeholder="HH:mm:ss" class="mrz-input mrz-fixed-6"
                            v-mask="'##:##:##'" clearable></el-input>
                </div>

                <!-- 日期时间组合掩码 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">日期时间组合掩码</label>
                  <el-input v-model="dataValue3" placeholder="DD/MM/YYYY HH:mm" class="mrz-input mrz-fixed-6"
                            v-mask="'##/##/#### ##:##'" clearable></el-input>
                </div>

                <!-- 身份证号码掩码 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">身份证号码掩码</label>
                  <el-input v-model="dataValue6" placeholder="请输入身份证号码" class="mrz-input mrz-fixed-6"
                            v-mask="'######-########-####'" clearable></el-input>
                </div>

                <!-- 手机号码掩码 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">手机号码掩码</label>
                  <el-input v-model="dataValue7" placeholder="请输入手机号码" class="mrz-input mrz-fixed-6"
                            v-mask="'+## ### #### ####'" clearable></el-input>
                </div>

                <!-- 信用卡掩码 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">信用卡号掩码</label>
                  <el-input v-model="dataValue8" placeholder="请输入信用卡号" class="mrz-input mrz-fixed-6"
                            v-mask="'####-####-####-####'" clearable></el-input>
                </div>

                <!-- IP 地址掩码 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">IP地址掩码</label>
                  <el-input v-model="dataValue9" placeholder="请输入IP地址" class="mrz-input mrz-fixed-6"
                            v-mask="'###.###.###.###'" clearable></el-input>
                </div>

                <!-- MAC地址掩码 -->
                <div class="mrz-block-section">
                  <label class="mrz-label-block">MAC地址掩码</label>
                  <el-input v-model="dataValue10" placeholder="请输入MAC地址掩码" class="mrz-input mrz-fixed-6"
                            v-mask="'##:##:##:##:##:##'" clearable></el-input>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 输入组合 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">输入组合</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-inline-container">
                <div class="mrz-block-section mrz-input-group">
                  <el-input v-model="inputGroup1" placeholder="请输入内容" class="mrz-input mrz-fixed-6" clearable>
                    <template #prepend>
                      <el-button class="mrz-input-button">搜索</el-button>
                    </template>
                  </el-input>
                </div>

                <div class="mrz-block-section mrz-input-group">
                  <el-input v-model="inputGroup2" placeholder="请输入内容" class="mrz-input mrz-fixed-6" clearable>
                    <template #append>
                      <el-button>搜索</el-button>
                    </template>
                  </el-input>
                </div>

                <div class="mrz-block-section mrz-input-group">
                  <el-input v-model="inputGroup3" placeholder="请输入内容" class="mrz-input mrz-fixed-6" clearable>
                    <template #prepend>
                      <el-button>https://</el-button>
                    </template>
                  </el-input>
                </div>

                <div class="mrz-block-section mrz-input-group">
                  <el-input v-model="inputGroup4" placeholder="请输入内容" class="mrz-input mrz-fixed-6" clearable>
                    <template #append><el-button>元</el-button></template>
                  </el-input>
                </div>

                <div class="mrz-block-section mrz-input-group">
                  <el-input v-model="inputGroup5" placeholder="请输入内容" class="mrz-input mrz-fixed-6" clearable>
                    <template #prepend>
                      <el-button icon="el-icon-search"></el-button>
                    </template>
                  </el-input>
                </div>

                <div class="mrz-block-section mrz-input-group">
                  <el-input v-model="inputGroup6" placeholder="请输入内容" class="mrz-input mrz-fixed-6" clearable>
                    <template #append>
                      <el-button icon="el-icon-search"></el-button>
                    </template>
                  </el-input>
                </div>

                <div class="mrz-block-section mrz-input-group">
                  <el-input v-model="inputGroup7" placeholder="请输入内容" class="mrz-input mrz-fixed-6" clearable>
                    <template #prepend>
                      <el-select v-model="selectInput" placeholder="请选择" style="width: 100px;">
                        <el-option label="选项1" value="option1"></el-option>
                        <el-option label="选项2" value="option2"></el-option>
                      </el-select>
                    </template>
                  </el-input>
                </div>

                <div class="mrz-block-section mrz-input-group">
                  <el-input v-model="inputGroup8" placeholder="请输入内容" class="mrz-input mrz-fixed-6" clearable>
                    <template #append>
                      <el-select v-model="selectInput" placeholder="请选择" style="width: 100px;">
                        <el-option label="选项1" value="option1"></el-option>
                        <el-option label="选项2" value="option2"></el-option>
                      </el-select>
                    </template>
                  </el-input>
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
  name: 'InputIndex',
  data () {
    return {
      textInput: '',
      pwdInput: '',
      emailInput: '',
      numberInput: '',
      selectInput: '',
      dateInput: '',
      monthInput: '',
      timeInput: '',
      weekInput: '',
      colorInput: '',
      cascaderInput: '',
      textareaInput: '',
      dataValue1: '',
      dataValue2: '',
      dataValue3: '',
      dataValue4: '',
      dataValue5: '',
      dataValue6: '',
      dataValue7: '',
      dataValue8: '',
      dataValue9: '',
      dataValue10: '',
      inputGroup1: '',
      inputGroup2: '',
      inputGroup3: '',
      inputGroup4: '',
      inputGroup5: '',
      inputGroup6: '',
      inputGroup7: '',
      inputGroup8: '',
      options: [{
        value: '选项1',
        label: '选项1'
      }, {
        value: '选项2',
        label: '选项2'
      }, {
        value: '选项3',
        label: '选项3'
      }, {
        value: '选项4',
        label: '选项4'
      }, {
        value: '选项5',
        label: '选项5'
      }],
      predefineColors: [
        '#000000',
        '#DDEEEE',
        '#4A90E2',
        '#5DBD84',
        '#56CFE1',
        '#FFAA4C',
        '#FF6B6B'
      ],
      cascaderOptions: [
        {
          value: 'level1-A',
          label: '一级A',
          children: [
            {
              value: 'level2-A',
              label: '二级A',
              children: [
                {
                  value: 'level3-A',
                  label: '三级A'
                },
                {
                  value: 'level3-B',
                  label: '三级B'
                }
              ]
            },
            {
              value: 'level2-B',
              label: '二级B',
              children: [
                {
                  value: 'level3-A',
                  label: '三级A'
                },
                {
                  value: 'level3-B',
                  label: '三级B'
                }
              ]
            }
          ]
        },
        {
          value: 'level1-B',
          label: '一级B',
          children: [
            {
              value: 'level2-A',
              label: '二级A',
              children: [
                {
                  value: 'level3-A',
                  label: '三级A'
                },
                {
                  value: 'level3-B',
                  label: '三级B'
                }
              ]
            },
            {
              value: 'level2-B',
              label: '二级B',
              children: [
                {
                  value: 'level3-A',
                  label: '三级A'
                },
                {
                  value: 'level3-B',
                  label: '三级B'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>
