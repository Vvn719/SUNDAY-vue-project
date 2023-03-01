<template>
  <div class="CContain">
    <div class="menu" collapse-mode="width">
      <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" :collapsed-width="902" />
    </div>
  </div>

  <div class="CbgImg"></div>
  <!-- <img class="bgImg" src="../../../images/image-01.jpg" alt="" /> -->

  <div class="CContain">
    <div class="topic">
      <h1 style="margin-left: 20px">Handmade Course</h1>
      <h3 style="margin-top: -20px">客製禮物 手作課程</h3>
      <p>
        SUNDAY 集水晶花與UV應用技法的飾品設計體驗課程上線，運用水晶花與UV飾品透亮輕巧的特性
        <br />
        ，透過樹脂材料打開飾品創作的無限可能!讓美好花飾成為你的日常裝飾
        <br />
        <br />
      </p>
      <hr />
    </div>
    <br />
    <div class="CContent" v-for="product in filterProducts" :key="product._id">
      <CourseCard v-bind="product" style="margin-bottom: 20px; margin-top: 20px" />
    </div>
  </div>
  <br />
  <br />
  <n-button round size="large" color="#CA9E" @click="ButtonClickNewArrival" style="margin-bottom: 20vh">更多款式</n-button>

  <n-modal v-model:show="showModal2" preset="card" title="  " positive-text="確認" @positive-click="submitCallback" style="text-align: left" size="small">
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
  </n-modal>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { api } from '@/plugins/axios'
import { NIcon } from 'naive-ui'
import { FlowerOutline as flowerIcon, HeartOutline as LoveIcon, CartOutline as CartIcon } from '@vicons/ionicons5'
import CourseCard from '../../components/CourseCard.vue'

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

function ButtonClickNewArrival(e) {
  router.push({ path: 'newArrival' })
}

const message = useMessage()
const activeKey = ref(null)
const router = useRouter()

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'home'
          }
        },
        { default: () => 'SUNDAY　｜' }
      ),
    key: 'home',
    icon: renderIcon(flowerIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'newArrival'
          }
        },
        { default: () => '經典款式' }
      ),
    key: 'newArrival'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'customizedInfo'
          }
        },
        { default: () => '客製服務' }
      ),
    key: 'customizedInfo'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'MarketInfo'
          }
        },
        { default: () => '實體市集' }
      ),
    key: 'MarketInfo'
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'CourseInfo'
          }
        },
        { default: () => '手作課程' }
      ),
    key: 'CourseInfo'
  }
]

const products = reactive([])

const filterProducts = computed(() => {
  return products.filter(item => {
    return item.category.includes('手作課程') && item.sell === true
  })
})

;(async () => {
  try {
    const { data } = await api.get('/products/all')
    products.push(...data.result)
  } catch (error) {
    message.error(error?.response?.data?.message || '發生錯誤')
  }
})()
</script>

<style lang="scss">
.CContain {
  h1,
  h2 {
    font-family: 'Playfair Display', serif;
    color: #523a24;
  }
  width: 60vw;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  .menu {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .topic {
    justify-content: center;
    width: 100%;
    margin: auto;
  }
  .CContent {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
.CbgImg {
  width: 100vw;
  height: 30vh;
  background: url(../../../images/image-02.jpg) 50% 50% / cover;
  background-attachment: fixed;
  // background-size: cover;
}
// 	sm	≥576px
// Medium	md	≥768px
// Large	lg	≥992px
// Extra large	xl	≥1200px
// Extra extra large	xxl	≥1400px
@media (max-width: 1600px) {
}
@media (max-width: 1200px) {
}
@media (max-width: 992px) {
}
@media (max-width: 576px) {
}
</style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
</style>
