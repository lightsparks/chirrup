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
                            type="text"
                            v-model="newMessage"
                            autocomplete="off"
                            autofocus
                    />
                    <div class="button-container">
                        <button class="button" @click.prevent="send">Send Message</button>
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