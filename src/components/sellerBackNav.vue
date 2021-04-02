<template>
  <div class="allDiv border">
    <el-menu
       @select="navSelect"
       default-active="2"
       @open="handleOpen"
       @close="handleClose">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <template #title>
          首页
        </template>
      </el-menu-item>
      <el-submenu index="2">
        <template #title>
          <i class="el-icon-menu"></i>
          <span>交易管理</span>
        </template>
        <el-menu-item index="2-1">订单管理</el-menu-item>
        <el-menu-item index="2-2">评价管理</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title>
          <i class="el-icon-document"></i>
          <span>宝贝管理</span>
        </template>
        <el-menu-item index="3-1">宝贝管理</el-menu-item>
        <el-menu-item index="3-2">发布宝贝</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template #title>
          <i class="el-icon-document"></i>
          <span>客户服务</span>
        </template>
        <el-menu-item index="4-1">退款管理</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template #title>
          <i class="el-icon-document"></i>
          <span>资产管理</span>
        </template>
        <el-menu-item index="5-1">我的账户</el-menu-item>
        <el-menu-item index="5-2">交易记录</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'sellerBackNav',
  methods: {
    navSelect (index) {
      switch (index) {
        case '1':
          this.$router.push('/sellerBack/index')
          break
        case '2-1':
          this.$router.push('/sellerBack/orders')
          break
        case '2-2':
          this.$router.push('/sellerBack/evaluates')
          break
        case '3-1':
          this.$router.push('/sellerBack/services')
          break
        case '3-2':
          this.$router.push('/sellerBack/publishService')
          break
        case '4-1':
          this.$router.push('/sellerBack/refunds')
          break
        case '5-1':
          this.$router.push('/sellerBack/myAccount')
          break
        case '5-2':
          this.$router.push('/sellerBack/accountHistory')
          break
      }
    }
  }
}
</script>

<style scoped>
.allDiv{
  text-align: left;
}
.border{
  border: 1px solid red;
}
</style>
