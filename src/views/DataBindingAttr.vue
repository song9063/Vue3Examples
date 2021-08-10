<template>
    <div>
        <h1>Image src</h1>
        <img v-bind:src="imgSrc" />
    </div>
    <div>
        <h1>Disabled</h1>
        ID: <input type="text" v-model="loginId" />
        <button type="button" v-bind:disabled="loginId==''">Login</button>
    </div>
    <div>
        <h1>Class</h1>
        <label><input type="checkbox" v-model="isActive">Active</label>
        <label><input type="checkbox" v-model="hasError">Error</label>
        <div class="container" v-bind:class="{
            'active': isActive, 'text-red': hasError
        }">Class binding</div>
    </div>
    <div>
        <h1>Class2</h1>
        <div class="container" v-bind:class="[activeClass, errorClass]">Class binding</div>
    </div>
    <div>
        <h1>Inline style</h1>
        <div class="container" v-bind:style="myStyle">Inline style</div>
        <div class="container" v-bind:style="[myStyle, yourStyle]">Inline style</div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data(){
            return {
                imgSrc: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',

                loginId: '',

                isActive: false,
                hasError: false,

                activeClass: 'active',
                errorClass: 'text-red',

                myStyle: {
                    color: 'blue',
                    "font-weight": 'bold',
                },
                yourStyle: 'background-color: gray;',
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
    .container{
        width: 100%;
        height:30px;
    }
    .active {
        background-color: green;
        font-weight: bold;
    }
    .text-red{
        color:red;
    }
</style>