<template>
  <div>
    <evaluate-tarbar/>
    <publish-evaluate-main-content/>
    <tarbar-temp/>
    <comment-item/>
  </div>
</template>

<script>
import EvaluateTarbar from '@/components/evaluateTarbar'
import PublishEvaluateMainContent from '@/components/publishEvaluateMainContent'
import TarbarTemp from '@/components/tarbarTemp'
import CommentItem from '@/components/commentItem'
export default {
  name: 'publishEvaluateMain',
  components: { CommentItem, TarbarTemp, PublishEvaluateMainContent, EvaluateTarbar }
}
</script>

<style scoped>

</style>
