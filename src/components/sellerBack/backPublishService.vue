<template>
  <el-steps :active="1" simple>
    <el-step title="步骤 1" icon="el-icon-edit"></el-step>
    <el-step title="步骤 2" icon="el-icon-upload"></el-step>
    <el-step title="步骤 3" icon="el-icon-picture"></el-step>
  </el-steps>
  <template v-if="step === 1">
    <back-publish-service-step1/>
  </template>
  <template v-else-if="step === 2">
    <back-publish-service-step2/>
  </template>
  <template v-else>
    <back-publish-service-step3/>
  </template>
</template>

<script>
import BackPublishServiceStep1 from './backPublishServiceStep1'
import BackPublishServiceStep2 from './backPublishServiceStep2'
import BackPublishServiceStep3 from './backPublishServiceStep3'
export default {
  name: 'backPublishService',
  components: { BackPublishServiceStep3, BackPublishServiceStep2, BackPublishServiceStep1 },
  data () {
    return {
      step: 3
    }
  }
}
</script>

<style scoped>

</style>
