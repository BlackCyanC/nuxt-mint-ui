<template>
  <div class="container">index</div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  asyncData({ app, route }) {
    let login = app.$reqConfigs.login
    let data = { userId: 1, password: 123e13123 }
    return {
      indexHead: app.$heads.static(route),
    }
  },
  fetch({ app }) {},
  // head 函数形式访问 this.data
  head() {
    return this.indexHead
  },
  mounted() {
    console.log(this.$reqConfigs.login({ userId: 1, password: 123e13123 }))
  },
}
</script>

<style></style>
