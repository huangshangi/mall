<template>
  <el-tabs type="border-card">
    <el-tab-pane label="已发布的服务" style="text-align: left">
      <el-form label-width="80px" inline>
        <el-form-item label="一级类目">
          <el-select v-model="value" placeholder="请选择">
            <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级类目">
          <el-select v-model="value" placeholder="请选择">
            <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="三级类目">
          <el-select v-model="value" placeholder="请选择">
            <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form label-width="80px" inline>
        <el-form-item label="价格">
          <el-input style="width: 120px"
             v-model="input4">
            <template #prefix>
              ￥
            </template>
          </el-input>
          -
          <el-input style="width: 120px"
                    v-model="input4">
            <template #prefix>
              ￥
            </template>
          </el-input>
        </el-form-item>
        <el-form-item label="销量">
          <el-input style="width: 120px"
                    v-model="input4">
            <template #prefix>
              ￥
            </template>
          </el-input>
          -
          <el-input style="width: 120px"
                    v-model="input4">
            <template #prefix>
              ￥
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-form label-width="80px" inline>
        <el-form-item label="状态">
          <el-select v-model="value" placeholder="请选择">
            <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类型">
          <el-select v-model="value" placeholder="请选择">
            <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="input" placeholder="输入服务ID或服务标题进行搜索" style="width: 300px"></el-input>
        </el-form-item>
      </el-form>
      <el-form label-width="80px" inline>
        <el-form-item label="  ">
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
      <div>
        <el-form label-width="80px" inline>
          <el-form-item>
            <el-button type="primary">发布服务</el-button>
            <el-button>暂停出售</el-button>
            <el-button>恢复出售</el-button>
            <el-button>删除服务</el-button>
          </el-form-item>
        </el-form>
        <el-table
           stripe
           :data="tableData"
           style="width: 100%">
          <el-table-column
             type="selection"
             width="55">
          </el-table-column>
          <el-table-column
             prop="serviceInfo"
             label="服务信息"
             width="150">
          </el-table-column>
          <el-table-column
             prop="price"
             label="价格"
             width="150">
          </el-table-column>
          <el-table-column
             prop="saleAmount"
             label="销量"
             width="150">
          </el-table-column>
          <el-table-column
             prop="storeAmount"
             label="库存"
             width="120">
          </el-table-column>
          <el-table-column
             prop="state"
             label="状态"
             width="120">
          </el-table-column>
          <el-table-column
             prop="type"
             label="类目"
             width="120">
          </el-table-column>
          <el-table-column
             prop="publishDate"
             label="发布时间"
             width="120">
          </el-table-column>
          <el-table-column
             prop="modifyDate"
             label="修改时间"
             width="120">
          </el-table-column>
          <el-table-column
             label="操作"
             width="300">
            <template #default="scope">
              <div style="display: inline-block">
                <el-button @click="handleClick(scope.row)" type="text" size="small">暂停出售</el-button>
                <el-button type="text" size="small">恢复出售</el-button>
                <el-button type="text" size="small">删除服务</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-tab-pane>
    <el-tab-pane label="上下架记录">
      <el-form label-width="80px" inline style="text-align: left">
        <el-form-item label="时间">
          <el-date-picker
             v-model="value1"
             type="date"
             placeholder="选择日期">
          </el-date-picker>
          -
          <el-date-picker
             v-model="value1"
             type="date"
             placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="value" placeholder="请选择">
            <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="input" placeholder="输入服务ID或服务标题进行搜索" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="  ">
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
      <el-table
         stripe
         :data="tableData2"
         style="width: 100%">
        <el-table-column
           prop="serviceInfo"
           label="服务信息"
           width="150">
        </el-table-column>
        <el-table-column
           prop="price"
           label="价格"
           width="150">
        </el-table-column>
        <el-table-column
           prop="saleAmount"
           label="销量"
           width="150">
        </el-table-column>
        <el-table-column
           prop="state"
           label="状态"
           width="120">
        </el-table-column>
        <el-table-column
           prop="type"
           label="类目"
           width="120">
        </el-table-column>
        <el-table-column
           prop="date"
           label="时间"
           width="120">
        </el-table-column>
        <el-table-column
           prop="reason"
           label="原因"
           width="120">
        </el-table-column>
      </el-table>
    </el-tab-pane>
    <el-tab-pane label="服务回收站">
      <el-form label-width="80px" inline>
        <el-form-item label="一级类目">
          <el-select v-model="value" placeholder="请选择">
            <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级类目">
          <el-select v-model="value" placeholder="请选择">
            <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="三级类目">
          <el-select v-model="value" placeholder="请选择">
            <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <el-form label-width="80px" inline>
        <el-form-item label="类型">
          <el-select v-model="value" placeholder="请选择">
            <el-option
               v-for="item in options"
               :key="item.value"
               :label="item.label"
               :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="时间">
          <el-date-picker
             v-model="value1"
             type="date"
             placeholder="选择日期">
          </el-date-picker>
          -
          <el-date-picker
             v-model="value1"
             type="date"
             placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-input v-model="input" placeholder="输入服务ID或服务标题进行搜索" style="width: 300px"></el-input>
        </el-form-item>
      </el-form>
      <el-form label-width="80px" inline>
        <el-form-item label="  ">
          <el-button type="primary">查询</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
      <el-form label-width="80px" inline>
        <el-form-item>
          <el-button type="primary">批量恢复</el-button>
        </el-form-item>
      </el-form>
      <el-table
         stripe
         :data="tableData3"
         style="width: 100%">
        <el-table-column
           type="selection"
           width="55">
        </el-table-column>
        <el-table-column
           prop="serviceInfo"
           label="服务信息"
           width="150">
        </el-table-column>
        <el-table-column
           prop="price"
           label="价格"
           width="150">
        </el-table-column>
        <el-table-column
           prop="saleAmount"
           label="销量"
           width="150">
        </el-table-column>
        <el-table-column
           prop="type"
           label="类目"
           width="120">
        </el-table-column>
        <el-table-column
           prop="deleteDate"
           label="删除时间"
           width="120">
        </el-table-column>
        <el-table-column
           label="操作"
           width="300">
          <template #default="scope">
            <div style="display: inline-block">
              <el-button @click="handleClick(scope.row)" type="text" size="small">恢复</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'backServiceManager',
  data () {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      tableData: [{
        serviceInfo: '网站设计',
        price: 100,
        saleAmount: 1,
        storeAmount: 99,
        state: '上架中',
        type: 'UI设计',
        publishDate: '2021-03-30',
        modifyDate: '2021-03-30'
      }],
      tableData2: [{
        serviceInfo: '网站设计',
        price: 100,
        saleAmount: 1,
        state: '上架中',
        type: 'UI设计',
        date: '2021-03-30',
        reason: ''
      }],
      tableData3: [{
        serviceInfo: '网站设计',
        price: 100,
        saleAmount: 1,
        type: 'UI设计',
        deleteDate: '2021-03-30'
      }]
    }
  }
}
</script>

<style scoped>
*{
  text-align: left;
}
</style>
