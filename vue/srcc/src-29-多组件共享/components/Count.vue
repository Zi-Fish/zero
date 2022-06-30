<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大十倍为：{{ bigSum }}</h3>
    <h3>我是{{ name }},是{{ sex }}的</h3>
    <h3 style="color:red">下方组件总人数：{{personList.length}}</h3>
    <!-- 强制转换为数字类型 -->
    <select name="" id="" v-model.number="n">
      <!-- <select name="" id="" v-model="n"> -->
      <!-- 不加冒号当字符串解析 -->
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="odd(n)">当前求和为奇数再加</button>
    <button @click="wait(n)">等一等再加</button>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations,mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {

    //数组写法 注意名字需一致才能使用
    ...mapState(["sum", "name", "sex",'personList']),

    ...mapGetters(["bigSum"]),
  },

  methods: {
   
    ...mapMutations({ increment: "JIA", decrement: "JIAN" }),
    // 数组写法，名字应与mutations的一致s
    // ...mapMutations(['JIA','JIAN']),
    // ==================================================
  //   odd() {  
  //       this.$store.dispatch("jiaOdd", this.n);
  //   },
  //   wait() {
  //       this.$store.dispatch("jiaWait", this.n);
  // },
...mapActions({odd:'jiaOdd',wait:'jiaWait'}),
// 数组写法同类型
  mounted() {
    // const x=mapState({he:'sum',mingzi:'name',xingbie:'sex'})
  },
}}
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>