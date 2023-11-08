<script>
import { getList } from '@/api/product'
export default {
  data() {
    return {
      productList: [],
      total: 0,
      pageNum: 1,
      pageSize: 5
    }
  },
  methods: {
    getProducts: function(pageNum, pageSize) {
      let _this = this;
      getList(pageNum, pageSize).then(response => {
        console.log(response.data)
        _this.productList = response.data.records
        _this.total = response.data.total
        _this.pageNum = response.data.current
        _this.pageSize = response.data.size
      })
    },
    handleSizeChange(val) {
      this.getProducts(this.pageNum, val)
    },
    handleCurrentChange(val) {
      this.getProducts(val, this.pageSize)
    }
  },
  mounted: function() {
    this.getProducts(this.pageNum, this.pageSize)
  }
}

</script>

<template>
<div>
  <el-table
    :data="productList"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="productId"
      label="商品编号"
      width="150">
    </el-table-column>
    <el-table-column
      prop="productName"
      label="商品名称"
      width="120">
    </el-table-column>
    <el-table-column
      prop="soldNum"
      label="销量"
      width="120">
    </el-table-column>
    <el-table-column
      prop="productStatus"
      label="商品状态"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="评论管理"
      width="100">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="规格管理"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="参数管理"
      width="120">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="图片管理"
      width="120">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间"
      width="120">
    </el-table-column>
    <el-table-column
      prop="updateTime"
      label="修改时间"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="pageNum"
    :page-sizes="[5, 10, 20, 30]"
    :page-size="pageSize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="total">
  </el-pagination>
</div>
</template>

<style scoped lang="scss">

</style>
