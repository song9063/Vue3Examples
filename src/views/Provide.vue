<template>
    <inject-view></inject-view><br />
    <input type="text" v-model="name" />
</template>

<script>
    import Inject from './Inject.vue';
    import * as Vue from 'vue';
    export default {
        name: '',
        components: {
            'inject-view': Inject
        },
        data(){
            return {
                name: '',
            };
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        methods: {},
        provide() {
            return {
                Linux: Vue.computed(() => this.name),
            };
        }
    }
</script>
<style scoped>
</style>