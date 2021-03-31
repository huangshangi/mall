<template>
  <div class="pub-success">
    <p>
      发布成功
      <a href="javascript:;" class="link-to-service">查看服务</a>
    </p>
    <el-button>继续发布服务</el-button>
  </div>
</template>

<script>
export default {
  name: 'backPublishServiceStep3'
}
</script>

<style scoped>
.pub-success{
  text-align: left;
  background: #f6f9ff;
  margin-top: 20px;
  height: 240px;
  line-height: 45px;
  padding: 80px 0 0 50%;
}
.pub-success p:first-child{
  font-size: 20px;
  font-weight: bold;
  background: url(https://t5.zbjimg.com/t5s/uc/images/pub-success.gif) no-repeat;
  margin-left: -50px;
  padding-left: 50px;
}
.link-to-service{
  font: normal normal 18px arial, 'microsoft yahei';
  text-decoration: underline;
  margin-left: 0;
  color: #666;
}
</style>
