<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keywords"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keywords: "",
    };
  },
  methods: {
    searchUsers() {
      // 请求前更新list数据
      this.$bus.$emit("updateListData", {isFirst:false,isLoading:true,errMsg:'',users:[]});
      // 当作模板去解析，用反引号
      axios.get(`https://api.github.com/search/users?q=${this.keywords}`).then(
        (response) => {
          console.log("请求成功", response.data.items);
          this.$bus.$emit("updateListData", {isLoading:true,errMsg:'', users:response.data.items});
        },
        (error) => {
          console.log("请求失败", error.message);
          this.$bus.$emit("updateListData", {isLoading:false,errMsg:message, users:[]});
        }
      );
    },
  },
};
</script>

<style>
</style>