<template>
    <nav class="app-nav">
        <router-link v-for="route in routes" :to="route.path" :key="route.path">{{ route.name }}</router-link>
        <!--<button class="btnless logout" @click="logOut">Log out</button>-->
    </nav>
</template>

<style type="text/css" src="./NavBar.css" scoped></style>

<script src='./NavBar.js'></script>