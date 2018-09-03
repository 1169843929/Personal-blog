<template>
  <div id="app">
    <div id="nav">
      <div class="col-sm-4 center text-center">
        <router-link to="/">首页</router-link>
        <router-link to="/addBlog">添加博客</router-link>
      </div>
    </div>
    <!-- 通过路由渲染出来的组件会在<router-view>标签中显示 -->
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/add-blog.vue'
import showBlogs from './components/showBlogs.vue'
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
    addBlog,showBlogs
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style-type: none;
}
pre{
  max-height: 490px;
  white-space: pre-wrap;
  overflow-y: scroll;
  overflow-x: hidden;
}
body{
  background: #eee;
}
.center{
  margin: 0 auto;
}
.center a{
  display: inline-block;
  padding: 10px;
}
#nav{
  z-index: 1;
  width: 100%;
  background: rgba(0,0,0,.5);
  position: fixed;
}
#nav a{
  color: #fff;
}
#nav a:hover{
  color: #333;
  background: #eee;
}
</style>
