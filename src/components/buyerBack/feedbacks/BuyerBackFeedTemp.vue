<template>
  <div style="padding: 20px">
    <div class="title">
      <p style="margin: 10px;text-align: left">我的反馈</p>
      <el-button class="feedbackButton" @click="feedbackShow">反馈问题</el-button>
    </div>
    <template v-for="item in 10" :key="item">
      <buyer-back-feed-item/>
    </template>
    <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
    </el-pagination>
  </div>
  <div style="text-align: left">
    <el-dialog
        title="反馈问题"
        :close-on-click-modal="false"
        v-model="dialogVisible"
        width="30%">
      <buyer-back-feedback/>
    </el-dialog>
  </div>
</template>

<script>
import BuyerBackFeedItem from './BuyerBackFeedItem'
import BuyerBackFeedback from './BuyerBackFeedback'
export default {
  name: 'BuyerBackFeedTemp',
  components: { BuyerBackFeedback, BuyerBackFeedItem },
  data () {
    return {
      dialogVisible: false
    }
  },
  methods: {
    feedbackSubmit () {
    },
    feedbackShow () {
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped>
.title{
  position: relative;
  margin-bottom: 20px;
}
.feedbackButton{
  position: absolute;
  top: 0px;
  right: 10px;
  border: none;
  background: white;
}
.feedbackButton:focus,.feedbackButton:hover,.feedbackButton:active{
  background: white;
}
.feedbackButton:focus,.feedbackButton:active{
  color: #606266;
}
.feedbackButton:hover{
  color: #409eff;
}
</style>
