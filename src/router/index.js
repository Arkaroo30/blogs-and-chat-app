import { createRouter, createWebHistory } from "vue-router"
import Welcome from "../views/Welcome.vue"
import Chatroom from "../views/Chatroom.vue"
import ChatGroup1 from "../views/ChatGroup1.vue"
import ChatGroup2 from "../views/ChatGroup2.vue"
import ChatGroup3 from "../views/ChatGroup3.vue"
import LoginPage from "../views/LoginPage.vue"
import CreatePost from "../views/CreatePost.vue"
import Tag from "../views/Tag.vue"
import Detail from "../views/Detail.vue"
import {auth} from "../firebase/config"

const routes = [
  {
    path:"/",
    name: "welcome",
    component: Welcome,
    beforeEnter(to,from,next){
      let user=auth.currentUser;
      if(!user){
        next();
      }else{
        next({name:"Chatroom"});
      }
    }
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage
  },
  {
    path: "/posts/:id",
    name: "detail",
    component: Detail,
    props: true
  },
  {
    path: "/tags/:tag",
    name: "tag",
    component: Tag,
    props: true
  },
  {
    path: "/create",
    name: "create",
    component: CreatePost
  },
  {
    path: "/chatroom",
    name: "Chatroom",
    component: Chatroom,
    // beforeEnter(to,from,next){
    //   let user=auth.currentUser;
    //   if(user){
    //     next();
    //   }else{
    //     next({name:"login"})
    //   }
    // }
  },
  {
    path: "/chatroom/group1",
    name: "group1",
    component: ChatGroup1,
    beforeEnter(to,from,next){
      let user=auth.currentUser;
      if(user){
        next();
      }else{
        next({name:"login"})
      }
    }
  },
  {
    path: "/chatroom/group2",
    name: "group2",
    component: ChatGroup2,
    beforeEnter(to,from,next){
      let user=auth.currentUser;
      if(user){
        next();
      }else{
        next({name:"login"})
      }
    }
  },
  {
    path: "/chatroom/group3",
    name: "group3",
    component: ChatGroup3,
    beforeEnter(to,from,next){
      let user=auth.currentUser;
      if(user){
        next();
      }else{
        next({name:"login"})
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
