<template>
  <div>
    <ul>
      <li>消息编码：{{$router.query.id}}</li>
      <li>消息题目：{{$router.query.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
name:'Detail',mounted() {
  console.log(this.$route)
},
}
</script>

<style>

</style>