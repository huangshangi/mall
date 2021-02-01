<template>
  <div class="border allDiv">
    <el-row style="position: relative;">
      <el-col :span="3"><div class="center"><p>23063077</p></div></el-col>
      <el-col :span="8">
        <div style="padding-top: 5px">
          <a href="#" class="goodsLink">冬季窗户密封保温膜保暖窗帘防风帘冬天双层条封防寒冬季窗户密封保温膜保暖窗帘防风帘冬天双层条封防寒</a>
          <p><em>15</em>元</p>
        </div>
      </el-col>
      <el-col :span="3"><div class="center">闪魔旗舰店</div></el-col>
      <el-col :span="6">
        <div class="center">
          <p>感谢您对本店的支持，欢迎下次再来，祝您生活愉快，工作顺利！</p>
          <p>[2021-01-27 13:18:42]</p>
        </div>
      </el-col>
      <el-col :span="3"><div class="center"><el-button>删除</el-button></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BuyerEvaluateItem'
}
</script>

<style scoped>
.center{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.border{
  border: 1px solid red;
}
.allDiv{
  text-align: left;
}
.goodsLink{
  color: #606266;
  text-decoration: none;
}
.goodsLink:hover{
  color: #409eff;
  text-decoration: underline;
}
</style>
