<template>
  <!-- <Serch v-model="msg" v-model:title="title" ganniniang="jjjj" @hack="hack">
    <button>hahah</button>
    <input/>
    <template v-slot:hhahhahaha>
      <span>hahahahha</span>
      <el-button>hhhh</el-button>
    </template>
    </Serch>{{msg}}
  <br>
  <hr> -->
  <formSerch :FormDataList="FormDataList" @onSubmit="onSubmit"></formSerch>


  <el-cascader
        size="large"
        :options="options"
        v-model="selectedOptions"
        @change="handleChange"
      >
      </el-cascader>
  <!-- <el-button @click="testValue = 'Hello'"></el-button> -->
  <!-- <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
    <el-form-item label="日期" prop="date">
      <el-date-picker v-model="formData.date" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
        :style="{width: '100%'}" placeholder="请选择日期" clearable></el-date-picker>
    </el-form-item>
    <el-form-item prop="name">
      {{formData.name}} {{select}}
      <Bbbb v-model="formData.name">
        <template #prepend>
          <el-select v-model="select" placeholder="请选择">
            <el-option label="餐厅名" value="1"></el-option>
            <el-option label="订单号" value="2"></el-option>
            <el-option label="用户电话" value="3"></el-option>
          </el-select>
        </template>
      </Bbbb>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form> -->

  <hr />
</template>



<script lang="ts">
// https://www.icode9.com/content-4-618716.html#google_vignette
import { defineComponent, ref, unref, isReactive, toRefs } from "vue";
import Serch from "./components/Serch.vue";
import formSerch from "./components/formSerch.vue";
import Bbbb from "./components/bb.vue";
import { FormData, OptionsType } from "./components/types";
import dayjs from "dayjs";
import { ElForm } from "element-plus";
import { regionData, CodeToText } from "element-china-area-data";

export default defineComponent({
  name: "App",
  components: {
    Serch,
    formSerch,
    Bbbb,
  },
  data() {
    return {
      options: regionData,
      selectedOptions: []
    }
  },
  methods: {
    handleChange() {
      var loc = "";
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]];
      }
      alert(loc);
    }
  },
  setup() {
    
    const title = ref("1");
    const hack = (val: any) => {
      console.log("hack", val);
    };

    const options = [
      {
        value: "选项1",
        label: "黄金糕",
      },
      {
        value: "选项2",
        label: "双皮奶",
      },
      {
        value: "选项3",
        label: "蚵仔煎",
      },
      {
        value: "选项4",
        label: "龙须面",
      },
      {
        value: "选项5",
        label: "北京烤鸭",
      },
    ];

    const options2 = [
      {
        value: "选项1",
        label: "黄金糕",
      },
      {
        value: "选项2",
        label: "双皮奶",
      },
    ];

    const FormDataList = ref([
      {
        label: "审批人",
        model: "user",
        default: "哈哈哈",
        rules: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
      {
        type: "select",
        label: "活动区域",
        url: "/api/get1",
        options: [],
        model: "region",
        default: ["选项1"],
        multiple: true,
        rules: [{ required: true, message: "请选择活动名称", trigger: "blur" }],
      },
      {
        type: "select",
        label: "活动区域2",
        options: [{
            label: '100  -  200',
            value: '100-200'
          },
          {
            label: '200  -  400',
            value: '200-400'
          }],
        model: "regionasdf",
      },
      {
        type: "radio",
        label: "备选",
        options: options2,
        model: "region23",
        default: "选项1",
      },
      {
        label: "日期选择",
        model: "region123",
        type: "datetimerange",
        default: [new Date(), new Date()],
      },
      {
        type: "composite",
        model: "asdfsdf",
        modelName: "选项11",
        selectType: "input",
        options: [
          {
            value: "选项11",
            label: "黄金糕",
            placeholder: "请输入青雀地址",
          },
          {
            value: "选项22",
            label: "双皮奶",
            placeholder: "请不用输入计算机技术",
          },
        ],
        rules: [
          {
            required: true,
            message: "请输入sdfadfsdf",
            trigger: ["blur", "change"],
          },
          { min: 5, max: 8, message: "长度在 5 到 8 个字符", trigger: "blur" },
        ],
      },
      {
        type: "composite",
        model: "dangqianxuanzhong",
        selectType: "datetimerange",
        modelName: "选项1",
        aaaaaaValue: ['begin_time', 'end_time'],
        default: [new Date(), new Date()],
        options: [
          {
            value: "选项1",
            label: "哈哈哈",
          },
          {
            value: "选项2",
            label: "呵呵呵",
          },
        ],
        rules: [{ required: true, message: "请选择时间", trigger: "change" }],
      },
    ]);

    const onSubmit = (val: any) => {
      console.log(dayjs(val.region123["0"]).format("YYYY-MM-DD HH:mm:ss"));
      console.log(val);
    };
    const formData = ref({});
    const rules = ref({
      date: [
        {
          required: true,
          message: "请选择日期",
          trigger: "change",
        },
      ],
      name: [
        {
          required: true,
          message: "请输入姓名三四十",
          trigger: "blur",
        },
      ],
    });
    const elForm = ref(null);
    const submitForm = () => {
      (elForm.value as typeof ElForm).validate((valid) => {
        console.log(valid);
      });
    };
    const resetForm = () => {
      (elForm.value as typeof ElForm).resetFields();
    };
    return {
      onSubmit,
      msg: ref(""),
      title,
      hack,
      FormDataList,
      testValue: ref("123132"),
      select: ref(""),
      formData,
      rules,
      elForm,
      submitForm,
      resetForm,
    };
  },
});
</script>

<style>
</style>
