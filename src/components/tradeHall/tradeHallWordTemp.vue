<template>
  <div class="allDiv">
    <div class="detail-content">
      <div class="title">
        <i></i>
        <h4 class="title-val">{{title}}</h4>
        <span class="editOrSave" @click="editOrSave" v-if="needEdit">{{!edit ? '编辑': '保存'}}</span>
      </div>
      <el-form label-width="80px">
        <template v-for="item in labels" :key="item">
          <el-form-item :label="item.title +':'">
            <template v-if="edit">
              <template v-if="item.type === 'radio'">
                <template v-for="radio in item.radios" :key="radio">
                  <el-radio>{{radio}}</el-radio>
                </template>
              </template>
              <template v-else-if="item.type === 'input'">
                <el-input class="input" v-model="input" placeholder="请输入内容"  size="small"></el-input>
              </template>
            </template>
            <template v-else>
              <span class="item-value">{{item.value}}</span>
            </template>
          </el-form-item>
        </template>
<!--        <el-form-item label="需求类目">-->
<!--          <template v-if="edit">-->
<!--            <el-input class="input" v-model="input" placeholder="请输入内容"  size="small"></el-input>-->
<!--          </template>-->
<!--          <template v-else>-->
<!--            <span class="item-value">公众平台开发</span>-->
<!--          </template>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="需求预算">-->
<!--          <template v-if="edit">-->
<!--            <el-radio v-model="radio" label="1">备选项</el-radio>-->
<!--            <el-radio v-model="radio" label="2">备选项</el-radio>-->
<!--          </template>-->
<!--          <template v-else>-->
<!--            <span class="item-value">公众平台开发</span>-->
<!--          </template>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="需求描述">-->
<!--          <template v-if="edit">-->
<!--            <el-input class="input" v-model="input" placeholder="请输入内容"  size="small"></el-input>-->
<!--          </template>-->
<!--          <template v-else>-->
<!--            <span class="item-value">公众平台开发</span>-->
<!--          </template>-->
<!--        </el-form-item>-->
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeHallWordTemp',
  props: {
    needEdit: Boolean,
    labels: Array,
    title: String
  },
  data () {
    return {
      edit: false,
      radio: '1'
    }
  },
  methods: {
    editOrSave () {
      this.edit = !this.edit
    }
  }
}
</script>

<style scoped>
.editOrSave{
  font-size: 12px;
  color: #2D8CF0;
  cursor: pointer;
  position: absolute;
  right: 28px;
  top: 0px;
}
.allDiv{
  text-align: left;
  border: 1px solid red;
}
.title{
  position: relative;
  background: #fff;
  box-sizing: border-box;
  /*padding-bottom: 37px;*/
  /*margin-bottom: 5px;*/
}

.title i{
  position: absolute;
  left: 0;
  display: inline-block;
  width: 3px;
  height: 19px;
  background: #2D8CF0;
}

.title .title-val{
  font-size: 16px;
  color: #333;
  margin-left: 24px;
  font-weight: 700;
}
.item-value .card-div{
  background: #F7FBFF;
  border: 1px solid #DAECFF;
  display: inline-block;
  width: 146px;
  /*height: 70px;*/
  box-sizing: border-box;
  border-radius: 3px;
  padding-top: 12px;
  margin-left: 10px;
  vertical-align: top;
}
.item-value .card-div .val{
  font-size: 16px;
  color: #2D8CF0;
  text-align: center;
  margin-bottom: 3px;
}
.item-value .card-div .tit{
  font-size: 12px;
  color: #999;
  text-align: center;
}
.detail .title i{
  position: absolute;
  left: 0;
  display: inline-block;
  width: 3px;
  height: 19px;
  background: #2D8CF0;
}
.detail .title .title-val{
  font-size: 16px;
  color: #333;
  margin-bottom: 24px;
  font-weight: 700;
}
.detail .detail-content{
  box-sizing: border-box;
  overflow: hidden;
  padding: 19px 106px 0 25px;
}
.content-item{
  margin-top: 12px;
  padding-left: 12px;
  font-size: 14px;
  color: #999;
}
.item-title{
  margin-right: 8px;
  vertical-align: baseline;
  text-align: right;
  min-width: 56px;
  display: inline-block;
}
.item-value{
  display: inline-block;
  max-width: 680px;
  color: #333;
  font-size: 14px;
}
.input{
  width: 80%;
}
</style>
