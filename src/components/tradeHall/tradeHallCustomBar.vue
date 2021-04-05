<template>
  <div class="allDiv" v-if="true">
    <div class="detail-content">
      <div class="title">
        <i></i>
        <h4 class="title-val">该需求的雇主</h4>
      </div>
      <div class="image-div">
        <el-avatar
           shape="circle"
           style="width: 100px; height: 100px"
           src="https://avatar.zbjimg.com/029/18/07/200x200_avatar_98.jpg!small"
           fit="fill"></el-avatar>
        <p>这是雇主名字</p>
      </div>
      <div class="contact-div">
        <el-button type="primary" plain>在线联系</el-button>
        <el-button type="primary" plain>电话联系</el-button>
      </div>
      <div class="content-div">
        <el-input
           type="textarea"
           :rows="3"
           placeholder="你可以在此处快捷记录跟单信息。更多跟进功能可在需求跟进模块完成。"
           v-model="textarea">
        </el-input>
      </div>
      <div class="submit-div">
        <el-button type="text" icon="el-icon-search">保存记录</el-button>
      </div>
    </div>
  </div>
  <div class="allDiv" v-else>
    <div class="detail-content">
      <div class="title">
        <i></i>
        <h4 class="title-val">为您服务的服务商</h4>
      </div>
      <div class="image-div">
        <el-avatar
           shape="circle"
           style="width: 100px; height: 100px"
           src="https://avatar.zbjimg.com/029/18/07/200x200_avatar_98.jpg!small"
           fit="fill"></el-avatar>
        <p>这是服务商名字</p>
      </div>
      <div class="contact-div">
        <el-button type="primary" plain>在线联系</el-button>
        <el-button type="primary" plain>电话联系</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeHallCustomBar'
}
</script>

<style scoped>
.allDiv{
  text-align: left;
  border: 1px solid red;
}
.title{
  position: relative;
  background: #fff;
  box-sizing: border-box;
  /*padding-bottom: 37px;*/
  /*margin-bottom: 5px;*/
}

.title i{
  position: absolute;
  left: 0;
  display: inline-block;
  width: 3px;
  height: 19px;
  background: #2D8CF0;
}

.title .title-val{
  font-size: 16px;
  color: #333;
  margin-left: 24px;
  font-weight: 700;
}
.image-div{
  text-align: center;
}
.contact-div{
  text-align: center;
}
.content-div{
  padding: 10px 20px;
}
.submit-div{
  text-align: center;
}
</style>
