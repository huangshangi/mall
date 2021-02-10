<template>
  <div>
    <el-row>
      <el-col :span="18">
        <slot name="content"/>
        <slot name="list">
          <consult-history/>
        </slot>
      </el-col>
      <el-col :span="6">
        <goods-digest-info :refund="refund" :report="report" :detail="detail">
          <template v-slot:title>
            <slot name="digest-title"/>
          </template>
        </goods-digest-info>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ConsultHistory from './consultHistory'
import GoodsDigestInfo from './goodsDigestInfo'
export default {
  name: 'detailStepTemp',
  components: { GoodsDigestInfo, ConsultHistory },
  props: {
    refund: Boolean,
    report: Boolean,
    detail: Boolean
  }
}
</script>

<style scoped>

</style>
