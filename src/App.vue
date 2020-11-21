<template>
    <div id="app">

        <router-link to="Home"><h1>Chirrup</h1></router-link>

        <transition
                name="fade"
                mode="out-in"
        >
            <router-view/>
        </transition>
        <footer class="App_footer">
            <div class="footer-container">
                &copy; Chirrup  ||  Mario Smit / Rinu Yatim
            </div>
        </footer>
    </div>
</template>

<style src="./styling/Global.css"></style>

<style>
    * {
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
/*        color: ;*/
    }

    .v-toast__item--success {
        background-color: #42b983 !important;
    }

    .v-toast__item--error {
        background-color: #c00 !important;
    }

    .v-toast__item--warning {
        background-color: #fde800 !important;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition-duration: 0.3s;
        transition-property: opacity;
        transition-timing-function: ease;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }


    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;

    }
</style>
