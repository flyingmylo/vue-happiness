import Vue from 'vue'

const EventHub = new Vue({
    data () {
        return {
        
        }
    },
    beforeCreate () {

        const self  = this;
    },
    created (){
        // this.$on('getSinger', (singers) => {
        //     console.info(singers,'hub中注册||监听事件')
        // })
    },
    mounted () {

    },
    methods: {
        getSinger () {

        }
    }

})

export default EventHub