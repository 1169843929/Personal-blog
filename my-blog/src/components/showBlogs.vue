<template>
    <div id="show-blogs" class="container">
        <div class="row">
            <div class="word-bg col-sm-6 center" :class="{'col-sm-12':flag}">
                <h1 class="text-center">博客总览<br>
                <button class="btn btn-outline-primary text-center" @click.prevent="theme">{{size}}</button></h1>
                <input class="form-control" type="text" v-model="search" placeholder="搜索你想看的博客文章">
                <div v-for="blog in filterBlogs" class="blog-bg">
                    <router-link :to="'/blog/'+blog.id">
                        <h4 v-rainBow>{{blog.title | toUpCase}}</h4>
                        <p><pre>{{blog.content | declineWord}}</pre></p>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"show-blogs",
    data(){
        return{
            size:'放大',
            flag:false,
            search:'',
            blogs:[],
        }
    },
    computed:{
        filterBlogs:function(){
            //筛选出字符串数组中含有字符this.search的元素,并且把它对应的blog给到filterBlogs属性
            return this.blogs.filter((blog)=>{
                //返回的是布尔值,blog.title字符串数组中含有字符this.search的元素返回真,且值为真的元素会被筛选出来，反之不会
                return blog.title.match(this.search);
            })
        }
    },
    methods:{
        theme(){
            this.flag =!this.flag
            if(this.size == '放大'){
                this.size = '缩小'
            }else if(this.size == '缩小'){
                this.size = '放大'
            }
        }
    },
    created() {
        this.$http.get('https://myblog-87afa.firebaseio.com/posts.json')
        .then(function(data){
            return data.json();
        })
        .then(function(data){
            var blogsArray =[];
            for(let key in data){
                // console.log(data[key]);
                data[key].id = key;
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray;
            console.log(this.blogs)
        })
    },
}
</script>

<style scoped>
    h1{
        background: #333;
        color: #ddd;
        padding: 20px;
        border: 4px solid cadetblue;
        border-top: none;
    }
    pre{
        overflow: hidden;
    }
    #show-blogs{
        position: relative;
        top: 44px;
    }
    .center{
        margin: 0 auto;
    }
    .blog-bg{
        margin: 20px;
        border-radius: 10px;
    }
    .blog-bg a{
        width: 100%;
        max-height: 180px;
        overflow: hidden;
        background: #fff;
        color: #000;
        border-radius:10px;
        border: 4px solid azure;
    }
    .blog-bg a:hover{
        transform: scale(1.15);
        transition: .3s ease-in-out;
    }
    .word-bg{
        background: lightblue;
    }
</style>
