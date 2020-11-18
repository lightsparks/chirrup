<template>
    <div id="main">



        <div class="main-container">

            <router-link to="profile"><h1>Chirrup</h1></router-link>
            <nav class="app-nav">
                <router-link to="profile">Profile</router-link>
                |
                <router-link to="messages">Messages</router-link>
                |
                <button class="btnless" @click="logOut">Log out</button>
            </nav>

            <main class="app-main">

            </main>
        </div>

    </div>
</template>

<script src="./User.js"></script>

<style src="../styling/Global.css"></style>