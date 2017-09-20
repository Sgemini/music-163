import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/mobile/home'

Vue.use(Router)

// if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {  
//     //alert(navigator.userAgent);    
//     window.location.href ="iPhone.html";  
// } else if (/(Android)/i.test(navigator.userAgent)) {  
//     //alert(navigator.userAgent);   
//     window.location.href ="Android.html";  
// } else {  
//     window.location.href ="pc.html";  
// };
let folder

if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);
    folder = 'mobile'
} else if (/(Android)/i.test(navigator.userAgent)) {
    //alert(navigator.userAgent);
    folder = 'mobile'
} else {
    folder = 'desktop'
};


export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
