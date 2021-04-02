<template>
  <div class="border">
    <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
<!--      商品详情界面-->
      <el-tab-pane label="商品详情" name="first">
        <el-row>
          <ul>
            <li>开发方式：源生开发 混合开发 web开发 </li><li>其它二次开发：是 否</li><li>APP分类：网购支付 购物商城 点餐外卖 注册模块 聊天通讯 活动模块 电商模块 多媒体模块 O2O 账号登录 社区模块 发单抢单 订单模块 个人中心 互动模块 新闻资讯 支付模块 工具类 广告模块 通用模块 地图模块</li>
            <li>功能板块：其它</li>
            <li>提供驻地开发：否</li><li>数据库：MySQL</li><li>开发环境：Android iOS Windows Phone</li><li>行业：IT</li><li>行业开发语言：PHP</li>
          </ul>
        </el-row>
        <el-row v-for="index in 4" :key="index">
          <el-image class="panel1-image" src="https://img14.360buyimg.com/cms/jfs/t1/127056/12/17881/332375/5fa68f3aE919f83a2/1f5217596ea533a1.jpg"/>
        </el-row>
      </el-tab-pane>

      <el-tab-pane label="累计评价1000" name="second">
        <el-row>
          <el-col :offset="1" :span="23">
            <evaluate-tarbar/>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="23">
            <tarbar-temp/>
          </el-col>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="23">
            <comment-item/>
          </el-col>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="售后服务" name="third">
        <el-image class="panel1-image" src="https://img14.360buyimg.com/cms/jfs/t1/127056/12/17881/332375/5fa68f3aE919f83a2/1f5217596ea533a1.jpg"/>
      </el-tab-pane>
    </el-tabs>
  </div>

</template>

<script>
import EvaluateTarbar from './evluates/evaluateTarbar'
import CommentItem from './commentItem'
import TarbarTemp from './tarbarTemp'
export default {
  name: 'goodsDetailService',
  components: { TarbarTemp, CommentItem, EvaluateTarbar }
}
</script>

<style scoped>
.border{
  border: 1px solid red;
}
ul{
  text-align: left;
}
li{
  display: inline;
  float: left;
  width: 300px;
  height: 24px;
  margin-right: 20px;
  overflow: hidden;
  text-indent: 5px;
  line-height: 24px;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.panel1-image{
  width: 100%;
  background-repeat: no-repeat;
}
</style>
