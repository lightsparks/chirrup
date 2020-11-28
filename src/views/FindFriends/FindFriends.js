import navbar from "../../components/NavBar";
import {findfriend} from "../../services/httpService";

export default {
    data() {
        return {
            search_string: {
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
        findFriend: function () {
            findfriend(this.search_string).then((response) => {
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
