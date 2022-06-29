<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 定义一个插槽，提供一个框架，让使用者来填充 -->
    <slot :games="games" msg="123">
			<!-- 将games传给插槽的使用者 -->
			默认的一些内
			</slot>
    <!-- <slot name="2">默认值，当使用者没有传递具体结构时会出现2</slot> -->
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["红色警戒", "穿越火线", "劲舞团", "超级玛丽"],
    };
  },
};
</script>

<style lang='css'>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
  left: 50px;
}
h3 {
  text-align: center;
  background-color: orange;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>