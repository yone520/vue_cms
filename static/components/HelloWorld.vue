<template>
  <div>
    <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="600">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template #default="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-bind="$attrs" v-model="dialogTableVisible" v-on="$listeners" @open="onOpen" @close="onClose" title="Dialog Titile">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="日期" prop="date">
          <el-date-picker v-model="formData.date" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
            :style="{width: '100%'}" placeholder="请选择日期" clearable></el-date-picker>
        </el-form-item>
        <el-form-item label="姓名三四十" prop="name">
          <el-input v-model="formData.name" placeholder="请输入姓名三四十" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="省份" prop="field103">
          <el-input v-model="formData.field103" placeholder="请输入省份" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="地区是" prop="field104">
          <el-input v-model="formData.field104" placeholder="请输入地区是" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="地址" prop="field105">
          <el-input v-model="formData.field105" placeholder="请输入地址" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
        <el-form-item label="邮编深度" prop="field106">
          <el-input v-model="formData.field106" placeholder="请输入邮编深度" clearable :style="{width: '100%'}">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="close">取消</el-button>
        <el-button type="primary" @click="handelConfirm">确定</el-button>
      </div>
    </el-dialog>
  </div>
  
</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs, onMounted, nextTick, onUpdated } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  inheritAttrs: false,
  
  setup(props, ctx) {

    const data = reactive({
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王ju',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
    })
    const formData = reactive({
        date: null,
        name: undefined,
        field103: undefined,
        field104: undefined,
        field105: undefined,
        field106: undefined,
      })
      const rules = reactive({
        date: [{
          required: true,
          message: '请选择日期',
          trigger: 'change'
        }],
        name: [{
          required: true,
          message: '请输入姓名三四十',
          trigger: 'blur'
        }],
        field103: [{
          required: true,
          message: '请输入省份',
          trigger: 'blur'
        }],
        field104: [{
          required: true,
          message: '请输入地区是',
          trigger: 'blur'
        }],
        field105: [{
          required: true,
          message: '请输入地址',
          trigger: 'blur'
        }],
        field106: [{
          required: true,
          message: '请输入邮编深度',
          trigger: 'blur'
        }],
      })
    const elForm = ref(null)
    const dialogTableVisible = ref(false)
    function handleClick(row) {
        dialogTableVisible.value = true;

        Object.keys(formData).forEach(item => {
          formData[item] = row[item]
        })

        console.log(row['date']);
    }

    function onOpen() {}
    function onClose() {
        elForm.value.resetFields()
    }
    function close() {
      ctx.emit('update:visible', false)
    }
    function handelConfirm() {
      console.log(formData)
      elForm.value.validate(valid => {
        if (!valid) return
      })
    }
    

    return { 
      elForm,
      ...toRefs(data),
      handleClick,
      ...toRefs(data),
      formData,
      rules,
      onOpen,
      onClose,close,handelConfirm, dialogTableVisible
     }
  }
})
</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
