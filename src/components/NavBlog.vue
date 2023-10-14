<template>
  <header>
    <h1>Bloggy Vue</h1>
    <nav>
        <router-link :to="{name:'welcome'}">Home</router-link>
        <span @click="toCreatePost">Create Post</span>
        <!-- <router-link :to="{name: 'login'}">Go To Chat Room</router-link> -->
        <span @click="toChatroom">Go To Chat Room</span>
    </nav>
  </header>
</template>

<script>
import {auth} from '../firebase/config'
import {useRouter} from 'vue-router'
export default {
  setup(){
    let router=useRouter();
    let user=auth.currentUser;
    let toChatroom=()=>{
        if(user){
          router.push("/chatroom");
        }else{
          router.push("/login");
        }
    }
    let toCreatePost=()=>{
        if(user){
          router.push("/create");
        }else{
          router.push("/login");
        }
    }
    return {toChatroom,toCreatePost}
  }
}
</script>

<style scoped>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 30px auto;
    padding: 10px;
  }
  header h1 {
    color: grey;
    font-weight: 900;
    font-size: 48px;
    letter-spacing: 5px;
  }
  header a {
    color: grey;
    text-decoration: none;
    margin-left: 20px;
  }
  header a.router-link-active {
    color: black;
    font-weight: bold;
  }

  span {
    color: grey;
    text-decoration: none;
    margin-left: 20px;
  }
</style>