<template>
  <el-row class="allDiv">
    <el-col :span="12" class="border">
      <el-row>
        <el-col :span="4" style="margin: 20px 30px;">
          <el-image style="width: 100%" src="https://avatar.zbjimg.com/020/45/80/200x200_avatar_82.jpg!middle?t=1616725866572"></el-image>
        </el-col>
        <el-col :span="15">
          <div>
            <p class="storeTitle">huangshangi</p>
            <p>店铺id:000001</p>
            <p>技术服务费率:0</p>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="12" class="border" style="padding: 20px 30px;">
      <div class="header">
        <span class="dataTitle">数据概览</span>
        <span class="day">2021-03-25数据</span>
      </div>
      <div class="content">
        <ul>
          <li>
            <span class="item-num">0</span>
            <p class="item-name">待处理维权</p>
          </li>
          <li>
            <span class="item-num">0</span>
            <p class="item-name">待处理维权</p>
          </li>
          <li>
            <span class="item-num">0</span>
            <p class="item-name">待处理维权</p>
          </li>
        </ul>
      </div>
    </el-col>
  </el-row>
  <div class="border" style="text-align: left">
    <div class="header" style="padding: 20px 30px">
      <span class="dataTitle">需求推荐</span>
      <span class="desc">主动找有需求的客户</span>
    </div>
    <div style="padding: 0px 30px">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="投标" name="first"><back-index-demand-temp/></el-tab-pane>
        <el-tab-pane label="比稿" name="second"><back-index-demand-temp/></el-tab-pane>
        <el-tab-pane label="计件" name="third"><back-index-demand-temp/></el-tab-pane>
      </el-tabs>
    </div>
  </div>
  <div class="border" style="text-align: left">
    <div class="header" style="padding: 20px 30px">
      <span class="dataTitle">我的订单</span>
      <span class="desc"></span>
    </div>
    <div style="padding: 0px 30px">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="投标" name="first"><back-order-temp/></el-tab-pane>
        <el-tab-pane label="比稿" name="second"><back-order-temp/></el-tab-pane>
        <el-tab-pane label="计件" name="third"><back-order-temp/></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import BackIndexDemandTemp from './backIndexDemandTemp'
import BackOrderTemp from './backOrderTemp'
export default {
  name: 'sellerBackIndex',
  components: { BackOrderTemp, BackIndexDemandTemp },
  data () {
    return {
      activeName: 'second'
    }
  }
}
</script>

<style scoped>
.border{
  border: 1px solid red;
}
.allDiv{
  text-align: left;
}
.storeTitle{
  color: #333;
  font-size: 18px;
  margin-right: 0;
  position: relative;
  top: 5px;
  font-weight: 600;
  max-width: 178px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.header .dataTitle{
  font-size: 18px;
  font-weight: 600;
  margin-right: 3px;
}
.day,.desc{
  color: #999;
  font-size: 14px;
  font-weight: 400;
  vertical-align: bottom;
}
.content ul{
  list-style: none;
  display: flex;
  padding: 0;
  margin-top: 20px;
}
.content ul li{
  min-width: 70px;
  text-align: center;
}
.content ul .item-num{
  font-size: 20px;
  margin-right: 6px;
  font-weight: 600;
}
.content ul .item-name{
  color: #999;
  margin-top: 10px;
  font-size: 12px;
}
</style>
