<template>
  <div class="allDiv border">
<!--    <el-row>-->
<!--      <el-col :span="18" :offset="3" class="border">-->
  <el-row class="alginCenter">
    <el-col :span="1">
      <el-checkbox></el-checkbox>
    </el-col>
    <el-col :span="2">
      <span>全选</span>
    </el-col>
    <el-col :span="8">
      <span>商品信息</span>
    </el-col>
    <el-col :span="2" :offset="1">
      <span>单价</span>
    </el-col>
    <el-col :span="6">
      <span>数量</span>
    </el-col>
    <el-col :span="2">
      <span>金额</span>
    </el-col>
    <el-col :span="2">
      <span>操作</span>
    </el-col>
  </el-row>
  <el-row class="alginCenter">
    <el-col :span="1">
      <el-checkbox></el-checkbox>
    </el-col>
    <el-col :span="10" class="alginleft">
      <span>店铺:tiantian专营店</span>
    </el-col>
  </el-row>
  <el-row class="alginCenter">
    <el-col :span="1" class="verticalCenter">
      <el-checkbox></el-checkbox>
    </el-col>
    <el-col :span="2" class="verticalCenter">
      <el-image src="https://img.alicdn.com/bao/uploaded/i6/TB15FQphVzqK1RjSZFCzHTbxVXa_025238.jpg_80x80.jpg"/>
    </el-col>
    <el-col :span="8" class="alginleft verticalCenter">
      <a href="#">【年货价】顺丰包邮 Huawei/华为 Mate 20 华为Mate20pro手机官方旗舰店nova5i MATE20X 5G全网通手机</a>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="2" class="verticalCenter">
      <span>￥3059.00</span>
    </el-col>
    <el-col :span="6" class="verticalCenter">
      <el-input-number :min="1" :max="10" label="描述文字"></el-input-number>
    </el-col>
    <el-col :span="2" class="verticalCenter">
      ￥3059.00
    </el-col>
    <el-col :span="2" class="verticalCenter">
      <el-button>删除</el-button>
    </el-col>
  </el-row>
  <el-row class="alginCenter">
          <el-col :span="1" class="verticalCenter">
            <el-checkbox></el-checkbox>
          </el-col>
          <el-col :span="2" class="verticalCenter">
            <el-image src="https://img.alicdn.com/bao/uploaded/i6/TB15FQphVzqK1RjSZFCzHTbxVXa_025238.jpg_80x80.jpg"/>
          </el-col>
          <el-col :span="8" class="alginleft verticalCenter">
            <a href="#">【年货价】顺丰包邮 Huawei/华为 Mate 20 华为Mate20pro手机官方旗舰店nova5i MATE20X 5G全网通手机</a>
          </el-col>
          <el-col :span="1"></el-col>
          <el-col :span="2" class="verticalCenter">
            <span>￥3059.00</span>
          </el-col>
          <el-col :span="6" class="verticalCenter">
            <el-input-number :min="1" :max="10" label="描述文字"></el-input-number>
          </el-col>
          <el-col :span="2" class="verticalCenter">
            ￥3059.00
          </el-col>
          <el-col :span="2" class="verticalCenter">
            <el-button>删除</el-button>
          </el-col>
        </el-row>
<!--      </el-col>-->
<!--    </el-row>-->
<!--    <el-row>-->
<!--      <el-col :span="18" :offset="3" class="border">-->
  <el-row class="alginCenter">
    <el-col :span="1">
      <el-checkbox></el-checkbox>
    </el-col>
    <el-col :span="10" class="alginleft">
      <span>店铺:tiantian专营店</span>
    </el-col>
  </el-row>
  <el-row class="alginCenter">
    <el-col :span="1" class="verticalCenter">
      <el-checkbox></el-checkbox>
    </el-col>
    <el-col :span="2" class="verticalCenter">
      <el-image src="https://img.alicdn.com/bao/uploaded/i6/TB15FQphVzqK1RjSZFCzHTbxVXa_025238.jpg_80x80.jpg"/>
    </el-col>
    <el-col :span="8" class="alginleft verticalCenter">
      <a href="#">【年货价】顺丰包邮 Huawei/华为 Mate 20 华为Mate20pro手机官方旗舰店nova5i MATE20X 5G全网通手机</a>
    </el-col>
    <el-col :span="1"></el-col>
    <el-col :span="2" class="verticalCenter">
      <span>￥3059.00</span>
    </el-col>
    <el-col :span="6" class="verticalCenter">
      <el-input-number :min="1" :max="10" label="描述文字"></el-input-number>
    </el-col>
    <el-col :span="2" class="verticalCenter">
      ￥3059.00
    </el-col>
    <el-col :span="2" class="verticalCenter">
      <el-button>删除</el-button>
    </el-col>
  </el-row>
<!--      </el-col>-->
<!--    </el-row>-->
  <el-row class="border">
    <el-col :span="1" class="verticalCenter"><el-checkbox></el-checkbox></el-col>
    <el-col :span="2" class="verticalCenter"><span>全选</span></el-col>
    <el-col :span="2" class="verticalCenter"><a href="#">删除</a></el-col>
    <el-col :span="9" class="verticalCenter"></el-col>
    <el-col :span="4" class="verticalCenter"><span>已选商品1件</span></el-col>
    <el-col :span="4" class="verticalCenter"><span>合计￥1000000.00</span></el-col>
    <el-col :span="2" class="verticalCenter"><el-button>结算</el-button></el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: 'shoppingCart'
}
</script>

<style scoped>
.allDiv{

}
.border{
  border: 1px solid red;
}
.alginCenter{
  text-align: center;
  margin-top: 10px;
}
.alginleft{
  text-align: left;
}
.verticalCenter{
  margin: auto;
}
.verticalCenter a{
  text-decoration: none;
  color: #3c3c3c;
}
.verticalCenter a:hover{
  text-decoration: underline;
  color: red;
}
</style>
