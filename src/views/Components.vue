<template>
    <div>
        <page-title :title="title" ref="page_title" @page-title-mounted="pageTitleMounted" />
        <br />
        <button type="button" @click="parentButtonClicked">부모버튼</button>
        <br /><br />
        <span>{{textFromChild}}</span>
    </div>
</template>

<script>
    import PageTitle from '../components/PageTitle';

    export default {
        name: '',
        components: {
            'page-title': PageTitle
        },
        data(){
            return {
                title: '전달된 제목이다!'
            };
        },
        setup() {},
        created() {},
        mounted() {},
        unmounted() {},
        methods: {
            parentButtonClicked(){
                this.$refs.page_title.$refs.btn.click();
                this.$refs.page_title.setCallFrom('부모!!');
            },
            pageTitleMounted(msg){
                console.log(msg);
            }
        },
        computed: {
            textFromChild(){
                return '검색어:';// + this.$refs.page_title.searchWord; // 오류나서 안됨
            }
        }
    }
</script>
<style scoped>
</style>