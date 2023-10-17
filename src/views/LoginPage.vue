S<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
      <LogIn @enterBackHome="enterBackHome"></LogIn>
      <p>Not a member? <span @click="showLoginForm=!showLoginForm">Create account here!</span>
      <span>
      <router-link to="/">Back To Blogs!</router-link>
      </span>
      </p>
    </div>
    <div v-else>
      <SignUp @enterBackHome="enterBackHome"></SignUp>
      <p>Already have an account? <span @click="showLoginForm=!showLoginForm">Log In here!</span>
      <span>
      <router-link to="/">Back To Blogs!</router-link>
      </span>
      </p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import LogIn from "../components/LogIn.vue"
import SignUp from "../components/SignUp.vue"
import {useRouter} from "vue-router"
export default {
  components: {
    SignUp,LogIn
  },
  setup(){
    let showLoginForm=ref(true);
    let router=useRouter();
    let enterBackHome=()=>{
      router.push({name:"welcome"});
    } 
    return {showLoginForm,enterBackHome};
  }
}
</script>

<style>
    .welcome{
        text-align: center;
        padding: 20px 0;
    }
    .welcome form {
      width: 300px;
      margin: 20px auto;
    }
    .welcome label{
      display: block;
      margin: 20px 0 10px;
    }
    .welcome input{
      width: 100%;
      padding: 10px;
      border-radius: 20px;
      border: 1px solid #eee;
      outline: none;
      color: #999;
      margin: 10px auto;
    }
    .welcome span{
      font-weight: bold;
      text-decoration: underline;
      cursor: pointer;
    }
    .welcome button{
      margin: 20px auto;
    }
    .welcome span a{
      color: #474646;
    }
</style>