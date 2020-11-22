import { messages } from "@/services/httpService";
import navbar from "../../components/NavBar";

export default {
    data() {
        return {
            components: {navbar},
            message_error: {},
            headers: {},
            messages: {}
        }
    },

    /*mounted: {
        getMessage: function() {

            messages().then(() => {

            }).catch(() => {

            });
        },
    },*/

    methods: {
        getMessage: function() {

            messages().then(() => {

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
