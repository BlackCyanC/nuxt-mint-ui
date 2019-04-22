<template>
	<mt-header title="Header" id="header-container">
		<router-link to="/" slot="left"></router-link>
		<mt-button icon="more" slot="right"></mt-button>
	</mt-header>
</template>

<script>
export default {
	name: "Head",
	data() {
		return {};
	}
};
</script>

<style scoped lang="scss">
#header-container {
	margin-top: -40px;
}
</style>