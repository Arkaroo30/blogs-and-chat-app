<template>
  <div class="container">
    <Navbar><span class="material-icons" @click="goBack">arrow_back</span></Navbar>
    <ChatWindow3/>
    <ChatForm3/>
  </div>
</template>

<script>
import { watch } from 'vue'
import {useRouter} from 'vue-router'
import ChatWindow3 from '../components/ChatWindow3.vue'
import ChatForm3 from '../components/ChatForm3.vue'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
export default {
    components: {Navbar,ChatForm3,ChatWindow3},
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