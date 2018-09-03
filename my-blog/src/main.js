import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import showBlogs from '../src/components/showBlogs.vue'
import addBlog from '../src/components/add-blog.vue'
import singleBlog from '../src/components/singleBlog.vue'
import edit from '../src/components/edit.vue'
Vue.use(vueResource)
Vue.use(vueRouter)
const Router = new vueRouter({
  routes:[
    {path:'/',component:showBlogs},
    {path:'/addBlog',component:addBlog},
    {path:'/blog/:id',component:singleBlog},
    {path:'/edit/:id',component:edit}
  ],
  mode:"history",
})
Vue.directive('focus',{
  inserted(el){
    el.focus();
  }
})
Vue.directive('rainBow',{
  bind(el){
    el.style.color = '#' + Math.random().toString(16).slice(2,8)
  }
}),
Vue.filter('toUpCase',function(value){
  return value.toUpperCase();
}),
Vue.filter('declineWord',function(value){
  return value.slice(0,100) + '...'
})
new Vue({
  router:Router,
  el: '#app',
  render: h => h(App)
})
