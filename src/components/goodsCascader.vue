<template>
 <div class="alldiv">
   <div class="leftdiv" id="leftdiv">
     <ul>
       <li v-for="(item,index) in goodsList" :key="index" @mouseover="goodsListOver(index)" @mouseout="goodsListOut()">
         <a href="#">{{item.name}}</a>
       </li>
     </ul>
   </div>
   <div id="hiddendiv" class="rightdiv" :class="{'showHide':showHide}" @mouseover="hiddenPanelOver()" @mouseout="hiddenPanelOut()">
     <dl v-for="(item,index) in goodsList[seleIndex].childrens" :key="index">
       <dt><a href="#">{{item.name}}</a></dt>
       <dd v-for="(item2,index2) in item.childrens" :key="index2">
         <a href="#">{{item2.name}}</a>
       </dd>
     </dl>
   </div>
 </div>
</template>

<script>
export default {
  name: 'goodsCascader',
  data () {
    return {
      goodsOut: true,
      hiddenOut: true,
      hiddenDisplay: false,
      seleIndex: 0,
      goodsList: [{
        name: '家用电器',
        id: 1,
        childrens: [
          {
            name: '二级',
            id: 2,
            childrens: [
              {
                name: '超博电视'
              }
            ]
          }
        ]
      }]
    }
  },
  props: {
    // goodsList: Array
  },
  computed: {
    showHide: function () {
      const res = !(this.goodsOut && this.hiddenOut)
      return res
    }
  },
  methods: {
    goodsListOver (index) {
      this.seleIndex = index
      let initTop = document.getElementById('leftdiv').offsetTop
      const h0 = document.getElementById('leftdiv').offsetTop + (index * 30)
      const y = document.getElementById('hiddendiv').offsetHeight
      const h = document.getElementById('leftdiv').style.top + y
      if (h < h0) {
        initTop = h0
      }
      document.getElementById('hiddendiv').style.top = initTop + 'px'
      this.goodsOut = false
    },
    goodsListOut () {
      this.goodsOut = true
    },
    hiddenPanelOver () {
      this.hiddenOut = false
      console.log('进入隐藏面板')
    },
    hiddenPanelOut () {
      this.goodsOut = true
      this.hiddenOut = true
    }
  }
}
</script>

<style scoped>
  .alldiv{
    position: relative;
  }
  .leftdiv{
    display: block;
    width: 240px;
    border: 2px solid #e4393c;
    margin: 0;
    padding: 0;
    z-index: 1;
    background-color: #fefefe;
  }
  .leftdiv li:hover{
    background-color: #d9d9d9;
  }
  .leftdiv ul{
    padding:0px;
    margin:0px;
  }
  .leftdiv ul li{
    height: 30px;
    list-style-type:none;
    text-align: left;
    padding-left: 20px;
    line-height: 30px;
  }
  .leftdiv ul li a{
    text-decoration:none;
    color: #333333;
  }
  .leftdiv ul li a:hover{
    /*color: #c81623;*/
    color: #409eff;
  }

  .rightdiv{
    position: absolute;
    display: none;
    float: left;
    width: 715px;
    left: 240px;
    top: 0px;
    border: 1px solid #DDD;
    z-index: 4;
    background: white;
    box-shadow: 0 0 8px #DDD;
    -moz-box-shadow: 0 0 8px #DDD;
    -webkit-box-shadow: 0 0 8px #DDD;
  }
  .rightdiv dl
  {
    display: block;
    border-bottom: 1px solid #EEE;
    padding-bottom: 6px;
    overflow: hidden;
  }
  .rightdiv dl dt
  {
    display: block;
    float: left;
    width: 60px;
    text-align: right;
    height: 22px;
    line-height: 22px;
    padding-right: 6px;
  }

  .rightdiv dl dt a
  {
    /*color: #e4393c;*/
    color: #409eff;
    font-weight: bolder;
    text-decoration: underline;
    font-size: 10pt;
  }
  .rightdiv dl dd
  {
    display: block;
    overflow: hidden;
  }
  .rightdiv dl dd a
  {
    display: block;
    float: left;
    border-left: 1px solid #CCC;
    color: #737373;
    font-size: 9pt;
    padding: 0 8px;
    height: 14px;
    line-height: 14px;
    margin: 4px 0;
  }
  .rightdiv dl dd a:hover{
    /*color: #e4393c;*/
    color: #409eff;
  }
  .showHide{
    display: block;
  }
</style>
