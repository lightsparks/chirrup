<template>
    <div id="main">

        <div class="main-container">

            <navbar></navbar>

            <main class="app-main">
                <button @click="getMessages" class="button">Refresh</button>
                <!--<div class="feed-container" v-for="message in message_data">
                    <div class="message-container" >
                        <div class="message-content"></div>
                        <div class="timestamp"></div>
                        <div class="userID"></div>
                    </div>
                </div>-->
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

<script src="./Home.js"></script>