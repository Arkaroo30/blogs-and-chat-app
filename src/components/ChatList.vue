<template>
    <div class="chat-name">
            <router-link to="/chatroom/group1">
        <div class="group">
            <h3>Frontend Development Discussion</h3>
            <p>HTML,CSS,Javascript</p>
        </div>
    </router-link>
    <router-link to="/chatroom/group2">
        <div class="group">
            <h3>Backend Development Discussion</h3>
            <p>PHP,Laravel</p>
        </div>
    </router-link>
    <router-link to="/chatroom/group3">
        <div class="group">
            <h3>Networking Discussion</h3>
            <p>WAN,LAN,INTERNET</p>
        </div>
    </router-link>
    </div>

</template>

<script>
export default {
    setup(){

    }
}
</script>

<style>
    .group{
        border-radius: 28px;
        padding: 20px;
        background-color: #f2f2f2;
        cursor: pointer;
        margin: 10px;
    }
    .chat-name h3{
        color: rgb(79, 79, 79);
        text-decoration: none;
    }
    .chat-name p{
        color: rgb(79, 79, 79);
        text-decoration: none;
    }
    .chat-name a{
        color: rgb(79, 79, 79);
        text-decoration: none;
    }
</style>