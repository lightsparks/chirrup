<template>

    <div class="login_user">
        <nav id="nav">
            <router-link to="/">Log in</router-link>
            |
            <router-link to="/register-new-user">Register</router-link>
        </nav>

        <form class="container_column">

            <div class="container_column">
                <label for="input_login_user_name" class="input_container">Email address:</label>
                <input v-model="userAuth.email" type="text" id="input_login_user_name" class="input_container">
            </div>
            <div
                    class="required_field_error"
                    v-if="login_error.hasOwnProperty('errors')"
            >{{ login_error.errors.email[0] }}
            </div>

            <div class="container_column">
                <label for="input_login_password" class="input_container">Password:</label>
                <input v-model="userAuth.password" type="password" id="input_login_password" class="input_container">
            </div>
            <div
                    class="required_field_error"
                    v-if="login_error.hasOwnProperty('errors')"
            >{{ login_error.errors.password[0] }}
            </div>

<!--
            <button @click.prevent="loginUser" v-bind:disabled="!isFormValid">Log in</button>
-->
            <button @click.prevent="loginUser">Log in</button>

        </form>

    </div>
</template>

<style type=text/css src="./Home.css"></style>

<script src="./Home.js"></script>