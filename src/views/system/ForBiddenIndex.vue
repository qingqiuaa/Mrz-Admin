<template>
  <div class="mrz-forbidden-page">
    <div class="mrz-content">
      <h1 class="mrz-code">403</h1>
      <p class="mrz-message">抱歉，您没有权限访问此页面。</p>
      <button class="mrz-back-button" @click="goBack">返回首页</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForbiddenIndex',
  methods: {
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>
.mrz-forbidden-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #4A90E2;
  color: #FFFFFF;

  .mrz-content {
    text-align: center;

    .mrz-code {
      font-size: 12rem;
      font-weight: bold;
      margin: 0;
      line-height: 1;
    }

    .mrz-message {
      font-size: 1.5rem;
      margin: 1rem 0;
    }

    .mrz-back-button {
      background-color: white;
      color: #4A90E2;
      border: none;
      padding: 0.8rem 2rem;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #F0F0F0;
      }
    }
  }
}
</style>
