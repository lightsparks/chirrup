import { sendNewMessage } from "@/services/httpService";
import navbar from "../../components/NavBar.vue";

export default {
    data() {
        return {
            components: {navbar},
            url: "https://twitterclone.tk/api/messages",
            message: {
                message: ''
            },
            success: false,
            message_error: {},
        }
    },

    methods: {
        sendMessage: function () {
            sendNewMessage(this.message).then((response) => {
                console.log(response);
                this.$toast.open({
                    message: "Message sent!",
                    type: "success",
                    position: "bottom",
                    duration: 1500
                });
                setTimeout(() => {
                this.$router.push('Home');
            }, 1000);
            }).catch(error => {
                this.message_error = error.response.data ? error.response.data : "";
                console.log(this.message_error);
                this.$toast.open({
                    message: "Message failed",
                    type: "warning",
                    position: "bottom",
                    duration: 1500
                });
            });
        },

        logOut: function() {
            localStorage.removeItem('token');
            this.$toast.open({
                message: 'User logged out',
                type: 'default',
                position: 'bottom'
            });
            setTimeout(() => {
                this.$router.push('/');
            }, 1000);
        }
    },
};
