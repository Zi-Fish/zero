<template>
  <div class="container">
<Search/>
<List/>
</div>
</template>

<script>
import List from './compoments/List.vue';
import Search from './compoments/Search.vue';
// import './assets/css/bootstrap.css'
export default {
  components: {List,Search},
  name: "App",
};
</script>