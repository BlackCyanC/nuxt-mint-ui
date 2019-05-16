<template>
  <div id="error-container">
    <div class="img-box">
      <div v-if="statusCode == 404" class="box_404">
        <h4>抱歉，您访问的页面找不到了</h4>
      </div>
      <div v-else class="box_500">
        <h4>系统异常</h4>
        <p>系统异常，请稍后再试</p>
      </div>
      <div class="backToIndex">
        <nuxt-link to="/">返回首页</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {},
  components: {},
  head() {
    return {
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        },
      ],
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
  },
}
</script>

<style lang="scss" scope></style>
