<template>
  <div class="container">
    <Navbar/>
    <ChatList/>
    <span @click="toBlogs" class="arrow_back">
      <span class="material-icons">arrow_back</span>
      <p>Back to blogs</p>
    </span>
  </div>
</template>

<script>
import ChatList from "../components/ChatList.vue"
import ChatWindow from "../components/ChatWindow.vue"
import NewChatForm from "../components/NewChatForm.vue"
import { watch } from 'vue'
import Navbar from "../components/Navbar.vue"
import getUser from "../composables/getUser"
import {useRouter} from "vue-router"
export default {
    components: {Navbar,NewChatForm,ChatList},
    setup(){
      let {user}=getUser();
      let router=useRouter();
      watch(user,()=>{
        if(!user.value){
          router.push("/login");
        }
      })

      let toBlogs=()=>{
          router.push("/");
      }

      return {toBlogs}
    }
}
</script>

<style scoped>
  span p{
    font-size: 18px;
    margin: 0;
  }
</style>