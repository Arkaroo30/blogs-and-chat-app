<template>
  <nav v-if="user">
    <div v-if="user.displayName">
        <!-- <span class="material-icons" @click="goBack">arrow_back</span> -->
        <slot></slot>
        <p>Hi {{user.displayName}}</p>
        <p class="email">Logged in as {{user.email}}</p>       
    </div>
    <div v-else>
        <span class="material-icons">arrow_back</span>
        <p>Hello Welcome</p>
        <p class="email">Logged in as {{user.email}}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { ref } from 'vue'
import {useRouter} from "vue-router"
import {auth} from "../firebase/config"
import getUser from "../composables/getUser"
export default {
    setup(){
        let error=ref(null);
        let {user}=getUser();
        let router=useRouter();
        let goBack=()=>{
            router.push("/chatroom");
        }
        let logout=async()=>{
            try{
                await auth.signOut();
                console.log("user logout");
            }catch(err){
                error.value=err.message;
                console.log(error.value);
            }
        }
            
        return {logout,user,goBack};
    }
}
</script>

<style>
    nav{
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav p{
        margin: 2px;
        font-size: 16px;
        color: #444;
    }
    nav p.email{
        font-size: 14px;
        color: #999;

    }
</style>