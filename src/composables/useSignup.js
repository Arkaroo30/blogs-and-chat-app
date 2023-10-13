import { ref } from "vue";
import {auth} from "../firebase/config";
let error=ref(null);

let createAccount=async(email,password,displayName)=>{
    try{
        let response=await auth.createUserWithEmailAndPassword(email,password)
        console.log(response.user);
        if(!response){
            throw new Error("Could not create user!!");
        }
        response.user.updateProfile({displayName});
        return response;
    }catch(err){
        error.value=err.message;
        console.log(error.value);
    }
}

let useSignup=()=>{
    return {error,createAccount};
}

export default  useSignup;