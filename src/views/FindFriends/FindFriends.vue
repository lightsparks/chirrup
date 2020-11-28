<template>
    <div id="main-find-friends">

        <div class="main-container">

            <navbar></navbar>

            <main class="app-main">

                <form class="container_column">

                    <h1>Find Friends!</h1>

                    <div class="container_column">
                        <label for="search_string" class="input_container">Search for:</label>
                        <input v-model="search_string.search_string" type="text" id="search_string" class="input_container">
                    </div>

                    <button @click.prevent="findFriend">Find friend</button>

                </form>
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

<script src="./FindFriends.js"></script>