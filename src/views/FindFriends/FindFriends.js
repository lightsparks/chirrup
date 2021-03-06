import navbar from "../../components/NavBar";
import {connectfriend, findfriend, deletefriend} from "../../services/httpService";

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
            message: 'No users to show.'
        }
    },

    methods: {
        findFriend: function () {
            this.friendslist_data = [],
            findfriend(this.search_for).then((response) => {
                console.log(response);
                this.friendslist_data = response.data;
                this.success = true;
            }).catch(error => {
                this.friendslist_error = error.response ? error.response.data : "";
                console.log(this.friendslist_error);
            });
        },
        connectFriend: function (itemID) {
            connectfriend({user_id: itemID}).then((response) => {
                console.log(response);
            }).catch(error => {
                this.connection_error = error.response ? error.response.data : "";
                console.log(this.connection_error);
            });
        },
        deleteFriend: function (itemID) {
            deletefriend({user_id: itemID}).then((response) => {
                console.log(response);
            }).catch(error => {
                this.connection_error = error.response ? error.response.data : "";
                console.log(this.connection_error);
            });
        }
    }
};
