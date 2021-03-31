<template>
  <div style="text-align: left">
    <el-form label-width="120px">
      <el-form-item label="您当前选择的是:">
          <el-row>
            <el-breadcrumb separator-class="el-icon-arrow-right" style="padding-top: 13px;padding-left: 10px;">
              <el-breadcrumb-item v-if="category1 !== ''">一级类目</el-breadcrumb-item>
              <el-breadcrumb-item v-if="category2 !== ''">二级类目</el-breadcrumb-item>
              <el-breadcrumb-item v-if="category3 !== ''">三级类目</el-breadcrumb-item>
            </el-breadcrumb>
            <el-button size="small" style="margin-left: 10px;margin-top: 3px;">编辑类目</el-button>
          </el-row>
      </el-form-item>
      <el-form-item label="选择服务类型:">
        <el-radio-group v-model="radio">
          <el-radio :label="3">按时间计费</el-radio>
          <el-radio :label="6">按项目计费</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="服务标题:">
        <el-input
           type="text"
           placeholder="请输入内容"
           v-model="text"
           maxlength="30"
           style="width: 50%"
           show-word-limit
        >
        </el-input>
      </el-form-item>
      <el-form-item label="服务封面:">
        <div class="ui-cover">
          <div class="ui-cover-left">
            <el-image class="img" src="https://rms.zbj.com/resource/redirect?key=homesite/task/2021/03/31/QQ截图20210316153454.png/origine/46818b04-856e-43aa-b68d-5ca15a1e67d8"></el-image>
          </div>
          <div class="ui-cover-right">
<!--            <div class="ui-cover-tip">-->
<!--              <span>俗话说“货卖一张皮”，好的服务封面可以为您吸引更多的客户</span>-->
<!--            </div>-->
            <p style="margin: 0 0 10px;">
              <el-button>上传</el-button><br>
              <span class="ui-cover-tip-span">1.图片尺寸不低于200*200,大小不超过500K。</span><br>
              <span class="ui-cover-tip-span">2.图片尽量清晰，并能够体现服务卖点</span><br>
            </p>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="服务价格:">
        <el-input v-model="input" placeholder="请输入内容" style="width: 10%"></el-input> 元 -
        <el-select v-model="value" placeholder="请选择">
          <el-option
             v-for="item in options"
             :key="item.value"
             :label="item.label"
             :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="服务库存:">
        <el-input v-model="input" placeholder="请输入内容" style="width: 10%"></el-input> 件
      </el-form-item>
      <el-form-item label="焦点主图:">
        <div class="pub-select-on">
          <div class="open-case">
            <p>焦点主图是影响雇主下单的重要因素。焦点主图丰富的服务，成交量比没有焦点主图的服务要很多哦</p>
            <div class="pub-up-buttons">
              <el-button>上传图片</el-button>
              <el-button>上传视频</el-button>
              <el-button>上传音频</el-button>
            </div>
            <div class="case-wrap">
              <div class="ui-case">
                <div class="ui-case-foot">
                  <div class="ui-case-foot-prev"><i class="iconfont"> &lt; </i> </div>
                  <div class="ui-case-min-wrap">
                    <ul class="ui-case-min-imgs">
                      <li class="ui-case-min-item">
                        <el-img class="img" width="120" height="60" src="https://homesitetask.zbjimg.com/homesite/task/2021/03/31/QQ截图20210316153523.png/origine/abaeeff1-fefc-4d12-b83b-ee4e1dbddff9"></el-img>
                        <p class="ui-case-del" style="bottom: 0px">
                          <a href="javascript:;">删除</a>
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div class="ui-case-foot-next"><i class="iconfont"> > </i></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="服务详情:">
        <el-input
           type="textarea"
           :rows="12"
           placeholder="请输入内容"
           v-model="textarea">
        </el-input>
      </el-form-item>
      <div style="text-align: center" ><el-button type="primary">发布</el-button></div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'backPublishServiceStep2',
  data () {
    return {
      radio: '3',
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
      value: ''
    }
  }
}
</script>

<style scoped>
.ui-cover{
  overflow: hidden;
}
.ui-cover-left{
  float: left;
  color: #DADADA;
  text-align: center;
  line-height: 120px;
  font-size: 17px;
  width: 120px;
  height: 120px;
  border: 1px solid #dadada;
  position: relative;
  overflow: hidden;
}
.ui-cover-right{
  float: left;
  margin-left: 20px;
  width: 425px;
  height: 120px;
  color: #999;
}
.img{
  height: auto;
  vertical-align: middle;
  border: 0;
  width: 100%;
}
.ui-cover-tip-span{
  color:  #409eff;
}
.pub-select-on{
  overflow: hidden;
  margin-top: 15px;
}
.pub-select-on .open-case p{
  margin: 0;
  line-height: 20px;
  color: #999;
}
.pub-up-buttons{
  margin: 10px 0;
}
.case-wrap{
  margin-top: 55px;
  height: 160px;
  background: #f8f8f8;
  width: 680px;
}
.ui-case{
  width: 800px;
  position: relative;
}
.ui-case-foot{
  width: 778px;
  margin-top: 10px;
  padding: 20px 10px 10px;
}
.ui-case-foot-prev,.ui-case-foot-next{
  width: 13px;
  height: 120px;
  line-height: 120px;
  cursor: pointer;
}
.ui-case-foot-prev{
  float: left;
}
.ui-case-foot-next{
  float: left;
  position: relative;
  right: -5px;
}
.ui-case-min-wrap{
  position: relative;
  float: left;
  width: 635px;
  overflow: hidden;
  height: 120px;
}
.iconfont{
  font-size: 15px;
  margin-right: 3px;
}
.ui-case-min-imgs{
  position: absolute;
  margin: 0;
  list-style: none;
  width: auto;
  height: 120px;
  overflow: hidden;
}
ul{
  padding: 0;
  margin: 0 0 10px 25px;
}
li{
  margin-left: 5px;
  float: left;
  display: inline;
  color: #ededed;
  width: 120px;
  height: 120px;
  line-height: 120px;
  overflow: hidden;
  position: relative;
  background: #fcfcfc;
  text-align: center;
  filter: alpha(opacity=30);
  cursor: move;
}
.ui-case-del{
  margin: 0;
  position: absolute;
  bottom: -20px;
  left: 0;
  height: 20px;
  width: 120px;
  background: rgba(0, 0, 0, 0.6);
  background: #000\9;
  text-align: center;
}
.ui-case-min-item p{
  margin: 0;
  line-height: 20px;
  color: #999;
}
.ui-case-min-item p a{
  color: #fff;
  text-decoration: none;
}
</style>
