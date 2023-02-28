<template>
  <div id="Register">
    <n-card>
      <div class="right-cover">
        <img src="../../../images/tumblr1280.png" />
      </div>
      <div class="left-form">
        <n-form ref="valid" :model="form" :rules="rules" size="small">
          <span class="title" style="display: flex; flex-direction: column; margin-bottom: 10px">
            <h3 style="margin: 0">Register</h3>
            <h5>會員註冊</h5>
          </span>
          <!-- 帳號 -->
          <n-form-item-row label="帳號" path="account">
            <n-input v-model:value="form.account" placeholder="輸入帳號" @keydown.enter.prevent />
          </n-form-item-row>
          <!-- email -->
          <n-form-item path="email" label="Email">
            <!-- <n-auto-complete
            v-model:value="form.email"
            :input-props="{
              autocomplete: 'disabled'
            }"
            :options="options"
            placeholder="請輸入Email"
            blur-after-select /> -->
            <n-input v-model:value="form.email" type="email" placeholder="請輸入Email" @keydown.enter.prevent />
          </n-form-item>
          <!-- 密碼 -->
          <n-form-item path="password" label="密碼">
            <n-input v-model:value="form.password" type="password" placeholder="請輸入密碼" @keydown.enter.prevent show-password-on="mousedown" />
          </n-form-item>
          <!-- 密碼驗證 -->
          <n-form-item path="passwordConfirm" label="密碼驗證">
            <n-input v-model:value="form.passwordConfirm" type="password" placeholder="請再次輸入密碼" @keydown.enter="ButtonClick" />
          </n-form-item>
          <!-- 註冊按鈕 -->
          <div class="btn">
            <n-button round size="large" color="#CA9E" @click="ButtonClick" :loading="loading">註 冊</n-button>
            <br />
            <n-space />
            <n-button text size="large" color="#CA9E" @click="ButtonClickLogin" :loading="loading"><h5 style="margin: 0">已有帳號，點我登入</h5></n-button>
          </div>
        </n-form>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useMessage, useDialog } from 'naive-ui'
import validator from 'validator'
import { api } from '../../plugins/axios'
import { useRouter } from 'vue-router'

const router = useRouter()

const message = useMessage()
const dialog = useDialog()

const valid = ref(null)

const loading = ref(false)

const form = reactive({
  account: '@yahoo.com',
  email: '@yahoo.com',
  password: '1234',
  passwordConfirm: '1234'
})

const rules = {
  account: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error('欄位必填')
        } else if (value.length < 4) {
          return new Error('帳號必須大於 4 個字')
        } else if (value.length > 20) {
          return new Error('帳號必須小於 20 個字')
        }
      },
      trigger: 'input'
    }
  ],
  email: [
    {
      required: true,
      // options: computed(() => {
      //   return ['@gmail.com', '@gmail.com'].map(suffix => {
      //     const prefix = value.split('@')[0]
      //     return {
      //       label: prefix + suffix,
      //       value: prefix + suffix
      //     }
      //   })
      // }),
      validator(rule, value) {
        if (!value) {
          return new Error('欄位必填')
        } else if (!validator.isEmail(value)) {
          return new Error('信箱格式錯誤')
        }
      },
      trigger: 'input'
    }
  ],
  password: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error('欄位必填')
        } else if (value.length < 4) {
          return new Error('密碼必須大於 4 個字')
        } else if (value.length > 20) {
          return new Error('密碼必須小於 20 個字')
        }
      },
      trigger: 'input'
    }
  ],
  passwordConfirm: [
    {
      required: true,
      validator(rule, value) {
        if (!value) {
          return new Error('欄位必填')
        } else if (value.length < 4) {
          return new Error('密碼必須大於 4 個字')
        } else if (value.length > 20) {
          return new Error('密碼必須小於 20 個字')
        } else if (value !== form.password) {
          return new Error('密碼不一致')
        }
      },
      trigger: 'input'
    }
  ]
}

const ButtonClick = async () => {
  if (!valid.value) return
  loading.value = true
  try {
    await api.post('/users', form)
    dialog.success({
      title: 'Register',
      content: '註冊成功',
      positiveText: '確定'
    })
    router.push({ path: 'login' })
    form.account = null
    form.email = null
    form.password = null
  } catch (error) {
    dialog.error({
      title: 'Register',
      content: '請完整填寫註冊內容',
      positiveText: '確定'
    })
  }
  loading.value = false
}

function ButtonClickLogin(e) {
  router.push({ path: 'login' })
}
</script>
<style lang="scss">
// 	sm	≥576px
// Medium	md	≥768px
// Large	lg	≥992px
// Extra large	xl	≥1200px
// Extra extra large	xxl	≥1400px
#Register {
  .n-card {
    h3 {
      font-family: 'Playfair Display', 'Noto Sans TC', sans-serif;
      color: #ccaa99ee;
    }
    width: 70vw;
    height: 70vh;
    margin: auto;
    margin-top: calc(18vh - 60px);
    background: #fff;
    .n-card__content,
    .n-card__content:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      .title {
        text-align: left;
        color: #ccaa99ee;
        h3 {
          margin: 0px;
        }
        h5 {
          margin: 0;
          margin-bottom: 15px;
        }
      }
      .n-form-item {
        height: 65px;
      }
      .right-cover img {
        width: 35vw;
        height: 70vh;
        object-fit: cover;
        overflow: visible;
      }
      .left-form {
        width: 100%;
        // padding: 20px;
        display: flex;
        align-content: center;
        justify-content: center;
        text-align: center;
        .n-form {
          width: 65%;
          justify-content: center;
        }
        .n-button {
          margin-bottom: 10px;
        }
      }
    }
    transition: 0.5s;
  }
}
@media (max-width: 576px) {
  #Register {
    .n-card {
      width: 80vw;
      height: 150vh;
      .n-card__content,
      .n-card__content:first-child {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column-reverse;
        padding: 0;
        .right-cover img {
          object-fit: cover;
          overflow: visible;
          margin-right: 20vw;
          margin-bottom: 20vh;
        }
        .title {
          text-align: left;
          color: #ccaa99ee;
          h3 {
            margin: 0px;
          }
          h5 {
            margin: 0;
            margin-bottom: 15px;
          }
        }
        .n-form-item {
          height: 65px;
        }
        .left-form {
          width: 100%;
          display: flex;
          align-content: center;
          justify-content: center;
          text-align: center;
          margin-top: 10%;
          .n-form {
            width: 65%;
            justify-content: center;
          }
          .btn {
            margin-top: 20px;
          }
          .n-button {
            margin-bottom: 20px;
          }
        }
      }
      transition: 0.5s;
    }
  }
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
</style>
