<template>
  <div class="container">
    <Navbar><span class="material-icons" @click="goBack">arrow_back</span></Navbar>
    <ChatWindow/>
    <NewChatForm/>
  </div>
</template>

<script>
import { watch } from 'vue'
import {useRouter} from 'vue-router'
import ChatWindow from "../components/ChatWindow.vue"
import NewChatForm from "../components/NewChatForm.vue"
import Navbar from "../components/Navbar.vue"
import getUser from '../composables/getUser'
export default {
    components: {Navbar,ChatWindow,NewChatForm},
    setup(){
      let router=useRouter();
      let {user}=getUser();

      let goBack=()=>{
        router.push("/chatroom");
      }
      
      watch(user,()=>{
        if(!user.value){
          router.push("/login");
        }
      })
      return {goBack}
    }
}
</script>

<style>

</style>