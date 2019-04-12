<template>
  <section class="container">
    <mt-header title="标题过长会隐藏后面的内容啊哈哈哈哈">
  <router-link to="/" slot="left">
    <mt-button icon="back">返回</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  fetch({ app }) {
    // return app.$axios.get('/schools').then(res => {
    //   console.log(res);
    // })
  },
  mounted() {
    // console.log(this.$axios.get('s'));
  }
}
</script>

<style>

</style>
