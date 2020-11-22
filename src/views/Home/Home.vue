<template>
    <div id="main">

        <div class="main-container">

            <navbar></navbar>

            <main class="app-main">
                <button @click="getMessage()" class="btnless">Get messages</button>
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