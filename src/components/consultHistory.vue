<template>
  <div>
    <p class="title">协商历史</p>
    <template v-for="item in 10" :key="item">
      <consult-item/>
    </template>
  </div>
</template>

<script>
import ConsultItem from './consultItem'
export default {
  name: 'consultHistory',
  components: { ConsultItem }
}
</script>

<style scoped>
.title{
  text-align: left;
}
</style>
