<template>
  <div class="register">
    <nav id="nav">
      <router-link to="/">Log in</router-link>
      |
      <router-link to="/register-new-user">Register</router-link>

    </nav>

    <h1>Create a new account</h1>

    <form class="container_column">

      <div class="container_column">
        <label for="input_register_first_name"
               class="input_container">First name:</label>
        <input
            v-model="reg_user.first_name"
            type="text"
            id="input_register_first_name"
            class="input_container"
            @click="clear_field('first_name')"/>
      </div>
      <div
          class="required_field_error"
          v-if="registration_error.hasOwnProperty('errors') && registration_error.errors.hasOwnProperty('first_name')"
      >{{ registration_error.errors.first_name[ 0 ] }}
      </div>

      <div class="container_column">
        <label for="input_register_last_name"
               class="input_container">Last name:</label>
        <input
            v-model="reg_user.last_name"
            type="text"
            id="input_register_last_name"
            class="input_container"
            @click="clear_field('last_name')">
        <div
            class="required_field_error"
            v-if="registration_error.hasOwnProperty('errors') && registration_error.errors.hasOwnProperty('last_name')"
        >{{ registration_error.errors.last_name[ 0 ] }}
        </div>
      </div>

      <div class="container_column">
        <label for="input_register_email"
               class="input_container">Email address:</label>
        <input
            v-model="reg_user.email"
            type="email"
            id="input_register_email"
            class="input_container"
            @click="clear_field('email')">
        <div
            class="required_field_error"
            v-if="registration_error.hasOwnProperty('errors') && registration_error.errors.hasOwnProperty('email')"
        >{{ registration_error.errors.email[ 0 ] }}
        </div>
      </div>

      <div class="container_column">
        <label for="input_register_password"
               class="input_container">Password:</label>
        <input
            v-model="reg_user.password"
            type="password"
            id="input_register_password"
            class="input_container"
            @click="clear_field('password')">
        <div
            class="required_field_error"
            v-if="registration_error.hasOwnProperty('errors') && registration_error.errors.hasOwnProperty('password')"
        >{{ registration_error.errors.password[ 0 ] }}
        </div>
      </div>

      <div class="container_column">
        <label for="input_register_password_confirmation"
               class="input_container">Re-type password:</label>
        <input
            v-model="reg_user.password_confirmation"
            type="password"
            id="input_register_password_confirmation"
            class="input_container"
            @click="clear_field('password_confirmation')">
        <div
            class="required_field_error"
            v-if="registration_error.hasOwnProperty('errors') && registration_error.errors.hasOwnProperty('password_confirmation')"
        >{{ registration_error.errors.password_confirmation[ 0 ] }}
        </div>
      </div>

      <!--
                  <button @click.prevent="registerNewUser" v-bind:disabled="!isFormValid">Register</button>
      -->
      <button @click.prevent="registerNewUser">Register</button>

    </form>
  </div>
</template>

<style type=text/css
       src="./Register.css"
       scoped></style>
<script src="./Register.js"></script>

