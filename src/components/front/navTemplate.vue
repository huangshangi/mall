<template>
  <div>
    <el-row>
      <el-col :span="24"  v-if="headerShow">
        <el-menu mode="horizontal" background-color="#0191d8" text-color="#ffffff">
          <el-menu-item></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="24" v-else>
        <el-menu mode="horizontal" background-color="#0191d8" text-color="#ffffff" @select="menuSelect">
          <template v-for="(item,index) in options" :key="item">
            <el-menu-item v-if="item.children === undefined" :index="String(index)">{{item.title}}</el-menu-item>
            <el-submenu v-else>
              <template #title>{{item.title}}</template>
              <template v-for="(itemChild,indexChild) in item.children" :key="indexChild">
                <el-menu-item :index="index-indexChild">{{itemChild.title}}</el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
<!--      <el-col :span="3"  v-if="!headerShow">-->
<!--        <el-menu mode="horizontal" background-color="#0191d8" text-color="#ffffff"><el-menu-item></el-menu-item></el-menu>-->
<!--      </el-col>-->
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'navTemplate',
  props: {
    headerShow: Boolean,
    options: Array
  },
  methods: {
    menuSelect (index) {
      this.$emit('menuSelect', index)
    }
  }
}
</script>

<style scoped>
</style>
