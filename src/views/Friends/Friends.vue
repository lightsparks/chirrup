<template>
    <div id="main-friends">

        <div class="main-container">

            <navbar></navbar>

            <main class="app-main">

                <!--<button @click="getFriendsList" class="refresh-button">List Friends</button>-->

            </main>

        </div>

    </div>
</template>

<script>
    import navbar from "../../components/NavBar";

    export default {
        components: {navbar}
    }
</script>

<script src="./Friends.js"></script>