<template>
  <el-table
    class="sdfasdfasdf"
    :data="tableData"
    border
    height="200"
    :summary-method="getSummaries"
    show-summary
    style="width: 100%; margin-top: 20px">
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="amount1"
      class="sadfasdf"
      label="数值 1（元）">
    </el-table-column>
    <el-table-column
      prop="amount2"
      label="数值 2（元）">
    </el-table-column>
    <el-table-column
      prop="amount3"
      label="数值 3（元）">
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { defineComponent, ref, Slots } from 'vue'
import useSettablecolor from './aaa';

// const zhiKey: Symbol = Symbol('数值 1（元）')

export default defineComponent({
    data() {
      return {
        propertyArray: ['amount1', 'amount2'],
        tableData: [{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
      };
    },
    
    mounted() {
    },
    methods: {
      getSummaries(param) {
        const { columns, data } = param;
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '总价';
            return;
          }

         if (!this.propertyArray.includes(column.property)) {
             return;
         }

          const values = data.map(item => Number(item[column.property]));
          
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            console.log(sums[index])
            sums[index] = `${sums[index]} 元`;
          } else {
            sums[index] = '';
          }
        });
        console.log(sums)
        return sums;
      }
    },
  name: 'yb-sadfsdf',
  props: {
      
  },
  emits: {
      
  },
  setup(props, { emit, attrs, slots }) {
      useSettablecolor()
  }
})
</script>

<style scoped >
.sdfasdfasdf ::v-deep(.adddd) {
    color: red;
    font-size: 20px;
}

</style>