<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
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
      n: 1, //用户选择的数字
    };
  },
  methods: {
    //没有其他操作，直接调用mutation，commit 

    // increment() {
    //   this.$store.dispatch("jia", this.n);
    // },
    // decrement() {
    //   this.$store.dispatch("jian", this.n);
    // },

// 重点 ----写commit

    increment() {
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    // odd() {
    //   if (this.$store.state.sum % 2) {
    //     this.$store.dispatch("jia", this.n);
    //   }
    // },
    // wait() {
    //   setTimeout(() => {
    //     this.$store.dispatch("jia", this.n);
    //   }, 1500);
    odd() {
      if (this.$store.state.sum % 2) {
        this.$store.dispatch("jiaOdd", this.n);
      }
    },
    wait() {
      setTimeout(() => {
        this.$store.dispatch("jiaWait", this.n);
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