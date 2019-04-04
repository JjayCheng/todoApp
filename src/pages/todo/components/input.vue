<template>
  <div class="v-input">
    <input type="text" placeholder="input some thing.." @keyup.enter="adda"/>
  </div>
</template>
<script>
export default {
  methods: {
    adda(e) {
      this.$emit('add', e.srcElement.value);
      e.srcElement.value = '';
    }
  }
}
</script>
<style scoped lang="stylus">
.v-input
  padding 10px 40px
  input
    display block
    width 100%
    height 42px
    text-align center
    font-size 20px
    border none
    color #888
    outline none
    border-bottom 2px solid #ccc
    transition color .5s
    transition border .5s
  input::-webkit-input-placeholder
    color #aaa
  input:focus
    color #666
    border-bottom 2px solid #999
</style>