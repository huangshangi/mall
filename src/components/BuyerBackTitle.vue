<template>
  <div>
    <el-row class="">
      <el-col :span="3">
        <a href="#"><el-image style="height: 40px" :src="require('../assets/logo.png')"></el-image></a>
      </el-col>
      <el-col :span="3" class="display-flex">
        <span class="content">huangshangi</span>
      </el-col>
      <el-col :offset="3" :span="6">
        <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input2">
        </el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary">发布需求</el-button>
      </el-col>
      <el-col :span="1" :offset="3">
        <el-button class="titleButton">首页</el-button>
      </el-col>
      <el-col :span="1">
        <el-button class="titleButton">消息</el-button>
      </el-col>
      <el-col :span="2">
        <el-avatar :size="40" src="https://avatar.zbjimg.com/020/45/80/200x200_avatar_82.jpg!big"></el-avatar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BuyerBackTitle'
}
</script>

<style scoped>
.titleButton{
  border-style: none;
}

.titleButton:focus, .titleButton:hover{
  color: #409eff;
  background-color: transparent;
}
.display-flex{
  display: flex;
}
.content{
  margin: auto;
}
</style>
