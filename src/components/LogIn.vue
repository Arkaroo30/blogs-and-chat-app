<template>
    <h2>Log In</h2>
    <form @submit.prevent="login">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div class="error" v-if="error">{{error}}</div>
        <button>Log In</button>
    </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '../composables/useLogin'
export default {
    setup(props,context){
        let email=ref("");
        let password=ref("");
        let {error,signIn}= useLogin();
        let login=async()=>{
            let response=await signIn(email.value,password.value);
            if(response){
                context.emit("enterChatroom");
            }
        }

        return {email,password,login,error};
    }
}
</script>

<style>

</style>