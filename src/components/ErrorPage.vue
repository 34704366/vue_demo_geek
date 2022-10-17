<template>
    <div class="error">
        <img src="https://img2.baidu.com/it/u=2545210976,4216576440&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=500" alt="页面错误">
        <div>路径{{errorMsg.path}}不存在，错误代码{{errorMsg.name}}</div>
    </div>
</template>

<script>
export default {
    props: [],
    computed: {
        errorMsg() {
            const {path, name} = this.$route;
            return {path, name}
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>

</style>
