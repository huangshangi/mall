<template>
  <div class="allDiv">
    <el-row>
      <el-col :offset="3" :span="15">
        <div class="content-top">
          <div class="icon">比稿</div>
          <div class="content">LOGO设计</div>
          <div class="number">23255</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :offset="3" :span="15">
        <trade-hall-progress/>
        <trade-hall-tab v-on:tabClick="tabClick" :tabs="tabs"/>
        <template v-if="currentTab === 0">
          <trade-hall-demand-summary/>
          <el-row>
            <el-col :span="8"><trade-hall-word-temp :need-edit="false" :labels="moneyLabels" :title="moneyTitle"/></el-col>
            <el-col :span="8"><trade-hall-progress-temp/></el-col>
            <el-col :span="8"><trade-hall-file-list-temp/></el-col>
          </el-row>
          <trade-hall-demand-follow-u-p/>
          <trade-hall-demand-dynamic/>
        </template>
        <template v-else-if="currentTab === 1">
          <el-row>
            <el-col :span="12"><trade-hall-word-temp :need-edit="true" :labels="customLabels" :title="customTitle"/></el-col>
            <el-col :span="12"><trade-hall-add-follow-up/></el-col>
          </el-row>
          <trade-hall-demand-follow-u-p/>
        </template>
      </el-col>
      <el-col :span="3">
        <trade-hall-status-bar/>
        <trade-hall-custom-bar/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tradeHallProgress from './tradeHallProgress'
import TradeHallTab from './tradeHallTab'
import TradeHallDemandSummary from './tradeHallDemandSummary'
import TradeHallProgressTemp from './tradeHallProgressTemp'
import TradeHallFileListTemp from './tradeHallFileListTemp'
import TradeHallDemandFollowUP from './tradeHallDemandFollowUP'
import TradeHallDemandDynamic from './tradeHallDemandDynamic'
import TradeHallWordTemp from './tradeHallWordTemp'
import TradeHallStatusBar from './tradeHallStatusBar'
import TradeHallCustomBar from './tradeHallCustomBar'
import TradeHallAddFollowUp from './tradeHallAddFollowUp'
export default {
  name: 'tradeHallDetailTemp',
  components: {
    TradeHallAddFollowUp,
    TradeHallCustomBar,
    tradeHallProgress,
    TradeHallStatusBar,
    TradeHallWordTemp,
    TradeHallDemandDynamic,
    TradeHallDemandFollowUP,
    TradeHallFileListTemp,
    TradeHallProgressTemp,
    TradeHallDemandSummary,
    TradeHallTab
  },
  data () {
    return {
      tabs: ['需求概览', '需求跟进', '需求进度'],
      currentTab: 0,
      moneyLabels: [
        { title: '预算金额', value: '1.00元' },
        { title: '托管金额', value: '1.00元' },
        { title: '付款金额', value: '1.00元' },
        { title: '退款金额', value: '1.00元' }
      ],
      customLabels: [
        { title: '客户姓名', value: '', type: 'input' },
        { title: '客户性别', value: '', type: 'radio' },
        { title: '客户职位', value: '', type: 'input' },
        { title: '企业名称', value: '', type: 'input' },
        { title: '所属行业', value: '', type: 'input' }
      ],
      moneyTitle: '资金发票',
      customTitle: '完善客户信息'
    }
  },
  methods: {
    tabClick (index) {
      this.currentTab = index
    }
  }
}
</script>

<style scoped>
.content-top .icon{
  display: inline-block;
  width: 47px;
  height: 47px;
  background: #E9D29E;
  border-radius: 50%;
  line-height: 47px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  margin-left: 5px;
}
.content-top .content{
  display: inline-block;
  font-size: 26px;
  margin-left: 8px;
  vertical-align: top;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 400px;
  white-space: nowrap;
  line-height: 47px;
}
.content-top .number{
  display: inline-block;
  vertical-align: top;
  margin-left: 12px;
  color: #666;
  margin-right: 50px;
  line-height: 47px;
}
.allDiv{
  text-align: left;
  border: 1px solid red;
}
</style>
