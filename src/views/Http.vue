<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Freight fee</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in products">
                    <td>{{product.name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.category}}</td>
                    <td>{{product.freightfee}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: '',
        components: {},
        data(){
            return {
                products: []
            };
        },
        setup() {},
        created() {
            this.updateList();
        },
        mounted() {},
        unmounted() {},
        methods: {
            async updateList(){
                this.products = await this.$api('https://a3ee3356-6523-4a71-b136-8e4b19da7f00.mock.pstmn.io/list',
                    'get');
            }
        }
    }
</script>
<style scoped>
</style>