import {messages} from "@/services/httpService";

export default {
    data() {
        return {
            message_error: {},
            headers: {},
        }
    },

/*    mounted: {
        getMessage: () => {
            axios.post('http://twitterclone-dev.tk/api/messages')
                .then((response) => {
                    console.log(response);

                    })

                .catch(error => {
                    this.message_error = error.response ? error.response.data : '';
                    console.log(this.message_error);
                });
        },
    },*/

    methods: {
        getMessage: function() {

            messages().then(() => {

            }).catch(() => {

            });

            /*axios.post('http://twitterclone-dev.tk/api/messages')
                .then((response) => {
                    console.log(response);

                })

                .catch(error => {
                    this.message_error = error.response ? error.response.data : '';
                    console.log(this.message_error);
                });*/
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
