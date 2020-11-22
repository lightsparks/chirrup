<template>
    <div id="main-sendMessage">

        <div class="main-container">

            <navbar></navbar>

            <main class="app-main">
                <div class="message-container">
                    <textarea
                            class="send-new-message"
                            placeholder="Type new message..."
                            maxlength="280"
                            v-model="message.message"
                    />
                    <div class="button-container">
                        <button class="button" @click="sendMessage">Send Message</button>
                    </div>

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

<script src="./SendMessage.js"></script>