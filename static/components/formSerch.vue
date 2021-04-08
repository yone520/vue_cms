<template>
  <el-form :inline="true" ref="validateForm" :rules="rules" :model="formInline" class="demo-form-inline" v-bind="$attrs">
    <el-form-item v-for="(item, i) in FormDataList" :key="i" :label="item.label" :prop="item.model">
      <abcd v-model="formInline[item.model]" :type="item.selectType" v-if="item.type === 'composite'" :selectvalue="item.modelName" :options="item.options">
        <template #prepend>
          <el-select v-model="item.modelName" placeholder="请选择">
            <el-option v-for="cItem in item.options" :key="cItem.value" :label="cItem.label" :value="cItem.value"></el-option>
          </el-select>
        </template>
      </abcd>
      <!-- INPUT -->
      <el-input v-if="item.type === undefined || item.type === 'input'" :clearable="true" v-model="formInline[item.model]" :placeholder="item.placeholder ? item.placeholder : '请输入'+item.label"></el-input>
      <!-- SELECT -->
      <el-select 
        v-loading="item.loading"
        :disabled="item.loading"
        element-loading-spinner="el-icon-loading"
        :clearable="true"
        :multiple="item.multiple"
        v-if="item.type === 'select'" v-model="formInline[item.model]" :placeholder="item.placeholder ? item.placeholder : '请选择'+item.label">
        <el-option
          v-for="(selectItem, selectIndex) in item.options"
          :key="selectIndex"
          :label="selectItem.label"
          :value="selectItem.value">
        </el-option>
      </el-select>
      <!-- RADIO -->
      <el-radio-group v-model="formInline[item.model]" v-if="item.type === 'radio'" :label="item.label">
        <el-radio
          v-for="(radioItem, radioIndex) in item.options"
          :key="radioIndex"
          :label="radioItem.value">
          {{ radioItem.label }}
        </el-radio>
      </el-radio-group>
      <!-- DATE PICKER -->
      <el-date-picker
        v-if="datearr.includes(item.type)"
        v-model="formInline[item.model]"
        :type="item.type"
        unlink-panels
        range-separator="至"
        format="YYYY-MM-DD HH:mm:ss"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :shortcuts="shortcuts"
      >
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm">查询</el-button>
      <el-button @click="resetForm">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, unref, ref, PropType, nextTick } from 'vue'
import { FormData, RefObjectKeyRulesType, OptionsType } from './types';
import {ElForm} from 'element-plus'
import Abcd from './bb.vue';
import _ from 'lodash';

export default defineComponent({
  name: 'bgSerch',
  components: {
    Abcd
  },
  props: {
    FormDataList: {
      type: Array as PropType<FormData[]>,
      default: []
    }
  },
  emits: [],
  setup(props, ctx) {
    const formInline = ref<RefObjectKeyRulesType>({});
    const validateForm = ref(ElForm);
    const rules = ref<RefObjectKeyRulesType>({});
    const axiosFn = (url: string, bool: boolean) => {
      return new Promise((resolve, reject) => {
        if (bool) {
          if (url === '/api/get1') {
            setTimeout(() => {
              resolve([{
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
              }])
            }, 4000)
          } else {
            setTimeout(() => {
              resolve([{
                value: '123',
                label: '干你娘'
              }, {
                value: '456',
                label: '草泥马'
              }])
            }, 4000)
          }
        } else {
          reject()
        }
      })
    }
    props.FormDataList.forEach((item: any) => {
      formInline.value[item.model] = item.default ? item.default : ''
      // 添加rules
      if (item.rules) {
        rules.value[item.model] = item.rules
      }
    })

    props.FormDataList.forEach(async (item: FormData) => {
      if (item.type === 'select' && item.url && Array.isArray(item.options) && item.options.length <= 0) {
        item.loading = true;
        item.options = await axiosFn(item.url as string, true) as OptionsType[]
        item.loading = false;
      }
    })

    const resetForm = () => {
      nextTick(() => {
        (validateForm.value as typeof ElForm).resetFields();
      })
    }
    const submitForm = () => {
      validateForm.value.validate((valid: any) => {
          if (valid) {
            const obj = _.cloneDeep(formInline);
            props.FormDataList.forEach(item => {
              if (item.type === 'composite') {
                if (['datetimerange', 'daterange'].includes(item.selectType)) {
                  // 是时间选择器
                  if (item.aaaaaaValue && Array.isArray(item.aaaaaaValue) && item.aaaaaaValue.length === 2) {
                    alert(123)
                    obj.value[item.aaaaaaValue[0]] = obj.value[item.model][0]
                    obj.value[item.aaaaaaValue[1]] = obj.value[item.model][1]
                    obj.value[item.model] = item.modelName;
                  }
                } else {
                  obj.value[item.modelName] = obj.value[item.model]
                }
              }
            })
            console.log(obj)
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
    }
    const shortcuts = ref([{
      text: '最近一周',
      value: (() => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
        return [start, end]
      })(),
    }, {
      text: '最近一个月',
      value: (() => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
        return [start, end]
      })(),
    }, {
      text: '最近三个月',
      value: (() => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
        return [start, end]
      })(),
    }, {
      text: '最近一年',
      value: (() => {
        const end = new Date()
        const start = new Date()
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 365)
        return [start, end]
      })(),
    }])
    return {
      validateForm,
      resetForm,
      shortcuts,
      formInline,
      rules,
      submitForm,
      datearr: ref<string[]>(['datetimerange', 'daterange'])
    }
  }
})
</script>

<style>
</style>
