<template>
  <div class="allDiv border">
    <el-row>
      <el-col :offset="3" :span="18">
        <mallTitle/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="3" :span="18">
        <search :search="true"/>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="3" :span="18" class="border">
        <el-form  label-width="80px" style="text-align: left">
          <el-form-item label="需求类型">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="要求">
            <el-input
                type="textarea"
                :rows="5"
                placeholder="请输入内容">
            </el-input>
          </el-form-item>
          <el-form-item label="附件">
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
          <el-form-item label="预算">
            <el-row>
              <el-col :span="5"><el-input placeholder="请输入您的预算"></el-input></el-col>元
            </el-row>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-row>
              <el-col :span="5"><el-input placeholder="手机号"></el-input></el-col>
              <el-button>发送验证码</el-button>
            </el-row>
            <el-row>
              <el-col :span="5"><el-input placeholder="验证码"></el-input></el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button>确认发布</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import mallTitle from '@/components/title'
import Search from '@/components/search'
export default {
  name: 'demandRequire',
  components: { Search, mallTitle },
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  }
}
</script>

<style scoped>
.allDiv{
}
.border{
  border: 1px solid red;
}
</style>
