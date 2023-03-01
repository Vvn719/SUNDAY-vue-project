<template>
  <div id="course">
    <section class="CSection">
      <img :src="image[0]" />
      <div class="Cname">
        <h3>{{ name }} | DIY 手作預約</h3>
        <p>NT.{{ price }}</p>
        <hr style="width: 90%; position: relative; left: -5%; margin-top: 0px; margin-bottom: 0px" />
        <pre style="font-size: 12px">{{ description }}</pre>
        <div class="btn">
          <n-button color="#A45754ED" size="small" attr-type="submit" @click="showModal2 = true">預約課程</n-button>
        </div>
      </div>
    </section>
    <!-- <n-modal v-model:show="showModal2" preset="card" title="  " positive-text="確認" @positive-click="submitCallback" style="text-align: left" size="small">
      <n-form ref="valid" :model="form" :rule="rules" show-require-mark>
        <h2>預約課程</h2>
        <div class="item">
          <n-form-item label="商品名稱">
            <n-input />
          </n-form-item>
          <n-form-item label="商品名稱">
            <n-input />
          </n-form-item>
          <n-form-item label="商品名稱">
            <n-input />
          </n-form-item>
          <n-form-item label="商品名稱">
            <n-input />
          </n-form-item>
          <n-form-item label="商品名稱">
            <n-input />
          </n-form-item>
        </div>
      </n-form>
    </n-modal> -->
  </div>
</template>

<script setup>
import { NIcon } from 'naive-ui'
import { FlowerOutline as flowerIcon, HeartOutline as LoveIcon, CartOutline as CartIcon } from '@vicons/ionicons5'
import { useUserStore } from '@/stores/user'

const showModal2 = ref(false)

const valid = ref(null)

const form = reactive({
  course: '',
  date: '',
  name: '',
  phoneNum: '',
  people: '',
  quantity: 0
})

defineProps({
  _id: { type: String, default: '' },
  name: { type: String, default: '' },
  price: { type: Number, default: 0 },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
  Sell: { type: Boolean, default: false },
  category: { type: String, default: '' }
})

// 寫在使用者這需要做的
// useUserStore 之後 把 editCart 解構出來
const user = useUserStore()
const { editCart } = user
</script>

<style lang="scss">
#course {
  width: 45vw;
  height: 250px;
  align-items: center;
  background: #ebe3e1;
  margin: 20px;
  .CSection {
    width: 100%;
    height: 250px;
    display: flex;
    img {
      width: 50%;
      height: auto;
      margin: 10px;
      object-fit: cover;
      overflow: hidden;
    }
    .Cname {
      width: 50%;
      text-align: left;
      display: flex;
      margin: 20px;
      flex-direction: column;
      justify-content: space-between;
      h3 {
        font-family: 'Playfair Display', serif;
        color: #523a24;
        margin-bottom: 0;
        margin-top: 0;
      }
      p {
        margin-top: 0;
      }
      .btn {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        .n-button {
          width: 80px;
        }
      }
    }
  }
}
.n-modal {
  width: 50vw;
  height: auto;
  .n-form {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 60px;
    flex-direction: column;
    justify-content: center;
    h2 {
      margin-top: -20px;
    }
    .item {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      .n-form-item {
        width: 45%;
        margin: 2%;
      }
    }
  }
}
</style>
