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

