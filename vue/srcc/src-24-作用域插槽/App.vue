<template >
  <div class="container">
    <Category title="游戏">
      <!-- 作用域插槽必须使用template标签 加scope=""-->
      <template scope="atguigu">
        <!-- {{atguigu}} -->
        <ul>
          <li v-for="(g, index) in atguigu.games" :key="index">{{ g }}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <!-- 作用域插槽必须使用template标签 加scope=""-->
      <!-- 解构赋值，直接使用games -->
      <template scope="{games}">
        <!-- {{atguigu}} -->
        <ul>
          <li style="color:red" v-for="(g, index) in games" :key="index">{{ g }}</li>
        </ul>
        <h4>{{msg}}</h4>
      </template>
    </Category>
        <Category title="游戏">
      <!-- 作用域插槽必须使用template标签 加scope=""-->
      <template slot-scope="{games}">
        <!-- {{atguigu}} -->
<h4 v-for="(g, index) in games" :key="index">{{ g }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: { Category },
};
</script>
<style>
* {
  list-style: none;
}
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>