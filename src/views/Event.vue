<template>
    <div>
        <h1>v-on</h1>
        <span>{{num}}</span>
        <br />
        <button type="button" v-on:click="addNumber(), log()">Add</button>
        <br />
        <br />
        <button type="button" @click="setNumber(0);">Reset</button>
    </div>

    <div>
        <h1>Change</h1>
        <span>{{myPhone}}</span><br />
        <select v-model="phone" @change="onPhoneChanged">
            <option value="iPhone">iPhone</option>
            <option value="iiPhone">iiPhone</option>
            <option value="xiPhone">xiPhone</option>
        </select>
    </div>

    <div>
        <h1>Key</h1>
        <span>Enter: {{keyVal}}</span><br />
        <input type="text" @keyup.enter="enterPressed" @keyup.esc="esc" />
        <!--
            .tab .delete .esc .space
            .up .down .left .right
            -->
    </div>

    <div>
        <h1>Click + Alt</h1>
        <div style="width:100px; height:100px; background-color:blue; color:white; margin:0px auto;"
            @click.alt="altClick">
            Click me!! {{alt}}
        </div>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data(){
            return {
                num: 0,

                phone: 'iPhone',
                myPhone: ';(',

                keyVal: '',
                alt: '',
            };
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        methods: {
            addNumber(){
                this.num += 1;
            },
            setNumber(num){
                this.num = num;
            },
            log(){
                console.log(this.num);
            },

            onPhoneChanged(){
                this.myPhone = this.phone;
            },

            enterPressed(){
                this.keyVal = 'Enter!!';
                this.addNumber();
            },
            esc(){
                this.keyVal = 'ESC!!';
                this.setNumber(0);
            },
            altClick(){
                this.alt = 'Alt pressed!!';
            },
        }
    }
</script>
<style scoped>
</style>