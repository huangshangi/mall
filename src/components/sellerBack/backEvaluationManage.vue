<template>
  <div class="header">
    <span class="header-content">
      评价管理
    </span>
  </div>
  <div class="digest">
    <div class="com-eval">
      <div class="com-eval-title">
        综合评分
        <el-tooltip effect="light" content="综合评分=所有收到的主动评分(服务态度+工作速度+完成质量的总分数和）/所有主动参与评分的人数/3" placement="top-start">
          <span class="tip"><i>?</i></span>
        </el-tooltip>
      </div>
      <div class="com-eval-content">
        <table class="com-eval-table">
          <tbody>
            <tr>
              <th>完成工作的速度
                <el-tooltip effect="light" content="根据星级评价得分" placement="top-start">
                  <span class="tip"><i>?</i></span>
                </el-tooltip>
                <em> : 0分</em></th>
              <th>服务商服务态度
                <el-tooltip effect="light" content="根据星级评价得分" placement="top-start">
                  <span class="tip"><i>?</i></span>
                </el-tooltip>
                <em> : 0分</em></th>
              <th>作品的完成质量
                <el-tooltip effect="light" content="根据星级评价得分" placement="top-start">
                  <span class="tip"><i>?</i></span>
                </el-tooltip>
                <em> : 0分</em>
              </th>
            </tr>
          <tr>
            <td><span>共0人打分</span></td>
            <td><span>共0人打分</span></td>
            <td><span>共0人打分</span></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="cumu-eval">
      <div class="cumu-eval-title">
        累计评价
        <em>
          好评率
          <el-tooltip effect="light" content="好评率=所有收到的主动好评个数/所有收到的主动评价总数" placement="top-start">
            <span class="tip"><i>?</i></span>
          </el-tooltip>
          :0%
        </em>
      </div>
      <div class="cumu-eval-conetnt">
        <table class="cumu-eval-table">
          <tbody>
            <tr>
              <th class="first" colspan="2">最近一周</th>
              <th>最近1个月</th>
              <th>最近6个月</th>
              <th>6个月前</th>
              <th>
                总计
                <el-tooltip effect="light" content="所有的评价数（不含系统评价）" placement="top-start">
                  <span class="tip"><i>?</i></span>
                </el-tooltip>
              </th>
            </tr>
          <tr>
            <td>
              <span class="comment-icon good-comment"></span>
              好评
              <el-tooltip effect="light" content="成长基础系数=1" placement="top-start">
                <span class="tip"><i>?</i></span>
              </el-tooltip>
            </td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
          </tr>
            <tr>
              <td>
                <span class="comment-icon mid-comment"></span>
                中评
                <el-tooltip effect="light" content="成长基础系数=0.5" placement="top-start">
                  <span class="tip"><i>?</i></span>
                </el-tooltip>
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <span class="comment-icon bad-comment"></span>
                差评
                <el-tooltip effect="light" content="成长基础系数=0" placement="top-start">
                  <span class="tip"><i>?</i></span>
                </el-tooltip>
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>
                <span class="comment-icon all-comment"></span>
                总计
              </td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="evaluate-list">
    <div class="evaluate-list-title" style="text-align: left">
      评价列表
      <el-tooltip effect="light" content="对您的所有评价" placement="top-start">
        <span class="tip"><i>?</i></span>
      </el-tooltip>
    </div>
    <buyer-evaluate-temp/>
  </div>
</template>

<script>
import BuyerEvaluateTemp from '../buyerBack/BuyerEvaluateTemp'
export default {
  name: 'backEvaluationManage',
  components: { BuyerEvaluateTemp }
}
</script>

<style scoped>
.header{
  padding: 12px 6px 18px;
  position: relative;
  background: #fff;
  text-align: left;
}
.header-content{
  display: inline-block;
  height: 35px;
  font-size: 20px;
  line-height: 35px;
  color: #808080;
  font-weight: bold;
  font-family: "Microsoft YaHei", sans-serif;
}
.header-content:before{
  display: inline-block;
  content: '';
  width: 8px;
  height: 35px;
  background: #409eff;
  margin-bottom: -9px;
  margin-right: 24px;
}
.digest{
  position: relative;
  text-align: left;
}
.com-eval{
  background: #fff;
  padding-left: 7px;
  padding-right: 32px;
  padding-bottom: 23px;
  padding-top: 12px;
}
.com-eval-title,.evaluate-list-title{
  line-height: 40px;
  font-size: 16px;
  font-family: "microsoft yahei";
  color: #808080;
  font-weight: bold;
  padding: 0 18px 0 0;
  border-bottom: 1px dashed #e5e5e5;
}
.tip{
  display: inline-block;
  width: 15px;
  height: 15px;
  position: relative;
  background: #409eff;
  border-radius: 50%;
  top: 2px;
  margin-left: 5px;
  cursor: pointer;
}
.tip i{
  font-size: 12px;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  font-style: normal;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
}
.com-eval-table,.cumu-eval-table{
  width: 100%;
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
}
.com-eval-table th{
  font-size: 14px;
  padding: 10px 18px;
  text-align: left;
  color: #808080;
  font-weight: normal;
  font-family: "microsoft yahei";
}
.com-eval-table th em{
  color: #409eff;
  font-style: normal;
}
.com-eval-table td{
  padding: 0 10px 10px 18px;
  position: relative;
  font-size: 12px;
  color: #9a9a9a;
}
.com-eval-table td span{
  display: inline-block;
  background: #f2f2f2;
  padding: 1px 15px;
  border-radius: 12px;
  position: absolute;
  top: -4px;
  left: 110px;
}
.com-eval-table td span:before{
  display: inline-block;
  content: '';
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #f2f2f2;
  position: absolute;
  top: -6px;
  left: 34px;
}
.cumu-eval{
  background: #fff;
  padding-left: 7px;
  padding-right: 32px;
  padding-bottom: 23px;
  padding-top: 12px;
  position: relative;
  margin-top: 10px;
}
.cumu-eval-title{
  line-height: 40px;
  font-size: 16px;
  font-family: "microsoft yahei";
  color: #808080;
  font-weight: bold;
  padding: 0 18px 0 0;
}
.cumu-eval-title em{
  font-style: normal;
  color: #999;
  margin-left: 10px;
  font-size: 12px;
}
.cumu-eval-conetnt{
  border: 1px solid #e5e5e5;
  border-radius: 4px;
}
.cumu-eval-table tr{
  height: 44px;
}
.cumu-eval-table tr th{
  text-align: center;
  font-size: 14px;
  color: #484848;
  font-weight: bold;
  background: #f3f6f9;
  padding: 10px 18px;
  font-family: "microsoft yahei";
}
.first{
  text-indent: 131px;
}
.cumu-eval-table td{
  background: #fff;
  height: 37px;
  line-height: 37px;
  font-size: 14px;
  text-align: center;
  width: 125px;
  color: #666;
}
.comment-icon{
  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  margin-bottom: -3px;
}
.good-comment{
  background-image: url("https://t5.zbjimg.com/r/page/trade-evaluate/good-evaluate.png");
}
.mid-comment{
  background-image: url("https://t5.zbjimg.com/r/page/trade-evaluate/middle-evaluate.png");
}
.bad-comment{
  background-image: url("https://t5.zbjimg.com/r/page/trade-evaluate/bad-evaluate.png");
}
.all-comment{
  background-image: url("https://t5.zbjimg.com/r/page/trade-evaluate/all-evaluate.png");
}
</style>
