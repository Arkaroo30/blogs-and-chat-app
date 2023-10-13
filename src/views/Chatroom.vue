<template>
  <div class="container">
    <Navbar/>
    <ChatList/>
    <!-- <ChatWindow/> -->
    <!-- <NewChatForm/> -->
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
    }
}
</script>

<style>

</style>