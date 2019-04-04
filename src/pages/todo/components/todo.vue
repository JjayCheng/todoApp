<template>
  <div class="todo-wrapper">
    <v-input @add="add"></v-input>
    <tab :todoList="todoList" @changed="changeTab" @clear="removeAll"/>
    
    <transition-group name="list-complete" tag="div" class="item-wrapper">
      <item 
        v-for="todo in showTodoList" :key="todo.id"
        :todo="todo"
        @remove="removeOne"
      />
    </transition-group>
   
  </div>
</template>

<script>
import item from './item.vue'
import tab from './tab.vue'
import input from './input.vue'
var id = 0;
export default {
  data() {
    return {
      todoList: [
        {
          id: 0,
          content: 'sdasdasdasd',
          completed: false
        }
      ],
      tab: 'All'
    }
  },
  methods: {
    changeTab(tab) {
      this.tab = tab;
    },
    removeAll() {
      this.todoList = [];
    },
    removeOne(todo) {
      this.todoList.splice(this.todoList.findIndex(item => item.id === todo.id), 1);
    },
    add(content) {
      id ++;
      const todo = {
        id: id,
        content: content,
        completed: false
      }
      content && this.todoList.unshift(todo);
    }
  },
  computed: {
    showTodoList() {
      return this.todoList.filter(todo => {
        const tab = todo.computed ? 'Computed' : 'Active';
        if(this.tab === 'All') {
          return true
        } else if(this.tab === tab) {
           return true
        }
      });
    }
  },
  components: {
    tab,
    item,
    'v-input':input
  }
}
</script>


<style lang="stylus" scoped>
.todo-wrapper
  width 700px
  background-color #fff
  margin auto
  border-radius 5px
  .item-wrapper
    height 300px
    overflow-y scroll
    &::-webkit-scrollbar
      display: none;
</style>
