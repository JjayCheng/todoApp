<template>
  <div class="tab-wrapper">
    <div 
      v-for="item in map" :key="item" 
      @click="change(item)"
      :class="['item', item === selected ? 'selected':'']"
    >
      <span>{{item}}</span>
      <span class="num">{{todoListNum[item]}}</span>
    </div>
    <div class="clear" @click="clear">clear</div>
  </div>
</template>

<script>
export default {
  props: ['todoList'],
  data() {
    return {
      selected: 'All',
      map: ['All', 'Active', 'Completed']
    }
  },
  methods: {
    change(item) {
      this.selected = item;
      this.$emit('changed', item);
    },
    clear() {
      this.$emit('clear');
    }
  },
  computed: {
    todoListNum() {
      const total = {
        All: 0,
        Active: 0,
        Completed: 0
      }
      this.todoList.forEach(todo => {
        todo.completed && total.Completed++;
        !todo.completed && total.Active++;
        total.All++;
      });
      return total
    }
  }
}
</script>

<style lang="stylus" scoped>
.tab-wrapper
  display flex
  padding 15px 20px
  .item
    margin-right 20px
    padding 10px 20px
    cursor pointer
    font-size 16px
    .num
      margin-left 5px
      font-size 10px
  .item.selected
    border-bottom 2px solid skyblue
  .clear
    margin-left auto
    padding 10px 20px
    color #666
    cursor pointer
</style>
