<template>
	<div class="todoApp">
		<vHeader></vHeader>
		<todo></todo>
		<vFooter></vFooter>
	</div>
</template>

<script>
import todo from './components/todo.vue';
import vHeader from './components/header.vue';
import vFooter from './components/footer/footer.jsx';

export default {
	data() {
		return {
		}
	},
	methods: {
	},
	components: {
		todo,
		vHeader,
		vFooter
	}
}
</script>

<style lang="stylus" scoped>
.todoApp
	width 100%
	height 100%
	background #666
</style>
