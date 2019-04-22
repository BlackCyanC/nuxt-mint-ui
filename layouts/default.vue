<template>
	<div id="default-container">
		<Head/>
		<nuxt/>
		<Tabbar/>
	</div>
</template>
<script>
import Head from '~/components/Head.vue'
import Tabbar from '~/components/Tabbar.vue'
import store from '~/store'
export default {
	components: {
		Head,
		Tabbar,
	},
	store,
}
</script>
<style lang="scss" scoped>
#default-container {
	position: relative;
	width: 100%;
	height: 100%;
	padding: 40px 0;
}
</style>
