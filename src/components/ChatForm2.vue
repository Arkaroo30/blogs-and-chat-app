<template>
  <form action="">
        <textarea placeholder="Type new chat" v-model="message" @keypress.enter="handleSubmit"></textarea>
        <span class="material-icons" @click="handleSubmit">attachment</span>
        <span class="material-icons" @click="handleSubmit">send</span>
  </form>
</template>

<script>
import {timestamp} from "../firebase/config"
import { ref } from 'vue'
import getUser from '@/composables/getUser';
import useCollection from "../composables/useCollection"
export default {
    setup(){
        let message=ref("");
        let {user}=getUser();
        let {error,addDoc}=useCollection("messages4group2");
        let handleSubmit=async()=>{
            let chat={
                message:message.value,
                name:user.value.displayName,
                created_at:timestamp()
            }
            await addDoc(chat);
            message.value="";
        }

        return {message,handleSubmit,error}
    }
}
</script>

<style>
    form{
        margin: 10px;
    }
    textarea{
        width: 90%;
        max-width: 100%;
        margin-bottom: 6px;
        box-sizing: border-box;
        padding: 10px;
        border: 0;
        font-family: inherit;
        outline: none;
    }
    span{
        cursor: pointer;
        justify-content: space-between;
        margin: 6px;
    }
</style>