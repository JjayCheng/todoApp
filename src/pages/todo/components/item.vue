<template>
  <div class="todo-item-warpper" :class="{'completed': todo.completed}">
    <p class="content" @click="todo.completed = !todo.completed">
      <span>{{todo.content}}</span>
      <i class="remove-btn" @click="$emit('remove', todo)"></i>
    </p>
  </div>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style lang="stylus" scoped>
.completed
  color #ccc
  text-decoration line-through
.todo-item-warpper
  cursor pointer
  padding 0 20px
  transition: all .5s;
  .content
    margin 0;
    font-size 20px
    padding 20px 0
    border-bottom 2px solid #eee
    .remove-btn
      display none
      float right
      color #ccc
      height 29px
      padding 0px 10px
      &::after
        content ''
        display block
        width 20px
        margin-top 15px
        border-top 2px solid #aaa
    &:hover
      .remove-btn
        display block
  &:last-child
    .content
      border-bottom none
</style>
