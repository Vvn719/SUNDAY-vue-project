<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-layout>
      <n-layout-header class="navbar">
        <div class="row">
          <a href="#">
            <div class="logo">
              <img src="../../images/SUNDAY-LOGO-02.png" />
            </div>
          </a>

          <div class="menu" collapse-mode="width">
            <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" :collapsed-width="902" />
            <n-badge class="CtNum" :value="cart"></n-badge>
          </div>

          <n-button text style="font-size: 24px" v-if="isLogin" @click="logout">
            <n-icon>
              <LogoutIcon />
            </n-icon>
          </n-button>
        </div>
      </n-layout-header>
      <n-layout class="content">
        <!-- <div class="menu" collapse-mode="width">
        <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptionsHome" :collapsed-width="902" />
      </div> -->
        <router-view></router-view>
      </n-layout>
      <!-- <n-layout-footer></n-layout-footer> -->
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import { h, ref } from 'vue'
import { NIcon } from 'naive-ui'
import {
  FlowerOutline as flowerIcon,
  HeartOutline as LoveIcon,
  CartOutline as CartIcon,
  PersonOutline as PersonIcon,
  BagOutline as OrderIcon,
  LogInOutline as LoginIcon,
  LogOutOutline as LogoutIcon,
  StorefrontOutline as AdminIcon,
  BagAddOutline as bagIcon,
  List as ListIcon
} from '@vicons/ionicons5'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user.js'
import { NConfigProvider } from 'naive-ui'

const themeOverrides = {
  common: {
    fontFamily: " 'Noto Sans TC', sans-serif,'Playfair Display', serif;",
    fontWeight: '400',
    fontWeightStrong: '500',
    primaryColor: '#CCA86EFF',
    primaryColorHover: '#D6B683FF',
    primaryColorSuppl: '#D6B683FF',
    primaryColorPressed: '#A68248FF',
    infoColor: '#B8927FED',
    infoColorHover: '#CCAA99EE',
    infoColorSuppl: '#CCAA99EE',
    infoColorPressed: '#B68770ED'
  }
}

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const user = useUserStore()
const { isLogin, isAdmin, cart } = storeToRefs(user)
const { logout } = user

const activeKey = ref(null)

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'newArrival'
          }
        },
        { default: () => '' }
      ),
    key: 'NewArrival',
    icon: renderIcon(flowerIcon),
    children: [
      {
        type: 'group',
        label: '????????????',
        key: 'people',
        children: [
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: 'newArrival'
                  }
                },
                { default: () => ' NewArrival' }
              ),
            key: 'classic',
            children: [
              {
                label: () =>
                  h(
                    RouterLink,
                    {
                      to: {
                        name: 'newEarrings'
                      }
                    },
                    { default: () => '????????????' }
                  ),
                key: 'newEarrings'
              },
              {
                label: () =>
                  h(
                    RouterLink,
                    {
                      to: {
                        name: 'newClipEarrings'
                      }
                    },
                    { default: () => '????????????' }
                  ),
                key: 'newClipEarrings'
              },
              {
                label: () =>
                  h(
                    RouterLink,
                    {
                      to: {
                        name: 'newNecklace'
                      }
                    },
                    { default: () => '???????????????' }
                  ),
                key: 'newNecklace'
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
                    { default: () => '????????????' }
                  ),
                key: 'customizedInfo'
              }
            ]
          },
          {
            // type: 'group',
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: 'customizedInfo'
                  }
                },
                { default: () => '????????????' }
              ),
            key: 'customizedInfo2',
            children: [
              {
                label: () =>
                  h(
                    RouterLink,
                    {
                      to: {
                        name: 'customizedInfo'
                      }
                    },
                    { default: () => '????????????' }
                  )
              }
            ]
          }
        ]
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
            { default: () => '????????????' }
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
            { default: () => '????????????' }
          ),
        key: 'CourseInfo'
      }
    ]
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'favorite'
          }
        },
        { default: () => '' }
      ),
    key: 'Favorite',
    icon: renderIcon(LoveIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'cart'
          }
        },
        { default: () => '' }
      ),
    key: 'Cart',
    icon: renderIcon(CartIcon)
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'orders'
          }
        },
        { default: () => ' ' }
      ),
    key: 'order',
    icon: renderIcon(OrderIcon),
    show: user.role == 0
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'login'
          }
        },
        { default: () => '' }
      ),
    key: 'Login',
    icon: renderIcon(PersonIcon),
    children: [
      {
        type: 'group',
        label: '????????????',
        key: 'people'
      },
      {
        type: 'group',
        label: '???????????? | ??????',
        key: 'LoginRegister',
        icon: renderIcon(LoginIcon),
        show: !user.role === '0 || 1'
      },
      // {
      //   label: '????????????',
      //   key: 'memberList',
      //   icon: renderIcon(PersonIcon)
      // },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'favorite'
              }
            },
            { default: () => '????????????' }
          ),
        key: 'love',
        icon: renderIcon(LoveIcon)
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'orders'
              }
            },
            { default: () => '????????????' }
          ),
        key: 'order',
        icon: renderIcon(OrderIcon)
      },
      {
        label: () =>
          h(
            RouterLink,
            {
              to: {
                name: 'cart'
              }
            },
            { default: () => '????????????' }
          ),
        key: 'cart',
        icon: renderIcon(CartIcon)
      }
    ]
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'adminHome'
          }
        },
        { default: () => '' }
      ),
    key: 'admin',
    icon: renderIcon(AdminIcon),
    show: user.role == 1,
    children: [
      {
        type: 'group',
        label: '????????????',
        key: 'people',
        children: [
          // {
          //   label: () =>
          //     h(
          //       RouterLink,
          //       {
          //         to: {
          //           name: 'adminMember'
          //         }
          //       },
          //       { default: () => '????????????' }
          //     ),
          //   key: 'memberList',
          //   icon: renderIcon(PersonIcon)
          // },
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: 'adminProducts'
                  }
                },
                { default: () => '????????????' }
              ),
            key: 'LoginRegister',
            icon: renderIcon(bagIcon)
          },
          {
            label: () =>
              h(
                RouterLink,
                {
                  to: {
                    name: 'adminOrders'
                  }
                },
                { default: () => '????????????' }
              ),
            key: 'orderList',
            icon: renderIcon(ListIcon)
          }
        ]
      }
    ]
  }
]
</script>

<style lang="scss">
body {
  margin: auto;
  text-align: center;
}

.n-layout {
  .navbar {
    width: 100vw;
    height: 60px;
    display: flex;
    justify-content: center;
    background-color: #f3d9ca;

    .row {
      width: 70vw;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .logo {
        width: 20%;
        display: flex;
        justify-content: flex-start;
        img {
          width: auto;
          height: 50px;
        }
      }
      .menu {
        width: 100%;
        display: flex;
        justify-content: flex-end;

        .n-badge-sup {
          position: relative;
          padding: 1px;
          padding-right: 2px;
          background: rgba(116, 42, 42, 0.2);
          // background: none;
          color: #000;
          font-size: 12px;
          // font-weight: 900;
          left: -100px;
          top: 5px;
        }
      }
      .n-menu.n-menu--horizontal .n-menu-item-content {
        svg {
          width: 20px;
          height: 20px;
        }
        padding: 0 5px;
      }
    }
  }

  .content {
    width: 100vw;
    height: calc(100vh - 60px);
    background-color: #f5efef;
    // .menu {
    //   width: 100%;
    //   margin-top: 20px;
    //   margin-bottom: 20px;
    // }
  }

  // .n-layout-footer {
  //   width: 100vw;
  //   height: 60px;
  //   border: none;
  //   background-color: #f3d9ca;
  // }
}
</style>
