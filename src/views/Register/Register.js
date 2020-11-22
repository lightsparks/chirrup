import { register } from "@/services/httpService";

export default {
    data() {
        return {
            reg_user: {
                first_name: "",
                last_name: "",
                email: "",
                password: "",
                password_confirmation: ""
            },
            success: false,
            registration_error: {}
        };
    },

    computed: {
        emailError: function () {
            if ( this.reg_user.email.length === 0 ) {
                return "Email is required";
            }
            if ( !this.reg_user.email.includes("@") ) {
                return "Email must contain \"@\"";
            }
            return null;
        },
        passwordError: function () {
            if ( this.reg_user.password.length === 0 ) {
                return "Password is required";
            }
            else {
                if ( this.reg_user.password_confirmation.length === 0 ) {
                    return "Password confirmation is required";
                }
                return null;
            }
        },
        isFormValid: function () {
            return this.emailError == null && this.passwordError == null;
        }
    },

    methods: {
        registerNewUser: function () {
            register.then(response => {
                console.log(response);
                this.$toast.open({
                    message: "New user registration succesful",
                    type: "success",
                    position: "bottom",
                    duration: 1500
                });
                setTimeout(() => {
                    this.$router.push("Home");
                }, 1000);
            })
                    .catch(error => {
                        this.registration_error = error.response.data;
                        console.log(this.registration_error);
                    });
        },
        clear_field: function (field) {
            try {
                delete this.registration_error.errors[ field ];
            }
            catch ( e ) {
                // doet niks
            }
        }
    }
};
