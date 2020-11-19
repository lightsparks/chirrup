import axios from "axios";

export default {
    data() {
        return {
            url: 'https://twitterclone.tk/api/auth/login',
            userAuth: {
                email: '',
                password: '',
            },
            success: false,
            login_error: {}
        }
    },

    computed: {
        emailError: function () {
            if (this.userAuth.email.length === 0) {
                return 'Email is required';
            }
            if (!this.userAuth.email.includes('@')) {
                return 'Email must contain "@"';
            }
            return null;
        },
        passwordError: function () {
            if (this.userAuth.password.length === 0) {
                return 'Password is required';
            }
            return null;
        },
        isFormValid: function () {
            return this.emailError == null && this.passwordError == null;
        }
    },

    methods: {
        loginUser: function () {
            axios.post('https://twitterclone.tk/api/auth/login', this.userAuth)
                .then((response) => {
                    console.log(response);
                    localStorage.setItem('token', JSON.stringify(response.data));
                    this.success = true;
                    this.$toast.open({
                        message: 'User login succesful!',
                        type: 'success',
                        position: 'bottom'
                    });
                    setTimeout(() => {
                        this.$router.push('Home');
                    }, 1000);

                })
                .catch(error => {
                    this.login_error = error.response ? error.response.data : '';
                    console.log(this.login_error);
                    this.$toast.open({
                        message: 'User login failed',
                        type: 'error',
                        position: 'bottom'
                    })
                })
        },
    },
};

