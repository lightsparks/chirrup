export default {
    data() {
        return {};
    },

    methods: {
        cancelLogOut: function() {
            this.$router.push('Home');
        },
        logOut: function () {
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
    }
};

