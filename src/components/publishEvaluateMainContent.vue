<template>
  <div class="border">
    <h2>其他买家，需要您的建议哦</h2>
    <el-row class="border">
      <el-col :offset="1" :span="12">
        <el-form label-width="80px" class="border">
          <el-form-item label="我的评价" class="form-item">
            <el-input type="textarea" :rows="5"  placeholder="请输入内容"/>
          </el-form-item>
          <el-form-item label="晒图片" class="form-item">
            <el-upload
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
                <div class="el-upload__tip">只能上传 jpg/png 文件，且不超过 500kb</div>
              </template>
            </el-upload>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="9" :offset="1">
        <el-form label-width="80px" class="border">
          <el-form-item label="服务态度" class="form-item">
            <el-rate show-text :texts="texts" class="rateMargin"></el-rate>
          </el-form-item>
          <el-form-item label="服务速度" class="form-item">
            <el-rate show-text :texts="texts" class="rateMargin"></el-rate>
          </el-form-item>
          <el-form-item label="服务质量" class="form-item">
            <el-rate show-text :texts="texts" class="rateMargin"></el-rate>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="10" span="4"><el-button type="primary">提交</el-button></el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'publishEvaluateMainContent',
  data () {
    return {
      texts: ['1分 失望', '2分 不满', '3分 一般', '4分 满意', '5分 惊喜']
    }
  }
}
</script>

<style scoped>
.border{
  border: 1px solid red;
}
.form-item{
  text-align: left;
}
.rateMargin{
  margin-top: 10px;
}
.paddingtop{
  padding-top: 12px;
}
</style>
