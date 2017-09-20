// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import DesktopRouter from './desktop_router'
import MobileRouter from './mobile_router'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.axios = axios

let router

if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);
    router = MobileRouter
} else if (/(Android)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);
    router = MobileRouter
} else {
    router = DesktopRouter
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
