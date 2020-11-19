<template>
    <div id="main">

        <div class="main-container">

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

<script src="./Home.js"></script>

<style src="../styling/Global.css"></style>