<template>
  <NavBlog/>
  <router-view></router-view>
  <div class="home">

      <div v-if="posts.length" class="layout"> 
          <div>
            <PostList :posts="posts"/>
          </div>
          <div>
            <TagCloud :posts="posts"/>
          </div>
      </div>
        <div v-if="error">
          {{error}}
        </div>
      <div v-if="!error && !posts.length" class="spinner-grow" role="status">
          <span class="sr-only">Loading...</span>
      </div>

  </div>
</template>

<script>
import TagCloud from '../components/TagCloud.vue'
import NavBlog from '../components/NavBlog.vue'
import PostList from "../components/PostList.vue"
import getPosts from '../composables/getPosts'
import { ref } from 'vue'
export default {
  components: {PostList,NavBlog,TagCloud},
  setup(){
    let {error,posts,load}=getPosts();
    load();
    return {posts,load,error};
  }
}
</script>

<style>
  .home{
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>