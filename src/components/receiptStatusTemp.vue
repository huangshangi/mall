<template>
  <div style="text-align: left" class="border">
    <span>交易已经成功,卖家将收到您的货款。（上海图名实业有限公司）</span>
    <div style="height: 120px">
      <el-image class="image" src="https://img.alicdn.com/imgextra/i1/3175282401/O1CN016GWEFk1TbhT1VG9AM_!!3175282401.jpg_80x80.jpg"/>
      <div class="content">
        <p class="title">匠视 hdmi线2.0高清线数据线4k电脑电视连接线机顶盒显示器视频线</p>
        <el-button class="evalute" type="primary">立即评价</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'receiptStatusTemp'
}
</script>

<style scoped>
.image{
  width: 100px;
  height: 100px;
  float: left;
}
.content{
  margin-left: 120px;
  text-align: left;
}
.title{
  height: 40px;
}
.evalute{
  /*margin-bottom: 10px;*/
}
.border{
  border: 1px solid red;
}
</style>
