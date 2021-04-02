<template>
  <div class="allDiv">
    <div class="titleDiv" v-if="titleShow">
      招标流程
    </div>
    <div class="progressContent">
      <el-steps :active="1" align-center>
        <el-step title="步骤 1" icon="el-icon-edit"></el-step>
        <el-step title="步骤 2" icon="el-icon-upload"></el-step>
        <el-step title="步骤 3" icon="el-icon-picture"></el-step>
        <el-step title="步骤 4" icon="el-icon-edit"></el-step>
        <el-step title="步骤 5" icon="el-icon-upload"></el-step>
        <el-step title="步骤 6" icon="el-icon-picture"></el-step>
      </el-steps>
    </div>
    <div class="footer" v-if="footerShow">
      <div class="footerImage">
        <el-image src="https://as.zbjimg.com/static/nodejs-zbj-bid-api/widget/guide/images/spcial_557b824.png"></el-image>
      </div>
      <ul class="footerContent">
        <li><span>·</span> 适用于内容复杂、任务难度较大的定制化需求</li>
        <li><span>·</span> 适用于内容复杂、任务难度较大的定制化需求</li>
        <li><span>·</span> 适用于内容复杂、任务难度较大的定制化需求</li>
        <li><span>·</span> 适用于内容复杂、任务难度较大的定制化需求</li>
        <li><span>·</span> 适用于内容复杂、任务难度较大的定制化需求</li>
        <li><span>·</span> 适用于内容复杂、任务难度较大的定制化需求</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeHallProgress',
  props: {
    titleShow: Boolean,
    footerShow: Boolean
  }
}
</script>

<style scoped>
.titleDiv{
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  line-height: 62px;
  border-bottom: 1px solid #f6f6f6;
  position: relative;
}
.progressContent{
  padding: 20px 0px;
  overflow: hidden;
  border-bottom: 1px solid #f6f6f6;
}
.footer{
  padding: 20px 30px;
  overflow: hidden;
}
.footerImage{
  text-align: left;
  width: 62px;
  height: 22px;
}
.footerContent{
  list-style: none;
  margin-top: 5px;
  padding: 0px;
}
.footerContent li{
  float: left;
  color: #666;
}
.allDiv{
  border: 1px solid red;
}
</style>
