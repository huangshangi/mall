<template>
  <detail-step-temp :detail="false">
    <template v-slot:content>
      <div style="text-align: left;">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item class="item" label="退款商品">
            <div>
              <el-image class="goodsImage" src="https://img.alicdn.com/bao/uploaded/i1/3079839036/O1CN01yEIlQc2GcXVS7Mzhq_!!0-item_pic.jpg"/>
              <div style="line-height: 16px;">
                <span class="goodsTitle">HDMI线</span>
              </div>
            </div>
          </el-form-item>
          <el-form-item  class="item" label="服务类型">
            <div>
              <el-radio v-model="radio" label="1">备选项</el-radio>
            </div>
            <div>
              <el-radio v-model="radio" label="1">备选项</el-radio>
            </div>
          </el-form-item>
          <el-form-item class="item" label="退款原因">
            <el-select v-model="value" placeholder="请选择">
              <el-option
                 v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="item" label="退款金额">
            <el-input v-model="input" placeholder="请输入内容"></el-input>
          </el-form-item>
          <el-form-item class="item" label="退款说明">
            <el-input
               type="textarea"
               :rows="2"
               placeholder="请输入内容"
               v-model="textarea">
            </el-input>
          </el-form-item>
          <el-form-item class="item" label="上传图片">
            <el-upload
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
          <el-button type="primary" @click="onSubmit" style="margin-left: 80px;
                    margin-top: 20px;">提交</el-button>
        </el-form>
      </div>
    </template>
    <template v-slot:list>
      <div></div>
    </template>
    <template v-slot:digest-title>
      <p>退款详情</p>
    </template>
  </detail-step-temp>
</template>

<script>
import DetailStepTemp from '../detailStepTemp'
export default {
  name: 'refundDetailStepOne',
  components: { DetailStepTemp },
  data () {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
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
      fileList: [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    handleChange (file, fileList) {
      this.fileList = fileList.slice(-3)
    }

  }
}
</script>

<style scoped>
.goodsImage{
  width: 76px;
  height: 76px;
  vertical-align: middle;
  float: left;
}
.item{
  /*max-width: 30%;*/
  margin: 10px;
  line-height: 16px;
}
.goodsTitle{
  font-size: 14px;
  line-height: 16px;
  max-height: 76px;
  overflow: hidden;
  margin-bottom: 8px;
  padding: 4px 10px 0 0;
  font-weight: 400;
  color: #333;
  text-overflow: ellipsis;
}
</style>
