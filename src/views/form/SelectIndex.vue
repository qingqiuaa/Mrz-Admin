<template>
  <el-container>
    <el-main>
      <el-row>
        <!-- 单选框 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">单选框</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-inline-container">
                <div class="mrz-inline-section">
                  <el-radio v-model="radioValue1" label="1" class="mrz-radio">基础单选框</el-radio>
                  <el-radio v-model="radioValue1" label="2" class="mrz-radio mrz-primary" che>主要单选框</el-radio>
                  <el-radio v-model="radioValue1" label="3" class="mrz-radio mrz-success">成功单选框</el-radio>
                  <el-radio v-model="radioValue1" label="4" class="mrz-radio mrz-info">信息单选框</el-radio>
                  <el-radio v-model="radioValue1" label="5" class="mrz-radio mrz-warning">警告单选框</el-radio>
                  <el-radio v-model="radioValue1" label="6" class="mrz-radio mrz-danger">危险单选框</el-radio>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 禁用单选框 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">禁用单选框</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-inline-container">
                <div class="mrz-inline-section">
                  <el-radio v-model="radioValue2" label="1" class="mrz-radio" disabled>禁用基础单选框</el-radio>
                  <el-radio v-model="radioValue2" label="1" class="mrz-radio mrz-primary mrz-disabled" disabled>禁用主要单选框</el-radio>
                  <el-radio v-model="radioValue2" label="1" class="mrz-radio mrz-success mrz-disabled" disabled>禁用成功单选框</el-radio>
                  <el-radio v-model="radioValue2" label="1" class="mrz-radio mrz-info mrz-disabled" disabled>禁用信息单选框</el-radio>
                  <el-radio v-model="radioValue2" label="1" class="mrz-radio mrz-warning mrz-disabled" disabled>禁用警告单选框</el-radio>
                  <el-radio v-model="radioValue2" label="1" class="mrz-radio mrz-danger mrz-disabled" disabled>禁用危险单选框</el-radio>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 多选框 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">多选框</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-inline-container">
                <div class="mrz-inline-section">
                  <el-checkbox v-model="checkboxValues" label="1" class="mrz-checkbox">基础多选框</el-checkbox>
                  <el-checkbox v-model="checkboxValues" label="2" class="mrz-checkbox mrz-primary">主要多选框</el-checkbox>
                  <el-checkbox v-model="checkboxValues" label="3" class="mrz-checkbox mrz-success">成功多选框</el-checkbox>
                  <el-checkbox v-model="checkboxValues" label="4" class="mrz-checkbox mrz-info">信息多选框</el-checkbox>
                  <el-checkbox v-model="checkboxValues" label="5" class="mrz-checkbox mrz-warning">警告多选框</el-checkbox>
                  <el-checkbox v-model="checkboxValues" label="6" class="mrz-checkbox mrz-danger">危险多选框</el-checkbox>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 禁用多选框 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">禁用多选框</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-inline-container">
                <div class="mrz-inline-section">
                  <el-checkbox v-model="checkboxValues" label="1" class="mrz-checkbox" disabled>禁用基础多选框</el-checkbox>
                  <el-checkbox v-model="checkboxValues" label="2" class="mrz-checkbox mrz-primary mrz-disabled" disabled>禁用主要多选框</el-checkbox>
                  <el-checkbox v-model="checkboxValues" label="3" class="mrz-checkbox mrz-success mrz-disabled" disabled>禁用成功多选框</el-checkbox>
                  <el-checkbox v-model="checkboxValues" label="4" class="mrz-checkbox mrz-info mrz-disabled" disabled>禁用信息多选框</el-checkbox>
                  <el-checkbox v-model="checkboxValues" label="5" class="mrz-checkbox mrz-warning mrz-disabled" disabled>禁用警告多选框</el-checkbox>
                  <el-checkbox v-model="checkboxValues" label="6" class="mrz-checkbox mrz-danger mrz-disabled" disabled>禁用危险多选框</el-checkbox>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 开关 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">开关</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-inline-container">
                <div class="mrz-inline-section">
                  <!-- 基础开关 -->
                  <el-switch v-model="switchValue1" class="mrz-switch"></el-switch>

                  <!-- 主要开关 -->
                  <el-switch v-model="switchValue2" class="mrz-switch mrz-primary"></el-switch>

                  <!-- 成功开关 -->
                  <el-switch v-model="switchValue3" class="mrz-switch mrz-success"></el-switch>

                  <!-- 信息开关 -->
                  <el-switch v-model="switchValue4" class="mrz-switch mrz-info"></el-switch>

                  <!-- 警告开关 -->
                  <el-switch v-model="switchValue5" class="mrz-switch mrz-warning"></el-switch>

                  <!-- 危险开关 -->
                  <el-switch v-model="switchValue6" class="mrz-switch mrz-danger"></el-switch>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>

        <!-- 禁用开关 -->
        <el-col :span="24" :xs="24" class="mrz-overview-col">
          <el-card class="mrz-overview-card">
            <div class="mrz-card-header">
              <span class="mrz-card-title">禁用开关</span>
              <div class="mrz-divider"></div>
            </div>
            <div class="mrz-card-body">
              <div class="mrz-inline-container">
                <div class="mrz-inline-section">
                  <!-- 基础开关 -->
                  <el-switch v-model="switchValue1" class="mrz-switch" disabled></el-switch>

                  <!-- 主要开关 -->
                  <el-switch v-model="switchValue2" class="mrz-switch mrz-primary" disabled></el-switch>

                  <!-- 成功开关 -->
                  <el-switch v-model="switchValue3" class="mrz-switch mrz-success" disabled></el-switch>

                  <!-- 信息开关 -->
                  <el-switch v-model="switchValue4" class="mrz-switch mrz-info" disabled></el-switch>

                  <!-- 警告开关 -->
                  <el-switch v-model="switchValue5" class="mrz-switch mrz-warning" disabled></el-switch>

                  <!-- 危险开关 -->
                  <el-switch v-model="switchValue6" class="mrz-switch mrz-danger" disabled></el-switch>
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
  name: 'SelectIndex',
  data () {
    return {
      radioValue1: '',
      radioValue2: '1',
      checkboxValues: [],
      switchValue1: true,
      switchValue2: true,
      switchValue3: true,
      switchValue4: true,
      switchValue5: true,
      switchValue6: true
    }
  }
}
</script>
