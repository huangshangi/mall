<template>
  <div class="allDiv">
    <detail-step-temp :detail="false">
      <template v-slot:content>
        <div style="text-align: left;">
          <el-form label-width="120px">
            <el-form-item label="投诉类型：">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                   v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="投诉原因：">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                   v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="投诉说明：">
              <el-input
                 style="width: 90%"
                 type="textarea"
                 :rows="4"
                 placeholder="请输入内容"
                 v-model="textarea">
              </el-input>
            </el-form-item>
            <el-form-item label="上传凭证：">
              <el-upload
                 style="width: 30%;"
                 class="upload-demo"
                 action="https://jsonplaceholder.typicode.com/posts/"
                 :on-change="handleChange"
                 :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <template #tip>
                  <div class="el-upload__tip">
                    只能上传 jpg/png 文件，且不超过 500kb
                  </div>
                </template>
              </el-upload>
            </el-form-item>
            <el-form-item label="联系电话：">
              <el-input
                 style="width: 30%"
                 placeholder="请输入内容"
                 v-model="textarea">
                <template #prepend>中国(+86)</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"  @click="onSubmit">提交申请</el-button>
            </el-form-item>
          </el-form>
        </div>
      </template>
      <template v-slot:list>
        <div></div>
      </template>
      <template v-slot:digest-title>
        <div></div>
      </template>
    </detail-step-temp>
  </div>
</template>

<script>
import DetailStepTemp from '../detailStepTemp'
export default {
  name: 'reportDetailStepOne',
  components: { DetailStepTemp },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  },
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
      dialogImageUrl: '',
      dialogVisible: false,
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    }
  }
}
</script>

<style scoped>

</style>
