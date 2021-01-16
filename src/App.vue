<template>
  <div id="nav">
<!--    <router-link to="/">Home</router-link> |-->
<!--    <router-link to="/title">About</router-link>-->
    <Title/>
  </div>
<!--  <router-view/>-->
</template>

<style lang="stylus">
@import "assets/css/common.css"
</style>
<script>
import Title from '@/components/title'
export default {
  components: { Title }
}
</script>
