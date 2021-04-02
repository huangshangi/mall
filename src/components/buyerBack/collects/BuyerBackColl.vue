<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" style="margin: 20px">
    <el-tab-pane label="收藏的服务" name="first">
      <template v-for="item in 2" :key="item">
        <el-row>
          <template v-for="item2 in 6" :key="item2">
            <el-col :span="4">
              <buyer-back-image-temp/>
            </el-col>
          </template>
        </el-row>
      </template>
      <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
      </el-pagination>
    </el-tab-pane>
    <el-tab-pane label="收藏的店铺" name="second">
      <template v-for="item in 5" :key="item">
        <buyer-back-coll-store-temp style="padding: 10px"/>
      </template>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import BuyerBackImageTemp from '../common/BuyerBackImageTemp'
import BuyerBackCollStoreTemp from './BuyerBackCollStoreTemp'
export default {
  name: 'BuyerBackColl',
  components: { BuyerBackCollStoreTemp, BuyerBackImageTemp },
  data () {
    return {
      activeName: 'first'
    }
  }
}
</script>

<style scoped>

</style>
