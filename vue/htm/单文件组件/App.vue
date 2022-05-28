<!-- 汇总组件 -->
<template>
	<div>
		<School></School>
		<Student></Student>
	</div>
</template>

<script>
	//引入组件
	import School from './School.vue'
	import Student from './Student.vue'

	export default {
		name:'App',
		components:{
			School,
			Student
		}
	}
</script>
<!-- <template>
	/* 组件的结构 */
</template>
<script>
// 组件交互相关的代码（数据，方法等）
</script>
<style>
/* 组件的样式 */
</style> -->