<template>
  <div>
    <evaluate-tarbar/>
    <publish-evaluate-main-content/>
    <tarbar-temp/>
    <comment-item/>
  </div>
</template>

<script>
import EvaluateTarbar from './evaluateTarbar'
import PublishEvaluateMainContent from './publishEvaluateMainContent'
import TarbarTemp from '../tarbarTemp'
import CommentItem from '../commentItem'
export default {
  name: 'publishEvaluateMain',
  components: { CommentItem, TarbarTemp, PublishEvaluateMainContent, EvaluateTarbar }
}
</script>

<style scoped>

</style>
