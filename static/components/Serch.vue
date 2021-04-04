<template>
  <input
    v-bind="$attrs"
      :value="modelValue"
      @input="emitValue"
    >
    {{ title }}
    <el-button @click="$emit('update:title', '哈哈哈哈')">改变</el-button>
    <slot></slot>
    <slot name="hhahhahaha"></slot>
</template>

<script lang="ts">
import { defineComponent, ref, Slots } from 'vue'

export default defineComponent({
  name: 'yb-serch',
  props: {
      modelValue: String,
      title: String,
      modelModifiers: {
        default: () => ({})
        }
  },
  emits: {
      'update:modelValue': null,
      'update:title': (value: any) => {
          if (value !== '哈哈哈哈') {
              console.warn('数据错误')
              return false;
          } else {
              return true;
          }
      }
  },
  setup(props, { emit, attrs, slots }) {
      if (slots.hhahhahaha) {
      }
      const emitValue = (e: any) => {
          let value = e.target.value
          if (props.modelModifiers.capitalize) {
              value = value.charAt(0).toUpperCase() + value.slice(1)
          }
          emit('update:modelValue', value)
      }
      return {
          msg: ref(),
          emitValue
      }
  }
})
</script>

<style>
</style>