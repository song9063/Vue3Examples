<template>
    <div>
        <button-slot>
            Hello
            <template v-slot:footer>Footer!!</template>
            <template v-slot:data="dataProps">{{dataProps.item}}</template>
        </button-slot>
    </div>
</template>

<script>
    import ButtonSlot from '../components/Slot.vue';
    export default {
        name: '',
        components: {
            'button-slot': ButtonSlot,
        },
        data(){
            return {
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