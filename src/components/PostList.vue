<template>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"/>
  </div>
</template>

<script>
import SinglePost from '../components/SinglePost.vue'
export default {
    props: ["posts"],
    components: {SinglePost},
    setup(props){
           
    }
}
</script>

<style scoped>
  h2{
    font-weight: bolder;
  }
</style>