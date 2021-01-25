<template>
  <div class="allDiv border">
    <el-menu
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
        <el-menu-item index="2-1">我的订单</el-menu-item>
        <el-menu-item index="2-2">我的评价</el-menu-item>
        <el-menu-item index="2-3">我的发票</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title>
          <i class="el-icon-document"></i>
          <span>我的关注</span>
        </template>
        <el-menu-item index="3-1">我的收藏</el-menu-item>
        <el-menu-item index="3-2">我的足迹</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template #title>
          <i class="el-icon-document"></i>
          <span>保障服务</span>
        </template>
        <el-menu-item index="4-1">我的退款</el-menu-item>
        <el-menu-item index="4-2">我的举报</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template #title>
          <i class="el-icon-document"></i>
          <span>我有疑问</span>
        </template>
        <el-menu-item index="5-1">帮助中心</el-menu-item>
        <el-menu-item index="5-2">联系客服</el-menu-item>
        <el-menu-item index="5-2">我的反馈</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'BuyerBackNav'
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
