import { messages } from "@/services/httpService";
import navbar from "../../components/NavBar";

export default {
    data() {
        return {
            components: {navbar},
            url: "https://twitterclone.tk/api/messages",
            success: false,
            messages_error: {},
            message_data: [],
        }
    },

    methods: {
        getMessages: function() {
            messages().then((response) => {
                this.message_data = response.data;
                this.message_data.reverse();
                console.log(this.message_data);
            }).catch(error => {
                this.messages_error = error.response.data ? error.response.data : "";
                console.log(this.messages_error);
            });
        }
    },
};
