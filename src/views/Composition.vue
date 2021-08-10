<template>
    <div>
        <h2>Calculator</h2>
        <div>
            <input type="number" v-model.number="num1" />
            +
            <input type="number" v-model.number="num2" />
            =
            <span>{{result}}</span>
            <br />
            <h3 ref="h3">Hello</h3>
        </div>
    </div>
    <CompositionInject />
</template>

<script>
    import {addCal} from '../common/calc';
    import {onMounted, ref, provide} from 'vue';
    import CompositionInject from './CompositionInject.vue';
    export default {
        name: 'calculator',
        components: {
            CompositionInject
        },
        setup(){
            provide('Linux', 'Ubuntu');
            provide('Piano', {
                brand: 'Yamaha',
                name: 'MX88'
            });
            const h3 = ref(null);

            let {num1, num2, result} = addCal();
            onMounted(() => {
                console.log("mounted %o", h3.value);
            });
            return {
                num1, num2, result, h3
            }
        }
    }
</script>
<style scoped>
</style>