<template>
  <div class="allDiv">
    <el-row>
      <span class="feedbackquestion">您遇到了什么问题?</span>
      <div v-for="(item,index) in feedbackType" :key="index" style="position: relative;display: inline-block">
        <el-button size="small" class="feedbackButton" :class="{feedbackButtonsele: index === feedbackCurrentIndex}"
                   @click="feedbackClick(index)">
          <span>{{ item }}</span>
        </el-button>
      </div>
    </el-row>
    <el-row>
      <el-col :span="24" class="middleVertical">
        <el-input type="textarea" :rows="4" placeholder="请描述您的建议,我们将及时反馈,您可以添加图片更形象描述" v-model="textarea"></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <el-upload type="margin-left:10px"
                   class="upload-demo"
                   action="https://jsonplaceholder.typicode.com/posts/"
                   :on-preview="handlePreview"
                   :on-remove="handleRemove"
                   :before-remove="beforeRemove"
                   multiple
                   :limit="3"
                   :on-exceed="handleExceed"
                   :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <template #tip>
            <div class="el-upload__tip" style="display: inline">只能上传 jpg/png 文件，且不超过 500kb</div>
          </template>
        </el-upload>
      </el-col>
      <el-col :offset="1" :span="4">
        <el-button type="primary" size="small" @click="feedbackSubmit">提交</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'BuyerBackFeedback',
  data () {
    return {
      feedbackCurrentIndex: -1,
      feedbackType: ['功能异常', '产品建议', '其他反馈'],
      textarea: ''
    }
  },
  methods: {
    feedbackClick (index) {
      this.feedbackCurrentIndex = index
      console.log(index)
    },
    feedbackSubmit () {
      this.$emit('feedbackSubmit')
    }
  }
}
</script>

<style scoped>
.feedbackButtonsele:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0.8px;
  width: 15px;
  height: 15px;
  background-image: url(//as.zbjimg.com/static/nodejs-zbj-i-web/static/home/img/radix-chosed2x_b9ae6ee.png);
  background-size: 100% 100%;
}
.feedbackButton{
  background: transparent;
  margin-right: 10px;
}
.feedbackButton:focus,.feedbackButton:hover{
  background: transparent;
  border: 1px solid #409eff;
}
.feedbackquestion{
  margin: auto 10px auto 0px;
}
.middleVertical{
  margin: 10px 0px;
}
.allDiv{
  text-align: left;
  margin: 10px 0px;
}
</style>
