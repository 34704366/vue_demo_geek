<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>
      <input type="text" v-model="info">
      <button @click="pushButtonClick">添加</button>
      <button @click="deleteButtonClick">删除</button>
      <button @click="resetButtonClick">重置</button>
    </div>
    <ul>
      <ToDoItem v-for="item,index in todoList" :key="index" class="todo-item">

        <!-- 命名插槽的使用语法 todo-item为插槽的name, 等号后面跟着是子组件传递出数据供父组件使用 -->
        <template v-slot:todo-item="itemProps">
          {{itemProps}}
          <!-- 用对象形式写css -->
          <span :style="{marginLeft: '15px', color: itemProps.isChecked ? 'red' : 'blue'}">{{item}}</span>
        </template>
      </ToDoItem>
      
      <!-- 会自动把驼峰命名法注册成横线隔开命名 -->
      <!-- <to-do-item v-for="item,index in todoList" :key="index" :item="item"></to-do-item> -->

    </ul>
    <div>
      添加次数：{{pushCount}} {{$store.getters.doubleCount}}
    </div>
  </div>
</template>

<script>
import ToDoItem from './components/ToDoItem'


export default {
  name: 'App',
  components: {
    ToDoItem,
  },
  data() {
    return {
      todoList: ['hello'],
      info: ''
    }
  },
  computed: {
    pushCount () {
      return this.$store.state.pushCount;
    }
  },
  methods: {
    pushButtonClick() {
      // 如果this.info为空则不添加
      if (this.info) {
        // 将input框中的信息添加到todoList列表中
        this.todoList.push(this.info);
        // 添加完毕后重新置为空
        this.info = '';

        // 通过vuex状态管理来添加点击次数
        this.$store.commit('pushOnce');
      } else {
        alert('输入框不能为空');
      }
    },

    deleteButtonClick() {
      // this.todoList
      if (this.todoList.length != 0) {
        this.todoList.pop();
      } else {
        alert('不能再删除了');
      }
    },

    resetButtonClick() {
      // this.todoList || this.in
      if (this.todoList.length != 0 || this.info) {
        this.todoList = [];
        this.info = '';
      } else {
        alert('不能再重置了');
      }
    }
  }
}
</script>

<style>


</style>
