<template>
    <div id="main">

        <div class="main-container">

            <navbar></navbar>

            <main class="app-main">
                <button @click="getMessages" class="refresh-button">&#x21ba; Refresh</button>
                <img src="/loader.gif" v-if="loading" />
                <ul class="message-data">
                    <li v-for="item in message_data" :key="item.id">
                        <div class="feed-messages-container">
                            <sup class="created_at">{{ item.user.first_name }} {{ item.user.last_name }}:</sup>
                            <div class="message">{{ item.message }}</div>
                            <sup>{{ item.created_at }}</sup>
                        </div>
                    </li>
                </ul>
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