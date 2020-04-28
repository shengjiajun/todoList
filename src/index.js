import Vue from 'vue'

import App from './App.vue'
import './assets/styles/index.scss'

const root = document.createElement('div')
document.body.appendChild(root)

console.log(process.env)

new Vue({
    render: (h) => h(App)
}).$mount(root)