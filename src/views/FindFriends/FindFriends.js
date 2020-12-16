import navbar from "../../components/NavBar";
import {findfriend} from "../../services/httpService";

export default {
    data() {
        return {
            search_for: {
                search_string: ''
            },
            components: {navbar},
            url: "http://twitterclone-dev.tk/api/users/find",
            success: false,
            friendslist_error: {},
            friendslist_data: () => [],
        }
    },

    /*    mounted: function() {

        },*/

    methods: {
        findUrFriend: function () {
            findfriend(this.search_for).then((response) => {
                console.log(response);
                this.friendslist_data = response.data;
                this.success = true;
            }).catch(error => {
                this.friendslist_error = error.response ? error.response.data : "";
                console.log(this.friendslist_error);
            });
        },
    }
};
