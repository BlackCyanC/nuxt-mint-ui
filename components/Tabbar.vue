<template>
	<mt-tabbar v-model="selected" id="tabbar-container">
		<mt-tab-item id="外卖">
      <font-awesome-icon :icon="['fas', 'home']"></font-awesome-icon>
		</mt-tab-item>
		<mt-tab-item id="订单">
			<img slot="icon" src="">
			订单
		</mt-tab-item>
		<mt-tab-item id="发现">
			<img slot="icon" src="">
			发现
		</mt-tab-item>
		<mt-tab-item id="我的">
			<img slot="icon" src="">
			我的
		</mt-tab-item>
	</mt-tabbar>
</template>

<script>
export default {
	name: "Tabbar",
	data() {
		return {
      selected: '外卖'
    };
	}
};
</script>

<style scoped lang="less">
#tabbar-container {
}
</style>