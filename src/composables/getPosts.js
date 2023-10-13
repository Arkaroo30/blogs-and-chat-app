import { ref } from "vue";
import {db} from '../firebase/config'
let getPosts=()=>{
    let error=ref("");
    let posts=ref([]);
    let load=async()=>{
      try{
        let response=await db.collection("posts").orderBy("created_at","desc").get()
          posts.value=response.docs.map((doc)=>{
            return {id:doc.id,...doc.data()}
          })
      }catch(err){
        error.value=err.message;
      }
    }

    return {error,posts,load}
}

export default getPosts;