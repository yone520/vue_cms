<template>
  <div>
    <el-dialog v-bind="$attrs" v-on="$listeners" @open="onOpen" @close="onClose" title="Dialog Titile">
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
<script>
export default {
  inheritAttrs: false,
  components: {},
  props: [],
  data() {
    return {
      formData: {
        date: null,
        name: undefined,
        field103: undefined,
        field104: undefined,
        field105: undefined,
        field106: undefined,
      },
      rules: {
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
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onOpen() {},
    onClose() {
      this.$refs['elForm'].resetFields()
    },
    close() {
      this.$emit('update:visible', false)
    },
    handelConfirm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        this.close()
      })
    },
  }
}

</script>
<style>
</style>
