<template>
  <el-row>
    <el-col :offset="3" :span="18">
      <receive-and-order-template>
        <template v-slot:mainContent>
          <ul class="left">
            <li style="color: red;font-weight: bold">请收到货后,再确认收货！否则您可能钱货两空！</li>
            <li>如果您想申请退款，<a href="#">请点击这里</a></li>
          </ul>
          <el-form label-width="200px" class="left">
            <el-form-item label="支付宝支付密码：">
              <div class="left">
                <el-input placeholder="请输入密码" show-password style="width: 50%"></el-input>
                <a href="#" class="forgetPass">忘记密码?</a>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary">确定</el-button>
            </el-form-item>
          </el-form>
        </template>
      </receive-and-order-template>
    </el-col>
  </el-row>
</template>

<script>
import receiveAndOrderTemplate from '../components/front/orderDetails/receiveAndOrderTemplate'
export default {
  name: 'confirmReceipt',
  components: { receiveAndOrderTemplate }
}
</script>

<style scoped>
.left{
  text-align: left;
}
.forgetPass{
  margin-left: 10px;
}
</style>
