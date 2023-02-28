<template>
  <div id="Home">
    <section class="HMBanner">
      <div class="bn">
        <div class="bn-title">
          <span id="bn-title">The Beginning Of Spring</span>
          <div>Live beautifully dream passionately love completely</div>
        </div>
        <n-carousel :show-dots="false" draggable autoplay effect="card" interval="4000">
          <img src="../../../images/box.jpg" alt="" />
          <img src="../../../images/pic03.jpg" alt="" />
          <img src="../../../images/pic01.jpg" alt="" />
          <img src="../../../images/pic02.jpg" alt="" />
        </n-carousel>
      </div>
    </section>

    <div class="HbgImg">
      <h1>New NewArrivals</h1>
      <h3>本月新品</h3>
    </div>
    <div id="HMsection01">
      <n-carousel :show-dots="false" draggable :slides-per-view="5" :space-between="20" :loop="false" autoplay interval="4000">
        <img class="carousel-img" v-for="product in filterProducts" :key="product._id" :src="product.image[0]" @click="clickProducts" />
      </n-carousel>
    </div>
    <section id="HMbgImg">
      <img class="b1" src="../../../images/A-01.jpg" />
      <div class="word">
        <h1>OUR BRAND</h1>
        <h3>關於我們</h3>
        <p style="line-height: 2rem">
          SUNDAY　使用金銅線
          <br />
          日本水晶花編框技術
          <br />
          清透、飽和、溫暖 UV樹脂色彩
          <br />
          手工製作成一付付
          <br />
          獨一無二的花型樹脂飾品
        </p>
        <br />
      </div>
      <img class="b2" src="../../../images/photo-01.jpg" />
    </section>
    <div id="HMsection02">
      <h1>Christmas Specials Gift</h1>
      <p>ALL ITEM ON SALE 20 %off</p>
    </div>
    <div id="HMsection03">
      <section class="MKSection">
        <div class="msec1">
          <img src="../../../images/market3.jpg" />
        </div>
        <div class="msec2">
          <h1>SuiSui Life</h1>
          <h3>松山文創 水水市集</h3>
          <h3>/ 2023 01.03-05.06 /</h3>
          <br />
          <p>
            228連假想好去哪裡玩了嗎?
            <br />
            水水準備好與大家一起度過美好時光 悠哉的午後逛完文創市集
            <br />
            喝杯茶，觀賞藝人的歌聲饗宴吧!
            <br />
            #手作#飾品#擺攤日常#樹脂飾品#文創市集
          </p>
          <n-button round size="large" color="#CA9E" @click="ButtonClickMarketInfo" style="margin-top: 10px">更多資訊</n-button>
        </div>
      </section>
    </div>
    <div id="HMsection04">
      <section class="MKSection">
        <div class="msec1" style="order: 2">
          <img src="../../../images/pic04.jpg" alt="" />
        </div>
        <div class="msec2" style="order: 1">
          <h1>customized gift</h1>
          <p>客製屬於妳獨一無二的美好</p>
          <p>生日禮物|情人節禮物|閨蜜禮物</p>
          <br />
          <div style="flex-direction: row">
            <img src="../../../images/Group26.png" width="50" />
            <img src="../../../images/Polygon1.png" width="10" />
            <img src="../../../images/Group25.png" width="50" />
            <img src="../../../images/Polygon1.png" width="10" />
            <img src="../../../images/Group23.png" width="50" />
            <img src="../../../images/Polygon1.png" width="10" />
            <img src="../../../images/Group24.png" width="50" />
          </div>
          <br />
          <n-button round size="large" color="#CA9E" @click="ButtonClickCuzInfo" style="margin-top: 10px">客製服務</n-button>
        </div>
      </section>
    </div>
    <div id="HMfooter">
      <section class="FTSection">
        <div class="ftSec1">
          <img src="../../../images/SUNDAY-LOGO-02.png" width="200" />
          <p>ⓒ Sunday ., LTD. All RIGHTS RESERVED.</p>
        </div>
        <div class="ftSec">
          <!-- <h2>Membership</h2> -->
          <!-- <p>客製屬於妳獨一無二的美好</p>
          <p>生日禮物|情人節禮物|閨蜜禮物</p>
          <p>生日禮物|情人節禮物|閨蜜禮物</p>
          <p>生日禮物|情人節禮物|閨蜜禮物</p> -->
          <img src="../../../images/Ft.png" width="200" />
        </div>
        <div class="ftSec">
          <!-- <h1>Find Me</h1> -->
          <img src="../../../images/ft2.png" width="170" />

          <!-- <p>Monday – Friday</p>
          <p>am-12 pm / 1 pm-6 pm</p>
          <p>生日禮物|情人節禮物|閨蜜禮物</p>
          <p>生日禮物|情人節禮物|閨蜜禮物</p> -->
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRoute, useRouter } from 'vue-router'
import { api } from '@/plugins/axios'

const route = useRoute()
const router = useRouter()

const products = reactive([])

const filterProducts = computed(() => {
  return products.filter(item => {
    return item.sell === true
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

function clickProducts(e) {
  router.push({ path: 'newArrival' })
}
function ButtonClickMarketInfo(e) {
  router.push({ path: 'MarketInfo' })
}
function ButtonClickCuzInfo(e) {
  router.push({ path: 'customizedInfo' })
}

gsap.registerPlugin(ScrollTrigger)

onMounted(async () => {
  await nextTick()
  gsap.to('.bn-title', {
    yPercent: -30,
    ease: 'liner',
    duration: 1,
    scrub: 1,
    scrollTrigger: {
      trigger: '.HMBanner'
    }
  })
  gsap.to('.b1', {
    x: 300,
    duration: 3,
    delay: 5
  })
  gsap.to('.b2', {
    x: -300,
    duration: 3,
    delay: 5
  })
  gsap.to('.word', {
    y: -100,
    duration: 3,
    delay: 5
  })
})
</script>

<style lang="scss">
.HMBanner {
  h1,
  h2 {
    font-family: 'Playfair Display', serif;
    color: #523a24;
    margin: 0;
  }
  width: 100vw;
  height: calc(100vh - 60px);
  background-image: linear-gradient(to bottom, #f5efef, #f3d9ca);

  background-size: 145% 135%;
  display: flex;
  justify-content: center;
  .bn {
    width: 70vw;
    height: 100%;
    .bn-title {
      position: relative;
      top: 83%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 99;
      color: #523a24;
      span {
        font-size: 66px;
        font-family: 'Playfair Display', serif;
        font-weight: 900;
      }
      div {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 2px;
      }
    }

    .n-carousel {
      height: 73%;
      margin-top: -100px;
      overflow: visible;
      cursor: pointer;
      .n-carousel__slides {
        perspective: 400px;
      }
      img {
        position: relative;
        width: 40%;
        height: 100%;
        margin: auto;
        border-top-left-radius: 450px;
        border-top-right-radius: 450px;
        object-fit: cover;
        z-index: 2;
      }
    }
  }
}
#HMbgImg {
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom, #f5efef, #f3d9ca);
  background-attachment: fixed;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  .b1 {
    // img:nth-child(1) {
    position: relative;
    left: -300px;
    bottom: 50px;
    width: 30%;
    height: 80%;
    object-fit: cover;
    border-top-right-radius: 350px;
  }
  .b2 {
    // img:nth-child(2) {
    position: relative;
    left: 300px;
    width: 30%;
    height: 80%;
    bottom: 50px;
    object-fit: cover;
    border-top-left-radius: 350px;
  }
  .word {
    h1,
    h2 {
      font-family: 'Playfair Display', serif;
      color: #523a24;
      font-size: 28px;
    }
    display: flex;
    height: 60%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #523a24;
    h3 {
      margin: 0;
    }
  }
}
.HbgImg {
  width: 100vw;
  height: 35vh;
  background: url(../../../images/photo-02.jpg) 50% 50% / cover;
  // background-color: #f3d9ca;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  color: #ca9e55;
  h1 {
    font-family: 'Playfair Display', serif;
    color: #523a24;
    font-size: 28px;
    margin: 0;
  }
  h3 {
    margin: 0;
  }
}
#HMsection01 {
  width: 100vw;
  height: 55vh;
  margin: auto;
  margin-top: 15vh;
  // background: url(../../../images/Homeimg-2.jpg) 50% 50% / cover;
  background-image: linear-gradient(to bottom, #f5efef, #f3d9ca 90%);

  .n-carousel {
    display: flex;
    .carousel-img {
      width: 100%;
      height: 65%;
      object-fit: cover;
      display: flex;
      cursor: pointer;
    }
  }
  p {
    display: flex;
  }
}
#HMsection02 {
  width: 100vw;
  height: calc(100vh - 60px);
  background: url(../../../images/photo-05.jpg) 50% 50% / cover;
  h1 {
    position: relative;
    top: 70%;
    font-family: 'Playfair Display', serif;
    color: #ca9e55;
    margin: 0;
    font-size: 64px;
  }
  p {
    position: relative;
    top: 70%;
    margin: 0;
    color: #f5efef;
  }
}
#HMsection03 {
  width: 100vw;
  display: flex;
  margin: auto;
  padding-top: 10vh;
  margin-bottom: 10vh;
  background-image: linear-gradient(to bottom, #f3d9ca, #f5efef);
  section {
    display: flex;
    width: 70%;
    height: 600px;
    align-items: center;
    text-align: center;
    margin: auto;
    .msec1 {
      width: 50%;
      height: 500px;
      display: flex;
      margin: 20px;
      justify-content: center;
      img {
        object-fit: cover;
        width: 80%;
        overflow: hidden;
        align-items: center;
        border-top-left-radius: 300px;
        border-top-right-radius: 300px;
      }
    }
    .msec2 {
      width: 50%;
      display: flex;
      height: 60%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .infoImg {
        flex-direction: row;
      }
      h1,
      h2 {
        font-family: 'Playfair Display', serif;
        color: #523a24;
        font-size: 28px;
      }
      h3 {
        margin: 0;
        color: #ca9e55;
      }
    }
  }
}
#HMsection04 {
  width: 100vw;
  display: flex;
  margin: auto;
  margin-top: 10vh;
  margin-bottom: 0vh;
  background-image: linear-gradient(to bottom, #f5efef, #f5efef);
  section {
    display: flex;
    width: 70%;
    height: 600px;
    align-items: center;
    text-align: center;
    margin: auto;
    .msec1 {
      width: 50%;
      height: 500px;
      display: flex;
      margin: 20px;
      justify-content: center;
      img {
        object-fit: cover;
        width: 80%;
        overflow: hidden;
        align-items: center;
        border-radius: 300px;
      }
    }
    .msec2 {
      width: 50%;
      h1,
      h2 {
        font-family: 'Playfair Display', serif;
        color: #523a24;
        font-size: 28px;
      }
      display: flex;
      height: 60%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        margin: 0;
        color: #523a24;
      }
      img {
        margin: 5px;
        vertical-align: middle;
      }
    }
  }
}
#HMfooter {
  width: 100vw;
  height: 30vh;
  background: #f3d9ca;
  display: flex;
  justify-content: center;
  align-items: center;
  .FTSection {
    width: 70vw;
    height: 30vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .ftSec1 {
      width: 33%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      p {
        font-size: 9px;
        margin: 10px;
        color: #ca9e55;
      }
    }
    .ftSec {
      width: 33%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      // h1,
      // h2 {
      //   font-family: 'Playfair Display', serif;
      //   color: #523a24;
      //   font-size: 1.5rem;
      //   margin: 10px;
      // }
      // p {
      //   margin: 0;
      //   color: #523a24;
      // }
    }
  }
}

@media (max-width: 1200px) {
  .HMBanner {
    width: 100vw;
    height: calc(100vh - 60px);
    background-image: linear-gradient(to bottom, #f5efef, #f3d9ca);
    background-size: 145% 135%;
    display: flex;
    justify-content: center;
    .bn {
      width: 70vw;
      height: 100%;
      .bn-title {
        position: relative;
        top: 82%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        color: #523a24;
        span {
          font-size: 56px;
          font-family: 'Playfair Display', serif;
          font-weight: 900;
        }
        div {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 2px;
        }
      }

      .n-carousel {
        height: 72%;
        margin-top: -85px;
        overflow: visible;
        cursor: pointer;
        .n-carousel__slides {
          perspective: 400px;
        }
        img {
          position: relative;
          width: 40%;
          height: 100%;
          margin: auto;
          border-top-left-radius: 450px;
          border-top-right-radius: 450px;
          object-fit: cover;
          z-index: 2;
        }
      }
    }
  }
}

@media (max-width: 996px) {
  .HMBanner {
    width: 100vw;
    height: calc(100vh - 60px);
    background-image: linear-gradient(to bottom, #f5efef, #f3d9ca);
    background-size: 145% 135%;
    display: flex;
    justify-content: center;
    .bn {
      width: 75vw;
      height: 100%;
      .bn-title {
        position: relative;
        top: 75%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        color: #523a24;
        span {
          font-size: 48px;
          font-family: 'Playfair Display', serif;
          font-weight: 900;
        }
        div {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 2px;
        }
      }

      .n-carousel {
        height: 60%;
        margin-top: -40px;
        overflow: visible;
        cursor: pointer;
        .n-carousel__slides {
          perspective: 400px;
        }
        img {
          position: relative;
          width: 40%;
          height: 100%;
          margin: auto;
          border-top-left-radius: 450px;
          border-top-right-radius: 450px;
          object-fit: cover;
          z-index: 2;
        }
      }
    }
  }
  #HMsection01 {
    width: 100vw;
    height: 40vh;
    margin: auto;
    margin-top: 15vh;

    .n-carousel {
      display: flex;
      .carousel-img {
        width: 100%;
        height: 68%;
        object-fit: cover;
        display: flex;
      }
    }
  }

  #HMsection03 {
    margin-bottom: 0;
    section {
      .msec1 {
        width: 50%;
        height: 350px;
      }
    }
  }
  #HMsection04 {
    margin-top: 0;
    section {
      .msec1 {
        width: 50%;
        height: 350px;
      }
    }
  }
}

@media (max-width: 576px) {
  .HMBanner {
    width: 100vw;
    height: calc(100vh - 60px);
    background-image: linear-gradient(to bottom, #f5efef, #f3d9ca);
    display: flex;
    justify-content: center;
    .bn {
      width: 80vw;
      height: 100%;
      .bn-title {
        position: relative;
        top: 85%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 99;
        color: #523a24;
        span {
          font-size: 48px;
          font-family: 'Playfair Display', serif;
          font-weight: 900;
        }
        div {
          font-size: 6px;
          font-weight: 400;
          letter-spacing: 2px;
        }
      }

      .n-carousel {
        height: 55%;
        margin-top: -140px;
        overflow: visible;
        cursor: pointer;
        .n-carousel__slides {
          perspective: 500px;
        }
        img {
          position: relative;
          width: 65%;
          height: 100%;
          margin: auto;
          border-top-left-radius: 450px;
          border-top-right-radius: 450px;
          object-fit: cover;
          z-index: 2;
        }
      }
    }
  }
  #HMbgImg {
    .b1 {
      // img:nth-child(1) {
      position: relative;
      left: -350px;
      bottom: 90px;
      width: 30%;
      height: 70%;
      object-fit: cover;
      border-top-right-radius: 350px;
    }
    .b2 {
      // img:nth-child(2) {
      position: relative;
      left: 350px;
      width: 30%;
      height: 70%;
      bottom: 90px;
      object-fit: cover;
      border-top-left-radius: 350px;
    }
    .word {
      h1,
      h2 {
        font-family: 'Playfair Display', serif;
        color: #523a24;
        font-size: 28px;
      }
      display: flex;
      height: 60%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #523a24;
      h3 {
        margin: 0;
      }
    }
  }
  #HMsection01 {
    width: 100vw;
    height: 40vh;
    margin-top: 15vh;
    // background: url(../../../images/Homeimg-2.jpg) 50% 50% / cover;
    background-image: linear-gradient(to bottom, #f5efef, #f3d9ca 90%);

    .n-carousel {
      display: flex;
      width: 160vw;
      margin-left: 10px;
      .carousel-img {
        width: 100%;
        height: 65%;
        object-fit: cover;
        display: flex;
        cursor: pointer;
      }
    }
    p {
      display: flex;
    }
  }
  #HMsection02 {
    width: 100vw;
    height: calc(100vh - 60px);
    background: url(../../../images/photo-05.jpg) 0% 50% / cover;
    h1 {
      position: relative;
      top: 75%;
      font-family: 'Playfair Display', serif;
      color: #ca9e55;
      margin: 0;
      font-size: 36px;
    }
    p {
      position: relative;
      top: 75%;
      margin: 0;
      color: #f5efef;
    }
  }
  #HMsection03 {
    width: 100vw;
    display: flex;
    margin: auto;

    background-image: linear-gradient(to bottom, #f3d9ca, #f5efef);
    section {
      display: flex;
      width: 70%;
      height: 800px;
      align-items: center;
      text-align: center;
      margin: auto;
      flex-direction: column;
      .msec1 {
        width: 100%;
        height: 700px;
        display: flex;
        margin: 20px;
        justify-content: center;
      }
      .msec2 {
        width: 50%;
        display: flex;
        height: 60%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-bottom: 10vh;
        .infoImg {
          flex-direction: row;
        }
        h1,
        h2 {
          font-family: 'Playfair Display', serif;
          color: #523a24;
          font-size: 28px;
        }
        h3 {
          margin: 0;
          color: #ca9e55;
        }
      }
    }
  }
  #HMsection04 {
    width: 100vw;
    display: flex;
    margin: auto;
    margin-top: 10vh;
    margin-bottom: 0vh;
    background-image: linear-gradient(to bottom, #f5efef, #f5efef);
    section {
      display: flex;
      width: 70%;
      height: 900px;
      align-items: center;
      text-align: center;
      margin: auto;
      flex-direction: column-reverse;
      .msec1 {
        width: 100%;
        height: 500px;
        display: flex;
        justify-content: center;
        img {
          object-fit: cover;
          width: 80%;
          overflow: hidden;
          align-items: center;
          border-radius: 300px;
        }
      }
      .msec2 {
        width: 100%;
        margin-top: -10vh;
        h1,
        h2 {
          font-family: 'Playfair Display', serif;
          color: #523a24;
          font-size: 28px;
        }
        display: flex;
        height: 60%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p {
          margin: 0;
          color: #523a24;
        }
        img {
          margin: 5px;
          vertical-align: middle;
        }
      }
    }
  }
  #HMfooter {
    width: 100vw;
    height: 100vh;
    background: #f3d9ca;
    display: flex;
    justify-content: center;
    align-items: center;
    .FTSection {
      width: 100vw;
      height: 80vh;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .ftSec1 {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        p {
          font-size: 9px;
          margin: 10px;
          color: #ca9e55;
        }
      }
      .ftSec {
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
</style>
