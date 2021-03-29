<template>
  <div class="allDiv">
    <el-form class="search-title" :inline="true" label-width="100px">
      <el-form-item>
        <el-input
           style="width: 500px;"
           placeholder="请输入内容"
           v-model="input3"
        >
          <template #append>
            <el-button icon="el-icon-search"></el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="search-button" @click="spreadClick">
          <span>高级搜索</span>
          <i :class="{'el-icon-arrow-down': !spread, 'el-icon-arrow-up': spread}"></i>
        </el-button>
      </el-form-item>
    </el-form>
    <div class="search-content" :style="{'display': spread? 'block': 'none'}">
      <el-form label-width="100px" :inline="true">
        <el-form-item label="订单来源：">
          <el-checkbox label="复选框 A"></el-checkbox>
          <el-checkbox label="复选框 B"></el-checkbox>
          <el-checkbox label="复选框 C"></el-checkbox>
        </el-form-item>
      </el-form>
      <el-form label-width="100px" :inline="true">
        <el-form-item label="订单状态：">
          <el-select v-model="value" placeholder="请选择">
            <el-option
               v-for="item in options"
               :key="item"
               :label="item.label"
               :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="托管状态：">
          <el-select v-model="value" placeholder="请选择">
            <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="预算金额：">
          <el-input v-model="input" placeholder="请输入内容" style="width: 120px"></el-input>
          -
          <el-input v-model="input" placeholder="请输入内容" style="width: 120px"></el-input>
        </el-form-item>
      </el-form>
      <el-form label-width="100px" :inline="true">
        <el-form-item label="发布时间：">
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
        <el-button style="float: right" type="primary">搜索</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'orderSearch',
  methods: {
    spreadClick () {
      this.spread = !this.spread
    }
  },
  data () {
    return {
      spread: false,
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
.search-button{
  margin-left: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
  border: none;
  color: #409eff;
}
.search-button:focus,.search-button:hover,.search-button:active{
  background: transparent;
}
.search-content{
  background: #f8fcff;
  border: 1px solid #eee;
  padding: 16px 16px 6px;
  margin: 10px 20px;
}
.search-title{
  margin: 10px 20px;
}
.allDiv{
  text-align: left;
}
</style>
