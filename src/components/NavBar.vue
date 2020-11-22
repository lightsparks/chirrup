<template>
    <nav class="app-nav">
        <router-link to="Home">Home</router-link>
        <router-link to="SendMessage">Send Message</router-link>
        <!--<router-link to="profile">Profile</router-link>-->
        <router-link to="Logout">Logout</router-link>
        <!--<button class="btnless logout" @click="logOut">Log out</button>-->
    </nav>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>