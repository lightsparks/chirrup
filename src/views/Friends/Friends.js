import navbar from "../../components/NavBar";
import {getfriends} from "../../services/httpService";

export default {
    data() {
        return {
            components: {navbar},
            success: false,
            friends_error: {},
            friends_data: () => [],
        }
    },

    mounted: function () {
        this.getFriends();
    },

    methods: {
        getFriends: function () {
            getfriends().then((response) => {
                console.log(response.data)
                this.friends_data = response.data;
                this.success = true;
            }).catch(error => {
                this.friends_error = error.response.data ? error.response.data : "";
                console.log(this.friends_error);
            });
        }
    },
};
