<template>
	<mt-tabbar v-model="selected" id="tabbar-container">
		<nuxt-link to="/" class="mint-tab-item">
			<font-awesome-icon :icon="['fas', 'home']" class="home" style="font-size: .14rem;"></font-awesome-icon>
		</nuxt-link>
		<nuxt-link id="分类" to="/details"  class="mint-tab-item">分类</nuxt-link>
		<nuxt-link id="订单" to="/"  class="mint-tab-item">发现</nuxt-link>
		<nuxt-link id="我的" to="/center"  class="mint-tab-item">我的</nuxt-link>
	</mt-tabbar>
</template>

<script>
export default {
	name: "Tabbar",
	data() {
		return {
			selected: "外卖"
		};
	}
};
</script>

<style scoped lang="less">
#tabbar-container {
	min-height: 55px;
	overflow: hidden;
	.home {
	}
}
</style>