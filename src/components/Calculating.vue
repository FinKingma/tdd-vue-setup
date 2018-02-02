<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div class='holder'>
      <input v-model="value" placeholder="insert values">
      <div class='button' v-on:click="transform">Transform!</div>
      <p>result: {{ result }}</p>
    </div>
  </div>
</template>

<script>
import { transform } from '@/modules/Calculator'
export default {
  name: 'Calculator',
  data () {
    return {
      title: 'Our TDD calculator',
      value: undefined,
      result: undefined
    }
  },
  methods: {
    transform () {
      this.result = transform(this.value)
    }
  }
}
</script>

<style src="../assets/style.css">
