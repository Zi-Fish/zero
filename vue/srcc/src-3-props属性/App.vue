<template>
	<div>
		<Student name="lx" sex="nan" :age="18"/>
		<Student name="tjx" sex="nan" :age="58"/>
	</div>
</template>

<script>
	import Student from './components/Student'

	export default {
		name:'App',
		components:{Student}
	}
</script>

