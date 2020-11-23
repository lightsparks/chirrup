<template>
    <div id="main">

        <div class="main-container">

            <navbar></navbar>

            <main class="app-main">
                <button @click="getMessages" class="button">Refresh</button>
                <ul class="message-data">
                    <li v-for="item in message_data" :key="item">
                        <div class="feed-messages-container">
                            <div class="feed-messages-created_at">
                                {{ item.created_at }}
                            </div>
                            <div class="feed-messages-id">
                                {{ item.id }}
                            </div>
                            <div class="feed-messages-message">
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