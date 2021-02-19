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
        <el-menu-item index="2-1">已卖出的宝贝</el-menu-item>
        <el-menu-item index="2-2">评价管理</el-menu-item>
        <el-menu-item index="2-3">掌柜信用</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template #title>
          <i class="el-icon-document"></i>
          <span>宝贝管理</span>
        </template>
        <el-menu-item index="3-1">发布宝贝</el-menu-item>
        <el-menu-item index="3-2">出售中的宝贝</el-menu-item>
        <el-menu-item index="3-3">历史宝贝</el-menu-item>
        <el-menu-item index="3-4">仓库中的宝贝</el-menu-item>
        <el-menu-item index="3-5">我的产品库</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template #title>
          <i class="el-icon-document"></i>
          <span>店铺管理</span>
        </template>
        <el-menu-item index="4-1">店铺基本设置</el-menu-item>
        <el-menu-item index="4-2">宝贝分类管理</el-menu-item>
      </el-submenu>
      <el-submenu index="5">
        <template #title>
          <i class="el-icon-document"></i>
          <span>客户服务</span>
        </template>
        <el-menu-item index="5-1">退款管理</el-menu-item>
        <el-menu-item index="5-2">违规记录</el-menu-item>
        <el-menu-item index="5-3">投诉管理</el-menu-item>
        <el-menu-item index="5-4">申诉中心</el-menu-item>
      </el-submenu>
      <el-submenu index="6">
        <template #title>
          <i class="el-icon-document"></i>
          <span>资产管理</span>
        </template>
        <el-menu-item index="6-1">我的账户</el-menu-item>
        <el-menu-item index="6-2">收支明细</el-menu-item>
        <el-menu-item index="6-3">账户体现</el-menu-item>
        <el-menu-item index="6-4">冻结资金</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'sellerBackNav'
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
