<template>
    <div class="login_user">

        <form class="container_column">

            <div class="container_column">
                <label for="input_login_user_name" class="input_container">First name:</label>
                <input type="text" id="input_login_user_name" class="input_container">
            </div>

            <div class="container_column">
                <label for="input_login_password" class="input_container">Password:</label>
                <input type="text" id="input_login_password" class="input_container">
            </div>

            <button>Log in</button>

        </form>

    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
