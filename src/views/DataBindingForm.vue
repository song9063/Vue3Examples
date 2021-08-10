<template>
    <div>
        <h1>Text</h1>
        <input type="text" v-model="valueModel" /><br />
        <span style="color:green;">{{valueModel}}</span>
    </div>
    <div>
        <h1>Number</h1>
        <input type="number" v-model.number="numberModel" /><br />
        <span style="color:green;">{{numberModel}}</span>
    </div>
    <div>
        <h1>Textarea</h1>
        <textarea v-model="message"></textarea><br />
        <p>{{message}}</p>
    </div>
    <div>
        <h1>Select</h1>
        <select v-model="city">
            <option value="02">Seoul</option>
            <option value="053">Daegu</option>
        </select><br />
        <span style="color:green;">{{city}}</span>
    </div>
    <div>
        <h1>Checkbox</h1>
        <label><input type="checkbox" v-model="checked1">{{checked1}}</label><br />
        <label><input type="checkbox" v-model="checked2" true-value="Yes" false-value="No">{{checked2}}</label><br />
        <br />
        <label><input type="checkbox" value="Korea" v-model="checked3">Korea</label>
        <label><input type="checkbox" value="USA" v-model="checked3">USA</label>
        <label><input type="checkbox" value="Germany" v-model="checked3">Germany</label>
        <br />
        <span>Checked Country: {{checked3}}</span>
    </div>
    <div>
        <h1>Radio</h1>
        <label><input type="radio" v-bind:value="radioVal1" v-model="picked">Linux</label>
        <label><input type="radio" v-bind:value="radioVal2" v-model="picked">AWS</label>
        <label><input type="radio" v-bind:value="radioVal3" v-model="picked">OSX</label>
        <br />
        <span style="color:green;">{{picked}}</span>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data(){
            return {
                valueModel: 'Busang Inc',
                numberModel: 1,
                message: '',
                city: '053',
                checked1: true,
                checked2: true,
                checked3: [],
                picked: '',
                radioVal1: 'Linux',
                radioVal2: 'AWS',
                radioVal3: 'OSX',
            };
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        methods: {}
    }
</script>
