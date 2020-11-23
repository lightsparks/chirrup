<template>
    <div id="main">

        <div class="main-container">

            <navbar></navbar>

            <main class="app-main">
                <button @click="getMessages" class="refresh-button">&#x21ba; Refresh</button>
                <ul class="message-data">
                    <li v-for="item in message_data" :key="item">
                        <div class="feed-messages-container">
                            <div class="created_at">{{ item.created_at }}
                                <span class="id">{{ item.id }}</span>
                            </div>
                            <div class="message">
                                {{ item.message }}
                            </div>
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