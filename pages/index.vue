<template>
  <div class="container">
    <van-checkbox v-model="checked">复选框</van-checkbox>
    index
  </div>
</template>

<script>
  import Logo from '~/components/Logo.vue'

  export default {
    components: {
      Logo,
    },
    asyncData({ app }) {
      let login = app.$reqConfigs.login
      let data = { userId: 1, password: 123e13123 }
      return {
        indexHead: app.$heads.index(),
      }
    },
    fetch({ app }) {
    },
    // head 函数形式访问 this.data
    head() {
      return this.indexHead
    },
    data() {
      return {
        checked: true
      };
    },
    mounted() {
      console.log(this.$reqConfigs.login({ userId: 1, password: 123e13123 }))
    },
  }
</script>

<style>
</style> 
