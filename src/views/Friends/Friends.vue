<template>
    <div id="main-friends">

        <div class="main-container">

            <navbar></navbar>

            <main class="app-main">
                <img src="/loader.gif" v-if="loading" />
                <div class="container_column">
                    <ul class="message-data">
                        <li v-for="item in friends_data" :key="item.id">
                            <div class="feed-messages-container">
                                <div class="message">{{ item.first_name }} {{ item.last_name }}</div>
                                <sup>{{ item.email }}</sup>
                            </div>
                        </li>
                    </ul>
                </div>
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