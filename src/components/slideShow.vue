<template>
<!--  弃用-->
<div style="margin-top: 100px">
  <el-button @click="pre()">上一个</el-button>
  <div style="margin: 3px;background-color: green">
    <el-image v-for="(item,index) in images" :key="index" :src="item" class="slide-show-image no-display"
    :class="{'slidePre':index>=currentIndex - 1 && index<= currentPageLast && backButton, 'slideBack': index>=currentIndex&&
    index<=currentPageLast+1&&forButton, 'display':index>=index&&index<=currentPageLast}"></el-image>
  </div>
  <el-button @click="next()">下一个</el-button>
</div>
</template>

<script>
export default {
  name: 'slideShow',
  methods: {
    pre () {
      this.backButton = true
      setTimeout(this.forButton, 1000)
    },
    next () {
      this.forButton = true
      setTimeout(this.forButton, 1000)
    }
  },
  computed: {
    currentPageCount () {
      if (this.currentIndex + this.maxCountOfPage <= this.total) {
        return this.maxCountOfPage
      } else {
        return this.total - this.currentIndex + 1
      }
    },
    currentPageLast () {
      if (this.currentIndex + this.maxCountOfPage <= this.total) {
        return this.currentIndex + this.maxCountOfPage - 1
      } else {
        return this.total - 1
      }
    }
  },
  data () {
    return {
      images: ['https://img12.360buyimg.com/n5/s54x54_jfs/t1/148767/39/18017/86358/5fd32ff0E5ca41721/d885f7c401dfa557.jpg',
        'https://img12.360buyimg.com/n5/s54x54_jfs/t1/142574/9/17878/51690/5fd34693E1d6142e2/d2d35afca393e566.jpg',
        'https://img12.360buyimg.com/n5/s54x54_jfs/t1/136123/20/19495/50331/5fd34697E35ee8d84/9e542233d66da7c1.jpg',
        'https://img12.360buyimg.com/n5/s54x54_jfs/t1/133295/19/19538/138037/5fd3469bE861a6bd9/f8b640b7d732a93c.jpg',
        'https://img12.360buyimg.com/n5/s54x54_jfs/t1/141270/6/17695/85325/5fd3469eE061669e3/4ace6b708fd72215.jpg'],
      slide1: false,
      flag: false,
      currentIndex: 0,
      maxCountOfPage: 3,
      total: 5,
      backButton: false,
      forButton: false
    }
  }

}
</script>

<style scoped>
.slide-show-image:hover{
  border: 2px solid red;
}
.slide-show-image{
  border: 2px solid transparent;
  transition: 1s;
}
/*向左滑*/
.slidePre{
  transform: translateX(10px);
}
.slideFor{
  transform: translateX(-10px);
}
.no-display{
  display: none;
}
.display{
  display: inline-block;
}
</style>
