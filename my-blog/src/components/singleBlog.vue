<template>
    <div id="single-blog" class="container">
        <div class="row">
            <div class="col-sm-6 center">
                <h3 class="text-center">{{blog.title}}</h3>
                <article><pre>{{blog.content}}</pre>
                    <div id="information">
                        <p class="text-left"><span class="author">作者:</span>{{blog.author}}</p>
                        <ul class="clearfix"><li>分类:</li><li v-for="category in blog.categories">{{category}}</li></ul>
                    </div>
                    <button class="change btn btn-outline-danger" @click="del">删除</button>
                    <router-link class="change btn btn-outline-primary" :to="'/edit/' + id">编辑</router-link>
                </article>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'single-blog',
    data(){
        return{
            //获取当前整个页面正在用于跳转(被点击)的路由的id
            id:this.$route.params.id,
            blog:{}
        }
    },
    methods:{
        del(){
            this.$http.delete('https://myblog-87afa.firebaseio.com/posts/'+this.id + '.json')
            .then(response=>{
                this.$router.push({path:'/'})
            })
        }
    },
    created() {
        this.$http.get('https://myblog-87afa.firebaseio.com/posts/'+this.id + '.json')
        .then(function(data){
            return data.json();
        })
        .then(function(data){
            this.blog = data;
        })
    },
}
</script>

<style scoped>
    ul{
        margin: 0;
    }
    ul li{
        float: left;
        margin-right: 15px;
    }
    #information{
        margin-top: 30px;
        font-size: 12px;
    }
    #information p{
        margin: 0;
    }
    .author{
        margin-right: 15px;
    }
    #single-blog{
        position: relative;
        top: 44px;
    }
    .center{
        margin: 0 auto;
        border-radius: 10px;
    }
    .center h3{
        background: cornflowerblue;
        padding: 10px;
        margin: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .center article{
        background: #fff;
        padding: 10px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    .change{
        margin-top: 20px;
        padding: 3px;
    }
</style>
