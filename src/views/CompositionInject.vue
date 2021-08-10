<template>
    <div>{{linux}}</div>
    <h1>{{piano.name}} - {{piano.brand}}</h1>
</template>

<script>
    import {inject} from 'vue';
    export default {
        name: '',
        setup(){
            const linux = inject('Linux', 'Mac');
            const piano = inject('Piano');
            console.log(linux, piano);

            return {
                linux, piano
            }
        }
    }
</script>
<style scoped>
</style>