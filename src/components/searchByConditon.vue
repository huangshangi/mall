<template>
  <div style="text-align: left">
    <el-row>
      <el-col :span="8">
        <el-input placeholder="输入商品标题或订单号进行搜索">
          <template #append>
            <el-button>订单搜索</el-button>
          </template>
        </el-input>
      </el-col>
      <el-col :span="4">
        <el-button class="detailShowButton" @click="searchTypeChange">
          <template v-if="detailShow"><span>更多搜索条件</span><img class="img" src="//img.alicdn.com/tps/TB1jK1dIVXXXXXzXVXXXXXXXXXX.png"/></template>
          <template v-else><span>精简搜索条件</span><img class="img" src="//img.alicdn.com/tps/TB1HuWrIVXXXXcaXpXXXXXXXXXX.png"/></template>
        </el-button>
      </el-col>
    </el-row>
    <div v-if="detailShow">
      <el-row>
        <el-col :span="8"><label>订单类型</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select></el-col>
        <el-col :span="8"><label>成交时间</label>
          <el-time-select
              placeholder="起始时间"
              v-model="startTime"
              start='08:30'
              step='00:15'
              end='18:30'>
          </el-time-select>
          -
          <el-time-select
              placeholder="结束时间"
              v-model="endTime"
              start='08:30'
              step='00:15'
              end='18:30'
              :minTime="startTime">
          </el-time-select></el-col>
        <el-col :span="8"><div><label>买家昵称</label>
          <el-input placeholder="请输入内容" style="width: 80%"></el-input></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><label>评价状态</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select></el-col>
        <el-col :span="8"><label>交易状态</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select></el-col>
        <el-col :span="8"><label>售后服务</label>
          <el-select v-model="value" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchByConditon',
  data () {
    return {
      detailShow: false,
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
      }]
    }
  },
  methods: {
    searchTypeChange () {
      this.detailShow = !this.detailShow
    }
  }
}
</script>

<style scoped>
.detailShowButton,.detailShowButton:focus,.detailShowButton:hover,.detailShowButton:active{
  border: none;
  background: transparent;
  color:  #606266;
}
.img{
  margin-left: 3px;
  vertical-align: middle;
}
</style>
