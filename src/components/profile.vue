<template>
  <!--  头像-->
  <el-row>
    <el-col :offset="9" :span="5">
      <a href="#">
        <el-avatar shape="circle"  size="50px" src="https://tse2-mm.cn.bing.net/th/id/OIP.QrMu_HHCqhn2GUK7WiY90wHaJQ?w=206&h=258&c=7&o=5&dpr=1.25&pid=1.7"></el-avatar>
      </a>
    </el-col>
  </el-row>
  <el-row>
    <el-col :offset="1" :span="7"><el-button class="button-normal">登录</el-button></el-col>
    <el-col :span="7"><el-button class="button-normal">注册</el-button></el-col>
    <el-col :span="7"><el-button class="button-normal">商家入驻</el-button></el-col>
  </el-row>
  <el-row>
    <el-col :span="20" :offset="2">
      <el-tabs class="text-hover" type="border-card" style="height: 400px">
        <el-tab-pane  label="公告" name="first">
          <ul class="profile-ul">
            <li v-for="(item,index) in articles" :key="index"><a class="profile-a" :href="item.url">{{item.title}}</a></li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="头条" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="关于" name="third">角色管理</el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script>
// [{url,title,type}]
export default {
  name: 'profile',
  props: {
    articles: Array
  }
}
</script>

<style scoped>
.button-normal,.button-normal:focus,.button-normal:hover{
  color: white;
  background-color: orange;
  border-style: none;
}
.button-normal:hover{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
}
.profile-ul{
  text-align: left;
  padding-left: 20px;
}
.profile-a{
  text-decoration: none;
  color: #939393;
}
.profile-a:hover{
  color: red;
}

</style>
