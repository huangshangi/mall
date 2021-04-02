<template>
  <div class="allDiv">
    <h4>待雇主托管</h4>
    <div class="status-div">
      <el-button>发起合同</el-button>
    </div>
    <div class="status-div">
      <el-button plain>取消合作</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tradeHallStatusBar'
}
</script>

<style scoped>
.allDiv{
  border: 1px solid #64b0ff;
  box-shadow: 0 2px 4px 0 rgba(159,198,238,.71);
}
h4{
  color: #2D8CF0;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
}
.status-div{
  margin: 10px 0px;
  text-align: center;
}
</style>
