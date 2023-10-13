import { ref } from "vue";
import {auth} from "../firebase/config"
let error=ref(null);

let signIn=async(email,password)=>{
    try{
        let response=await auth.signInWithEmailAndPassword(email,password);
        if(!error){
            throw new Error("Cant login accoutn");
        }
        return response;
    }catch(err){
        error.value=err.message;
    }
}

let useLogin=()=>{
    return {error,signIn};
}

export default useLogin;