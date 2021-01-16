<template>
  <Title></Title>
  <Search></Search>
  <GoodCascader></GoodCascader>
</template>

<script>
import Title from '../components/title'
import Search from '@/components/search'
import GoodCascader from '@/components/goodsCascader'
export default {
  name: 'index',
  components: {
    GoodCascader,
    Search,
    Title
  }
}
</script>

<style scoped>

</style>
