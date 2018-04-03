import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: resolve => require(['../components/home/index'],resolve)
    },{
        path: '/home/detail/',
        name: 'home-detail',
        component: resolve => require(['../components/home/detail'],resolve)
    },{
        path: '/step/',
        name: 'step-list',
        component: resolve => require(['../components/step/list'],resolve)
    },{
        path: '/step/detail/',
        name: 'step-detail',
        component: resolve => require(['../components/step/detail'],resolve)
    },{
        path: '/market/',
        name: 'market-list',
        component: resolve => require(['../components/market/list'],resolve)
    },{
        path: '/market/exchangeRecord/',
        name: 'exchangeRecord',
        component: resolve => require(['../components/market/exchangeRecord'],resolve)
    },{
        path: '/market/scoreRecord/',
        name: 'scoreRecord',
        component: resolve => require(['../components/market/scoreRecord'],resolve)
    },{
        path: '/uc/',
        name: 'account',
        component: resolve => require(['../components/uc/account'],resolve)
    },{
        path: '/uc/verify/',
        name: 'verify',
        component: resolve => require(['../components/uc/verify'],resolve)
    },{
        path: '/uc/activity/',
        name: 'activity',
        component: resolve => require(['../components/uc/activity'],resolve)
    },]
})
