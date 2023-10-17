<template>
    <div class="post">
        <router-link :to="{name:'detail',params:{id:post.id}}">
        <h2>{{post.title}}</h2>
        </router-link>
        <p class="post_created">Posted at {{formattedPost.created_at}} ago</p>
        <p>{{cutDetail}}</p>
        <div v-for="tag in post.tags" :key="tag" class="pill">
            <router-link :to="{name:'tag',params:{tag:tag}}">{{tag}}</router-link>
        </div>
        <!-- <p class="post_created">Posted at {{formattedPost.created_at}} ago</p> -->
    </div>
</template>

<script>
import {formatDistanceToNow} from "date-fns"
import { computed } from 'vue'
export default {
    props: ['post'],
    setup(props){
        let cutDetail=computed(()=>{
            return props.post.detail.substring(0,250)+"...";
        })

        let formattedPost=computed(()=>{
                let formatTime=formatDistanceToNow(props.post.created_at.toDate());
                return {...props.post,created_at:formatTime}
        })

        return {cutDetail,formattedPost}
    }
}
</script>

<style>
    .post {
        margin: 0 40px 30px;
        padding-bottom: 30px;
        border-bottom: 1px dashed #e7e7e7;
      }
      .post h2 {
        display: inline-block;
        position: relative;
        font-size: 26px;
        color: white;
        margin-bottom: 10px;
        max-width: 400px;
      }
      .post h2::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: #5ae4ca;
        position: absolute;
        z-index: -1;
        padding-right: 270px;
        left: -30px;
        transform: rotateZ(-1deg);
      }
      .pill {
        display: inline-block;
        margin: 10px 10px 0 0;
        color: #444;
        background: #5ae4ca;
        padding: 8px;
        border-radius: 20px;
        font-size: 14px;
      }

      .post_created{
        margin-top: 10px;
        font-size: 15px;
        color: #18e1bc;
        font-style: italic;
      }
</style>