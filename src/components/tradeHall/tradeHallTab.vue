<template>
  <div class="allDiv">
    <div class="tabs">
      <div class="item" :class="{ 'active':index === currentIndex }"
           v-for="(item,index) in tabs" :key="item" @click="tabClick(index)">
        {{item}}
      </div>
    </div>
    <div class="search-box" v-if="search">
      <el-input
         placeholder="请输入内容"
         prefix-icon="el-icon-search"
         v-model="input2">
        <template #append>
          <el-button>搜索</el-button>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeHallTab',
  props: {
    tabs: Array
  },
  methods: {
    tabClick (index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  }
}
</script>

<style scoped>
.allDiv{
  font-size: 14px;
  height: 50px;
  background: #fff;
  margin-bottom: 12px;
  position: relative;
  border: 1px solid red;
}
.tabs{
  float: left;
  line-height: 50px;
  padding-left: 25px;
}
.item{
  float: left;
  cursor: pointer;
  padding: 0 5px;
  margin-right: 30px;
}
.active{
  line-height: 47px;
  color: #409eff;
  border-bottom: 3px solid #409eff;
}
.search-box{
  position: absolute;
  top: 5px;
  right: 18px;
  width: 298px;
}
</style>
