<template>
	<div class="demo">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
		<button @click="showName">点我提示学校名</button>	
	</div>
</template>

<script>
import vue from '../vue'

//向外暴露
// export const school=vue.extend({})分别暴露
// const school=vue.extend({})//统一暴露（前）
	 export default {
		name:'School',
		data(){
			return {
				name:'尚硅谷',
				address:'北京昌平'
			}
		},
		methods: {
			showName(){
				alert(this.name)
			}
		},
	}
	// export {school} 统一暴露（后）
	// export default school 默认暴露
</script>

<style>
	.demo{
		background-color: orange;
	}
</style>