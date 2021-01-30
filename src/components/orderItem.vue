<template>
<!-- type类型 1-》购物车 2-》结算订单 3-》订单详细信息 -->
  <div>
    <el-row class="alginCenter" v-if="type !== 3">
      <el-col :span="1" v-if="type === 1">
        <el-checkbox></el-checkbox>
      </el-col>
      <el-col :span="10" class="alginleft">
        <span>店铺:tiantian专营店</span>
      </el-col>
    </el-row>
    <el-row class="alginCenter">
      <el-col :span="1" class="verticalCenter" v-if="type === 1">
        <el-checkbox></el-checkbox>
      </el-col>
      <el-col :span="2" class="verticalCenter">
        <el-image src="https://img.alicdn.com/bao/uploaded/i6/TB15FQphVzqK1RjSZFCzHTbxVXa_025238.jpg_80x80.jpg"/>
      </el-col>
      <el-col :span="8" class="alginleft verticalCenter">
        <a href="#">【年货价】顺丰包邮 Huawei/华为 Mate 20 华为Mate20pro手机官方旗舰店nova5i MATE20X 5G全网通手机</a>
      </el-col>
      <el-col :span="1"></el-col>
      <el-col :span="2" class="verticalCenter">
        <span>￥3059.00</span>
      </el-col>
      <el-col :span="6" class="verticalCenter">
        <el-input-number :min="1" :max="10" label="描述文字" v-if="type !== 3 "></el-input-number>
        <span v-else>1</span>
      </el-col>
      <el-col :span="2" class="verticalCenter"  v-if="type === 1">
        ￥3059.00
      </el-col>
      <el-col :span="2" class="verticalCenter" v-if="type === 1">
        <el-button>删除</el-button>
      </el-col>
      <el-col :span="3" class="verticalCenter" v-if="type === 2">
        ￥30569.00
      </el-col>
      <el-col :span="4" class="verticalCenter" v-if="type === 3">
        <span>交易成功</span>
      </el-col>
    </el-row>
    <div v-if="type === 2">
      <el-row class="alginCenter">
        <el-col :span="5" class="alginleft verticalCenter"><el-checkbox>手机服务 贴膜+导数据</el-checkbox></el-col>
        <el-col :span="6" class="verticalCenter"/>
        <el-col :span="2" class="verticalCenter">￥30659.00</el-col>
        <el-col :span="6" class="verticalCenter">1</el-col>
        <el-col :span="3" class="verticalCenter">￥30659.00</el-col>
      </el-row>
      <el-row class="alginCenter">
        <el-col :span="3">给卖家留言:</el-col>
        <el-col :span="20">
          <el-input type="textarea" placeholder="请输入内容" maxlength="30" show-word-limit></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="19" :span="5">店铺合计:￥40000.00</el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderItem',
  data () {
    return {
    }
  },
  props: {
    type: Number
  }
}
</script>

<style scoped>
.alginCenter{
  text-align: center;
  margin-top: 10px;
}
.alginleft{
  text-align: left;
}
.verticalCenter{
  margin: auto 0px;
}
</style>
