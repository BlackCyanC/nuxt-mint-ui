<template>
  <div class="container">
  </div>
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
