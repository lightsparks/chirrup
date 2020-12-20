import navbar from "../../components/NavBar";
import {connectfriend, findfriend} from "../../services/httpService";

export default {
    data() {
        return {
            search_for: {
                search_string: ''
            },
            components: {navbar},
            success: false,
            friendslist_error: {},
            friendslist_data: () => [],
            connection_error: null,
            user_id: null
        }
    },

    methods: {
        findFriend: function () {
            findfriend(this.search_for).then((response) => {
                console.log(response);
                this.friendslist_data = response.data;
                this.success = true;
            }).catch(error => {
                this.friendslist_error = error.response ? error.response.data : "";
                console.log(this.friendslist_error);
            });
        },
        connectFriend: function () {
            connectfriend(this.user_id).then((response) => {
                console.log(response);
            }).catch(error => {
                this.connection_error = error.response ? error.response.data : "";
                console.log(this.connection_error);
            });
        }
    }
};
