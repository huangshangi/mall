<template>
  <div class="border">
<!--    第一行个人信息 and  我的足迹-->
    <el-row >
      <el-col :span="1"/>
<!--      我的个人信息-->
      <el-col :span="10" class="border">
        <el-row>
          <el-col :span="3" class="avaterDiv marginTop10"> <el-avatar :size="50" src="https://avatar.zbjimg.com/020/45/80/200x200_avatar_82.jpg!big"/></el-col>
          <el-col :span="10" :offset="3" class="leftDiv"><span class="middleVertical">huangshangi,欢迎您</span></el-col>
        </el-row>
        <el-row class="leftDiv"><el-col :span="23" :offset="1">账户余额：0元</el-col></el-row>
        <el-row class="leftDiv"><el-col :span="23" :offset="1">年度消费：0元</el-col></el-row>
        <el-row class="leftDiv"><el-col :span="23" :offset="1">绑定邮箱：1730256822@qq.com</el-col></el-row>
        <el-row class="leftDiv"><el-col :span="23" :offset="1">绑定手机号：15665851627</el-col></el-row>
        <el-row class="leftDiv"><el-col :span="23" :offset="1">身份认证：已认证</el-col></el-row>
      </el-col>
<!--      我的足迹-->
      <el-col :offset="1" :span="11" class="border">
        <div class="border">
          <el-row>
            <el-col :span="4" class="flexDiv">
              <span class="middleVertical">我的足迹</span>
            </el-col>
            <el-col :offset="16" :span="4">
              <el-button class="noborderButton middleVerticalContent">更多</el-button>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6" v-for="item in 4" :key="item">
              <buyer-back-image-temp/>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
<!--  我的订单进展-->
    <div>
      <el-row>
        <el-col :span="1"/>
        <el-col :span="22">
          <el-row class="flexDiv">
            <el-col :span="4" class="mineOrder">
              <span class="middleVertical">我的订单</span>
            </el-col>
            <el-col :offset="16" :span="4" class="allOrder">
              <el-button class="noborderButton middleVerticalContent">全部订单</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="1"/>
        <el-col :span="22">
          <buyer-order-temp/>
        </el-col>
      </el-row>
    </div>
<!--    我的收藏 反馈-->
    <div style="margin-top: 10px">
      <el-row>
        <el-col :span="10" :offset="1">
          <el-button class="more noborderButton">更多</el-button>
          <el-tabs>
            <el-tab-pane label="收藏的服务">
              <el-row><el-col :span="6" v-for="item in 4" :key="item"><buyer-back-image-temp/></el-col> </el-row>
            </el-tab-pane>
            <el-tab-pane label="收藏的店铺">
              <el-row><el-col :span="6" v-for="item in 4" :key="item"><buyer-back-image-temp/></el-col> </el-row>
            </el-tab-pane>
          </el-tabs>
        </el-col>
        <el-col :offset="1" :span="11" class="border">
          <div class="border">
            <el-row>
              <el-col :span="4" class="flexDiv">
                <span class="middleVertical">我的足迹</span>
              </el-col>
              <el-col :offset="16" :span="4">
                <el-button class="noborderButton middleVerticalContent">更多</el-button>
              </el-col>
            </el-row>
            <div >
              <el-row>
                <el-col :span="6" class="feedbackquestion" :offset="1"><span>您遇到了什么问题?</span></el-col>
                <el-col :span="4" v-for="(item,index) in feedbackType" :key="index">
                  <el-button class="feedbackButton" :class="{'feedbackButtonsele': index === currentIndex}" @click="feedbackClick(index)"><span>{{ item }}</span></el-button>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="23" class="middleVertical">
                  <el-input type="textarea" :rows="4" placeholder="请描述您的建议,我们将及时反馈,您一颗添加图片更形象描述" v-model="textarea"></el-input>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="12">
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
                <el-col :offset="8" :span="4">
                  <el-button type="primary" size="small">提交</el-button>
                </el-col>
              </el-row>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import BuyerBackImageTemp from '@/components/BuyerBackImageTemp'
import BuyerOrderTemp from '@/components/BuyerOrderTemp'
export default {
  name: 'BuyerBackIndex',
  components: { BuyerOrderTemp, BuyerBackImageTemp },
  data () {
    return {
      currentIndex: -1,
      feedbackType: ['功能异常', '产品建议', '其他反馈']
    }
  },
  methods: {
    feedbackClick (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
.border{
  border: 1px solid red;
}

.avaterDiv{
  text-align: center;
}
.leftDiv{
  text-align: left;
  display: flex;
  margin-left: 10px;
  margin-top: 10px;
}
.flexDiv{
  display: flex;
}
.middleVertical{
  margin: auto 0px auto 10px;
}
.middleVerticalContent{
  margin: auto;
}
.noborderButton{
  border-style: none;
}

.noborderButton:focus, .noborderButton:hover{
  color: #409eff;
  background-color: transparent;
}
.left,.right{
  position: absolute;
}
.left{
  left: 10px;
  top: 5px;
}
.right{
  right: 0px;
}
.marginTop10{
  margin-top: 10px;
}
.mineOrder{
  text-align: left;
  padding-left: 10px;
}
.allOrder{
  text-align: right;
}
.more{
  position: absolute;
  right: 5px;
  top: 0px;
  z-index: 2;
}
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
}
.feedbackButton:focus,.feedbackButton:hover{
  background: transparent;
  border: 1px solid #409eff;
}
.feedbackquestion{
  margin: auto 0px;
}
</style>
