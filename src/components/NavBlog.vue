<template>
  <header>
    <h1>Bloggy Vue</h1>
    <nav>
        <router-link :to="{name:'welcome'}">Home</router-link>
        <router-link :to="{name:'create'}">Create Your Post</router-link>
        <router-link :to="{name: 'login'}">Go To Chat Room</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style>
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 30px auto;
    padding: 10px;
  }
  header h1 {
    color: grey;
    font-weight: 900;
    font-size: 48px;
    letter-spacing: 5px;
  }
  header a {
    color: grey;
    text-decoration: none;
    margin-left: 20px;
  }
  header a.router-link-active {
    color: black;
    font-weight: bold;
  }

</style>