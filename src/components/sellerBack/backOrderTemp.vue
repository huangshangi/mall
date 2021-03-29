<template>
  <div class="order-list">
    <el-row class="order-list-header">
      <el-col :span="8">需求标题</el-col>
      <el-col :span="4">金额</el-col>
      <el-col :span="8">客户跟进情况</el-col>
      <el-col :span="4">操作</el-col>
    </el-row>
    <div class="order-item">
      <div class="order-item-summary">
        <div class="order-item-summary-main">
          <div class="order-time gray">2021-03-29 13:51:20</div>
          <div class="order-id">
            <span class="gray">订单号：</span>24238716
          </div>
          <div class="order-source">
            <span class="gray">订单来源：</span>招标大厅
          </div>
          <div class="order-status">
            <span class="gray">订单状态：</span>工作中
          </div>
        </div>
        <a class="webim" href="#">
          <el-image class="img" src="https://bgl.zbjimg.com/bgl/bjclound/im.png/origine/8b97fd16-7cf4-4063-b863-260a1ec8c38f"></el-image>
          huangshangi
        </a>
      </div>
      <el-row class="order-item-detail">
        <el-col class="col" :span="8">
          <div class="detail-title">
            <div class="order-title">
              <a href="#"> 需要专业开发做公众平台开发，价格可谈 </a>
            </div>
            <div class="order-desc gray">小程序</div>
          </div>
        </el-col>
        <el-col class="col" :span="4">
          <div class="detail-amount">
            <div class="host-amount">已托管：￥1.00</div>
            <div class="all-amount gray">总金额：￥1.00</div>
          </div>
        </el-col>
        <el-col class="col" :span="8">
          <div class="order-events">
            <div class="order-event-list">
              <div class="order-event">
                <div class="order-event-label">雇主托管了1.00元</div>
                <div class="order-event-time gray">03月16日 15:37</div>
              </div>
            </div>
            <el-popover
               placement="top-start"
               :width="300"
               trigger="hover"
            >
              <template #reference>
                <span>
                  <a class="order-event-more">
                    <el-image class="img" src="https://as.zbjimg.com/static/nodejs-zbj-i-web/widget/order/order/img/clock_ec56f22.png"></el-image>
                    <span class="order-event-more-text">
                      全部进度
                    </span>
                  </a>
                </span>
              </template>
              <div>
                <div class="progress-title">订单进度</div>
                <ul class="progress-list">
                  <li class="progress-item">
                    <div class="progress-time">
                      <div class="date">2021-03-26</div>
                      <div class="time">15:37:12</div>
                    </div>
                    <div class="progress-body">
                      <div class="desc">雇主托管了1.00元</div>
                    </div>
                  </li>
                </ul>
              </div>
            </el-popover>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="detail-opera">
            <a href="#" class="order-button">查看详情</a>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'backOrderTemp'
}
</script>

<style scoped>
.order-list{
  margin: 10px 20px 10px;
}
.order-list-header{
  height: 30px;
  background: #eff5fd;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #666;
  margin-bottom: 10px;
}
.order-item{
  background: #fff;
  border: 1px solid #dceafb;
  margin-bottom: 10px;
  color: #333;
}
.order-item-summary{
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #333;
  background: #eff5fd;
  height: 30px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  padding-left: 18px;
  padding-right: 18px;
  border-bottom: 1px solid #dceafb;
}
.order-item-detail{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding-top: 0;
  padding-bottom: 0;
  padding-left: 18px;
  padding-right: 0;
}
.order-item-summary-main{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.order-time,.order-id,.order-source,.order-status{
  margin-right: 40px;
}
.gray{
  color: #999;
}
.webim{
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #333;
  text-decoration: none;
  width: 15%;
}
.order-title{
  margin-bottom: 3px;
  text-align: left;
}
.order-title a{
  font-size: 14px;
  color: #333;
  font-weight: 600;
  text-decoration: none;
}
.order-desc{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
}
.host-amount{
  color: #409eff;
  margin-bottom: 20px;
  padding-bottom: 20px;
  font-weight: 600;
  border-bottom: 1px dashed #efefef;
}
.all-amount{
}
.order-events{
  text-align: left;
  position: relative;
  padding: 10px 20px 10px 26px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.order-event-list{
  margin-bottom: 16px;
}
.order-event{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 8px;
}
.order-event-label{
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin-right: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.order-event-more{
  line-height: 12px;
  width: 100px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  cursor: pointer;
}
.order-event-more .img{
  width: 14px;
  height: 14px;
  margin-right: 4px;
}
.order-event-more-text{
  position: relative;
}
.order-event-more-text:after{
  position: absolute;
  width: 6px;
  height: 6px;
  background: #ff5151;
  border-radius: 100%;
  content: "";
  right: -8px;
  top: -2px;
}
.progress-title{
  border-bottom: 1px solid #e4e4e4;
  padding-bottom: 8px;
  font-size: 12px;
}
.progress-list{
  max-height: 200px;
  overflow: auto;
  margin-top: 10px;
}
.progress-item{
  position: relative;
  font-size: 12px;
  line-height: 17px;
}
.progress-time{
  position: absolute;
  width: 70px;
  left: 0;
  top: 0;
  color: #999;
  text-align: right;
}
.progress-body{
  position: relative;
  padding: 0 0 25px 95px;
}
.progress-time .date{
  color: #999;
  text-align: right;
}
.progress-time .time{
  color: #999;
  text-align: right;
}
.progress-body .desc{
  color: #999;
  word-break: break-word;
}
.order-button{
  font-size: 12px;
  width: 80px;
  height: 25px;
  line-height: 25px;
  border-radius: 2px;
  display: inline-block;
  margin-right: 5px;
  color: #333;
  background: transparent;
  text-decoration: none;
}
.order-button:last-child{
  margin-right: 0;
}
.order-button:hover{
  opacity: .8;
}
.detail-title{
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-right: 10px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding-top: 22px;
  padding-bottom: 22px;
  position: relative;
}
.detail-amount{
  padding-left: 13px;
  padding-right: 13px;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-top: 22px;
  padding-bottom: 22px;
  position: relative;
}
.col:after{
  content: "";
  position: absolute;
  width: 1px;
  background: #e7f3ff;
  top: 0;
  bottom: 0;
  right: 0;
}
.detail-opera{
  min-width: 220px;
  padding-left: 18px;
  padding-top: 50px;
  padding-right: 18px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.progress-list,.progress-item{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.progress-body:before{
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  left: 79px;
  top: 4px;
  z-index: 2;
  background: url(//as.zbjimg.com/static/nodejs-zbj-i-web/widget/order/order/img/dot_5ec872f.png) 50% no-repeat;
  background-size: auto;
  background-size: 10px 10px;
}
.progress-body:after{
  content: "";
  position: absolute;
  left: 84px;
  width: 1px;
  top: 5px;
  bottom: 0;
  border-left: 1px dashed #f7b500;
}
.webim .img{
  width: 14px;
  height: 14px;
  margin-right: 6px;
}
</style>
