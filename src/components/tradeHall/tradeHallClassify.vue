<template>
  <div class="allDiv">
    <div class="searchItem">
      <span class="searchKey">已选分类：</span>
      <ul  class="searchContent">
        <li v-for="(item,index) in 3" :key="item" class="searchContentTabModifyed">
          <div class="content" @mouseover="mouseOverModifyed(index)" @mouseout="mouseOutModifyed()">
            <span class="curr">
              <span>IT综合服务</span>
              <el-image  class="spreadImage" :src="require('../../assets/img/dropdown.png')"></el-image>
            </span>
            <ul class="selectedModify" :style="{'display': modifyHoverIndex === index ? 'block' : 'none' }">
              <li :key="item" v-for="item in 10">
                <a class="">全部</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <div class="searchItem firstClassify" :class="{ 'spreadShow': spread ,'hideMore': !spread || !firstMenuSpread }">
      <span class="searchKey">一级分类：</span>
      <ul class="searchContent">
        <li class="searchContentTab">
          <a class="searchContentTabA" v-for="(item,index) in 300" :key="item" @click="firstClassifyClick(index)"
             :class="{ 'linkActive': index === firstClassifyIndex}">
            全部
          </a>
        </li>
      </ul>
      <a class="firstMenuSpread" @click="firstMenuSpreadClick">
        <span class="content">
          <span>{{ firstMenuSpread === false ? '更多' : '收起' }}</span>
          <el-image  class="spreadImage" :class="{ 'rorate': firstMenuSpread}" :src="require('../../assets/img/dropdown.png')"></el-image>
        </span>
      </a>
      <div class="spread" @click="spreadClick">
        <span class="content">
          <span>{{ spread === false ? '展开' : '收起' }}</span>
          <el-image  class="spreadImage" :class="{ 'rorate': spread }" :src="require('../../assets/img/dropdown.png')"></el-image>
        </span>
      </div>
    </div>
    <div :style="{'display': spread === true ? 'block' : 'none'}">
      <div class="searchItem">
        <span class="searchKey">到期时间：</span>
        <ul class="searchContent">
          <li class="searchContentTab">
            <a class="searchContentTabA" v-for="(item,index) in 5" :key="item" @click="expireTimeClick(index)"
               :class="{ 'linkActive': index === expireTimeIndex}">
              全部
            </a>
          </li>
        </ul>
      </div>
      <div class="searchItem">
        <span class="searchKey">投标状态：</span>
        <ul class="searchContent">
          <li class="searchContentTab">
            <a class="searchContentTabA" v-for="(item,index) in 5" :key="item" @click="biddingStatusClick(index)"
               :class="{ 'linkActive': index === biddingStatusIndex}">
              全部
            </a>
          </li>
        </ul>
      </div>
      <div class="searchItem">
        <span class="searchKey">托管状态：</span>
        <ul class="searchContent">
          <li class="searchContentTab">
            <a class="searchContentTabA" v-for="(item,index) in 5" :key="item" @click="hostStatusClick(index)"
               :class="{ 'linkActive': index === hostStatusIndex}">
              全部
            </a>
          </li>
        </ul>
      </div>
      <div class="searchItem">
        <span class="searchKey">预算金额：</span>
        <ul class="searchContent">
          <li class="searchContentTab">
            <a class="searchContentTabA" v-for="(item,index) in 5" :key="item" @click="budgetClick(index)"
               :class="{ 'linkActive': index === budgetIndex}">
              全部
            </a>
          </li>
        </ul>
      </div>
      <div class="searchItem">
        <span class="searchKey">需求状态：</span>
        <ul class="searchContent">
          <li class="searchContentTab">
            <a class="searchContentTabA" v-for="(item,index) in 5" :key="item" @click="demandStatusClick(index)"
               :class="{ 'linkActive': index === demandStatusIndex}">
              全部
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeHallClassify',
  methods: {
    firstClassifyClick (index) {
      this.firstClassifyIndex = index
    },
    expireTimeClick (index) {
      this.expireTimeIndex = index
    },
    biddingStatusClick (index) {
      this.biddingStatusIndex = index
    },
    hostStatusClick (index) {
      this.hostStatusIndex = index
    },
    budgetClick (index) {
      this.budgetIndex = index
    },
    demandStatusClick (index) {
      this.demandStatusIndex = index
    },
    firstMenuSpreadClick () {
      this.firstMenuSpread = !this.firstMenuSpread
    },
    spreadClick () {
      this.spread = !this.spread
    },
    mouseOverModifyed (index) {
      this.modifyHoverIndex = index
    },
    mouseOutModifyed () {
      this.modifyHoverIndex = -1
    }
  },
  data () {
    return {
      firstMenuSpread: false,
      spread: false,
      firstClassifyIndex: 0,
      expireTimeIndex: 0,
      biddingStatusIndex: 0,
      hostStatusIndex: 0,
      budgetIndex: 0,
      demandStatusIndex: 0,
      modifyHoverIndex: -1
    }
  }
}
</script>

<style scoped>
.firstClassify{
  position: relative;
  min-height: 50px;
}
.searchItem{
  padding: 0 30px;
  min-height: 50px;
  border-bottom: 1px solid #f3f3f3;
  position: relative;
}
.searchKey{
  margin-right: 0;
  line-height: 50px;
  color: #999;
  display: inline-block;
  width: 70px;
  text-align: left;
}
.searchContent{
  display: inline-block;
  max-width: 80%;
  margin: 0;
  vertical-align: top;
  line-height: 50px;
  list-style: none;
}
.searchContentModifyed{
  display: inline-block;
  max-width: 80%;
  margin: 0;
  vertical-align: top;
  list-style: none;
}
.hideMore{
  height: 50px;
  overflow: hidden;
}
.searchContentTab{
  display: inline-block;
  margin: 0;
  line-height: 50px;
}
.searchContentTabModifyed{
  display: inline-block;
  margin: 0 10px;
  line-height: 50px;
}
.selectedModify li{
  display: inline-block;
  margin: 0;
  line-height: 24px;
}
.searchContentTabA{
  display: inline-block;
  height: 32px;
  line-height: 32px;
  vertical-align: middle;
  padding: 0 10px;
  text-decoration: none;
  cursor: pointer;
}
.searchContentTabA:hover{
  color: #409eff;
}
.linkActive{
  color: #409eff;
  font-weight: 700;
}
.allDiv{
  text-align: left;
  font-size: 14px;
  width: 100%;
  border: 1px solid red;
}
.spread,.firstMenuSpread{
  float: right;
  height: 50px;
  line-height: 50px;
  text-align: center;
  position: relative;
  cursor: pointer;
  /*right: -12px;*/
}
.spread .content,.firstMenuSpread .content{
  color: #66b1ff;
}
.spread .content:hover,.firstMenuSpread .content:hover{
  color: #409eff;
}
.spreadImage{
  vertical-align: middle;
  display: inline-block;
  max-width: 32px;
  max-height: 32px;
}
.firstMenuSpread{
  position: absolute;
  right: 29px;
  top: 51px;
}
.rorate{
  transform: rotate(180deg);
}
.spreadShow{
  min-height: 100px;
}
.price{
  display: inline-block;
  position: absolute;
  padding: 13px 0 0 10px;
}
.content{
  display: inline-block;
  position: relative;
  height: 44px;
  color: #333;
  vertical-align: bottom;
}
.curr{
  display: inline-block;
  height: 28px;
  line-height: 30px;
  border: 1px solid #e5e5e5;
  padding: 0 8px;
  border-radius: 4px;
}
.selectedModify{
  /*display: none;*/
  position: absolute;
  width: 300px;
  z-index: 100;
  left: 0;
  top: 38px;
  padding: 12px 10px 0;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 4px 10px 0 rgba(56,85,111,.2);
  list-style: none;
}
.selectedModify li{
  display: inline-block;
  margin-right: 20px;
  max-width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 24px;
  text-align: center;
  margin-bottom: 4px;
}

.selectedModify li a:hover{
  color: #409eff;
  cursor: pointer;
}
</style>
