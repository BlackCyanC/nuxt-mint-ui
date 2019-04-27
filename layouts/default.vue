<template>
	<div id="default-container">
		<nuxt/>
	</div>
</template>
<script>
import store from '~/store'
export default {
	components: {},
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
