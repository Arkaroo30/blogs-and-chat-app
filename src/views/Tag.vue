<template>
    <NavBlog/>
    <div class="tag">
        <div v-if="error">
            {{error}}
        </div>
        <div v-if="filteredPosts.length" class="layout">
            <div>
                <PostList :posts="filteredPosts"></PostList>
            </div>
            <div>
                <TagCloud :posts="posts"/>
            </div>
        </div>
        <div v-else class="spinner-grow" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
</template>

<script>
import TagCloud from "../components/TagCloud.vue"
import PostList from "../components/PostList.vue"
import getPosts from '../composables/getPosts'
import NavBlog from '../components/NavBlog.vue'
import { computed } from 'vue';
export default {
    props: ['tag'],
    components: {NavBlog,PostList,TagCloud},
    setup(props){
        let {error,posts,load}=getPosts();
        load();
        let filteredPosts=computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag);
            })
        })
        return {posts,error,filteredPosts};
    }
}
</script>

<style>
    .tag{
        max-width: 1200px;
        margin: 0 auto;
    }
</style>