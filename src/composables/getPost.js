import { ref } from "vue";
import {db} from '../firebase/config'
let getPost=(id)=>{
    let error=ref("");
    let post=ref(null);
    let load=async()=>{
        try{
            let doc=await db.collection("posts").doc(id).get();
            post.value={id:doc.id,...doc.data()}
        }catch(err){
            error.value=err.message;
        }
    }

    return {post,error,load}
}

export default getPost;