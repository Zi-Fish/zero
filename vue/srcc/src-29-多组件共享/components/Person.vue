<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color: red">Count 组件求和为：{{ sum }}</h3>
    <input type="text" placeholder="请输入名字" />
    <button @click="add">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    sum() {
      return this.$store.state.sum;
    },
  },
  methods: {
    add() {
      const PersonObj = { id: nanoid(), name: this.name };
      this.$store.commit("ADD_PERSON", PersonObj);
      this.name = "";
    },
  },
};
</script>

<style>
</style>