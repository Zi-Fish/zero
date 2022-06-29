<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <!-- 强制转换为数字类型 -->
    <select name="" id="" v-model.number="n">
      <!-- <select name="" id="" v-model="n"> -->
      <!-- 不加冒号当字符串解析 -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="odd">当前求和为奇数再加</button>
    <button @click="wait">等一等再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1,
      sum: 0,
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    odd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    wait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 1500);
    },
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>