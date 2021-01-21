<template>
  <div class="allDiv border" v-for="item in 10" :key="item">
    <el-row>
      <el-col :span="3">
        <div class="border">
          <el-avatar :size="50" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"/>
          <span>huangshangi</span>
        </div>
      </el-col>

      <el-col :span="18">
        <div class="border divContent">
          <el-rate disabled v-model="itemValue" show-score="true" score-template="{value}分"/>
          <span style="display: block;">产品质量很好，性价比高，值得推荐！产品质量很好，性价比高，值得推荐！产品质量很好，性价比高，值得推荐！产品质量很好，性价比高，值得推荐！
          产品质量很好，性价比高，值得推荐！产品质量很好，性价比高，值得推荐！产品质量很好，性价比高，值得推荐！产品质量很好，性价比高，值得推荐！产品质量很好，性价比高，值得推荐！</span>
          <span>静默星空8GB+256GB 2021-01-20 16:47</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'commentItem',
  data () {
    return {
      itemValue: 5
    }
  }
}
</script>

<style scoped>

.allDiv{
  width: 100%;
}

.border{
  border: 1px solid red;
}

.divContent{
  text-align: left;
}
</style>
