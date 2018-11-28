<template>
    <div>
      <button @click="login">登录</button>
    </div>
</template>

<script>
  import cookie from 'js-cookie';
  export default {
    name: "index",
    methods: {
      login() {
        cookie.set('login', true);
        console.log(this.$router.push)
        this.$router.push({ path: '/user' });
      }
    }
  }
</script>

<style scoped>

</style>
