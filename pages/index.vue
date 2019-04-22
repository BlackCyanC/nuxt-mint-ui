<template>
	<div class="container">index</div>
</template>

<script>
import Logo from "~/components/Logo.vue";
export default {
	components: {
		Logo
	},
	asyncData({ app }) {
		let login = app.$reqConfig.login;
		let data = { userId: 1, password: 123e13123 };
		return {
			indexHead: app.$headConfig.index()
		};
	},
	fetch({ app }) {},
	// head 函数形式访问 this.data
	head() {
		return this.indexHead;
	},
	mounted() {
		console.log(this.$reqConfig.login({ userId: 1, password: 123e13123 }));
	}
};
</script>

<style>
</style> 
