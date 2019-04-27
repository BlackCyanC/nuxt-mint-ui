<template>
	<div id="index-container">
		<van-checkbox v-model="checked">复选框</van-checkbox>index
	</div>
</template>

<script>
export default {
	components: {},
	asyncData({ app }) {
		let login = app.$reqConfigs.login
		let data = { userId: 1, password: 123e13123 }
		return {
			indexHead: app.$heads.index(),
		}
	},
	fetch({ app }) {},
	// head 函数形式访问 this.data
	head() {
		return this.indexHead
	},
	data() {
		return {
			checked: true,
		}
	},
	mounted() {
		console.log(this.$reqConfigs.login({ userId: 1, password: 123e13123 }))
	},
}
</script>

<style>
#index-container {
}
</style> 
