<template>
  <div class="allDiv border">
    <ul>
      <li @click="tabClicked(index)" v-for="(item,index) in items" :key="index">
        <a class="tarbarA" href="#none" :class="{ aVisited: index === currentIndex}">{{item}}</a>
      </li>
      <li class="checkbox"><slot><el-checkbox>只看当前商品评价</el-checkbox></slot></li>
      <li class="dropdown">
        <el-dropdown @command="handleCommand">
          <span>
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="a">默认排序</el-dropdown-item>
              <el-dropdown-item command="b">时间排序</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tarbarTemp',
  data () {
    return {
      items: ['全部评价', '晒图', '视频晒单', '好评', '中评', '差评'],
      currIndex: -1
    }
  },
  computed: {
    currentIndex () {
      return this.currIndex
    }
  },
  methods: {
    tabClicked (index) {
      this.currIndex = index
      console.log(index)
    }
  }
}
</script>

<style scoped>
.allDiv{
  position: relative;
  width: 100%;
  text-align: left;
}
.border{
  border: 1px solid red;
}
.allDiv ul{
  list-style: none;
  padding-left: 0px;
  text-align: left;
  display: inline-block;
}
.allDiv ul li{
  display: inline-block;
  margin-left: 15px;
  /*color: #666666;*/
}

.allDiv ul .checkbox{
  margin-left: 30px;
  display: inline-block;
  color: #666666;
  position: absolute;
  right: 120px;
}
.allDiv ul .dropdown{
  border: 1px solid gray;
  position: absolute;
  right: 20px;
}

.allDiv ul li a{
  text-decoration: none;
}
/*.allDiv ul li a{*/
/*  color: #606266;*/
/*}*/
.tarbarA{
  color: #606266;;
}
.tarbarA:focus,.tarbarA:hover{
  color: #409eff;
}
.aUnvisited{
  /*color: #666666;*/
}

.aVisited{
  color: #66b1ff;
}

</style>
