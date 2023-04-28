<template>
  <div @click="change()">
    <NuxtLogo class="logo"/>
    <h1>秋名山の小马达</h1>
  </div>
</template>

<script>
export default {
  layout:'index',
  methods:{
    change(){
      this.$router.push('/mainPage/FP')
    }
  }
}
</script>
<style lang='scss' scoped>
.logo{
  margin-left: 80vh;
  margin-top: 30vh;
}
h1{
  margin-left: 73vh;
  margin-top: 5vh;
  font-size: 3em;
  font-weight: bold;
  font-family: 'Times New Roman', Times, serif;
}
</style>
