<template>
    <h2>{{title}}</h2>
    <span>{{message}}</span><br />
    <button type="button" @click="clicked()" ref="btn">Click!</button><br />
    <span>{{callFrom}}</span>
    <br />
    검색어: <input type="text" v-model="searchWord">
    {{searchWord}}
</template>

<script>
    export default {
        name: '',
        emits: ['page-title-mounted'],
        props: {
            title: {
                type: String,
                default: '제목'
            },
        },
        components: {},
        data(){
            return {
                message: 'Hello!',
                callFrom: '누가 이 함수를 호출했을까?',
                searchWord: '',
            };
        },
        setup() {},
        created() {},
        mounted() {
            this.$emit('page-title-mounted', this.message);
        },
        unmounted() {},
        methods: {
            clicked(){
                this.message = 'clicked!!';
            },
            setCallFrom(who){
                this.callFrom = who;
            }
        }
    }
</script>
<style scoped>
</style>