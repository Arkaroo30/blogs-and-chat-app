<template>
  <div class="container">
    <Navbar><span class="material-icons" @click="goBack">arrow_back</span></Navbar>
    <ChatWindow2/>
    <ChatForm2/>
  </div>
</template>

<script>
import { watch } from 'vue'
import {useRouter} from 'vue-router'
import ChatWindow2 from '../components/ChatWindow2.vue'
import ChatForm2 from '../components/ChatForm2.vue'
import Navbar from '../components/Navbar.vue'
import getUser from '../composables/getUser'
export default {
    components: {Navbar,ChatForm2,ChatWindow2},
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