<template>
  <div class="category">
    <h3>{{title}}分类</h3>
<!-- 定义一个插槽，提供一个框架，让使用者来填充 -->
<slot name="1">默认值，当使用者没有传递具体结构时会出现1</slot>
<slot name="2">默认值，当使用者没有传递具体结构时会出现2</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title']
};
</script>

<style lang='css'>
.category{
  background-color: skyblue;
  width: 200px;
  height: 300px;
  left: 50px;
}
	h3{
		text-align: center;
		background-color: orange;
	}
	video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>