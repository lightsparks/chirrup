export default {
    data() {
        return {}
    },

    methods: {
        logOut: function() {
            localStorage.removeItem('token');
            this.$toast.open({
                message: 'User logged out',
                type: 'default'
            });
            setTimeout(() => {
                this.$router.push('/');
            }, 1000);
        }
    },
};