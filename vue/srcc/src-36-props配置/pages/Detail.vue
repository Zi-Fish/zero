<template>
	<ul>
		<li>消息编号：{{$route.params.id}}</li>
		<li>消息标题：{{$route.params.title}}</li>
		<!-- <li>a:{{a}}</li>
		<li>b:{{b}}</li> -->
	</ul>
</template>

<script>
	export default {
		name:'Detail',
		props:['id','title'],
		computed:{
			// id(){
			// 	return this.$route.params.id
			// },
			// title(){
			// 	return this.$route.params.title
			// }
		},
		mounted() {
			// console.log(this.$route)
		},
	}
</script>