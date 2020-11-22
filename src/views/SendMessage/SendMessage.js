import { sendNewMessage } from "@/services/httpService";
import navbar from "../../components/NavBar.vue";

export default {
    data() {
        return {
            components: {navbar},
            message_error: {},
            headers: {},
            newMessage: '',
        }
    },

    methods: {
        sendNewMessage: function() {

            sendNewMessage().then(() => {

            }).catch(() => {

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
