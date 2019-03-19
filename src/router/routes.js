const router = [
  {
    name: 'index',
    path: '/',
    component: () => import('@/views/index')
  },
  {
    name: 'introduction',
    path: '/introduction',
    component: () => import('@/views/introduction')
  },
  {
    name: 'bar',
    path: '/bar',
    component: () => import('@/views/bar')
  },
  {
    name: 'pie',
    path: '/pie',
    component: () => import('@/views/pie')
  },
  {
    name: 'gauge',
    path: '/gauge',
    component: () => import('@/views/gauge')
  },
  {
    name: 'axios',
    path: '/axios',
    component: () => import('@/views/axios')
  },
  {
    name: 'stand',
    path: '/stand',
    component: () => import('@/views/stand')
  },
  {
    name: 'statistics',
    path: '/statistics',
    component: () => import('@/views/statistics')
  },
  {
    path: '*',
    redirect: '/'
  }
  // {
  //   path: '/',
  //   redirect: '/index'
  // }
]

export default router
