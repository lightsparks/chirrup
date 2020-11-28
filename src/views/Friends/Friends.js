import navbar from "../../components/NavBar";
import {getFriends} from "../../services/httpService";

export default {
    data() {
        return {
            components: {navbar},
            url: "http://twitterclone-dev.tk/api/friends",
            success: false,
            friends_error: {},
            friends_data: () => [],
        }
    },

/*    mounted: function() {

    },*/

    methods: {
        getFriendsList: function () {
            getFriends().then((response) => {
                console.log(response.data)
                this.friends_data = response.data;
/*                this.friends_data.reverse();*/
            }).catch(error => {
                this.friends_error = error.response.data ? error.response.data : "";
                console.log(this.friends_error);
            });
        }
    },
};
