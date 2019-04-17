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
		// app.$axios(login(data));
	},
	fetch({ app }) {
		// return app.$axios.get('schools').then(res => {
		//   console.log(res);
		// })
	},
	mounted() {
		console.log(this.$reqConfig.login({ userId: 1, password: 123e13123 }));
	}
};
</script>

<style>
</style> 
