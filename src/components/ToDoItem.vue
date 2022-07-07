<template>
    <li class="show-item">
        <input type="checkbox" v-model="isChecked">
        <slot name="todo-item" :isChecked="isChecked" :time="time"></slot>
    </li>
</template>

 
<script>
export default {
    props: ['item'],
    data() {
        return {
            isChecked: false,
            time: '2022/7/7 22:37:00'
        }
    },
}
</script>

<style scoped>
.show-item {
    /* color: blue; */
    font-size: 20px;
}
</style>