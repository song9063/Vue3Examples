<template>
    <button type="button">
        <slot></slot>
        <slot name="footer">DefaultName</slot>
        <slot name="data" :item="item"></slot>
    </button>
</template>

<script>
    export default {
        name: '',
        components: {},
        data(){
            return {
                item: 'HelloItem!'
            };
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        methods: {}
    }
</script>
<style scoped>
</style>