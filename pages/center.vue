<template>
	<div id="center">
    center
  </div>
</template>

<script>
export default {
	name: "",
	data() {
		return {};
	},
	mounted() {
		this.$nextTick(() => {
			this.$nuxt.$loading.start();
			setTimeout(() => this.$nuxt.$loading.finish(), 5000);
		});
	}
};
</script>

<style scoped lang="less">
</style>