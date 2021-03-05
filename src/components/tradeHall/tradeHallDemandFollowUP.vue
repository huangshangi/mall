<template>
  <div class="allDiv">
    <div class="title">
      <i></i>
      <h4 class="title-val">需求动态</h4>
    </div>
    <div class="content">
      <ul>
        <li class="item">
          <i class="curr"></i>
          <div class="cont">
            <p class="date">2021-01-01添加了一条记录</p>
            <p class="box">
              <span class="box-item">联系的上</span>
              <span class="box-item">联系的上</span>
              <span class="box-item">联系的上</span>
            </p>
            <div class="detailDesc">知道了</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeHallDemandFollowUP'
}
</script>

<style scoped>
  .allDiv{
    text-align: left;
    border: 1px solid red;
    height: 300px;
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
  .content ul{
    list-style: none;
    position: relative;
  }
  .content ul li{
    box-sizing: border-box;
    font-size: 14px;
    position: relative;
    padding-bottom: 60px;
    padding-left: 20px;
    color: #999;
  }
  .content ul:before{
    width: 1px;
    height: 100%;
    content: "";
    display: inline-block;
    background: linear-gradient(180deg,#9fc6ee,#fff);
    position: absolute;
    top: 0;
  }
  .content .item .curr{
    border: 1px solid #2D8CF0;
    box-shadow: 0 0 4px 0 rgba(45,140,240,.73);
    width: 11px;
    height: 11px;
    top: 0;
    left: -5px;
    border-radius: 50%;
    background: #fff;
    box-sizing: border-box;
    position: absolute;
    display: inline-block;
  }
  .content .item .currContent{
    color: #333;
  }
  .content .item .his{
    background: #2d8cf0;
    border: 1px solid #2d8cf0;
    box-shadow: 0 0 4px 0 #9fc6ee;
    width: 5px;
    height: 5px;
    top: 0;
    left: -2px;
    border-radius: 50%;
    box-sizing: border-box;
    position: absolute;
    display: inline-block;
  }
  .content .item .date{
    font-size: 12px;
    color: #999;
  }
  .content .item .box{
    margin-top: 8px;
    font-size: 0;
  }
  .content .item .box-item{
    font-size: 12px;
    color: #2D8CF0;
    padding: 2px 10px;
    border: 1px solid #2D8CF0;
    border-radius: 11px;
    margin-right: 5px;
  }
  .content .item .detailDesc{
    font-size: 12px;
    color: #333;
    border: 1px solid #eee;
    background: #fcfcfc;
    padding: 8px 22px;
    margin-top: 12px;
    word-wrap: break-word;
    word-break: normal;
  }
</style>
