import {messages} from "@/services/httpService";
import navbar from "../../components/NavBar";
import { format } from 'timeago.js';

export default {
    data() {
        return {
            components: {navbar},
            url: "https://twitterclone.tk/api/messages",
            success: false,
            loading: true,
            messages_error: {},
            message_data: () => [],
        }
    },

    mounted: function() {
        this.getMessages();
    },

    methods: {
        getMessages: function () {
            messages().then((response) => {
                this.message_data = response.data.map(item => Object.assign(item, {created_at: format(item.created_at)}));
                this.loading = false;
/*                this.message_data.reverse();*/
            }).catch(error => {
                this.loading = false;
                this.messages_error = error.response.data ? error.response.data : "";
                console.log(this.messages_error);
            });
        }
    },
};
