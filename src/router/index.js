import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import step from '@/components/step'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: resolve => require(['../components/index'],resolve)
    },{
        path: '/step',
        name: 'step',
        component: resolve => require(['../components/step'],resolve)
    }]
})
