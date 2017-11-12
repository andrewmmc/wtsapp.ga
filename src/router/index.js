import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import OpenSourceLicenses from '@/components/OpenSourceLicenses'
import Whatsapp from '@/components/Whatsapp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/open-source-licenses',
      name: 'OpenSourceLicenses',
      component: OpenSourceLicenses
    },
    {
      path: '/whatsapp/:phoneNumber',
      name: 'Whatsapp',
      component: Whatsapp
    },
    {
      path: '/*',
      redirect: {
        name: 'Home'
      }
    }
  ]
})
