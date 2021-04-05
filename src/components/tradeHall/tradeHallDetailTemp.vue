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
<!--          卖家-->
          <el-row>
            <el-col :span="12"><trade-hall-word-temp :need-edit="true" :labels="customLabels" :title="customTitle"/></el-col>
            <el-col :span="12"><trade-hall-add-follow-up/></el-col>
          </el-row>
          <trade-hall-demand-follow-u-p/>
<!--          买家-->
          <div class="detail-content">
            <div class="title">
              <i></i>
              <h4 class="title-val">已投标的服务商</h4>
            </div>
          </div>
          <template v-for="item in 3" :key="item">
            <trade-hall-bidder-temp/>
          </template>
        </template>
        <template v-else>
          <el-form label-width="100px" inline>
            <el-form-item label="任务名称">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="任务详情">
              <el-input></el-input>
            </el-form-item>
            <el-form-item label="任务状态">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                   v-for="item in options"
                   :key="item.value"
                   :label="item.label"
                   :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <el-form label-width="100px" inline>
            <el-form-item label="任务起始时间">
              <el-date-picker
                 v-model="value1"
                 type="date"
                 placeholder="选择日期">
              </el-date-picker>
              -
              <el-date-picker
                 v-model="value1"
                 type="date"
                 placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-form>
          <el-form label-width="100px">
            <el-form-item>
              <el-button type="primary">查询</el-button>
              <el-button>重置</el-button>
            </el-form-item>
          </el-form>
          <div>
            <el-form>
              <el-form-item>
                <el-button type="primary">添加任务</el-button>
                <el-button>删除任务</el-button>
                <el-button>批量完成</el-button>
              </el-form-item>
            </el-form>
            <el-table
               stripe
               :data="tableData"
               style="width: 100%">
              <el-table-column
                 type="selection"
                 width="55">
              </el-table-column>
              <el-table-column
                 prop="missionName"
                 label="任务名称"
                 width="100">
              </el-table-column>
              <el-table-column
                 prop="missionDetail"
                 label="任务详情"
                 width="200">
              </el-table-column>
              <el-table-column
                 prop="missionStart"
                 width="180"
                 label="任务开始时间">
              </el-table-column>
              <el-table-column
                 prop="missionEnd"
                 width="180"
                 label="任务结束时间">
              </el-table-column>
              <el-table-column
                 prop="missionState"
                 width="100"
                 label="任务状态">
              </el-table-column>
              <el-table-column
                 label="操作"
                 width="180">
                <template #default="scope">
                  <el-button @click="handleClick(scope.row)" type="text" size="small">删除任务</el-button>
                  <el-button type="text" size="small">完成任务</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
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
import TradeHallBidderTemp from './tradeHallBidderTemp'
export default {
  name: 'tradeHallDetailTemp',
  components: {
    TradeHallBidderTemp,
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
        { title: '客户性别', value: '', type: 'radio', radios: ['男', '女'] },
        { title: '客户职位', value: '', type: 'input' },
        { title: '企业名称', value: '', type: 'input' },
        { title: '所属行业', value: '', type: 'input' }
      ],
      moneyTitle: '资金发票',
      customTitle: '完善客户信息',
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
      value: '',
      tableData: [
        {
          missionName: '测试名称',
          missionDetail: '这是一个测试任务',
          missionStart: '2021-03-31',
          missionEnd: '2021-04-01',
          missionState: '已完成'
        }
      ]
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
.detail-content .title i{
  position: absolute;
  left: 0;
  display: inline-block;
  width: 3px;
  height: 19px;
  background: #2D8CF0;
}
.detail-content .title .title-val{
  font-size: 16px;
  color: #333;
  margin-bottom: 24px;
  font-weight: 700;
}
.detail-content{
  box-sizing: border-box;
  overflow: hidden;
  padding: 19px 106px 0 25px;
}
</style>
