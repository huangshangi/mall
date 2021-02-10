<template>
  <div>
    <div class="title">
      <span class="title_content">协商历史</span>
      <el-button class="title_button" size="mini" @click="messageLeave">我要留言</el-button>
    </div>
    <div style="background: #f8f8f8;margin: 15px" :style="{ display:messageShow?'block':'none'}">
      <div class="addConsult">
        <el-input
           class="item"
           type="textarea"
           :rows="2"
           placeholder="请输入内容"
           v-model="textarea">
        </el-input>
        <el-upload
           class="upload-demo item"
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
            <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
          </template>
        </el-upload>
        <el-button type="primary" class="item">提交</el-button>
      </div>
    </div>
    <consult-item v-for="item in 10" :key="item"/>
  </div>
</template>

<script>
import ConsultItem from './consultItem'
export default {
  name: 'consultHistory',
  components: { ConsultItem },
  data () {
    return {
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' },
        { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      messageShow: false
    }
  },
  methods: {
    messageLeave () {
      this.messageShow = !this.messageShow
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
    }
  }
}
</script>

<style scoped>
.title{
  line-height: 16px;
  height: 30px;
  margin: 5px;
}
.title .title_content{
  float: left;
  padding: 10px;
}
.title .title_button{
  float: right;
  background: transparent;
  border: none;
  color:  #409eff;
}
.title .title_button:hover{
  color: #66b1ff;
}
.title .title_a:focus,.title .title_a{
  float: right;
  text-decoration: transparent;
  color: #409eff;
}
.title .title_a:hover,.title .title_a:active{
  text-decoration: underline;
  color:  #66b1ff;
  border: none;
}

.addConsult{
  text-align: left;
}
.addConsult .item{
  margin: 10px 1%;
  width: 90%;
}
</style>
