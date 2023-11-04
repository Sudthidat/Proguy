import Vue from 'vue'
import Router from 'vue-router'
import PastilleIndex from '@/components/Pastille/Index'
import PastilleCreate from '@/components/Pastille/CreatePastille'
import PastilleEdit from '@/components/Pastille/EditPastille'
import PastilleShow from '@/components/Pastille/ShowPastille'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/pastilles',
      name: 'pastilles',
      component: PastilleIndex
    },
    {
      path: '/pastille/create',
      name: 'pastille-create',
      component: PastilleCreate
    },
    {
      path: '/pastille/edit/:pastilleId',
      name: 'pastille-edit',
      component: PastilleEdit
    },
    {
      path: '/pastille/:pastilleId',
      name: 'pastille-show',
      component: PastilleShow
    }
  ]
})
