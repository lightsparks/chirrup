<template>
    <div id="main-find-friends">

        <div class="main-container">

            <navbar></navbar>

            <main class="app-main">

                <form class="container_column">

                    <h1>Find Friends!</h1>

                    <div class="container_column">
                        <label for="search_string" class="input_container">Search for:</label>
                        <input v-model="search_for.search_string" type="text" id="search_string" class="input_container">
                        <button @click.prevent="findFriend">Find friend</button>
                    </div>

                    <div>
                        <ul class="message-data">
                            <li v-for="item in friendslist_data" :key="item.id">
                                <div class="feed-messages-container">
                                    <div class="message">{{ item.first_name }} {{ item.last_name }}</div>
                                    <sup>{{ item.email }}</sup>
                                    <button @click="connectFriend(item.id)">Connect to friend</button>
                                </div>
                            </li>
                        </ul>
                    </div>

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