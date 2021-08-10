<template>
    <div>
        <h1>Today: {{today}}</h1>
    </div>
    <div>
        <h1>Time: {{strTime}}</h1>
        <button type="button" @click="setHour">Hour</button>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data(){
            return {
                year: '2021',
                month: '08',

                strH: '00',
                strM: '02',
                strTime: ''
            };
        },
        computed: {
            today(){
                return this.year + '-' + this.month;
            }
        },
        watch: {
            strH(){
                this.strTime = this.strH + ':' + this.strM;
            },
            strM(){
                this.strTime = this.strH + ':' + this.strM;
            }
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        methods: {
            setHour(){
                this.strH = '13';
            },
        }
    }
</script>
<style scoped>
</style>