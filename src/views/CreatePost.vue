<template>
  <NavBlog/>
  <form @submit.prevent="addPost">
  <h2>Create Post</h2>
    <label>Title</label>
    <input type="text" required v-model="title">

    <label>Detail</label>
    <textarea required v-model="detail"></textarea>

    <label>Tag(Hit enter to add a tag)</label>
    <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">

    <div v-for="tag in tags" :key="tag" class="pill">
        {{tag}}
    </div>
    <button>Add Post</button>
  </form>
</template>

<script>
import {db, timestamp} from '../firebase/config'
import NavBlog from "../components/NavBlog"
import {useRouter} from "vue-router"
import { ref } from 'vue'
import getUser from '../composables/getUser'
export default {
    components: {NavBlog},
    setup(){
        let router=useRouter();
        let {user}=getUser();
        let title=ref("");
        let detail=ref("");
        let tag=ref("");
        let tags=ref([]);
        let handleKeydown=()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value);
            }
            tag.value="";
        }

        let addPost=async()=>{
          let newPost={
                        title:title.value,
                        detail:detail.value,
                        tags:tags.value,
                        created_at:timestamp(),
                        name:user.value.displayName
                    };
            let response=await db.collection("posts").add(newPost);
            console.log(user.value.displayName);
            router.push("/");
        }
        return {title,detail,tag,handleKeydown,tags,addPost};
    }

}
</script>

<style scoped>
  h2{
    font-weight: bolder;
    margin: 10px auto;
  }
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #5ae4ca;
    position: absolute;
    z-index: -1;
    padding-right: 280px;
    left: -30px;
    transform: rotateZ(-1deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #5ae4ca;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    border-radius: 0%;
    cursor: pointer;
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

</style>