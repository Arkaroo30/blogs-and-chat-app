<template>
    <NavBlog/>
    <div class="home">
        <div v-if="post" class="post">
        <h2>{{post.title}}</h2>
        <p>{{post.detail}}</p>
        <!-- <button class="delete" @click="deletePost">Delete</button> -->
        <p class="author">Written By {{post.name}}</p>
      </div>
      <div v-else class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
      </div>
    </div>

  <!-- <h1>{{post}}</h1> -->
</template>

<script>
import {db} from "../firebase/config"
import NavBlog from "../components/NavBlog.vue"
import getPost from "../composables/getPost"
import {useRouter} from 'vue-router'
export default {
    props: ["id"],
    components: {NavBlog},
    setup(props){
        let router=useRouter();
        let {post,error,load}= getPost(props.id);
        load();

        let deletePost=async()=>{
          let id=props.id;
          await db.collection("posts").doc(id).delete();
          router.push("/");
        }
        return {post,error,deletePost}
    }
}
</script>

<style scoped>
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
      button.delete{
        border-radius: 0%;
        margin: 20px auto;
        cursor: pointer;
      }
      .author{
        font-weight: 900;
        letter-spacing: 2px;
        text-decoration: underline;
      }
</style>