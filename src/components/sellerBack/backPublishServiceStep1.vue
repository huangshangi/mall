<template>
  <div>
    <el-row class="selectCategory">
      <el-col class="select-category-div" :span="7" id="category1">
        <ul class="select-category-div-ul">
          <template v-for="item in categorys" :key="item">
            <li @click="category1Click(item)" :class="{active: category1 === item.name}">
              <a href="javascript:;">{{item.name}}</a>
              <i class="iconfont"> > </i>
            </li>
          </template>
        </ul>
      </el-col>
      <el-col class="select-category-div" :span="7" id="category2">
        <ul class="select-category-div-ul">
          <template v-for="item in category2s" :key="item">
            <li @click="category2Click(item)" :class="{active: category2 === item.name}">
              <a href="javascript:;">{{item.name}}</a>
              <i class="iconfont"> > </i>
            </li>
          </template>
        </ul>
      </el-col>
      <el-col class="select-category-div" :span="7" id="category3">
        <ul class="select-category-div-ul">
          <template v-for="item in category3s" :key="item" :class="{active: category3 === item.name}">
            <li @click="category3Click">
              <a href="javascript:;">{{item.name}}</a>
            </li>
          </template>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'backPublishServiceStep1',
  methods: {
    category1Click (item) {
      this.category2s = item.children
      this.category1 = item.name
      this.category2 = ''
      this.category3 = ''
      this.category3s = []
    },
    category2Click (item) {
      this.category3s = item.children
      this.category2 = item.name
      this.category3 = ''
    },
    category3Click (item) {
      this.category3 = item.name
    }
  },
  data () {
    return {
      category1: '',
      category2: '',
      category3: '',
      category2s: [],
      category3s: [],
      categorys: [
        {
          name: '一级类别1',
          children: [
            { name: '二级类别1-1', children: [{ name: '三级类别1-1-1' }, { name: '三级类别1-1-2' }, { name: '三级类别1-1-3' }] },
            { name: '二级类别1-2', children: [{ name: '三级类别1-2-1' }, { name: '三级类别1-2-2' }, { name: '三级类别1-2-3' }] },
            { name: '二级类别1-3', children: [{ name: '三级类别1-3-1' }, { name: '三级类别1-3-2' }, { name: '三级类别1-3-3' }] }
          ]
        },
        {
          name: '一级类别2',
          children: [
            { name: '二级类别2-1', children: [{ name: '三级类别2-1-1' }, { name: '三级类别2-1-2' }, { name: '三级类别2-1-3' }] },
            { name: '二级类别2-2', children: [{ name: '三级类别2-2-1' }, { name: '三级类别2-2-2' }, { name: '三级类别2-2-3' }] },
            { name: '二级类别2-3', children: [{ name: '三级类别2-3-1' }, { name: '三级类别2-3-2' }, { name: '三级类别2-3-3' }] }
          ]
        }]
    }
  }
}
</script>

<style scoped>
.selectCategory{
  padding-left: 150px;
  background: #f6f9ff;
  border: solid 1px #d2e0fa;
  overflow: hidden;
  margin-top: 15px;
}
.select-category-div{
  float: left;
  padding: 1px;
  height: 240px;
  border: solid 1px #d2e0fa;
  margin: 10px 5px;
  background: #fff;
}
.select-category-div-ul{
  padding: 0;
  margin: 0;
  margin-top: 0px;
  list-style: none;
  height: 206px;
  overflow-x: hidden;
  overflow-y: auto;
  margin-top: 1px;
}
li{
  text-indent: 20px;
  height: 34px;
  line-height: 34px;
  color: #888;
  cursor: pointer;
}
li:hover,.active{
  background: #fff4e6;
  border: dashed 1px #e5e3e8;
  height: 32px;
  line-height: 32px;
  margin-left: -1px;
}
.iconfont{
  float: right;
  margin-right: 10px;
  font-family: "fontello";
  font-style: normal;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
}
.select-category-div-ul a{
  color: #888;
  text-decoration: none;
}
</style>
