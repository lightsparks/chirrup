export default {
        name: "navbar",
        data() {
        return {
            routes: []
        }
    },
        mounted: function(){
            this.routes = this.$router.options.routes.filter(route => route.meta?.navigation);
        }
    }