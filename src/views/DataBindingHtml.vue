<template>
    <div>
        <div>{{htmlString}}</div>
        <div v-html="htmlString"></div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data(){
            return {
                htmlString: '<p style="color:red;">Red string</p>'
            };
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        methods: {}
    }
</script>
