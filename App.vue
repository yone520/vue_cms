<template>
  <Serch v-model="msg" v-model:title="title" ganniniang="jjjj" @hack="hack">
    <button>hahah</button>
    <input/>
    <template v-slot:hhahhahaha>
      <span>hahahahha</span>
      <el-button>hhhh</el-button>
    </template>
    </Serch>{{msg}}
  <br>
  <hr>
  <formSerch :FormDataList="FormDataList" @onSubmit="onSubmit"></formSerch>
</template>

<script lang="ts">
import { defineComponent, ref, unref, isReactive, toRefs } from 'vue'
import Serch from './components/Serch.vue'
import formSerch from './components/formSerch.vue'
import { FormData, OptionsType } from './components/types';
import dayjs from 'dayjs'


export default defineComponent({
  name: 'App',
  components: {
    Serch, formSerch
  },
  setup() {
    const title = ref('1');
    const hack = (val: any) => {
      console.log('hack', val)
    }

    const options = [{
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
    }]

    const options2 = [{
      value: '选项1',
      label: '黄金糕'
    }, {
      value: '选项2',
      label: '双皮奶'
    }]

    const FormDataList = ref<FormData[]>([
      {
        label: '审批人',
        model: 'user',
        default: '哈哈哈'
      }, {
        type: 'select',
        label: '活动区域',
        url: '/api/get1',
        options: [],
        model: 'region',
        default: ['选项1'],
        multiple: true
      }, {
        type: 'select',
        label: '活动区域2',
        options: options,
        model: 'regionasdf',
      }, {
        type: 'radio',
        label: '备选',
        options: options2,
        model: 'region23',
        default: '选项1'
      }, {
        label: '日期选择',
        model: 'region123',
        type: 'datetimerange',
        default: [new Date(), new Date()]
      }
    ])
    
    const onSubmit = (val: any) => {
      console.log(dayjs(val.region123['0']).format('YYYY-MM-DD HH:mm:ss'))
      console.log(val)
    }
    return {
      onSubmit,
      msg: ref(''),
      title, hack,FormDataList
    }
  }
})
</script>

<style>
</style>