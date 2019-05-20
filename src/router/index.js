import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ExchangeList from '@/components/ExchangeList'
import Exchange from '@/components/Exchange'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/exchanges',
            name: 'ExchangeList',
            component: ExchangeList
        },
        {
            path: '/exchanges/exchange/:id',
            name: 'Exchange',
            component: Exchange
        }
    ]
})
