<template>
  <div class="border allDiv">
    <div class="margin"><span class="tag">其他反馈</span></div>
    <div class="content margin">
      <div class="conetntText"><span>需要交纳保证金吗</span></div>
      <div class="contentImg">
        <el-row>
          <el-col :span="1" v-for="item in images" :key="item">
            <el-image :src="item" />
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="bottom margin">
      <span class="bottom-text-tag">待处理</span>
      <span class="bottom-time-tag">2021-01-01</span>
    </div>
    <div class=" content margin conetntText"><span>处理完成，感谢您的建议</span></div>
  </div>
</template>

<script>
export default {
  name: 'BuyerBackFeedItem',
  data () {
    return {
      images: ['https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg', 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg']
    }
  }
}
</script>

<style scoped>
.border{
  border: 1px solid red;
}
.tag{
  color: #409eff;
  padding: 2px 13px;
  line-height: 1;
  background-color: #fffaef;
}
.bottom{
  border-top: 1px solid #606266;
  padding-top: 10px;
}
.bottom-text-tag{

  color: #409eff;
}
.bottom-time-tag{
  float: right;
}
.allDiv{
  text-align: left;
}
.margin{
  margin: 10px;
}
</style>
