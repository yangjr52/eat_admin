import Main from '@/components/main'
// import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '控制台',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  // {
  //   path: '',
  //   name: 'doc',
  //   meta: {
  //     title: '文档',
  //     href: 'https://lison16.github.io/iview-admin-doc/#/',
  //     icon: 'ios-book'
  //   }
  // },
  // {
  //   path: '/message',
  //   name: 'message',
  //   component: Main,
  //   meta: {
  //     hideInBread: true,
  //     hideInMenu: true
  //   },
  //   children: [
  //     {
  //       path: 'message_page',
  //       name: 'message_page',
  //       meta: {
  //         icon: 'md-notifications',
  //         title: '消息中心'
  //       },
  //       component: () => import('@/view/single-page/message/index.vue')
  //     }
  //   ]
  // },

  {
    path: '/home',
    name: '控制台',
    meta: {
      icon: 'logo-buffer',
      title: '控制台'
    },
    component: Main,
    children: [
      {
        path: 'schoolSet',
        name: '控制台',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '控制台'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/components',
    name: '设置中心',
    meta: {
      icon: 'logo-buffer',
      title: '设置中心'
    },
    component: Main,
    children: [
      {
        path: 'tree_select_page',
        name: 'banner设置',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: 'banner设置'
        },
        component: () => import('@/view/banner/index.vue')
      },
      {
        path: 'count_to_page',
        name: '公告设置',
        meta: {
          icon: 'md-trending-up',
          title: '公告设置'
        },
        component: () => import('@/view/notice/index.vue')
      },
      {
        path: 'one_day',
        name: '每日一读广告配置',
        meta: {
          icon: 'ios-infinite',
          title: '每日一读广告配置'
        },
        component: () => import('@/view/one-day/index.vue')
      }
    ]
  },
  {
    path: '/components',
    name: '用户管理',
    meta: {
      icon: 'logo-buffer',
      title: '用户管理'
    },
    component: Main,
    children: [
      {
        path: 'userlist',
        name: '用户信息列表',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '用户信息列表'
        },
        component: () => import('@/view/userlist/index.vue')
      },
      {
        path: 'myInformation',
        name: '用户信息审核列表',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '用户信息列表'
        },
        component: () => import('@/view/myInformation/index.vue')
      }
    ]
  },
  {
    path: '/components',
    name: '订单管理',
    meta: {
      icon: 'logo-buffer',
      title: '订单管理'
    },
    component: Main,
    children: [
      {
        path: 'orderlist',
        name: '订单列表',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '订单列表'
        },
        component: () => import('@/view/orderlist/index.vue')
      },
      {
        path: 'stuff',
        name: '失物招领列表',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '失物招领列表'
        },
        component: () => import('@/view/stuff/index.vue')
      },
      {
        path: 'refundlist',
        name: '退款列表',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '退款列表'
        },
        component: () => import('@/view/refundlist/index.vue')
      },
      {
        path: 'withdrawalList',
        name: '提现列表',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '提现列表'
        },
        component: () => import('@/view/withdrawalList/index.vue')
      }
    ]
  },
  {
    path: '/school',
    name: '学校管理',
    meta: {
      icon: 'logo-buffer',
      title: '学校管理'
    },
    component: Main,
    children: [
      {
        path: 'schoolSet',
        name: '学校设置',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '学校设置'
        },
        component: () => import('@/view/school/index.vue')
      }
    ]
  },
  {
    path: '/advice',
    name: '意见反馈',
    meta: {
      icon: 'logo-buffer',
      title: '意见反馈'
    },
    component: Main,
    children: [
      {
        path: 'adviceSet',
        name: '意见反馈',
        meta: {
          icon: 'md-arrow-dropdown-circle',
          title: '意见反馈'
        },
        component: () => import('@/view/advice/index.vue')
      }
    ]
  },
  {
    path: '/401',
    name: 'error_401',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/401.vue')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/500.vue')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/view/error-page/404.vue')
  }
]