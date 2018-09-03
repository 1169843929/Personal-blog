<template>
  <div id="add-blog">
    <div class="container">
      <h2 class="text-center bg-info spacey-20 opacity-8">添加博客</h2>
      <div class="spacey-20"></div>
      <form v-if="submit" class="form-group ">
         <div class="col-sm-4 center">
          <div class="row">
              <label>博客标题</label>
              <input v-focus class="form-control" type="text" v-model="blog.title">
          </div>
          <div class="spacey-20"></div>
          <div class="row">
              <label >博客内容</label>
              <textarea class="form-control" v-model="blog.content"></textarea>
          </div>
          <div class="spacey-20"></div>
          <div class="checkboxs">
            <div class="row">
                <label>博客类型</label>
                <div class="form-control">
                  <label for="vue.js">vue.js</label>
                  <input id="vue.js" type="checkbox" value="vue.js" v-model="blog.categories">
                  <label for="node.js">node.js</label>
                  <input id="node.js" type="checkbox" value="node.js" v-model="blog.categories">
                  <label for="react.js">react.js</label>
                  <input id="react.js" type="checkbox" value="react.js" v-model="blog.categories">
                  <label for="angular4.js">angular4.js</label>
                  <input id="angular4.js" type="checkbox" value="angular4.js" v-model="blog.categories">
                </div>
            </div>
          </div>
          <div class="spacey-20"></div>
          <div class="row">
              <label class="spacex-r-20">作者</label>
              <select v-model="blog.author"  class="form-control col-sm-4">
                <option v-for="authors in authors">{{authors}}</option>
              </select>
          </div>
          <div class="spacey-20"></div>
          <div class="row">
            <button @click.prevent="post" class="btn btn-primary col-sm-6 center">添加博客</button>
          </div>
        </div>
      </form>
      <h3 class="text-center" v-if="!submit">添加成功!</h3>
        <hr>
        <h2 class="text-center">博客总览</h2>
        <div class="col-sm-6 center">
          <div class="bg-gray">
            <p><span class="spacex-20">博客标题:</span>{{blog.title}}</p>
            <p><span class="spacex-20">博客内容:</span>{{blog.content}}</p>
            <p><span class="spacex-20">博客分类:</span>
              <ul>
                <li v-for="category in blog.categories">{{category}}</li>
              </ul>
            </p>
            <p><span class="spacex-20">作者:</span>{{blog.author}}</p>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'addBlog',
  data () {
    return {
      blog:{
        title:'',
        content:'',
        categories:['vue.js'],
        author:'洪玉峰'
      },
      authors:['洪玉峰','henry','mike','jack'],
      submit:true,
    }
  },
  methods:{
    post(){
      this.$http.post('https://myblog-87afa.firebaseio.com/posts.json',
      this.blog)
      .then(function(data){
        // alert('添加成功!');
        this.submit = false;
        setTimeout(this.$router.push('/'),3000);
      })
    }
  },
}
</script>

<style scoped>
  .add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    position: relative;
    top: 44px;
  }
  .spacey-20{
    padding: 10px 0;
  }
  textarea{
    height: 200px;
  }
  ul{
    display: inline
  }
  ul li{
    display: inline-block;
    margin: 0 10px;
  }
  .spacex-20{
    padding: 0 10px;
  }
  .spacex-r-20{
    padding-right:20px;
  }
  .opacity-8{
    opacity: .8;
    border: 4px solid greenyellow;
    border-top: none;
    color: #222;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }
  .center{
    margin: 0 auto
  }
  .bg-gray{
    background: #333;
    color: #fff;
    border: 4px solid goldenrod;
    border-radius: 20px;
  }
</style>
