<template>
  <div class="allDiv">
    <div class="detail-content">
      <div class="title">
        <i></i>
        <h4 class="title-val">需求详情</h4>
        <span class="editOrSave" @click="editOrSave">保存</span>
      </div>
      <el-form label-width="120px">
        <el-form-item label="需求预算">
          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
        </el-form-item>
        <el-form-item label="意向度">
          <el-radio v-model="radio" label="1">备选项</el-radio>
          <el-radio v-model="radio" label="2">备选项</el-radio>
        </el-form-item>
        <el-form-item label="联系内容">
          <el-input
             type="textarea"
             :rows="2"
             placeholder="请输入内容"
             v-model="textarea">
          </el-input>
        </el-form-item>
        <el-form-item label="下次跟进时间">
          <el-date-picker
             style="width: 30%"
             v-model="value1"
             type="date"
             placeholder="选择日期">
          </el-date-picker>
          -
          <el-time-picker
             style="width: 30%"
             v-model="value1"
             :disabled-hours="disabledHours"
             :disabled-minutes="disabledMinutes"
             :disabled-seconds="disabledSeconds"
             placeholder="任意时间点">
          </el-time-picker>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeHallAddFollowUp',
  data () {
    return {
      radio: '1'
    }
  }
}
</script>

<style scoped>
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
.editOrSave{
  font-size: 12px;
  color: #2D8CF0;
  cursor: pointer;
  position: absolute;
  right: 28px;
  top: 0px;
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
</style>
