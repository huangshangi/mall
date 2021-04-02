<template>
  <el-row class="border">
    <el-col :span="2">
      <!--  地点级联-->
      <div class="block">
        <!--    <span class="demonstration"></span>-->
        <el-cascader
          :placeholder="address"
          v-model="value"
          :options="addressList"
          :props="props"
          @change="addressChange">
        </el-cascader>
      </div>
    </el-col>
    <!-- 登录按钮   -->
    <!--是否登录 未登录显示登录 已登录显示个人信息    -->
    <el-col :span="2" :offset="10 ">
      <el-button v-if="profile!=null">登录</el-button>
      <el-button @click="clickBuyerBack" v-else>huangshangi</el-button>
    </el-col>
    <!-- 消息按钮   -->
    <el-col :span="2">
      <el-button>消息</el-button>
    </el-col>
    <!-- 购物车按钮   -->
    <el-col :span="2">
      <el-button @click="clickShoppingCart">购物车</el-button>
    </el-col>
<!--    商家入驻-->
    <el-col :span="2">
      <el-button>商家入驻</el-button>
    </el-col>
    <!-- 我的订单按钮   -->
    <el-col :span="2">
      <el-button @click="clickOrders">我的订单</el-button>
    </el-col>
<!--    <el-col :span="4">-->
<!--      &lt;!&ndash;  &ndash;&gt;-->
<!--      <el-dropdown>-->
<!--        <span class="el-dropdown-link">-->
<!--          {{address}}<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
<!--        </span>-->
<!--        <template #dropdown>-->
<!--          <el-dropdown-menu>-->
<!--            <el-dropdown-item v-for="(item,index) in List" :key="index">{{item}}</el-dropdown-item>-->
<!--          </el-dropdown-menu>-->
<!--        </template>-->
<!--      </el-dropdown>-->
<!--    </el-col>-->
  </el-row>
</template>

<script>
export default {
  name: 'title',
  props: {
    // address: String,
    profile: Object
  },
  methods: {
    addressChange () {
      console.log('地址改变')
    },
    clickShoppingCart () {
      this.$router.push('/shoppingCart')
    },
    clickOrders () {
      this.$router.push('/buyerBack/orders')
    },
    clickBuyerBack () {
      this.$router.push('/buyerBack')
    }
  },
  data () {
    return {
      address: '山东',
      List: ['湖南', '上海'],
      props: { expandTrigger: 'hover' },
      addressList: [
        {
          value: '山东',
          label: '山东',
          children: [
            {
              value: '潍坊',
              label: '潍坊'
            },
            {
              value: '济南',
              label: '济南'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.el-button{
  border-style: none;
}

.el-button:focus, .el-button:hover{
  color: #409eff;
  background-color: transparent;
}
.border{
  border: 1px solid red;
}

</style>
