<template>
  <el-row>
    <el-col :span="4">
      <!--  地点级联-->
      <div class="block">
        <!--    <span class="demonstration"></span>-->
        <el-cascader
          :placeholder="address"
          v-model="value"
          :options="addressList"
          :props="props"
          @change="addressChange"></el-cascader>
      </div>
    </el-col>
    <!--是否登录 未登录显示登录 已登录显示个人信息    -->
    <el-col :span="4">
      <el-button v-if="profile==null">登录</el-button>
      <el-button v-else>{{profile.name}}</el-button>
    </el-col>
    <el-col :span="4">
      <!--  -->
      <el-dropdown>
        <span class="el-dropdown-link">
          {{address}}<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="(item,index) in List" :key="index">{{item}}</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
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
</style>
