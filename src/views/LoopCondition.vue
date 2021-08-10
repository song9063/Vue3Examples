<template>
    <div>
        <h1>v-for</h1>
        <ul>
            <li :key="i" v-for="(user,i) in users">{{user.name}}</li>
        </ul>
    </div>
    <div>
        <h1>v-if</h1>
        <h2 v-if="osType=='Linux'">Linux</h2>
        <h2 v-else-if="osType=='OSX'">OSX</h2>
        <h2 v-else>Debian</h2>
    </div>
    <div>
        <h1>v-show</h1>
        <span v-show="showText">Hello!</span><br />
        <label><input type="checkbox" v-model="showText">Show!!</label>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data(){
            return {
                users: [
                    {
                        name: 'Song'
                    },
                    {
                        name: 'Bolt'
                    }
                ],
                osType: 'Linux',
                showText: false,
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