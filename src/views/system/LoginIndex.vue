<template>
  <div class="mrz-login-page">
    <div class="mrz-content">
      <div class="mrz-header">
        <div class="mrz-logo">
          <img src="@/assets/images/logo.png" />
        </div>
        <h1 class="mrz-title">Mrz-Admin</h1>
        <p class="mrz-subtitle">欢迎回来，请登录您的账户</p>
      </div>

      <form class="mrz-form">
        <div class="mrz-form-group">
          <input
            type="text"
            id="username"
            v-model="formData.username"
            placeholder=""
            required
          />
          <label for="username">用户名</label>
          <div class="mrz-input-border"></div>
        </div>
        <div class="mrz-form-group">
          <input
            type="password"
            id="password"
            v-model="formData.password"
            placeholder=" "
            required
          />
          <label for="password">密码</label>
          <div class="mrz-input-border"></div>
        </div>

        <div class="mrz-options">
          <label class="mrz-remember">
            <input type="checkbox" v-model="rememberMe" />
            <span class="mrz-checkbox"></span>
            记住我
          </label>
          <a href="#" class="mrz-forgot">忘记密码?</a>
        </div>

        <button class="mrz-login-button" type="submit">
          <span>登录</span>
        </button>

        <div class="mrz-divider">
          <span>或</span>
        </div>

        <p class="mrz-register-link">
          还没有账户? <a href="#" @click.prevent="goToRegister">立即注册</a>
        </p>
      </form>
    </div>

    <div class="mrz-decoration">
      <div class="mrz-circle mrz-circle-1"></div>
      <div class="mrz-circle mrz-circle-2"></div>
      <div class="mrz-circle mrz-circle-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data () {
    return {
      formData: {
        username: '',
        password: ''
      },
      rememberMe: false,
      errorMessage: ''
    }
  },
  methods: {
    goToRegister () {
      this.$router.push('/system/register')
    }
  }
}
</script>

<style lang="scss" scoped>
.mrz-login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #FFFFFF;
  position: relative;
  overflow: hidden;
  padding: 2rem;

  .mrz-content {
    background-color: white;
    padding: 2.5rem;
    border-radius: 16px;
    box-shadow: 0 10px 30px rgba(74, 144, 226, 0.15);
    width: 100%;
    max-width: 420px;
    z-index: 2;
    position: relative;
    border: 1px solid rgba(74, 144, 226, 0.1);

    .mrz-header {
      margin-bottom: 2rem;
      text-align: center;

      .mrz-logo {
        width: 60px;
        height: 60px;
        margin: 0 auto 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;

        svg {
          width: 32px;
          height: 32px;
        }
      }

      .mrz-title {
        font-size: 1.8rem;
        margin: 0 0 0.5rem;
        color: #4A90E2;
        font-weight: 700;
      }

      .mrz-subtitle {
        font-size: 0.95rem;
        color: #666;
        margin: 0;
        font-weight: 400;
      }
    }

    .mrz-form {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      .mrz-form-group {
        position: relative;
        margin-bottom: 0.5rem;

        input {
          width: 100%;
          padding: 1rem 1rem 0.6rem;
          font-size: 1rem;
          border: none;
          border-bottom: 1px solid #ddd;
          background-color: transparent;
          transition: all 0.3s ease;

          &:focus {
            outline: none;
            border-bottom-color: transparent;

            + label {
              transform: translateY(-1.2rem) scale(0.85);
              color: #4A90E2;
            }

            ~ .mrz-input-border {
              transform: scaleX(1);
            }
          }

          &:not(:placeholder-shown) + label {
            transform: translateY(-1.2rem) scale(0.85);
          }
        }

        label {
          position: absolute;
          left: 1rem;
          top: 1rem;
          color: #777;
          font-size: 1rem;
          pointer-events: none;
          transition: all 0.3s ease;
          transform-origin: left top;
        }

        .mrz-input-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #4A90E2;
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
      }

      .mrz-options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.9rem;

        .mrz-remember {
          display: flex;
          align-items: center;
          color: #666;
          cursor: pointer;

          input {
            display: none;

            &:checked + .mrz-checkbox {
              background-color: #4A90E2;
              border-color: #4A90E2;

              &::after {
                opacity: 1;
              }
            }
          }

          .mrz-checkbox {
            width: 16px;
            height: 16px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-right: 8px;
            position: relative;
            transition: all 0.2s ease;

            &::after {
              content: '';
              position: absolute;
              top: 2px;
              left: 5px;
              width: 4px;
              height: 8px;
              border: solid white;
              border-width: 0 2px 2px 0;
              transform: rotate(45deg);
              opacity: 0;
              transition: opacity 0.2s ease;
            }
          }
        }

        .mrz-forgot {
          color: #4A90E2;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      .mrz-login-button {
        background-color: #4A90E2;
        color: white;
        border: none;
        padding: 1rem;
        font-size: 1rem;
        font-weight: 600;
        border-radius: 8px;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;

        &:hover {
          background-color: #357ABD;
          box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
        }

        svg {
          width: 20px;
          height: 20px;
          margin-left: 8px;
          transition: transform 0.3s ease;
        }

        &:hover svg {
          transform: translateX(4px);
        }
      }

      .mrz-divider {
        display: flex;
        align-items: center;
        color: #999;
        font-size: 0.9rem;

        &::before, &::after {
          content: '';
          flex: 1;
          height: 1px;
          background-color: #eee;
        }

        span {
          padding: 0 1rem;
        }
      }

      .mrz-register-link {
        text-align: center;
        color: #666;
        font-size: 0.95rem;

        a {
          color: #4A90E2;
          text-decoration: none;
          font-weight: 500;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .mrz-decoration {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;

    .mrz-circle {
      position: absolute;
      border-radius: 50%;
      background: rgba(74, 144, 226, 0.05);

      &-1 {
        width: 300px;
        height: 300px;
        top: -100px;
        right: -100px;
      }

      &-2 {
        width: 200px;
        height: 200px;
        bottom: -50px;
        left: -50px;
      }

      &-3 {
        width: 150px;
        height: 150px;
        top: 30%;
        left: 20%;
      }
    }
  }
}
</style>
